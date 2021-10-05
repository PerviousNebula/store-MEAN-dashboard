import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  template: `
    <app-navbar></app-navbar>
    <main class="animate__animated animate__fadeIn">
      <app-sidebar></app-sidebar>
      <div class="w-100 pt-5 pb-2" style="background-color: '#f6f7fb'; min-height: 100vh">
        <div class="container">
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `,
  styles: [`
    main {
      display: flex;
      flex-wrap: nowrap;
      height: 100%;
      max-height: 100%;
      overflow-x: auto;
      overflow-y: hidden;
    }
  `]
})
export class DashboardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
