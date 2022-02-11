import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

/**
 * login dto
 * @author Md Nasir Hussain
 */
 export class LoginDto {
    /**
     * User id required
     * email colume name
     */
     @ApiProperty()
    @IsNotEmpty({ message: "User id required" })
    @IsEmail({ messaage: "Enter valid userId" })
    emailId: string;
    /**
     * user password required
     * user password colume name
     */
     @ApiProperty()
    @IsNotEmpty({ message: "User password required" })
    password: string;

}