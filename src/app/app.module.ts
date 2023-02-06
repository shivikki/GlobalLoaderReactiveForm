
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { LoaderInterService } from './interceptors/loader-inter.service';
import { LoaderService } from './services/loader.service';
import { FirstComponent } from './components/first/first.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


//form used
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
@NgModule({
  declarations: [
    AppComponent,
    MyLoaderComponent,
    FirstComponent,
    ReactiveFormComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  //mention both interceptior & loader service
  providers: [   LoaderService,{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
