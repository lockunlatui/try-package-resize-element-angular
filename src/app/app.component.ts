import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import {
  AngularResizeElementDirection,
  AngularResizeElementEvent,
} from 'angular-resize-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'try-package-angular-resize-element';

  @ViewChild('container', { read: ElementRef })
  public readonly containerElement: any;

  @ViewChild('container1', { read: ElementRef })
  public readonly containerElement1: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log("event", event)
    this.data.width = window.innerWidth / 2;
    this.data1.width = window.innerWidth / 2;
  }

  public readonly AngularResizeElementDirection = AngularResizeElementDirection;
  public data: any = {};
  public data1: any = {};

  ngOnInit() {
    this.data.width = window.innerWidth / 2;
    this.data1.width = window.innerWidth / 2;
  }

  public onResize2(evt: AngularResizeElementEvent): void {
    if (evt.currentWidthValue >= 300) {
      this.data.width = evt.currentWidthValue;
      this.data1.width = window.innerWidth - evt.currentWidthValue
    }
  }

  public onResize1(evt: AngularResizeElementEvent): void {
    if (evt.currentWidthValue >= 300) {
      this.data1.width = evt.currentWidthValue;
      this.data.width = window.innerWidth - evt.currentWidthValue
    }
  }
}
