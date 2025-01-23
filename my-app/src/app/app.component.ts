import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Lunch Checker';
  lunchItems: string = '';
  message: string = '';
  messageClass: string = '';
  borderClass: string = '';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  checkIfTooMuch() {
    if (this.lunchItems.trim() === '') {
      this.message = 'Please enter data first';
      this.messageClass = 'message-red';
      this.borderClass = 'border-red';
    } else {
      const items = this.lunchItems.split(',')
        .filter(item => item.trim() !== ''); // ignore empty items
      if (items.length <= 3) {
        this.message = 'Enjoy!';
        this.messageClass = 'message-green';
        this.borderClass = 'border-green';
      } else {
        this.message = 'Too much!';
        this.messageClass = 'message-green';
        this.borderClass = 'border-green';
      }
    }
  }
}