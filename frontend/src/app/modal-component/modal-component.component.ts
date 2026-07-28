import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  imports: [],
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.css',
})
export class ModalComponent {
  
  @Input() title: string = '';

  closeModal() {}
}
