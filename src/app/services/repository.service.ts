import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRepository } from './../shared/model/IRepository';
import { IIssue } from './../shared/model/IIssues';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  baseURL: string = 'https://api.github.com/repos';

  constructor(private http: HttpClient) {}

  getRepo(slug: string) {
    return this.http.get<IRepository>(`${this.baseURL}/${slug}`);
  }

  getIssues(slug: string) {
    return this.http.get<IIssue[]>(`${this.baseURL}/${slug}/issues`);
  }
}
