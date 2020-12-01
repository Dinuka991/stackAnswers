import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteTest1Component } from './project/route-test1/route-test1.component';
import { RouteTest2Component } from './project/route-test2/route-test2.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'report' , component: RouteTest1Component},
  {path: 'dashboard' , component: RouteTest2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
