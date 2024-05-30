import { Time } from "@angular/common";

interface EventTransaction {
    transactionId: string;
    transactionTime: string;
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
