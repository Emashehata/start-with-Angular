import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  friends:string[]=['eman','koko','lolo','bahonsa'];
}
