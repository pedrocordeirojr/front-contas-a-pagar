import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContasComponent } from 'src/app/contas/contas.component';
import { IncluirContaComponent } from './incluir-conta/incluir-conta.component';

const routes: Routes = [
 
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
