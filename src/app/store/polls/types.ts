export interface Poll {
    pollId: string;
    pollType: string;
    pollInputCoin: number;
    pollOutputCoin: number;
    pollStartTime: Date
    pollEndTime: Date
    pollFeatures: {
        mode: string;
        showTrend: boolean;
        retractable: boolean;
        anonymous: boolean;
    },
    pollQuestion: PollQuestion,
    pollOptions: PollOption[];
    matchId: string;
    status: string;
    winningOption: {
        key: string;
        value: string;
    }
}

export interface PollOption {
    key: string;
    valueString: string;
    valueImage: string;
    _id: string;
}

export interface PollQuestion {
    question: string;
    note: string;
    appendName: boolean;
    overwriteOptions: boolean;
    suppressNote: boolean;
}

export type PollList = Array<Poll>