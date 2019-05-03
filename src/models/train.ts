export interface Ticket {
    trainName?: string;
    class?: string;
    price?: string;
    mainPassenger?: string[];
    count?: string;
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