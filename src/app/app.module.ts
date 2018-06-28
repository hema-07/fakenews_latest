import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Material } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { NewsfeedComponent } from './newsfeed/newsfeed.component'; 
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
// import { ConfigService } from '../config/config.service';
const appRoutes: Routes = [
  { path: 'login', component: HomeComponent },
  { path: 'newsfeed', component: NewsfeedComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsfeedComponent
  ],
  imports: [
    BrowserModule,
    Material,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
