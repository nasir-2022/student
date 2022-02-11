import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from "@nestjs/swagger";
import { UserDto } from "./dto/user.dto";
import { LoginDto } from "./login.dto";
import { UserService } from "./user.service";
/**
 * user controller
 * @author Md Nasir Hussain
 */
 @ApiTags('User')
@Controller('user')
export class UserController
{
/**
     * user business  logic class injectable here
     * @param userService 
     */
 constructor(private userService: UserService) { }
 /**
  * user registering here
  * @param user passing user obj
  * @returns if success or failure
  */
  @ApiBody({ description: 'UserDto', required: true, type: UserDto })
  @ApiCreatedResponse({ description: 'User registered successfully', status: HttpStatus.CREATED })
  @ApiInternalServerErrorResponse({ description: 'User not registered successfully', status: HttpStatus.INTERNAL_SERVER_ERROR })
 @Post('/register')
 userRegister(@Body() user: UserDto): Promise<string> {
     return this.userService.userRegister(user);
 }
/**
 * user validating
 * @param userLogin  path
 * @returns if success or failure
 */
 @ApiBody({ description: 'LoginDto', required: true, type: LoginDto})
  @ApiCreatedResponse({ description: 'User login  successfully', status: HttpStatus.CREATED })
  @ApiInternalServerErrorResponse({ description: 'User not  login successfully', status: HttpStatus.INTERNAL_SERVER_ERROR })
 @Post('/userLogin')
 userLogin(@Body() userLogin: LoginDto):Promise<{token}> {
     return this.userService.userLogin(userLogin)
 }
 /**
  * find all user list here
  * @param user  passing user obj
  * @returns if success or failure
  */
 //@UseGuards(JwtAuthGuard)
 @ApiOkResponse({ description: 'Find user  list', status: HttpStatus.OK })
 @ApiInternalServerErrorResponse({ description: "User list not found", status: HttpStatus.INTERNAL_SERVER_ERROR })
 @Get('/findUserList')
 findUserList(user: UserDto){
     return this.userService.findUserList(user);
 }
 /**
  * find user particular recourd by id
  * @param id passing id here
  * @returns if success or failure
  * method level exception
  */
 //@UseFilters(ExceptionExceptionFilter)
 @ApiParam({
    name: 'id',
    description: 'name id',
    required: true
})
@ApiOkResponse({ description: 'User found by id successfully', status: HttpStatus.OK })
@ApiInternalServerErrorResponse({ description: 'user not found by this id', status: HttpStatus.INTERNAL_SERVER_ERROR })
@ApiNotFoundResponse({ description: 'User not found for this id', status: HttpStatus.NOT_FOUND })
 @Get('/userFindById/:id')
 userFindById(@Param('id') id: number) {
     return this.userService.userFindById(id);
 }
 /**
  * find user by name
  * @param name passing path
  * @returns if success or failure
  */
  @ApiParam({
    name: 'name',
    description: 'name name',
    required: true
})
@ApiOkResponse({ description: 'User found by name successfully', status: HttpStatus.OK })
@ApiInternalServerErrorResponse({ description: 'user not found by this name', status: HttpStatus.INTERNAL_SERVER_ERROR })
@ApiNotFoundResponse({ description: 'User not found for this name', status: HttpStatus.NOT_FOUND })
 @Get('/findUserByName/:name')
 findUserByName(@Param('name') name: string) {
     return this.userService.findUserByName(name);
 }
 
 /**
  * userUpdateById updated by id
  * @param id passing path here
  * @param userUpdate  userUpdate passing path here
  * @returns if success or failure
  */
 
 @ApiParam({
    name: 'id',
    description: 'name id',
    required: true
})
@ApiOkResponse({ description: 'User updated by id successfully', status: HttpStatus.OK })
@ApiInternalServerErrorResponse({ description: 'user not updated by this id', status: HttpStatus.INTERNAL_SERVER_ERROR })
@ApiNotFoundResponse({ description: 'User not updated for this id', status: HttpStatus.NOT_FOUND })
 @Put('/userUpdateById/:id')
 userUpdate(@Param('id') id: number, @Body() userUpdate: UserDto) {
     return this.userService.userUpdate(id, userUpdate);
 }
 
 /**
  * userDeleteById by id
  * @param id  passing path
  * @returns if success or failure
  */
 //@Roles(Role.Admin)
 //@UseGuards(RolesGuard)
 @ApiParam({
    name: 'id',
    description: 'name id',
    required: true
})
@ApiOkResponse({ description: 'User deleted  successfully by id', status: HttpStatus.OK })
@ApiInternalServerErrorResponse({ description: 'User not deleted by this id', status: HttpStatus.INTERNAL_SERVER_ERROR })
@ApiNotFoundResponse({ description: 'User not deleted for this id', status: HttpStatus.NOT_FOUND })
 @Delete('/userDeleteById/:id')
 userDeleteById(@Param('id') id: UserDto) {
     return this.userService.userDeleteById(id);
 }
}