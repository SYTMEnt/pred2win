import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Voting, Option} from "ng-voting"
import { Poll, PollOption } from "../../../../store/polls/types";

@Component({
    selector: 'poll-view',
    templateUrl: 'poll-view.component.html',
    styleUrls: ['poll-view.component.scss']
})
export class PollViewComponent {
    __poll?: Poll;
    __isLoading = false;
    selectedOption: string = ""

    // TODO - Create type for data
    @Output() submitted = new EventEmitter<{poll: Poll, selectedOption: string, type: 'submit' | 'retract'}>()
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
            this.selectedOption = data.submitted.selectedOption;
        }
    }
    @Input() 
    set loading(isLoading: boolean) {
        this.__isLoading = isLoading
        console.log(this.__isLoading);
    }
    
    ngVotingData?: Voting;

    optionSelected(optionId: string) {
        if(this.__poll && !["calculated", "closed", "ongoing"].includes(this.__poll.status)) {
            this.selectedOption = optionId;
        }
    }

    submit() {
        if(this.__poll && this.selectedOption) {
            this.submitted.emit({
                poll: this.__poll, 
                selectedOption: this.selectedOption, 
                type: this.isRetractMode() ? 'retract' : 'submit'
            })
        }
    }

    isVotingDisabled() {
        return !!(this.__poll?.status !== 'active'
            || (this.__poll?.submitted.status && !this.__poll?.pollFeatures.retractable ))
            || (this.__poll?.submitted.status && this.__poll?.pollFeatures.retractable && this.__poll.submitted.isRetract)
    
    }

    showScale() {
        return !!(this.__poll && 
            (!['active', 'created'].includes(this.__poll.status) 
            || this.__poll.submitted.status 
            || this.__poll.pollFeatures.showTrend)
        );
    } 

    isRetractMode() {
        return this.__poll?.pollFeatures.retractable && this.__poll.submitted.status 
    }
    
}