interface Team {
    teamName: string;
    teamCode: string;
    teamFlag: string;
}

interface PollOption {
    option: string;
    valueString: string;
    time: string;
    ptype: string;
    _id: string;
}

export interface Predictions {
    userId: string;
    matchId: string;
    pollType: string;
    pollQuestion: string;
    pollOption: PollOption[];
    finalPollOption: PollOption;
    matchNo: number;
    matchStartTime: string;
    teamA: Team;
    teamB: Team;
    tournamentId: string;
    tournamentLogo: string;
    won:boolean;
}


