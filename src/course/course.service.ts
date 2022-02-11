import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { CourseRepository } from "./course.repository";
import { CourseDto } from "./dto/course.dto";
/**
 * CourseService
 * @author Md Nasir Hussain
 */
@Injectable()
export class CourseService {
    /**
     * course service injectable
     * @param courseRepo  path
     */
    constructor(private courseRepo: CourseRepository) { }
    /**
     * add couse
     * @param course 
     * @returns if success or failure
     */

    async addCourse(course: CourseDto): Promise<string> {
        try {
            let response = await this.courseRepo.save(course);
            if (response) {
                const message: string = "Course inserted successfully";
                return message;
            }
            else {
                const message: string = "Course not inserted successfully";
                throw new InternalServerErrorException(message)
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * find all course
     * @param course path
     * @returns if success or failure
     */
    async findAllCourse(course: CourseDto): Promise<CourseDto[]> {
        try {
            let response = await this.courseRepo.find()
            if (response) {
                return response;
            }
            else {
                const message: string = "Course not found";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * find course by name
     * @param subject path
     * @returns if succcess or failure
     */
    async findCourseByName(subject: string): Promise<CourseDto[]> {
        try {
            let response = await this.courseRepo.find({ subject: subject })
            if (response) {
                return response;
            }
            else {
                const message: string = "Course not found by this name";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * find course by id
     * @param id path
     * @returns if success or failure
     */
    async findCourseById(id: number) {
        try {
            let response = await this.courseRepo.findOne(id);
            if (response) {
                return response;
            }
            else {
                const message: string = "Course not found by this id " + id;
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * course deleted by id
     * @param id  path
     * @returns if success or failure
     */
    async courseDeleteById(id: number) {
        try {
            let response = await this.courseRepo.delete(id);
            if (response.affected > 0) {
                const message: string = "Course deleted by this id " + id;
                throw new InternalServerErrorException(message);
            }
            else {
                const message: string = "Course not deleted by this id " + id;
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * update course by id
     * @param id path
     * @param course path
     * @returns if success or failure
     */
    async updateCourseById(id: number, course: CourseDto): Promise<string> {
        try {
            let response = await this.courseRepo.update(id, course);
            if (response) {
                const message: string = "Course updated successfully";
                return message;
            }
            else {
                const message: string = "Course not updated successfully";
                throw new InternalServerErrorException(message);
            }

        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}