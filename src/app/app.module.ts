import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // CLI imports router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StackComponent } from './project/stack/stack.component';
import { RouteTest1Component } from './project/route-test1/route-test1.component';
import { RouteTest2Component } from './project/route-test2/route-test2.component';

@NgModule({
  declarations: [
    AppComponent,
    StackComponent,
    RouteTest1Component,
    RouteTest2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
