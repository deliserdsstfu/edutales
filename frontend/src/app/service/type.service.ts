import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor() { }
  opNames = {
    w: 'witzig',
    g: 'gruselig'
  };
}
