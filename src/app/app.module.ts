import {HttpClientModule} from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { ShowBrandsComponent } from './brand/show-brands/show-brands.component';

import { BikeApiService } from './services/bike-api.service';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ChildOneComponent } from './child-one/child-one.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ShowBrandsComponent,
    HelloWorldComponent,
    ChildOneComponent
  ],
  imports: [ //components in imports
    BrowserModule,
    HttpClientModule 
  ],
  providers: [BikeApiService], //api go in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
