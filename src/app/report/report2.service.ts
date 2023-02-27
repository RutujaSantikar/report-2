import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Report2Service {

  constructor(private http :  HttpClient) { }

  public getDistrict() : Observable<any> {
    const url = "http://114.143.217.43:8080/getDistrictsV1?";
    let queryParams = new HttpParams();
      // queryParams =  queryParams.append('disId', disId);
      // queryParams =  queryParams.append('disName', disName);
      return  this.http.get(url);
    }

    public getDivision(userPriv:any,disId:any,divId:any) : Observable<any> {
    const url = "http://114.143.217.43:8080/";
      let queryParams = new HttpParams();
      // queryParams =  queryParams.append('divId', divId);
      // queryParams =  queryParams.append('divName', divName);
      // queryParams =  queryParams.append('disId', disData);
      queryParams =  queryParams.append('disId', disId);
      queryParams =  queryParams.append('divId', divId);
      return  this.http.get(url +  'getDivisionsV2?userPriv='+userPriv+'&disId='+disId+'&divId='+divId);
    }

    public getSubDivision( disData:any, divisionData:any,userPriv:any,disId:any,divId:any,sudId:any) : Observable<any> {
      const url = "http://114.143.217.43:8080/";
      let queryParams = new HttpParams();
      queryParams =  queryParams.append('disId', disData);
      queryParams =  queryParams.append('divId', divisionData);
      queryParams =  queryParams.append('userPriv', userPriv);
      queryParams =  queryParams.append('disId', disId);
      queryParams =  queryParams.append('divId', divId);
      queryParams =  queryParams.append('sudId', sudId);

      // queryParams =  queryParams.append('divName', divName);
      // queryParams =  queryParams.append('sudId', sudId);
      // return  this.http.get(url + 'getSubDivisionsV2?disId='+disData+'&divId='+divisionData+'&userPriv='+userPriv+'&disId='+disId+'&divId='+divId+'&sudId='+sudId);
    return this.http.get(url + 'getSubDivisionsV2?userPriv='+userPriv+'&disId='+disId+'&divId='+divId+'&sudId='+sudId);

    }


    public getTransferReport( disData:any, divisionData:any, subDivisionData:any, fromDateData:any, toDateData:any) : Observable<any> {
      const url = "http://114.143.217.43:8080/";
      let queryParams = new HttpParams();
      // queryParams =  queryParams.append('disId', disData);
      // queryParams =  queryParams.append('divId', divisionData);
      // queryParams =  queryParams.append('sudId', subDivisionData);
      // return  this.http.get(url + 'getTransferReport?disId='+disData+'&divId='+divisionData+'&sudId='+subDivisionData+'&frmDate='+fromDateData+'&toDate='+toDateData);
      return this.http.get(url + 'getSummaryReport?disId='+disData+'&divId='+divisionData+'&sudId='+subDivisionData+'&frmDate='+fromDateData+'&toDate='+toDateData);
    }


}
