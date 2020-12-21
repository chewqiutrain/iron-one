import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonStatusComponent } from './button-status/button-status.component';

const routes: Routes = [
  { path: '', component: ButtonStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
