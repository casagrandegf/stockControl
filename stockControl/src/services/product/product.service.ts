import { Injectable } from "@angular/core";
import { BaseService } from "../base.service";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
  }

  
  public getProducts() {
    let urlParams = `/product`;
    // return Promise.resolve( [{ name: "test das dsa", quantity: 123 }]);
    return this.httpGet(urlParams)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      })
  }

  public updateProduct(pProduct) {
    let urlParams = `/product`

    return this.httpPut(urlParams, pProduct)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("err: ", err);
        return err;
      })
  }
}