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

export interface JoinTournament {
    tournamentId: string
}

export type TournamentList = Array<Tournament>