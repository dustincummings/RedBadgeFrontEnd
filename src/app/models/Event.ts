export interface Event {
    eventEntityID?: number;
    ownerID?: number;
    location: string;
    numberOfPeople: number;
    foodID:number;
    additionalNotes:string;
    dateOfEvent?: Date;
    custID?: number;
  
}