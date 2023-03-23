import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';

const routes: Routes = [ 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  constructor(private router: Router){}

  goCourseRedirect(){
    this.router.navigate(['/course']);
  }
  
 }
