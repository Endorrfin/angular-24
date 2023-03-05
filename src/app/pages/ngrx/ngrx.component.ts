import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../@shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule],
})
export class NgrxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
