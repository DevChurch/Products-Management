import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from "@angular/forms";
import {FormsModule} from "@angular/forms";
import { ProductListComponent } from 'src/app/products/product-list.component';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
     
      {path: 'welcome',component: WelcomeComponent},
      {path: '',redirectTo:'welcome' ,pathMatch:'full'},
      {path: '**',redirectTo:'welcome' ,pathMatch:'full'},

    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
