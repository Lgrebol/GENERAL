import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;  // Controls form visibility
  nameInput = '';
  descriptionInput = '';
  data = {
    name: '',
    description: ''
  };

  // Function to toggle form visibility
  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Function to submit the form
  submitForm() {
    this.data.name = this.nameInput;
    this.data.description = this.descriptionInput;
    this.showForm = false;  // Close form after submission
  }
}
