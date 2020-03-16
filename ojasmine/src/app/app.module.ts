import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { PostService } from './_services/post.service';
import { UserService } from './_services/user.service';
import { postComponent } from './simpleTests/postComponent/postComponent';
import { ParentPostComponentComponent } from './simpleTests/parent-post-component.component';

@NgModule({
  declarations: [
    AppComponent,
    postComponent,
    ParentPostComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
