import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], 
})
export class AppComponent {
  showForm = false; 
  data = { name: '', description: '' };

  openForm() {
    this.showForm = true; 
  }
}
