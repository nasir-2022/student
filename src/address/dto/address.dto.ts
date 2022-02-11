import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { User } from "src/user/user.entity";
/**
 * AddressDto
 * @author Md Nasir Hussain
 */
export class AddressDto {
    /**
     * address id
     */
    id: number
    /**
     * address village colume name
     */
    @ApiProperty()
    @IsNotEmpty({ message: "Village name can not be empty" })
    @IsString({ message: "Village name should be string" })
    @MinLength(3, { message: "Village name minimum three leter" })
    @MaxLength(100, { message: "Villlage name should be maximum 100 leters" })
    village: string;
    /**
     * address house number colume name
     * and also validate the colume name
     * add Api property
     */
    @ApiProperty()
    @IsNotEmpty({ message: "House number can not be empty" })
    @MinLength(1, { message: "House number minimum one digits" })
    @MaxLength(10, { message: "House number should be maximum 10 dogits" })
    house_number: string;
    /**
     * address gali number colume name
     * and also validate the colume name
     * add Api property
     */
    @ApiProperty()
    @IsNotEmpty({ message: "Gali number can not be empty" })
    @IsString({ message: "Gali number should be number" })
    @MinLength(1, { message: "Gali number minimum one digits" })
    @MaxLength(10, { message: "Gali number should be 10 digits" })
    gali_number: string;
    /**
     * address city colume name
     * and also validate the colume name
     * add Api property
     */
    @ApiProperty()
    @IsNotEmpty({ message: "City name can not be empty" })
    @IsString({ message: "City name should be string" })
    @MinLength(2, { message: "City length minimum three leter" })
    @MaxLength(50, { message: "City length should be maximum 50 leters" })
    city: string;
    /**
     * address post office colume name
     * and also validate the colume name
     * add Api property
     */
    @ApiProperty()
    @IsNotEmpty({ message: "Post office name can not be empty" })
    @IsString({ message: "Post office name should be string" })
    @MinLength(3, { message: "Post office length minimum three leter" })
    @MaxLength(100, { message: "Post office length should be maximum 100 leters" })
    post_office: string;
    /**
     * address police station colume name
     * and also validate the colume name
     * add Api property
     */
    @ApiProperty()
    @IsNotEmpty({ message: "Police station name can not be empty" })
    @IsString({ message: "Police station name should be string" })
    @MinLength(3, { message: "Police station length minimum three leter" })
    @MaxLength(100, { message: "Police station length should be maximum 100 leters" })
    police_station: string;
    /**
     * address state colume name
     * and also validate the colume name
     * add Api property
     */
    @ApiProperty()
    @IsNotEmpty({ message: "State name can not be empty" })
    @IsString({ message: "State name should be string" })
    @MinLength(3, { message: "State length minimum three leter" })
    @MaxLength(100, { message: "State length should be maximum 100 leters" })
    state: string;
    /**
     * address country colume name
    * and also validate the colume name
     * add Api property
     */
    @ApiProperty()
    @IsNotEmpty({ message: "Country name can not be empty" })
    @IsString({ message: "Country name should be string" })
    @MinLength(3, { message: "Country length minimum three leter" })
    @MaxLength(100, { message: "Country length should be maximum 100 leters" })
    country: string;
    /**
     * address pincode colume name
     * and also validate the colume name
     * add Api property
     */
    @ApiProperty()
    @IsNotEmpty({ message: "Pincode name can not be empty" })
    @IsNumber()
    @MinLength(6, { message: "Pincode length minimum 6 digits " })
    @MaxLength(6, { message: "Pincode length should be maximum 6 digits" })
    pin_code: number;
    /**
     * Creating relation bitween user and address
     */
    user: User;

}