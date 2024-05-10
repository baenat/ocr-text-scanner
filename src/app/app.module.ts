import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ClipboardModule } from 'ngx-clipboard';
import { Icons } from '@icons/icons';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ClipboardModule
  ],
  providers: [Icons],
  bootstrap: [AppComponent]
})
export class AppModule { }
