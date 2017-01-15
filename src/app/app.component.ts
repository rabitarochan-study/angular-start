import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app sample!';
  hoge = '';
  demoData: any = [
    { name: '山田', age: 24},
    { name: '田中', age: 28},
    { name: '佐藤', age: 18},
    { name: '井上', age: 32},
    { name: '高橋', age: 46}
  ];
}
