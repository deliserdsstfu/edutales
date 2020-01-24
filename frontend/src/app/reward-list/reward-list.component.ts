import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChildService} from '../service/child.service';
import {RewardService} from '../service/reward.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import {UserOptions} from 'jspdf-autotable';
import {AbstractControl, ValidatorFn} from '@angular/forms';

// tslint:disable-next-line:class-name
interface jsPDFWithPlugin extends jsPDF {
  autotable: (options: UserOptions) => jsPDF;

}

@Component({
  selector: 'app-reward-list',
  templateUrl: './reward-list.component.html',
  styleUrls: ['./reward-list.component.scss']
})
export class RewardListComponent implements OnInit {

  // @ts-ignore
  @ViewChild('content') content: ElementRef;
  rewards: any[];
  displayedColumns = ['name', 'tale_title', 'history_title', 'picture', 'id'];

  constructor(private http: HttpClient, private rewardService: RewardService) { }

  ngOnInit() {
    this.rewardService.getRewards()
      .subscribe((response: any[]) => {
        this.rewards = response;
      });
  }

  deleteReward(reward) {
    this.rewardService.deleteReward(reward)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
  downloadPdf() {
    const doc = new jsPDF('portrait', 'px', 'a4') as jsPDFWithPlugin;

    const specialElementHandlers = {
      '#editor'(element, renderer) {
        return true;
      }
    };

    const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers
    });

    doc.save('test.pdf');

  }
}
