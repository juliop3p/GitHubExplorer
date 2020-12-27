import { RepositoryService } from './../../services/repository.service';
import { Component, OnInit } from '@angular/core';
import { IRepository } from './../../shared/model/IRepository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isEmpty: boolean = false;
  repositoryName: string = '';
  repositories: IRepository[] = [];

  constructor(private repositoryService: RepositoryService) {}

  ngOnInit(): void {
    scroll(0, 0);
    this.repositories = JSON.parse(localStorage.getItem('repos')) || [];
  }

  handleClick() {
    if (this.repositoryName.length > 0) {
      this.isEmpty = false;
      this.repositoryService
        .getRepo(this.repositoryName)
        .subscribe((data: IRepository) => {
          this.repositories.push(data);
          localStorage.clear;
          localStorage.setItem('repos', JSON.stringify(this.repositories));
        });
    } else {
      this.isEmpty = true;
    }
  }
}
