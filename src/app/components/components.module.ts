import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './all/footer/footer.component';
import { NavbarComponent } from './back/navbar/navbar.component';
import { SidebarComponent } from './back/sidebar/sidebar.component';
import { LoadingComponent } from './all/loading/loading.component';
import { NotfoundComponent } from './all/notfound/notfound.component';
import { AuthService } from '../service/authService/auth.service';
import { ClientNavbarComponent } from './front/navbar/client_navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoadingComponent,
    NotfoundComponent,
    ClientNavbarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoadingComponent,
    ClientNavbarComponent,
    
  ],
  providers: []
})
export class ComponentsModule { }
