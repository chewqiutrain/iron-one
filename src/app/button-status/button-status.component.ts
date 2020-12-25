import { Component, OnInit } from '@angular/core';
import { CrozzleClientService } from '../crozzle-client.service';

@Component({
  selector: 'app-button-status',
  templateUrl: './button-status.component.html',
  styleUrls: ['./button-status.component.css']
})
export class ButtonStatusComponent implements OnInit {
  
  response: string = "";

  Messages: string[] = [
    "yellow apple",
    "fat man",
    "orderly buttons"
  ];

  constructor(private crozzle: CrozzleClientService) { }

  ngOnInit(): void {
    console.log(`ButtonStatusComponent.ngOnInit()`);
    // this.response = "";
  }

  buttonPressed2(): string {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomMessage = this.Messages[randomIndex];
    console.log(`buttonPressed | randomIndex: ${randomIndex} | randomMessage: ${randomMessage}`);
    this.response = randomMessage;
    return randomMessage;
  }

  buttonPressed(): void { 
    this.crozzle.ping()
      .subscribe(res => {
        console.log(`buttonPressed | res: ${res}`);
        this.response = res;
      }
    )
  }



}
