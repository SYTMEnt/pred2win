// polls-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollsComponent } from './polls.component';
import { PollMemberComponent } from './components/poll-member/poll-member.component';

const routes: Routes = [
  {
    path: '',
    component: PollsComponent,
  },
  {
    path: 'poll-members/:pollId', 
    component: PollMemberComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollsRouterModule {}
