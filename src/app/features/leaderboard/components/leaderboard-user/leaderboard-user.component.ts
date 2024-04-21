import { Component, Input } from "@angular/core";
import { LeaderboardComponent } from "../../leaderboard.component";

@Component({
    selector: 'app-leaderboard-user',
    templateUrl: './leaderboard-user.component.html',
    styleUrls: ['leaderboard-user.component.scss']
})
export class LeaderboardUserComponent {
    @Input() user!: any;
    activeLink: string | null = null;

    constructor(private leaderboardComponent: LeaderboardComponent) {}

    openDrawer(userId: string) {
        console.log('Opening drawer for user ID:', userId);
        this.leaderboardComponent.openDrawer(userId);
    }

    closeDrawer() {
        this.leaderboardComponent.closeDrawer();
    }
}
