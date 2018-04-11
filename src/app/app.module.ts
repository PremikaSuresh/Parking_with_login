import {CdkTableModule} from '@angular/cdk/table';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { TasksService } from './tasks.service';
import { AlertService } from './alert.service';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule
  ]
})
export class MaterialModule {}





import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {DialogModule} from 'primeng/dialog';
import { ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { routing } from './app.routing';
import {AuthGuard} from './_guards';
import {ParkingPlacePipe, Parking} from './parking/parking.component'
import { GenerateParking } from './parking/generete-parking.component';
import {ParkingService} from './parking/parking.service'
// import {NgModule} from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// // import {HttpModule} from '@angular/http';
// import {HttpClientModule} from '@angular/common/http';
// import { TasksService } from './tasks.service';

@NgModule({
  declarations: [AppComponent,  RegisterComponent ,  LoginComponent,Parking,GenerateParking, ParkingPlacePipe],
  imports: [
    MaterialModule,AngularFontAwesomeModule,
    NoopAnimationsModule,HttpClientModule,FormsModule,ReactiveFormsModule, DialogModule,ConfirmDialogModule ,BrowserModule,routing],
  providers: [ AlertService, AuthGuard, TasksService, ParkingService ,ConfirmationService],
  bootstrap: [AppComponent],
  entryComponents: [ ],
  exports:[],
})
export class AppModule { }
