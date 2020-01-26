import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TypeService} from '../service/type.service';
import {HistoryService} from '../service/history.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {

  histories: any[];
  displayedColumns = ['title', 'id'];
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;

  constructor(private http: HttpClient, private historyService: HistoryService,
              public router: Router, public typeService: TypeService) { }

  ngOnInit() {
    this.historyService.getHistories()
      .subscribe((response: any[]) => {
        this.histories = response;
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
      });
  }

  deleteHistory(history) {
    this.historyService.deleteHistory(history)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  getHistory(value: any) {
    this.router.navigateByUrl('/history-form/' + value.option.value);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toString().toLowerCase();

    return this.histories.filter(option => option.title.toLowerCase().includes(filterValue));
  }
}
