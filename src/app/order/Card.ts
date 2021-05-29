import { Order } from "./Order";

export class Card{
  cardNo: number |undefined;
  cardLimit: number |undefined;
  custName: string |undefined;
  endDate: Date |undefined;
  startDate: Date |undefined;
  ordSet:Order[] | undefined;
}   