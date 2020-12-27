import { IRepository } from './../../shared/model/IRepository';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-repo',
  templateUrl: './card-repo.component.html',
  styleUrls: ['./card-repo.component.css'],
})
export class CardRepoComponent implements OnInit {
  @Input() repository: IRepository;

  constructor() {}

  ngOnInit(): void {}
}
