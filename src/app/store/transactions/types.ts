import { Time } from "@angular/common";

interface EventTransaction {
    transactionId: string;
    transactionDate :Date;
    transactionTime: Time;
    eventDescription: string;
    pollDescription: string;
    debitAmount: number;
    creditAmount: number;
}

export interface Transactions {
    accountBalance: number;
    creationDate: string;
    overDraftAllowed: boolean;
    transactions: EventTransaction[];
}
