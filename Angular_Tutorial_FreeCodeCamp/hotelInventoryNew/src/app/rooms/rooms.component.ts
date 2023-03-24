import { Component } from '@angular/core';
import { Room } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName = "Hilton Hotel"
  noOfHotels = 10;
  hideRooms : boolean = false;
  rooms:Room = {
    availableRooms:10
  }
  // totalRooms:20,
  // availableRooms:10,
  // bookedRooms:5
  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
