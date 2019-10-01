import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef,AfterViewInit } from '@angular/core';
import { BlockComponent } from './block/block.component';

@Component({
  selector: 'app-block-host',
  templateUrl: './block-host.component.html',
  styleUrls: ['./block-host.component.css']
})
export class BlockHostComponent implements OnInit {
  // @ViewChild(BlockComponent, {static: false}) public block: BlockComponent;
  @ViewChildren(BlockComponent) public block: QueryList<BlockComponent>; 
  @ViewChild('name', {static: false}) public inputName: ElementRef<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.inputName)
  }

  ngAfterViewInit() {
    console.log((this.inputName.nativeElement as HTMLInputElement))
  }

  // public showBlock(): void {
  //   this.block.show();
  // }

  public showBlock(): void {
    this.block.forEach(block => block.show())
  }


}
