import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheoryService } from './theories.service';
import { UsersService } from './users.service';
import { TheoryPipe } from './theory.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TheoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TheoryService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
