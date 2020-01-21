import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaleService} from '../service/tale.service';
import {TypeService} from '../service/type.service';

@Component({
  selector: 'app-tale-list',
  templateUrl: './tale-list.component.html',
  styleUrls: ['./tale-list.component.scss']
})
export class TaleListComponent implements OnInit {

  tales: any[];
  displayedColumns = ['title', 'type', 'id'];

  constructor(private http: HttpClient, private taleService: TaleService, public typeService: TypeService) { }

  ngOnInit() {
    this.taleService.getTales()
      .subscribe((response: any[]) => {
        this.tales = response;
      });
  }

  deleteTale(tale) {
    this.taleService.deleteTale(tale)
      .subscribe(() => {
        this.ngOnInit();
      });
  }


}
