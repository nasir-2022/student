import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
/**
 * interface response class
 * @author Md Nasir Hussain
 */
 export interface Response<T> {
   /**
    * create object here
    */
    data: T;
  }
  /**
   * TransformInterceptor class
   */
  @Injectable()
  export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    /**
     * ExecutionContext
     * @param context  path
     * @param next path
     * @returns if succcess or failure
     */
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
      /**
       * return maping data
       */
      return next.handle().pipe(map(data => ({ data })));
    }
  }