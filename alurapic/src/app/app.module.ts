import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/errors.module';
import { PhotosModule } from './photos/photos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrorsModule,
    HomeModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
