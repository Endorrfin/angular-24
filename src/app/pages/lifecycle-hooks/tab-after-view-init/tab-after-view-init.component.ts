import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../@shared/shared.module';


@Component({
  selector: 'app-tab-after-view-init',
  templateUrl: './tab-after-view-init.component.html',
  styleUrls: ['./tab-after-view-init.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class TabAfterViewInitComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
