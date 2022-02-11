import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { User } from "src/user/user.entity";
/**
 * CourseDto
 * @author Md Nasir Hussain
 */
export class CourseDto {
    /**
     * Course id colume name
     * and colume valideed here
     * Api Property
     */
    id: number
    /**
     * Course colume name
     * and also validated here
     * add api property
     */
    @ApiProperty()
    @IsNotEmpty({ message: "Course name can not be empty" })
    @IsString({ message: "Course name should be string" })
    @MinLength(2, { message: "Course name minimum two leter" })
    @MaxLength(100, { message: "Course name should be maximum 100 leters" })
    couser_name: string;

    /**
    * Course subject colume name
     * and colume valideed here
    * Api Property
    */
    @ApiProperty()
    @IsNotEmpty({ message: "Subject name can not be empty" })
    @IsString({ message: "Subject name should be string" })
    @MinLength(2, { message: "Subject name minimum two leter" })
    @MaxLength(100, { message: "Subject name should be maximum 100 leters" })
    subject: string;

    /**
     * Course course duration colume name
     * and colume valideed here
     * Api Property
    */
    @ApiProperty()
    @IsNotEmpty({ message: "Course duration name can not be empty" })
    @MinLength(1, { message: "Course duration  name minimum one leter digits" })
    @MaxLength(2, { message: "Course duration name should be maximum 2 digits or leters" })
    course_duration: string;

    /**
    * Course course_fees colume name
    * and colume valideed here
    * Api Property
    */
    @ApiProperty()
    @IsNotEmpty({ message: "Course fees name can not be empty" })
    @MinLength(4, { message: "Course fees  minimum  4 digits" })
    @MaxLength(5, { message: "Course fees should be maximum 5 digits" })
    course_fees: number;

    /**
    * Course ciurse starting date colume name
    * and colume valideed here
    * Api Property
    */
    @ApiProperty()
    @IsNotEmpty({ message: "Course starting date can not be empty" })
    @IsString({ message: "Course starting date should be date" })
    course_starting_date: string;
    /**
     * create relation here bitween user course
     */
    user: User[];
}