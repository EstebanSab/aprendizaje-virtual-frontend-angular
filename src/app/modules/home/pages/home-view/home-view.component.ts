import { Component, OnInit } from '@angular/core';
import { HomeRestService } from '../../services/home-rest.service';
import {Breakpoints,BreakpointObserver} from '@angular/cdk/layout';


@Component({
  selector: 'home-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {
  
  }
  
  ngOnInit() {
  
    this.breakpointObserver.observe(Breakpoints.HandsetLandscape)
      .subscribe(result => {

        if (result.matches) {
          console.log("screens matches HandsetLandscape");
        }

        console.log(result.matches)
  });
}

}
