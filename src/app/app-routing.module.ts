import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './components/books/book/book.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';

const routes: Routes = [
  { path: '', component: BooksListComponent },
  { path: 'cart', loadChildren: () => import('./components/cart/cart.module').then(m => m.CartModule) },
  { path: 'book', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
