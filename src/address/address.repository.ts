import { EntityRepository, Repository } from "typeorm";
import { Address } from "./address.entity";
/**
 * address repository
 * @author Md Nasir Hussain
 */
@EntityRepository(Address)
export class AddressRepository extends Repository<Address>{}