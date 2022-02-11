import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
/**
 * JwtAuthGuard
 * @author Md Nasir Hussain
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
}