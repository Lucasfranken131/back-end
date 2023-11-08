import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './bolseiro/profile.module';
import { BookModule } from './bolseiro/book.module';

@Module({
  imports: [
    ProfileModule,
    BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
