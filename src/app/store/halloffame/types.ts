export interface ArchivedTour {
    _id: {
      $oid: string;
    };
    league: string;
    room: Room;
    tournament: TournamentDetails;
    tournamentStat: TournamentStat;
    leaderboard: any[]; 
    awards: Award[];
  }
  
  export interface Room {
    id: string;
    name: string;
  }
  
  export interface TournamentStat{
    predictionAccuracy: Number,
    leastProbablePrediction: Number,
    leastppmatch: Number,
    secondleastpp: Number,
    secondleastppmatch:Number
  }

  export interface TournamentDetails {
    tournamentId: string;
    eventType: string;
    tournamentCategory: string;
    tournamentOrg: string;
    tournamentName: string;
    tournamentYear: string;
    tournamentLocation: string[];
    tournamentLogo: string;
    tournamentWinner: string;
    tournamentWinnerFlag: string;
    tournamentMembers: number;
    tournamentStatus: string;
  }
  
  export interface Award {
    id: string;
    category: string;
    description: string;
    icon: string;
    winner: Winner[];
  }
  
  export interface Winner {
    userId: string;
    displayName: string;
    pic: string;
    name: string;
  }
  
  export type HallOfFame = ArchivedTour[];