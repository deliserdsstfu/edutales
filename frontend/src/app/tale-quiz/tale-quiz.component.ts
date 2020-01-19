import { Component, OnInit } from '@angular/core';
import {TaleService} from '../service/tale.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tale-quiz',
  templateUrl: './tale-quiz.component.html',
  styleUrls: ['./tale-quiz.component.scss'],

})
export class TaleQuizComponent implements OnInit {

  tale: any[];
  displayedColumns = ['title', 'text'];

  constructor(private http: HttpClient, private route: ActivatedRoute, private taleService: TaleService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.taleService.getTale(id)
      .subscribe((response: any[]) => {
        this.tale = response;
      });
  }
}
