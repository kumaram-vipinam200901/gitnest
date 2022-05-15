import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubStrategy } from './github.strategy';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({

  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, GithubStrategy],
})
export class AppModule { }
