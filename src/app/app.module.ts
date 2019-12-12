import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserInfoService } from '../services/user-info.service';
import { AuthGuard } from '../services/auth_guard.service';
import { LoginService } from '../services/login.service';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { StockexchangeListComponent } from './stockexchange-list/stockexchange-list.component';
import { AddStockexchangeComponent } from './add-stockexchange/add-stockexchange.component';
import { AddIpoComponent } from './add-ipo/add-ipo.component';
import { SearchComponent } from './search/search.component';
import { ComanyService } from '../services/comany.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { CompareSectorComponent } from './compare-sector/compare-sector.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewIPOComponent } from './view-IPO/view-IPO.component';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      SignupComponent,
      AdminLandingComponent,
      UserLandingComponent,
      UploadExcelComponent,
      AddCompanyComponent,
      CompanyListComponent,
      StockexchangeListComponent,
      AddStockexchangeComponent,
      AddIpoComponent,
      SearchComponent,
      AdminHomeComponent,
      UserHomeComponent,
      CompareCompanyComponent,
      CompareSectorComponent,
      UpdateProfileComponent,
      ViewIPOComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      NgxEchartsModule
   ],
   providers: [
      UserInfoService,
      AuthGuard,
      LoginService,
      ComanyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
