import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public img1: string = 'assets/img/1.jpg';
  public img2: string = 'assets/img/2.jpg';
  public res: string = '';

  public flag: string = '';

  public settings = {
    accent: false,
    error: false,
    highlighted: false
  };

  public choice: string = '';





  constructor() { }

  ngOnInit() {
  }

  public toogleImage(): void  {
    if (this.res === this.img1) {
      this.res = this.img2;
    } else {
      this.res = this.img1;
    }
    this.borderClass = true;
    this.bgClass = true;
    // this.flag = !this.flag
  }

  public getClasses(): string {
    return 'border1 bg italic'
  }
  public borderClass: boolean  = false
  public bgClass: boolean = false

}
