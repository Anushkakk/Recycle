import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModalPageModule} from './modal/modal.module'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'map-display/:data', loadChildren: './map-display/map-display.module#MapDisplayPageModule' },
  { path: 'modal-page', loadChildren: './modal/modal-page.module#ModalPagePageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ModalPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
