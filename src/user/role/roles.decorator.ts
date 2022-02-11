/**
 * rolse gurds
 * @author hotel managements
 */
 import { SetMetadata } from "@nestjs/common";
import { Role } from "../rolse/role";
/**
 * user role check
 */
  export const ROLES_KEY = 'roles';
  /**
   * setmatadata
   * @param roles path
   * @returns if success or failure
   */
  export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);