import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderMenuComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
