import { Component, Input, OnInit } from '@angular/core';
import { IIssue } from './../../shared/model/IIssues';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css'],
})
export class CardInfoComponent implements OnInit {
  @Input() issue: IIssue;

  constructor() {}

  ngOnInit(): void {}
}
