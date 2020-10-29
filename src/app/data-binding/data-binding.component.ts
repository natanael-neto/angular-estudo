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
  isMouseOver = false;
  nome = 'nome qualquer';

  nomeCurso = 'Angular';
  valorInicial = 20;

  getValor(): number {
    return 1;
  }

  DoILikeAngular():boolean {
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
