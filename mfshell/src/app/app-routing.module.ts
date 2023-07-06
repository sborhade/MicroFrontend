import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('mfproducts/Module').then((m)=>m.HomeModule),
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  {
    path: 'payment',
    loadComponent: () => import('mfpayment/PaymentComponent').then((m)=>m.PaymentComponent),
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  {
    path: 'bookings',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfshopping',
        exposedModule: './ShoppingCartModule'
      }).then((m) => m.ShoppingCartModule)
  },
  {
    path: 'shopping',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './ShoppingCartModule'
    })
      .then((m) => m.ShoppingCartModule)
  },
  // {
  //   path: 'payment',
  //   loadComponent: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //       exposedModule: './PaymentComponent'
  //     }).then(m => m.PaymentComponent)
  // },
  // {
  //   path: 'products',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'manifest',
  //       remoteName: 'mfproducts',
  //       exposedModule: './Module',
  //     }).then((m) => m.Module),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
