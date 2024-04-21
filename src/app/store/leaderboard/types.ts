export interface LeaderboardUser {
    rankChange: {
        value: number;
        indicator: string;
        date: string;
    };
    coinsEarned: {
        matchPolls: number;
        bonusPolls: number;
        total: number;
    };
    userId: string;
    displayName: string;
    rank: number;
    globalRank: number;
    totalPredictions: number;
    correctPredictions: number;
    predictionAccuracy: number;
    bonusPredictions: number;
    correctBonusPredictions: number;
    bonusAccuracy: number;
    _id: string;
    pic: string;
}

export type Leaderboard = Array<LeaderboardUser>
