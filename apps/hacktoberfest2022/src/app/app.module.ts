import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { UserNameComponent } from './components/user-name/user-name.component';
import { EmailListComponent } from './components/email-list/email-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    UserNameComponent,
    EmailListComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
