import { environment } from './../../environments/environment';
import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  private readonly apiUrl = `${environment.apiUrl}/book`;
  private readonly http = inject(HttpClient);

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks() {
    this.http.get<Book[]>(this.apiUrl).subscribe(data => {
      this.books = data;
    });
  }

} 