import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html'
})
export class HomeScreenComponent implements OnInit {
  activated = false;

  constructor() { }

  ngOnInit(): void {
  }

}
