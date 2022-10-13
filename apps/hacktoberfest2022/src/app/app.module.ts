import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { UserNameComponent } from './components/user-name/user-name.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    UserNameComponent,
    SideNavigationComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
