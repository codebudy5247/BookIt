export interface Ibooking {
  hotel: {
    id:string;
    name: string;
    location: string;
  };
  checkIn: Date;
  checkOut: Date;
  stayLength: number;
  noOfGuest: number;
  totalPrice: number;
  payment: {
    paymentIntentId: string;
    clientSecret: string;
  };
  // selectedRooms:Room[];
}

export interface Room {
  roomType: string;
  maxPeople: number;
  price: number;
  description: string;
}

export interface CreateBookingInput {
  checkIn: Date;
  checkOut: Date;
  totalAmount: number;
  hotel: string;
  selectedRoomType: string;
  payment: {
    paymentIntentId: string;
    clientSecret: string;
    paymentStatus: boolean;
  };
}

export interface BookingResponse {
  _id: string;
  checkIn: Date;
  checkOut: Date;
  totalAmount: number;
  hotel: string;
  user: string;
  selectedRoomType: string;
  payment: {
    paymentIntentId: string;
    clientSecret: string;
    paymentStatus: boolean;
    _id: string;
  };
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface PaymentIntentInput {
  id: string;
  totalAmount: number;
}

export interface PaymentIntentResponse {
  hotelId: string;
  paymentIntentId: string;
  clientSecret: string;
  totalAmount: string;
}
