import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  public sameData = {
    name: 'Ivan'
  };

  constructor() { }

  ngOnInit() {
  }

  public getData(): string {
    return this.sameData.name;
  }

  public test(event: number): void {
    return console.log(event)
  }

}
