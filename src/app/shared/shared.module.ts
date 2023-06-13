import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { starComponet } from './star.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    starComponet
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    starComponet
  ]
})
export class SharedModule { }
