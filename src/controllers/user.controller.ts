import {
  Controller,
  Res,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Get,
} from '@nestjs/common';
import { UserService } from 'src/providers/user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { TokenService } from 'src/providers/token.service';

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  @Post('profile')
  @UseInterceptors(FileInterceptor('profileImage'))
  async createProfile(@Res() res, @UploadedFile() file, @Body() profileBody) {
    const result = await this.userService.createProfile(file, profileBody);

    if (result.statusCode === 201) {
      const accessToken = this.tokenService.generateAccessToken(
        profileBody.email
      );
      const refreshToken = this.tokenService.generateRefreshToken(
        profileBody.email
      );

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

  @Get('nickname')
  async getNickname(@Res() res) {
    const email = res.locals.email;
    const result = await this.userService.getNickname(email);

    return res.status(result.statusCode).json(result.data);
  }
}
