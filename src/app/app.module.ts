import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RxComponent } from './rx/rx.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

// import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    RxComponent,
    UserComponent,
    
    MovieListComponent,
    MovieCardComponent,
  //  CommonModule,
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
