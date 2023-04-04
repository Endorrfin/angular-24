import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'kvn-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  subject = new Subject();
  asyncSubject = new AsyncSubject();
  behaviorSubject = new BehaviorSubject('a');
  replaySubject = new ReplaySubject(2);

  subjects = [this.subject, this.asyncSubject, this.behaviorSubject, this.replaySubject];

  ngOnInit() {
    // this.log();
  }

  // log = (subjectType: any) => (e: any) => console.log(`${subjectType}: ${e}`);

  log(subjectType: string, e: any) {
    console.log(`${subjectType}: ${e}`);

    console.log('SUBSCRIBE 1');
    // this.subject.subscribe('s1', 'subject');
    // this.asyncSubject.subscribe(this.log('s1 asyncSubject'));
    // this.behaviorSubject.subscribe(this.log('s1 behaviorSubject'));
    // this.replaySubject.subscribe(this.log('s1 replaySubject'));

  }




}
