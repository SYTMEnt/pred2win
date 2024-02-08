import { Component, Input } from "@angular/core";
import { Voting, Option} from "ng-voting"
import { Poll, PollOption } from "../../../../store/polls/types";

@Component({
    selector: 'poll-view',
    templateUrl: 'poll-view.component.html',
    styleUrls: ['poll-view.component.scss']
})
export class PollViewComponent {
    __poll?: Poll;
    @Input() 
    set poll(data: Poll) {
        this.__poll = data;
        if(data) {
            this.ngVotingData = {
                question: data.pollQuestion.question,
                options: data.pollOptions.map((option: PollOption) => ({
                    value: option.key,
                    label: option.valueString,
                    imageUrl: option.valueImage,
                    votesCount: option.predictedCount || 0,
                    selected: data.submitted.status ? data.submitted.selectedOption === option.key : false,
                    bgColor: data.winningOption.key === option.key ? '#1699168f' : undefined,
                } as Option))
            }
            console.log(this.ngVotingData)
        }
        
    }
    ngVotingData?: Voting;

    optionSelected(optionId: string) {
        if(!this.ngVotingData) return;
        const updatedOptions = this.ngVotingData.options.map((option => {
            option.value === optionId && option.votesCount++
            return option
        }))
        this.ngVotingData = {...this.ngVotingData, options: updatedOptions}
        console.log(this.ngVotingData)
    }

    isVotingDisabled() {
        return !!(this.__poll && (this.__poll.status === "calculated" || this.__poll.submitted.status));
    }

    showScale() {
        return !!(this.__poll && (this.__poll.status === "calculated" || this.__poll.submitted.status));
    } 
    
}