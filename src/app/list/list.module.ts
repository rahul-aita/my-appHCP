import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[
  {path:'list',loadChildren:()=>import('./list-routing.module')
  .then(mod=>mod.ListRoutingModule)}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListRoutingModule,
    RouterModule.forRoot(routes)
  ]
})
export class ListModule { }
