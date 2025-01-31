import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks() {
    this.http.get<any[]>('https://api.example.com/books').subscribe(data => {
      this.books = data;
    });
  }

} 