import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { DetailsPostComponent } from './components/posts/details-post/details-post.component';

const routes: Routes = [
  {path: '', component:ContainerAppComponent,
   children:[
    { 
      path: 'home',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) 
    },

    {path: 'posts/:id', component: DetailsPostComponent },

    { path: 'about', 
    loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
    
    {path:'', redirectTo:'home',pathMatch:'full'}
   ]
  },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'profile', loadChildren: () => import('./components/admin/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'vermas', loadChildren: () => import('./components/pages/home/vermas/vermas.module').then(m => m.VermasModule) },
  { path: 'tablas', loadChildren: () => import('./components/admin/tablas/tablas.module').then(m => m.TablasModule) },
  { path: 'tablas', loadChildren: () => import('./components/admin/clientes/clientes.module').then(m => m.ClientesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
