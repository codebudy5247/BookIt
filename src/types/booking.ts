export interface Ibooking {
  hotel:{
    name:string;
    location:string
  }
  checkIn: Date;
  checkOut: Date;
  stayLength: number;
  noOfGuest: string;
  totalPrice: number;
}
