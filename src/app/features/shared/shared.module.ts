import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SharedComponent, SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
