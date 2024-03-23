import { Component } from '@angular/core';

import { ApiCallService } from '../api-call.service';

import { User } from '../User';

@Component({
  selector: 'app-api-connect',
  templateUrl: './api-connect.component.html',
  styleUrls: ['./api-connect.component.css']
})
export class ApiConnectComponent {
  
  constructor( 
    private ApiCallService: ApiCallService) { }

    // ------------------------------- Properties
    response = '';

    users : User[] = [];

    // Call the api routes
    callAPi2(method, url, callback, dataObj = null, token=null) {
      var obj1 = this;
      if (!dataObj) {
        dataObj = {};
      }
      this.ApiCallService.fetchCall(dataObj ,url, method, callback, token, obj1);
    }

    // Call the api routes
    callAPi1(method, url, callback, params = null, header = null) {
      var obj1 = this;
      this.ApiCallService.reqCall(method, url, callback, obj1, params, header);
    }

    callback2(thisObj,res, result) {
      console.log(res);
      console.log(result);

      thisObj.response = result.data.token;
      thisObj.users = {};

    }

    // All users / all logged on
    callback3(thisObj, res, result) {
      console.log(result.data);
      thisObj.users = result.data.data;

      console.log(result.data.data[0].name)
      thisObj.response = 'Success';
    }

    // Token
    route2() {
      this.callAPi2('GET', 'https://me-api.ysojs.se/token', this.callback2);
    }

    route3() {
      this.callAPi2('POST', 'https://me-api.ysojs.se/users/allUsers', this.callback3);
    }

    // allLoggedOn
    route8() {
      var url = 'https://me-api.ysojs.se/users/allLoggedOn';
      var params;
      params = {};
      this.callAPi2('POST', url, this.callback3, params);
    }

}
