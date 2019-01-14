export interface Event {
    eventEntityId?: number;
    ownerID?: number;
    location: string;
    numberOfPeople: number;
    foodID:number;
    additionalNotes:string;
    dateofEvent?: Date ;
    custID?: number;
  
}