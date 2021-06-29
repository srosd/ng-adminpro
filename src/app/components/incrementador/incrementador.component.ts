import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent{

  @Input('valor') progreso: number = 40;

  @Output() valor: EventEmitter<number> = new EventEmitter();


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
}
