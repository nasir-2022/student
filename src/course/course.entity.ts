import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
/**
 * course mapping for data base and colume name
 * @author Md Nasir Husssain
 */
@Entity()
export class Course {
    /**
     * generate perimary colume id
     */
    @PrimaryGeneratedColumn()
    id: number
    /**
     * couser colume name
     */
    @Column()
    couser_name: string;
    /**
     * course subjectb colume name
     */
    @Column()
    subject: string;
    /**
     * course duration colume name
     */
    @Column()
    course_duration: string;
    /**
     * course colume fees name
     */
    @Column()
    course_fees: number;
    /**
     * course colume date name
     */
    @Column()
    course_starting_date: string;

     /**
      * creating relation many to one bitween user and course
       */
      @ManyToOne(() =>User, user => user.course) // specify inverse side as a second parameter
      /**
       * Creating user object
       */
      user: User[];

     

}