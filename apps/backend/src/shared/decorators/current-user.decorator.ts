import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // Assuming the JWT payload has 'sub' for the user ID, which is mapped to 'id' or retrieved as request.user.id
    return request.user?.userId;
  },
);
