export interface Ibooking {
  hotel:{
    name:string;
    location:string
  }
  checkIn: Date;
  checkOut: Date;
  stayLength: number;
  noOfGuest: number;
  totalPrice: number;
}

export interface BookingResponse {
  _id: string;
  checkIn: Date;
  checkOut: Date;
  totalAmount: number;
  hotel: string;
  user: string;
  selectedRoomType: string;
  paymentStatus: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export interface PaymentIntentInput {
  amount:number
}

export interface PaymentIntentResponse {
  hotelId:string;
  paymentIntentId:string;
  clientSecret:string;
  totalAmount:string
} 