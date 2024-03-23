import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { 
      var comments = new Array;

      this.socket.on('chat message', (msg:string) => {
        console.log('new msg: ' + msg);
        comments.push({comment: msg});
        console.log(comments);
      });
  }

  comments = [{'comment':'comment'}];

  sendMessage(msg: string) {
    this.socket.emit('chat message', msg);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('chat message', (message) => {
            observer.next(message);
        });
    });
}
}

