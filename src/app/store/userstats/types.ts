export interface Userstats {
    favoriteTeam: string;
    rank: {
        best: number;
        current: number;
        previous: number;
    };
    predictions: {
        total: number;
        correct: number;
        bonusTotal: number;
        bonusCorrect: number;
        predictionAccuracy: number;
        bonusPredAccuracy: number;
    };
    coinsEarned: any; 
    currentStreak: string;
    highestStreak: string;
    running: boolean;
    regularStreak: number;
    bonusStreak: number;
    streaksWon: {
        id: string;
        category: string;
        count: string;
        matchNo: string;
        date: string;
    }[];
    streakSaverOn: boolean;
    locked: boolean;
}
