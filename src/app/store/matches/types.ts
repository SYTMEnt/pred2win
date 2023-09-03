export interface Match {
    _id: string,
    tournamentId: string,
    scheduleId: string,
    matchId: string,
    matchStatus: string,
    tournamentStage: {
        key: string,
        value: string
    },
    matchNo: number,
    group: string,
    matchStartTime: Date,
    volatility: string,
    teamA: Team,
    teamB: Team,
    stadium: string,
    displayMatchNo: boolean,
    appendNumber: string,
    polls?: any[],
    createdAt: Date,
    updatedAt: Date,
    __v: string
}

export interface Team {
    _id: string,
    teamId: string,
    teamName: string,
    teamCode: string,
    teamFlag: string,
    teamColorHome: string,
    teamColorAway: string,
    teamIcon: string,
    affiliatedTo: string[]
    eventType: string,
    teamType: string,
    teamCategory: string,
    createdAt: Date,
    updatedAt: Date,
    __v: string,
}

export type Matches = Array<Match>