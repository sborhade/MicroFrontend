import { NgModule } from '@angular/core';
import { RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'shopping', loadChildren: () =>
      import('./shopping-cart/shopping-cart.module')
        .then(m => m.ShoppingCartModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
