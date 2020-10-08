import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stencil-angular-output';
  value = 1;

  ngOnInit() {
    interval(500).pipe(
      takeWhile(() => this.value < 100) 
    ).subscribe(()=> this.value = this.value + 10)
  }

  update(event: Event) {
    console.log(event);
  }
}
