import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';
/**
 * app module 
 * @author Md Nasir Hussain
 */
@Module({
  imports: [UserModule,AddressModule,CourseModule,TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
/**
 * address module
 */
export class AppModule {}
