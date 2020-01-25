import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RewardService} from '../service/reward.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import {UserOptions} from 'jspdf-autotable';
import {TaleService} from '../service/tale.service';
import {HistoryService} from '../service/history.service';

// tslint:disable-next-line:class-name
interface jsPDFWithPlugin extends jsPDF {
  autotable: (options: UserOptions) => jsPDF;

}

@Component({
  selector: 'app-reward-export',
  templateUrl: './reward-export.component.html',
  styleUrls: ['./reward-export.component.scss']
})
export class RewardExportComponent implements OnInit {

  // @ts-ignore
  @ViewChild('content') content: ElementRef;

  rewards: any = [];
  taleTitle: any = [];
  historyTitle: any = [];
  taleText: any = [];
  historyText: any = [];
  pictures: number[];


  constructor(private route: ActivatedRoute, private rewardService: RewardService, public taleService: TaleService,
              private historyService: HistoryService) {
  }

  ngOnInit() {
    const rewId = this.route.snapshot.paramMap.get('id');
    this.rewardService.getReward(rewId).subscribe(
      (response: any) => {
        this.rewards = response;
        this.pictures = response.pictures;
        this.taleService.getTale(this.rewards.tale).subscribe((res: any) => {
            this.taleTitle = res.title;
            this.taleText = res.text;
          }
        );
        this.historyService.getHistory(this.rewards.history).subscribe((res: any) => {
            this.historyTitle = res.title;
            this.historyText = res.text;
          }
        );
      }
    );
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

    doc.save('Auszeichnung.pdf');

  }

  print() {
    print();
  }
}
