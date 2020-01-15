import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  opNames = {
    b: 'Blue',
    p: 'Pink',
    g: 'Green'
  };
}
