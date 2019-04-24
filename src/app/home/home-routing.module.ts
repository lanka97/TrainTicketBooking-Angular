import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCompComponent } from './home-comp/home-comp.component'

const routes: Routes = [
  {
    path: '',
    component: HomeCompComponent,
    data: {
      title: 'HomeComp'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

