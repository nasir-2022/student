
import { User } from "src/user/user.entity";
import { Column, Entity,JoinColumn,OneToOne, PrimaryGeneratedColumn } from "typeorm";
/**
 * Address mapping database table and colume name
 * @author Md Nasir Hussain
 */
@Entity()
export class Address
{
     
    /**
     * generating primary key
     */
    @PrimaryGeneratedColumn()
    id:number
    /**
     * villlage colume name
     */
    @Column()
     village:string;
     /**
      *  house number
      */
     @Column()
    house_number:string;
    /**
     * gali number
     */
    @Column()
    gali_number:string;
    /**
     * city colume name
     */
    @Column()
    city:string;
    /**
     * post office colume name
     */
    @Column()
    post_office:string;
    /**
     * police station colume name
     */
    @Column()
    police_station:string;
    /**
     * state colume name
     */
    @Column()
    state:string;
    /**
     * country colume name
     */
    @Column()
    country:string;
    /**
     * pin code colume
     */
    @Column()
    pin_code:number;
      
    /**
     * createing one to one relation bitween address and user
     */
    @OneToOne(() => User, user => user.address) // specify inverse side as a second parameter
    /**
     * join colume bitween user and address
     */
    @JoinColumn()
    /**
     * creating object bitwwen user and address
     */
    user: User;
}