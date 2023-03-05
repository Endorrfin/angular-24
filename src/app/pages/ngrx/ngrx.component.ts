import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../@shared/shared.module';
import { RouterModule } from '@angular/router';
import { TabBeginnerComponent } from './components/tab-beginner/tab-beginner.component';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule, TabBeginnerComponent],
})
export class NgrxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
