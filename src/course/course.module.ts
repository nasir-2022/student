import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { UserRepository } from "src/user/user.repository";
import { CourseController } from "./course.controller";
import { Course } from "./course.entity";
import { CourseRepository } from "./course.repository";
import { CourseService } from "./course.service";
/**
 * couse module
 * @author Md Nasir Hussain
 */
@Module({
    imports:[TypeOrmModule.forFeature([Course,CourseRepository,User,UserRepository])],
    exports:[],
    providers:[CourseService],
    controllers:[CourseController],
})
/**
 * course module
 */
export class CourseModule
{

}