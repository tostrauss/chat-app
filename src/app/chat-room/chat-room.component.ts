import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface Message {
  message: string;
  userInfo: {
    userId: number;
    username: string;
  };
  time: string;
}

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  messages: Message[] = [];
  user = { userId: 1, username: 'Current User' };
  userId!: number;

  constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.messages = [
      {
        message: 'Hello there!',
        userInfo: { userId: 1, username: 'Andrew Parker' },
        time: '12:00'
      },
      {
        message: 'Hi! How are you?',
        userInfo: { userId: 2, username: 'Karen Castillo' },
        time: '12:01'
      }
    ];
  }

  sendMessage(message: string): void {
    if (message.trim()) {
      const nd = new Date();
      const newMessage: Message = {
        message,
        userInfo: this.user,
        time: nd.getHours() + ':' + nd.getMinutes()
      };
      this.messages.push(newMessage);
    }
  }

  onSubmit(event: Event, input: HTMLTextAreaElement): void {
    event.preventDefault();
    this.sendMessage(input.value);
    input.value = '';
    // Eventually this will be replaced with an API call
    // APICALL({message: "this is a message"});
  }
}
