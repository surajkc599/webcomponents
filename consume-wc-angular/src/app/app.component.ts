import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
// This loads only progressbar as your template requries only progressbar
import 'simple-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'consume-wc-angular';
  value = 5;

  ngOnInit() {
    interval(1000)
      .pipe(takeWhile((_) => this.value < 100))
      .subscribe(() => (this.value += 10));
  }

  update(value: Event) {
    console.log(value)
  }
}
