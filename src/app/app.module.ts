import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounteroutputComponent } from './counter/counteroutput/counteroutput.component';
import { CounterbuttonsComponent } from './counter/counterbuttons/counterbuttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CounterinputComponent } from './counter/counterinput/counterinput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component'
import { EffectsModule } from '@ngrx/effects';
import {  HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
    AppRoutingModule,
     //@ts-ignore
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({logOnly:environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
