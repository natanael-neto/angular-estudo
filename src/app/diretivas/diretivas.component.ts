import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  cursos = ["JAVA", "ANGULAR"];

  mostrarCursos: boolean = false;

  aba: string = 'home';
  pegando: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

  onClickStar(){
    this.pegando = !this.pegando;
  }
}
