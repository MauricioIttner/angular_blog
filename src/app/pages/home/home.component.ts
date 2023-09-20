import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy{
  nameButton:string = 'How i see'
  showElement = false;

  toggleElement() {
    this.showElement = !this.showElement;
    this.nameButton = 'The normal'
    this.showElement = true
  }
  ngOnDestroy(): void {

  }
}
