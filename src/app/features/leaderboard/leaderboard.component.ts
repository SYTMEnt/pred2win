import { Component} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { take, map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { LeaderboardStoreService } from '../../store/leaderboard/leaderboard-store.service';

@Component({
    selector: 'app-leaderboard',
    templateUrl: 'leaderboard.component.html',
    styleUrls: ['leaderboard.component.scss']
})
export class LeaderboardComponent {

    tournamentId = '';
    drawerOpen = false;

    constructor(private route: ActivatedRoute, private router:Router, private leaderboardStoreService : LeaderboardStoreService , private location: Location) {
        this.route.paramMap.pipe(
            take(1),
        ).subscribe(param => {
                this.tournamentId = param.get("tournamentId") as string;
                this.leaderboardStoreService.leaderboard(this.tournamentId);
        })
    }

    leaderboard$ = this.leaderboardStoreService.leaderboard$;
    leaderboardProcessing$ = this.leaderboardStoreService.leaderboardActions$.pipe(
     map((data) => data.processing)
   );

   openDrawer(userId: string) {
        console.log('Opening drawer for user ID:', userId);
       this.drawerOpen = true;
       this.router.navigate(['/userstats', userId]);
       document.querySelector('.drawer')?.classList.add('open');
   }

   closeDrawer() {
       this.drawerOpen = false;
       document.querySelector('.drawer')?.classList.remove('open');
   }

    ngOnDestroy(): void {
        this.leaderboardStoreService.reset();
    }

    onClose() {
        this.location.back()
    }
}
