import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable} from 'rxjs/Observable';
@Injectable()
export class HeaderService {
  public count: Array<number>;
  public time: number = new Date().getTime();
  public currentTime: number = new Date().getTime();
  private sendMessage = new BehaviorSubject<string>(null);
  public obs1 = this.sendMessage.asObservable();
  constructor(private http: HttpClient) {
    this.count = [0, 1];
    //this.sendMessage = new BehaviorSubject<any>(null);
    //this.obs1 ;
  }
  getCount() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      tap( // Log the result or error
        data => console.log(data)
      )
    );
  }
  makeCall() {
    this.time = new Date().getTime();
    const req = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts', {
      reportProgress: true
    });
    this.http.request(req).subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          this.currentTime = new Date().getTime();
          console.log('Request sent!', (this.currentTime - this.time) / 1000 + 's');
          break;
        case HttpEventType.ResponseHeader:
          this.currentTime = new Date().getTime();
          console.log('Response header received!', (this.currentTime - this.time) / 1000 + 's');
          break;
        case HttpEventType.DownloadProgress:
          this.currentTime = new Date().getTime();
          const kbLoaded = Math.round(event.loaded / 1024);
          console.log(`Download in progress! ${ kbLoaded }Kb loaded`, (this.currentTime - this.time) / 1000 + 's');
          break;
        case HttpEventType.Response:
          this.currentTime = new Date().getTime();
          console.log('Done!', event, (this.currentTime - this.time) / 1000 + 's');
      }
    });
  }
  msgFn(message: string) {
    console.log('calling next', message);
    this.sendMessage.next(message);
  }
}
