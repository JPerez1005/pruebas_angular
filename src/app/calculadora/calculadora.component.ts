import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  a: number=0;
  b: number=0;
  resultado=this.a+this.b;

  suma(){
    this.resultado=this.a+this.b;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
