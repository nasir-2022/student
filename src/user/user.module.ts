import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "src/address/address.entity";
import { AddressRepository } from "src/address/address.repository";
import { Course } from "src/course/course.entity";
import { CourseRepository } from "src/course/course.repository";
import { RolesGuard } from "./guards/roles.guard";
import { JwtStrategy } from "./jwt/jwt.strategy";
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

/**
 * user module injectable
 * injectable TypeOrmModule 
 */
 @Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'topSecret51',
            signOptions: {
                expiresIn: '180s'
            }
        }),
        TypeOrmModule.forFeature([User,UserRepository,Address,AddressRepository,Course,CourseRepository])
    ],
    //exports:[TypeOrmModule,JwtStrategy,PassportModule],
    exports: [JwtStrategy, PassportModule],
    providers: [UserService, JwtStrategy, RolesGuard],
    controllers: [UserController],
})
/**
 * user module class
 * @author hotel managements
 */
export class UserModule {

}