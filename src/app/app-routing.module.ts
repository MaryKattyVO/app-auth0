import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuard } from './guards/auth.guard';
//import AuthGuard
// import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'precios', component: PreciosComponent},
    { 
        path: 'perfil', 
        component: ProtegidaComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', pathMatch:'full',  redirectTo: 'home'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
