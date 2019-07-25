import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowNewsComponent } from './show-news/show-news.component';


const routes: Routes = [
  {path:'',component:ShowNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
