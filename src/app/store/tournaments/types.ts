export interface Tournament {
    _id: string,
    eventType: string
    tournamentId: string,
    tournamentStatus: string,
    tournamentOrg: string, 
    tournamentName: string,
    tournamentYear: string,
    tournamentLogo: string,
    tournamentCategory: string,
    tournamentStartTime: string,
    tournamentMembers: number,
    tournamentEntryStatus: boolean,
    tournamentLocation: string[]
}

export interface JoinTournament {
    tournamentId: string
}

export type TournamentList = Array<Tournament>