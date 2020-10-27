import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: any = 'http://www.google.com';
  valorAtual: string;
  valorSalvo: string;
  urlImagem = 'http://lorempixel.com/400/200/sports';
  isMouseOver: boolean = false;
  nome: string = 'nome qualquer';

  nomeCurso: string = 'Angular';
  valorInicial: number = 20;

  getValor() {
    return 1;
  }

  DoILikeAngular() {
    return true;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  botaoClicado() {
    window.alert('Botão');
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  pessoa = {
    nome: "Natan",
    idade: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

}
