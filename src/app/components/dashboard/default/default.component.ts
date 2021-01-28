// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-default',
//   templateUrl: './default.component.html',
//   styleUrls: ['./default.component.scss']
// })
// export class DefaultComponent implements OnInit {

//   constructor() { }

//   ngOnInit() { }

// }


// import { Component, OnInit } from '@angular/core';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-carousel',
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.scss'],
//   providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
// })
// export class CarouselComponent implements OnInit {

//   showNavigationArrows = false;
//   showNavigationIndicators = false;
//   images = ['assets/images/c1.jpg','assets/images/c2.jpg','assets/images/c3.jpg']

//   constructor(config: NgbCarouselConfig) {
//     // customize default values of carousels used by this component tree
//     config.showNavigationArrows = true;
//     config.showNavigationIndicators = true;
//     // customize default values of carousels used by this component tree
//     config.interval = 10000;
//     config.wrap = false;
//     config.keyboard = false;
//     config.pauseOnHover = false;
//   }

//   ngOnInit() { }

// }

import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent  implements OnInit{

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['assets/images/c1.jpg','assets/images/c2.jpg','assets/images/c3.jpg']

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() { }

}

