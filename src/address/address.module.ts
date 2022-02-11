import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { UserRepository } from "src/user/user.repository";
import { AddressController } from "./address.controller";
import { Address } from "./address.entity";
import { AddressRepository } from "./address.repository";
import { AddressService } from "./address.service";
/**
 * address module
 * @author Md Nasir Hussain
 */
@Module({
    imports:[TypeOrmModule.forFeature([Address,AddressRepository,User,UserRepository])],
    exports:[],
    providers:[AddressService],
    controllers:[AddressController],
})
/**
 * address module
 */
export class AddressModule{

}