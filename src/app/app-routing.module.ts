import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AgenceComponent } from './agence/agence.component';
import { ConnexionComponent } from './connexion/connexion.component';


const routes: Routes = [
{
  path:'',
  component:HomeComponent

},
{
  path:'actualite',
  component:ActualiteComponent
},
{
  path:'agence',
  component:AgenceComponent
},
{
  path:'connexion',
  component:ConnexionComponent

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
