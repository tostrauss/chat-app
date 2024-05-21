import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ChatHomeComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

