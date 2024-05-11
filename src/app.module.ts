import { Module } from '@nestjs/common';
import { InfoModule } from './info/info.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [InfoModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
