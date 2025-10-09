import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponents } from './tasks/tasks.component';
import { TasktestComponent } from './tasks/tasktest/tasktest.component';
import { AddtaskComponent } from './tasks/addtask/addtask.component';
import { CardComponent } from "./shared/card/card.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TaskComponents,
    TasktestComponent,
    AddtaskComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
