import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TypeService} from '../service/type.service';
import {HistoryService} from '../service/history.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {

  histories: any[];
  displayedColumns = ['title', 'type', 'id'];

  constructor(private http: HttpClient, private historyService: HistoryService, public typeService: TypeService) { }

  ngOnInit() {
    this.historyService.getHistories()
      .subscribe((response: any[]) => {
        this.histories = response;
      });
  }

  deleteHistory(history) {
    this.historyService.deleteHistory(history)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
