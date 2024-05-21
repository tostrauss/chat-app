import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomComponent } from './chat-room.component';

describe('ChatRoomComponent', () => {
  let component: ChatRoomComponent;
  let fixture: ComponentFixture<ChatRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new message when sendMessage is called', () => {
    const initialMessageCount = component.messages.length;
    component.sendMessage('Test message');
    expect(component.messages.length).toBe(initialMessageCount + 1);
  });
});

