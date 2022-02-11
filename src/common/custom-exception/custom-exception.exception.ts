import { HttpException, HttpStatus } from "@nestjs/common";

/**
 * custom exception class
 * @author Md Nasir Husssain
 */
 export class CustomException extends HttpException {
    /**
     * constructor creation
     * @param message  path
     */
    constructor(message) {
        /**
         * super classes 
         */
        super(message, HttpStatus.NOT_FOUND);
    }
}