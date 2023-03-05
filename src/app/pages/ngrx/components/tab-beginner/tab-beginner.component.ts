import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../@shared/shared.module';

@Component({
  selector: 'app-tab-beginner',
  templateUrl: './tab-beginner.component.html',
  styleUrls: ['./tab-beginner.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class TabBeginnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
