import { EntityRepository, Repository } from "typeorm";
import { Course } from "./course.entity";
/**
 * course repository
 * @author Md Nasir Hussain
 */
@EntityRepository(Course)
export class CourseRepository extends Repository<Course>{}