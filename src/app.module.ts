import { Module } from '@nestjs/common';
import { UserModule } from './modules/person.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
