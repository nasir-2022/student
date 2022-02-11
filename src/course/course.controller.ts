import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from "@nestjs/swagger";
import { CourseService } from "./course.service";
import { CourseDto } from "./dto/course.dto";
/**
 * Course controller
 * @author Md Nasir Hussain
 */
@ApiTags('Course')
@Controller('course')
export class CourseController
{
    /**
     * courseService injectable
     * @param courseService 
     */
constructor(private courseService:CourseService){}
/**
 * addCourse
 * @param course path
 * @returns if success or failure
 */
 @ApiBody({ description: 'CourseDto', required: true, type: CourseDto })
 @ApiCreatedResponse({ description: 'Course addredd successfully', status: HttpStatus.CREATED })
 @ApiInternalServerErrorResponse({ description: 'Course not addredd successfully', status: HttpStatus.INTERNAL_SERVER_ERROR })
@Post('/addCourse')
addCourse(@Body()course:CourseDto):Promise<string>
{
 return this.courseService.addCourse(course);
}
/**
 * findAllCourse
 * @param course path
 * @returns if success or failure
 */
 @ApiOkResponse({ description: 'Course found successfully', status: HttpStatus.OK })
@ApiInternalServerErrorResponse({ description: "Course not found by successfully", status: HttpStatus.INTERNAL_SERVER_ERROR })
@Get('/findAllCourse')
findAllCourse(course:CourseDto):Promise<CourseDto[]>
{
    return this.courseService.findAllCourse(course);
}
/**
 * find course by name
 * @param subject path
 * @returns if success or failure
 */
 @ApiParam({
    name: 'subject',
    description: 'name subject',
    required: true
})
@ApiOkResponse({ description: 'Course  found by this name', status: HttpStatus.OK })
@ApiInternalServerErrorResponse({ description: 'Course not found by this name', status: HttpStatus.INTERNAL_SERVER_ERROR })
@ApiNotFoundResponse({ description: 'Course not found by this name', status: HttpStatus.NOT_FOUND })
@Get('/findCourseByName/:subject')
findCourseByName(@Param('subject')subject:string):Promise<CourseDto[]>
{
    return this.courseService.findCourseByName(subject);
}
/**
 * find course by id
 * @param id path
 * @returns if successs or failure
 */
 @ApiParam({
    name: 'id',
    description: 'name id',
    required: true
})
@ApiOkResponse({ description: 'Course found by this id', status: HttpStatus.OK })
@ApiInternalServerErrorResponse({ description: 'Course not found by this id', status: HttpStatus.INTERNAL_SERVER_ERROR })
@ApiNotFoundResponse({ description: 'Course not found by this id', status: HttpStatus.NOT_FOUND })
@Get('/findCourseById/:id')
 findCourseById(@Param('id')id: number) {
return this.courseService.findCourseById(id);
}
/**
 * course delete by id
 * @param id path
 * @returns if success or failure
 */
 @ApiParam({
    name: 'id',
    description: 'name id',
    required: true
})
@ApiOkResponse({ description: 'Course deleted by this id', status: HttpStatus.OK })
@ApiInternalServerErrorResponse({ description: 'Course not deleted by this id', status: HttpStatus.INTERNAL_SERVER_ERROR })
@ApiNotFoundResponse({ description: 'Course not deleted by this id', status: HttpStatus.NOT_FOUND })
@Delete('/courseDeleteById/:id')
courseDeleteById(@Param('id')id:number)
{
 return this.courseService.courseDeleteById(id);
}
/**
 * update by id
 * @param id path
 * @param course path 
 * @returns if success or failure
 */
 @ApiParam({
    name: 'id',
    description: 'name id',
    required: true
})
@ApiOkResponse({ description: 'Course updated by this id', status: HttpStatus.OK })
@ApiInternalServerErrorResponse({ description: 'Course not updated by this id', status: HttpStatus.INTERNAL_SERVER_ERROR })
@ApiNotFoundResponse({ description: 'Course not updated by this id', status: HttpStatus.NOT_FOUND })
@Put('/updateCourseById/:id')
updateCourseById(@Param('id')id:number, @Body()course:CourseDto):Promise<string>
{
return this.courseService.updateCourseById(id,course);
}
}