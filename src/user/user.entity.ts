import { Address } from "src/address/address.entity"
import { Course } from "src/course/course.entity"
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./rolse/role"

/**
 * user class mapping databse table colume name here
 * @author Md Nasir Hussain
 */
@Entity()
export class User {
      
      /**
      * user id PrimaryGeneratedColumn
      */
      @PrimaryGeneratedColumn()
      id: number
      /**
       * user colume name
       */
      @Column()
      name: string
      /**
       * user email id unique colume
       */
      @Column({ unique: true })
      emailId: string
      /**
       * user contact number
       */
      @Column()
      phone: number
      /**
       * user password colume
       */
      @Column()
      password: string
      /**
       * user role define here
       */
      @Column({ type: 'enum', enum: Role, default: Role.User })
      role: Role
      /**
       * user gender colume name
       */
      @Column()
      gender: string
      /**
       * user  age colume name
       */
      @Column()
      age: number
      /**
      * creating relation one to one bitween user and address
       */
       @OneToOne(() =>Address, address => address.user) // specify inverse side as a second parameter
       /**
        * creat object user and address
        */
       address: Address;
       /**
        * create relation bitween
        * user and course
        */
       @OneToMany(()=>Course, course=>course.user)
       /**
        * create object of course
        */
       course:Course[];


}