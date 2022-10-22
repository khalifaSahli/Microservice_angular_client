import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { HomeComponent } from './home/home/home.component';
import { UsersRoutingModule } from './users-routing.module';
import { ComponentsModule } from 'app/components/components.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [HomeComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot()
  ]
})
export class UsersModule { }
