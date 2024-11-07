import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;  // Controla la visibilitat del formulari
  nameInput = '';
  descriptionInput = '';
  data = {
    name: '',
    description: ''
  };

  // Funció per mostrar o amagar el formulari
  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Funció per enviar el formulari
  submitForm() {
    this.data.name = this.nameInput;
    this.data.description = this.descriptionInput;
    this.showForm = false;  // Tanca el formulari després d'enviar-lo
  }
}
