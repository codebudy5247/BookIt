export interface Location {
  state: string;
  city: string;
  zip: string;
  street: string;
  country: string;
}

export interface HotelResponse {
  _id: string;
  name: string;
  location: Location;
  price: string;
  yearOpened: string;
  images: string[];
  description: string;
  rating: number;
  amenities: string[];
  policies: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type HotelMutateInput = {
  name: string;
  location: Location;
  price: string;
  yearOpened: string;
  images: string[];
  description: string;
  amenities: string[];
  policies: string[];
};

export type GenericResponse = {
  status: string;
  message: string;
};

export interface HotelRoomResponse {
  _id: string;
  roomType: string;
  maxPeople: number;
  price: number;
  description: string;
  roomNumbers: RoomNumber[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface RoomNumber {
  roomNumber: number;
  unavailableDates: any[];
  _id: string;
}
