export interface LeaderboardValue {
    rankChange: {
        value: number,
        indicator: string
        date: Date
    },
    coinsEarned: {
        matchPolls: number
        bonusPolls: number
        total: number
    },
    userId: string
    displayName: string
    pic:string
    rank: number
    globalRank: number
    totalPredictions: number
    correctPredictions: number
    predictionAccuracy: number
    bonusPredictions: number
    correctBonusPredictions: number
    bonusAccuracy: number
    _id: string
}

export interface Leaderboard {
    _id: string;
    tournamentId: string;
    league: string;
    roomId: string;
    leaderboard: LeaderboardValue[]
}