import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogoComponent } from './header-logo.component';



@NgModule({
  declarations: [
    HeaderLogoComponent
  ],
  exports: [
    HeaderLogoComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderLogoModule { }
