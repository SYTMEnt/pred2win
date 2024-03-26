import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-leaderboard-user',
    templateUrl: './leaderboard-user.component.html',
    styleUrls: ['leaderboard-user.component.scss']
})
export class LeaderboardUserComponent {
    @Input() user!: any;
}