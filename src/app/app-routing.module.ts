import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FirstComponent } from './components/first/first.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [{
  path:"home",
  component:FirstComponent
}, {
  path:"form",
  component:ReactiveFormComponent
},
{
  path:"upload",
  component:FileUploadComponent
},
{
  path:"**",
  component:FirstComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
