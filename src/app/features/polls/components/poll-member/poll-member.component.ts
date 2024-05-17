import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollOption } from '../../../../store/polls/types';
import { PollsService } from '../../services/polls.service';
import { AuthStoreService } from "../../../../store/auth/auth-store.service";
import { Location } from '@angular/common';

@Component({
  selector: 'poll-members',
  templateUrl: './poll-member.component.html',
  styleUrls: ['./poll-member.component.scss']
})
export class PollMemberComponent implements OnInit {
  pollId: string | undefined;
  userId: string | undefined;
  pollOptions: PollOption[] = [];
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private pollService: PollsService, private location: Location, private authStoreService: AuthStoreService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pollId = params['pollId'];
      this.authStoreService.userProfile$.subscribe(user => {
        this.userId = user?.memberId as string;
        if (this.pollId && this.userId) {
            this.fetchPollOptions(this.pollId, this.userId);
        }
      });
    });
  }

  fetchPollOptions(pollId: string, userId: string): void {
    this.pollService.getPollOptions(pollId, userId).subscribe({
      next: (response: any) => {
        if (response && response.pollOptions) {
          this.pollOptions = response.pollOptions;
          this.loading = false;
        } else {
          console.error('Invalid response format:', response);
          this.loading = false;
        }
      },
      error: (error: any) => {
        console.error('Error fetching poll options:', error);
      }
    });
  }
  
  
  
  

  onClose() {
    this.location.back();
  }
}
