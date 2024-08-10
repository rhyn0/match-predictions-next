export interface MatchPrediction {
    id: number;
    match: number;
    scoreA: number;
    scoreB: number;
}

export interface UserGroup {
    id: string;
    /// name
    owner: string;
    members: string[];
    name: string;
}
