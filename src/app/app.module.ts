import { DetailPeopleComponent } from './dashboard/detail-people/detail-people.component';
import { AllPeopleComponent } from './dashboard/all-people/all-people.component';
import { UploadNewComponent } from './upload-new/upload-new.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { CardComponent } from './search/card/card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { PeopleComponent } from './people/people.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { environment } from "../environments/environment";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from "@angular/fire/storage";
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
      MenuComponent,
      HomeComponent,
      FooterComponent,
      SearchComponent,
      CardComponent,
      PeopleComponent,
      NotFoundComponent,
      UploadNewComponent,
      LoginComponent,
      DashboardComponent,
      RegisterComponent,
      AllPeopleComponent,
      DetailPeopleComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    NotifierModule.withConfig({
      // Custom options in here
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
