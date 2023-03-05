import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../@shared/shared.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tab-beginner',
  templateUrl: './tab-beginner.component.html',
  styleUrls: ['./tab-beginner.component.scss'],
  standalone: true,
  imports: [SharedModule, NavbarComponent, RouterOutlet],
})
export class TabBeginnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
