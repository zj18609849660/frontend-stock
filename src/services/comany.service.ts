import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { UserInfoService, UserInfoStorage } from './user-info.service';
import { CompareResult } from 'src/model/compareResult';

@Injectable({
  providedIn: 'root'
})
export class ComanyService {

  constructor(private apiRequestService: ApiRequestService, private userInfoService: UserInfoService) { }

  addNewCompany(obj: any): Observable<any> {
    let addResult = new Subject<any>();
    this.apiRequestService.post('/company-service/company/add', obj).subscribe((data) => {
      addResult.next(data.addCompanyStatus);
    });
    return addResult;
  }

  getAllCompanies(): Observable<any> {
    return this.apiRequestService.get('/company-service/company/all');
  }

  updateCompany(obj: any): Observable<any> {
    let updateResult = new Subject<any>();
    this.apiRequestService.post('/company-service/company/update', obj).subscribe((data) => {
      updateResult.next(data.updateCompanyStatus);
    });
    return updateResult;
  }

  getAllIPOs(): Observable<any> {
    return this.apiRequestService.get('/company-service/company/ipo');
  }

  addNewIPO(obj: any): Observable<any> {
    let addResult = new Subject<any>();
    this.apiRequestService.post('/company-service/company/ipo/add', obj).subscribe((data) => {
      addResult.next(data.addIPOStatus);
    });
    return addResult;
  }

  getCompanyByName(searchStr: string): Observable<any> {
    return this.apiRequestService.get('/company-service/company/search?name=' + searchStr);
  }

  compareCompany(obj: any): Observable<any> {
    let compareSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    this.apiRequestService.post('/company-service/company/compare', obj).subscribe(
      (data) => {
        compareSubject.next(data);
      }
    );
    return compareSubject;
  }

}
