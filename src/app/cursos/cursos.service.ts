import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(): string[] {
    return ['Java', 'PHP', 'Angular', 'Python'];
  }
}
