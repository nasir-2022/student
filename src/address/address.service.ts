import { HttpException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { AddressRepository } from "./address.repository";
import { AddressDto } from "./dto/address.dto";
/**
 * address service, we write business logic
 * @author Md Nasir Hussain
 */
@Injectable()
export class AddressService {
    /**
     * servise repo injectable
     * @param addressRepo 
     */
    constructor(private addressRepo: AddressRepository) { }
    /**
     * addAddress
     * @param address path 
     * @returns if success or failure
     */
    async addAddress(address: AddressDto): Promise<string> {
        try {
            let response = await this.addressRepo.save(address)

            if (response) {
                const message: string = "Address Inserted successfully";
                return message;
            }
            else {
                const message: string = "Address not inserted successfully";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * findAllAddress
     * @param address path 
     * @returns if success or failure
     */
    async findAllAddress(address: AddressDto): Promise<AddressDto[]> {
        try {
            let response = await this.addressRepo.find();
            if (response) {

                return response;
            }
            else {
                const message: string = "Address not found";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * findAddressById
     * @param id path
     * @returns if success or failure
     */
    async findAddressById(id: AddressDto) {
        try {
            let response = await this.addressRepo.findOne(id)
            if (response) {
                return response;
            }
            else {
                const message: string = "Address found by id successfully";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * updateAddressById
     * @param id path
     * @param address path
     * @returns if success or failure
     */
    async updateAddressById(id: number, address: AddressDto): Promise<string> {
        try {
            let response = await this.addressRepo.update(id, address);
            if (response) {
                const message: string = "Address updated successfully";
                return message;
            }
            else {
                const message: string = "Address not updated successfully";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * addresss deleted by id
     * @param id path
     * @returns if success or failure
     */
    async deleteAddressById(id: AddressDto) {
        try {
            let response = await this.addressRepo.delete(id);
            if (response.affected > 0) {
                const message: string = "Address  deleted successfully by this id " + id;
                return message;
            }
            else {
                const message: string = "Address not deleted by this id";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
    /**
     * find address by name
     * @param village path
     * @returns if success or failure
     */
    async findAddressByName(village: string): Promise<AddressDto[]> {
        try {
            let response = await this.addressRepo.find({ village: village });
            if (response) {
                return response;
            }
            else {
                const message: string = "Address not by name";
                throw new InternalServerErrorException(message);
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

}