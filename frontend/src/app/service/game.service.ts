import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  opNames = {
    g: 'Green',
    b: 'Blue',
    p: 'Pink'
  };

}
