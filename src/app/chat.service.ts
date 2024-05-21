import { Injectable } from '@angular/core';
import SendBird from 'sendbird';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private sb: SendBird.SendBirdInstance;
  private APP_ID = 'BCA47801-C111-472D-8BB3-C553AC1706ED';

  constructor() { 
    this.sb = new SendBird({appId: this.APP_ID});
  }
};

