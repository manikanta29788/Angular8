import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFromsComponent } from './reactive-froms/reactive-froms.component';


const routes: Routes = [
  { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
  { path: 'reactive-froms', component: ReactiveFromsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
