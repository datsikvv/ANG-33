import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

public visble: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public show(): void {
    this.visble = true;
  }

}
