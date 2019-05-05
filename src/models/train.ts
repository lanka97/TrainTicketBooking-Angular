export interface Ticket {
    trainName?: string;
    class?: string;
    price?: any;
    passengerName?: string;
    passengerEmail?: string;
    passengerPhone?: string;
    count?: any;
    time?: string;
    date?: string;
}

export interface Train {
    trainName?: string;
    time?: Array<string>;
    departure?: string;
    destination?: string;
    pic?: string;
    stations?: string;
    price?: Array<number>;
}