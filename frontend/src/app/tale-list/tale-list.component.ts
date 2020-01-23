import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaleService} from '../service/tale.service';
import {TypeService} from '../service/type.service';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tale-list',
  templateUrl: './tale-list.component.html',
  styleUrls: ['./tale-list.component.scss']
})
export class TaleListComponent implements OnInit {

  tales: any[];
  displayedColumns = ['title', 'type', 'id'];
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;

  constructor(private http: HttpClient, private taleService: TaleService, public typeService: TypeService, public router: Router) {
  }


  ngOnInit() {
    this.taleService.getTales()
      .subscribe((response: any[]) => {
        this.tales = response;
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
      });
  }

  deleteTale(tale) {
    this.taleService.deleteTale(tale)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  getTale(value: any) {
    this.router.navigateByUrl('/tale-form/' + value.option.value);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toString().toLowerCase();

    return this.tales.filter(option => option.title.toLowerCase().includes(filterValue));
  }

}
