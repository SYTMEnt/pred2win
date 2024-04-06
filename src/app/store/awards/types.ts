export interface WinnerList {
    userId: string;
    displayName: string;
    pic: string;
    coinsEarned: number;
    coinPic: string;
    final: string;
    _id: string;
}

export interface Awards {
    id: string;
    category: string;
    description: string;
    condition: string;
    coinsAllocated: number;
    icon: string;
    enabled: string;
    startDate: string;
    changedFromLast: string;
    _id: string;
    winners: WinnerList[]
}