import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bouncing-ball',
  templateUrl: './bouncing-ball.component.html',
  styleUrls: ['./bouncing-ball.component.scss'],
  standalone: true
})
export class BouncingBallComponent {

  @Input() text: string = ""

}
