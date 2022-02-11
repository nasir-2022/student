import { ValidationError, ValidatorOptions } from "class-validator";
/**
 * ValidationPipeOptions interface
 * @author Md Nasir Hussain
 */
 export interface ValidationPipeOptions extends ValidatorOptions {
    /**
     * enable/disable validation
     */
      transform?: boolean;
      /**
       * disableErrorMessages here
       */
      disableErrorMessages?: boolean;
      /**
       * ValidationError here 
       */
      exceptionFactory?: (errors: ValidationError[]) => any;
    }