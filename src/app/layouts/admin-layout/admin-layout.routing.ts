import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddReviewComponent } from './review/add-review/add-review.component';
import { ListReviewComponent } from './review/list-review/list-review.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },   { path: 'ListReview',      component: ListReviewComponent },
      { path: 'AddReview',      component: AddReviewComponent },
    { path: 'dashboard',      component: DashboardComponent },
];
