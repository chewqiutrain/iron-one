import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-status',
  templateUrl: './button-status.component.html',
  styleUrls: ['./button-status.component.css']
})
export class ButtonStatusComponent implements OnInit {
  
  response: String = "";

  Messages: String[] = [
    "yellow apple",
    "fat man",
    "orderly buttons"
  ];

  


  constructor() { }

  ngOnInit(): void {
  }

  buttonPressed(): String {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomMessage = this.Messages[randomIndex];
    console.log(`buttonPressed | randomIndex: ${randomIndex} | randomMessage: ${randomMessage}`);
    this.response = randomMessage;
    return randomMessage;
  }



}
