import { ObjectId } from "mongoose";

export interface BookingDataInerface {
    airline?: string,
    arrival_date?: string,
    arrival_time?: string,
    departure_airport: string,
    departure_city: string,
    departure_date: string,
    departure_time: string,
    destination_airport: string,
    destination_city: string,
    flight_number: string,
    user: ObjectId,
    email: string,
    phone: string,
    fname: string,
    class: string
}