import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent implements OnInit {

  title = "My Title";

  constructor() { }

  ngOnInit(): void {
  }

  getMin(num: number, num2: number): boolean {
    return num > num2;
  }

  

}
