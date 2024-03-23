import { Component, ElementRef, inject, ViewChild } from '@angular/core';

import { ChatService } from '../chat-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {
  constructor( 
    private ChatService: ChatService) { 
    }

    message: string;
    messages: string[] = [];
    response: void;
    name : string = 'NoName';

    comments = this.ChatService.comments;

    @ViewChild('name') inputElement : ElementRef; 
    @ViewChild('nameBtn') inputBtnElement : ElementRef; 
    @ViewChild('nameTitle') inputH1Element : ElementRef; 
    @ViewChild('nameField') inputFieldElement : ElementRef; 


    addName(name: string) {
      console.log('new name: '+name );
      this.name = name;
      this.inputElement.nativeElement.remove();
      this.inputBtnElement.nativeElement.remove();
      this.inputH1Element.nativeElement.remove();
      this.inputFieldElement.nativeElement.remove();

    }

    sendMsg(msg: string) {
      console.log('send message');
      msg = this.name + " : "+msg;
      this.ChatService.sendMessage(msg);
      window.scrollTo(0, document.body.scrollHeight);
    }

    // Subscribe to chat messages
    ngOnInit() {
      this.ChatService
        .getMessages()
        .subscribe((message: string) => {
          this.messages.push(message);
        });
    }

}
