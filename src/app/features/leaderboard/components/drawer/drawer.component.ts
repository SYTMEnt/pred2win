import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['drawer.component.scss']  
})
export class DrawerComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() drawerOpen: boolean = false; 
  @Input() userId: string | null = null;

  onClose(): void {
    this.close.emit();
  }
}
