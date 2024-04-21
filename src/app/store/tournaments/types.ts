export interface Tournament {
    tournamentId: string,
    tournamentStatus: string,
    tournamentOrg: string, 
    tournamentName: string,
    tournamentYear: string,
    tournamentLogo: string,
    tournamentCategory: string,
    tournamentMembers: number,
    tournamentLocation: string[],
    joined: boolean,
    numberOfTeams: number,
    tournamentShortName: string
}

export interface TournamentDetails {
    tournamentId: string;
    tournamentStatus: string;
    tournamentOrg: string; 
    tournamentName: string;
    tournamentYear: string;
    tournamentLogo: string;
    tournamentCategory: string;
    tournamentMembers: number;
    tournamentLocation: string[];
    joined: boolean;
    numberOfTeams: number;
    tournamentShortName: string;
    tournamentStartTime: string;
    tournamentColor: string;
    tournamentTrivia: { key: string; value: string }[];
    tournamentHistory: {
      year: string;
      winnerName: string;
      winnerCode: string;
      winnerFlag: string;
      runnerupName: string;
      runnerupCode: string;
      runnerupFlag: string;
      manOftheTournament: string;
      highestGoalScorer: string;
    }[];
    totalMatches: number;
  }
  

export interface JoinTournament {
    tournamentId: string
}

export type TournamentList = Array<Tournament>