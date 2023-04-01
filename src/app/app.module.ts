import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomBtnComponent } from './custom-btn/custom-btn.component';
import { CustomSettingsComponent } from './custom-settings/custom-settings.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [			
    AppComponent,
    CustomBtnComponent,
    CustomSettingsComponent,
    CustomInputComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
