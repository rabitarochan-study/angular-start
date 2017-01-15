import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent
    implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  wiki: string;

  constructor() { }

  /* lifecycle hooks */

  ngOnInit() {
    console.log('WikiComponent.ngOnInit()');
    this.wiki = localStorage.getItem('amke');
  }

  ngOnChanges() {
    console.log('WikiComponent.ngOnChanges()');
  }

  ngDoCheck() {
    console.log('WikiComponent.ngDoCheck()');
  }

  ngAfterContentInit() {
    console.log('WikiComponent.ngAfterContentInit()');
  }

  ngAfterContentChecked() {
    console.log('WikiComponent.ngAfterContentChecked()');
  }

  ngAfterViewInit() {
    console.log('WikiComponent.ngAfterViewInit()');
  }

  ngAfterViewChecked() {
    console.log('WikiComponent.ngAfterViewChecked()');
  }

  ngOnDestroy() {
    console.log('WikiComponent.ngOnDestroy()');
  }

}
