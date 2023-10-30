import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/createUserDto';
import { UserEntity } from './entities/Demo.entities';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@I18n() i18n: I18nContext): Promise<string> {
    return await i18n.t('test.HELLO');
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'This action adds a new user';
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/entity')
  testEntity() {
    const entity = new UserEntity({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      password: 'Secret',
    });
    debugger;
    return entity;
  }
}
