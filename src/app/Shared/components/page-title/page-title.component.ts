import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html'
})
export class PageTitleComponent implements OnInit {
  @Input() headerTxt = '';
  @Input() addLinkTxt = '';
  @Input() addLinkUrl = '';

  constructor() { }

  ngOnInit(): void {
  }

}
