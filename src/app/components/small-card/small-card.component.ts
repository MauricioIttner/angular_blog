import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = 'Cavaleiro Da Lua, Nova serie da disney+';

  ngOnInit(): void {
  }
}
