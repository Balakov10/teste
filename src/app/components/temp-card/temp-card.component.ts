import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-temp-card',
  templateUrl: './temp-card.component.html',
  styleUrls: ['./temp-card.component.scss'],
})


export class TempCardComponent implements OnInit {

  @Input('weatherDay') weatherDay: any;
  @Input('city') city: any;
  constructor() {

  }

  ngOnInit() {}

}
