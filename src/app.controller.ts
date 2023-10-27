import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/createUserDto';
import CustomValidationPipe from './CustomValidationPipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@I18n() i18n: I18nContext): Promise<string> {
    return await i18n.t('test.HELLO');
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
