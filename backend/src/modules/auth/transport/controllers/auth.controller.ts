import {
    Controller,
    Post,
    Body,
    Res,
    Req,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import type { Response, Request } from 'express';
import { RegisterUseCase } from '../../application/use-cases/register.use-case';
import { LoginUseCase } from '../../application/use-cases/login.use-case';
import { RefreshTokenUseCase } from '../../application/use-cases/refresh-token.use-case';
import { LogoutUseCase } from '../../application/use-cases/logout.use-case';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { Public } from '../../../../shared/decorators/public.decorator';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TokenResponseDto } from '../dto/token-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly registerUseCase: RegisterUseCase,
        private readonly loginUseCase: LoginUseCase,
        private readonly refreshTokenUseCase: RefreshTokenUseCase,
        private readonly logoutUseCase: LogoutUseCase,
    ) { }

    @Public()
    @ApiOperation({ summary: 'Register a new user' })
    @ApiResponse({ status: 201, description: 'User successfully registered.' })
    @ApiResponse({ status: 409, description: 'Email already in use.' })
    @Post('register')
    async register(@Body() dto: RegisterDto) {
        const user = await this.registerUseCase.execute(dto);
        return {
            id: user.id,
            email: user.email,
            name: user.name,
        };
    }

    @Public()
    @ApiOperation({ summary: 'Authenticate user and get access token' })
    @ApiResponse({
        status: 200,
        description: 'Successfully authenticated.',
        type: TokenResponseDto,
    })
    @ApiResponse({ status: 401, description: 'Invalid credentials.' })
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(
        @Body() dto: LoginDto,
        @Res({ passthrough: true }) res: Response,
    ) {
        const { accessToken, refreshToken } = await this.loginUseCase.execute(dto);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        return { accessToken };
    }

    @Public()
    @ApiOperation({
        summary: 'Refresh access token using refresh token in cookie',
    })
    @ApiResponse({
        status: 200,
        description: 'Successfully refreshed token.',
        type: TokenResponseDto,
    })
    @ApiResponse({
        status: 401,
        description: 'Invalid or missing refresh token.',
    })
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    async refresh(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ) {
        const currentRefreshToken = req.cookies['refreshToken'];
        const { accessToken, newRefreshToken } =
            await this.refreshTokenUseCase.execute(currentRefreshToken);

        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        return { accessToken };
    }

    @Public()
    @ApiOperation({ summary: 'Logout user and invalidate refresh token' })
    @ApiResponse({ status: 204, description: 'Successfully logged out.' })
    @Post('logout')
    @HttpCode(HttpStatus.NO_CONTENT)
    async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        const currentRefreshToken = req.cookies['refreshToken'];
        await this.logoutUseCase.execute(currentRefreshToken);

        res.clearCookie('refreshToken');
    }
}
