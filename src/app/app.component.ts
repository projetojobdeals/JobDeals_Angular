import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  canShow: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeData = this.route.snapshot.firstChild?.data;
        if (routeData && typeof routeData['canShow'] !== 'undefined') {
          this.canShow = routeData['canShow'];
        } else {
          this.canShow = true;
        }
      }
    });
  }
}
