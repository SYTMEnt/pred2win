import { Component, Input } from "@angular/core";
import { LeaderboardValue } from "../../../../store/leaderboard/types";

@Component({
    selector: 'app-leaderboard-user',
    templateUrl: './leaderboard-user.component.html',
    styleUrls: ['leaderboard-user.component.scss']
})
export class LeaderboardUserComponent {
    @Input() value!: LeaderboardValue
}