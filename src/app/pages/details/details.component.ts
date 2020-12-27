import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from './../../services/repository.service';
import { IRepository } from './../../shared/model/IRepository';
import { IIssue } from './../../shared/model/IIssues';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  repository: IRepository;
  issues: IIssue[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repositoryService: RepositoryService
  ) {}

  ngOnInit(): void {
    scroll(0, 0);

    this.repositoryService
      .getRepo(this.route.snapshot.params['slug'])
      .subscribe(
        (data: IRepository) => {
          this.repository = data;
        },
        (err) => {
          if (err.status === 404) {
            return this.router.navigate(['/']);
          }
        }
      );

    this.repositoryService
      .getIssues(this.route.snapshot.params['slug'])
      .subscribe((data: IIssue[]) => {
        this.issues = data;
      });
  }
}
