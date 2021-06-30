import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output() valor: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }


  cambiarValor(valor: number) {
    if(this.progreso>=100 && valor >= 0){
      this.valor.emit(100);
      return this.progreso = 100;
    } 
    if(this.progreso<=0 && valor < 0){
      this.valor.emit(0);
      return this.progreso = 0;
    } 
    this.progreso += valor;
    this.valor.emit(this.progreso);
    return this.progreso;
  }

  onChange(newValor: number) {
    if(newValor >=100)this.progreso = 100;
    else if (newValor<=0) this.progreso = 0;
    else this.progreso = newValor;

    this.valor.emit(this.progreso);
  }
}
