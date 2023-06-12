import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from "@angular/forms";
import {FormsModule} from "@angular/forms";
import { ProductListComponent } from 'src/app/products/product-list.component';
import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './shared/ConvertToSpacesPipe';
import { starComponet } from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from 'src/app/products/product-detail.component'
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,    
    ConvertToSpacesPipe,
    starComponet,
    ProductDetailComponent,
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products',component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent,canActivate:[ProductDetailGuard]},
      {path: 'welcome',component: WelcomeComponent},
      {path: '',redirectTo:'welcome' ,pathMatch:'full'},
      {path: '**',redirectTo:'welcome' ,pathMatch:'full'},

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
