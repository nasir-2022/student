import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from "@nestjs/swagger";
import { AddressService } from "./address.service";
import { AddressDto } from "./dto/address.dto";
/**
 * address controler
 * @author Md Nasir Hussain
 */
 @ApiTags('Address')
@Controller('address')
export class AddressController {
  /**
   * address service injectable
   * @param addressService 
   */
  constructor(private addressService: AddressService) { }
  /**
   * addAddress
   * @param address path
   * @returns if success or failure
   */
  @ApiBody({ description: 'AddressDto', required: true, type: AddressDto })
  @ApiCreatedResponse({ description: 'Address Inserted successfully', status: HttpStatus.CREATED })
  @ApiInternalServerErrorResponse({ description: 'Address not inserted successfully', status: HttpStatus.INTERNAL_SERVER_ERROR })
  @Post('/addAddress')
  addAddress(@Body() address: AddressDto): Promise<string> {
    return this.addressService.addAddress(address)
  }
  /**
   * findAllAddress
   * @param address path
   * @returns if success or failure
   */
  @ApiOkResponse({ description: 'Address list founded', status: HttpStatus.OK })
  @ApiInternalServerErrorResponse({ description: "Address not found", status: HttpStatus.INTERNAL_SERVER_ERROR })
  @Get('/findAllAddress')
  findAllAddress(address: AddressDto): Promise<AddressDto[]> {
    return this.addressService.findAllAddress(address);
  }
  /**
   * findAddressById
   * @param id path
   * @returns if success or failure
   */
  @ApiParam({
    name: 'id',
    description: 'name id',
    required: true
  })
  @ApiOkResponse({ description: 'Address found by id successfully', status: HttpStatus.OK })
  @ApiInternalServerErrorResponse({ description: 'Address not by id successfully', status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiNotFoundResponse({ description: 'Address not found by id successfully', status: HttpStatus.NOT_FOUND })
  @Get('/findAddressById/:id')
  findAddressById(id: AddressDto) {
    return this.addressService.findAddressById(id);
  }
  /**
   * updateAddressById
   * @param id path
   * @param address path
   * @returns if success or failure
   */
  @ApiParam({
    name: 'id',
    description: 'name id',
    required: true
  })
  @ApiOkResponse({ description: 'Address updated successfully', status: HttpStatus.OK })
  @ApiInternalServerErrorResponse({ description: 'Address not updated successfully', status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiNotFoundResponse({ description: 'Address not updated successfully', status: HttpStatus.NOT_FOUND })
  @Put('/updateAddressById/:id')
  updateAddressById(@Param('id') id: number, @Body() address: AddressDto): Promise<string> {
    return this.addressService.updateAddressById(id, address);
  }
  /**
   * deleteAddressById
   * @param id path
   * @returns if success or failure
   */
  @ApiParam({
    name: 'id',
    description: 'name id',
    required: true
  })
  @ApiOkResponse({ description: 'Address successfully deleted by id', status: HttpStatus.OK })
  @ApiInternalServerErrorResponse({ description: 'Address not successfully deleted by id', status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiNotFoundResponse({ description: 'Address not successfully deleted by id', status: HttpStatus.NOT_FOUND })
  @Delete('/deleteAddressById/:id')
  deleteAddressById(@Param('id') id: AddressDto) {
    return this.addressService.deleteAddressById(id)
  }
  /**
   * findAddressByName
   * @param village path
   * @returns if success or failure
   */
  @ApiParam({
    name: 'village',
    description: 'name village',
    required: true
  })
  @ApiOkResponse({ description: 'Address found by name', status: HttpStatus.OK })
  @ApiInternalServerErrorResponse({ description: 'Address not by name', status: HttpStatus.INTERNAL_SERVER_ERROR })
  @ApiNotFoundResponse({ description: 'Address not found by name', status: HttpStatus.NOT_FOUND })
  @Get('/findAddressByName/:village')
  findAddressByName(@Param('village') village: string): Promise<AddressDto[]> {
    return this.addressService.findAddressByName(village);
  }
}