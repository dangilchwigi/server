import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from 'src/providers/auth.service';
import { TokenService } from 'src/providers/token.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  @Post('login')
  async login(@Res() res, @Body('email') email: string) {
    const result = await this.authService.login(email);

    if (result.statusCode === 200) {
      const accessToken = this.tokenService.generateAccessToken(email);
      const refreshToken = this.tokenService.generateRefreshToken(email);

      res.cookie('access_token', accessToken, {
        maxAge: 1000 * 60 * 5,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      });
      res.cookie('refresh_token', refreshToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      });
    }

    return res.status(result.statusCode).json(result.data);
  }
}
