export const TOKEN_SERVICE = Symbol('TOKEN_SERVICE');

export interface ITokenService {
    generateAccessToken(userId: string): string;
    generateRefreshToken(): string ;
    hashRefreshToken(token: string): string;
}
