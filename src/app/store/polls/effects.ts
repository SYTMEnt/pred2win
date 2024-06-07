import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators"
import * as pollActions from "./actions";
import { PollsService } from "../../features/polls/services/polls.service";
import { NotificationService } from "../../shared/services/notification.service";

@Injectable()
export class PollsEffects {

    constructor(private actions$: Actions, private pollsService: PollsService, private notificationService: NotificationService) {}

    polls$ = createEffect(() => this.actions$.pipe(
        ofType(pollActions.polls),
        switchMap((action) => {
            return this.pollsService.polls(action.matchId, action.userId, action.pollType).pipe(
                map((polls) => {
                    return pollActions.pollsSuccess({polls})
                }),
                catchError((httpError: HttpErrorResponse) => { 
                    this.notificationService.notify(httpError.error.message || httpError.message)
                    return of(pollActions.pollsError({httpError}))
                })
            )
        })
    ))

    tpolls$ = createEffect(() => this.actions$.pipe(
        ofType(pollActions.tpolls),
        switchMap((action) => {
            return this.pollsService.tpolls(action.tournamentId, action.userId, action.pollType).pipe(
                map((polls) => {
                    return pollActions.tpollsSuccess({polls})
                }),
                catchError((httpError: HttpErrorResponse) => { 
                    this.notificationService.notify(httpError.error.message || httpError.message)
                    return of(pollActions.tpollsError({httpError}))
                })
            )
        })
    ))

    pollsSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(pollActions.pollSubmit),
        switchMap((action) => {
            return this.pollsService.submitPoll(action.params).pipe(
                map(() => {
                    this.notificationService.notify('Poll submitted successfully.')
                    return pollActions.pollSubmitSuccess({pollId: action.params.pollId, userId: action.params.userId})
                }),
                catchError((httpError: HttpErrorResponse) => {
                    this.notificationService.notify(httpError.error.message || httpError.message)
                    return of(pollActions.pollSubmitError({pollId: action.params.pollId, httpError}))
                })
            )
        })
    ))

    pollById$ = createEffect(() => this.actions$.pipe(
        ofType(pollActions.pollSubmitSuccess),
        switchMap((action) => {
            return this.pollsService.poll(action.pollId, action.userId).pipe(
                map((poll) => {
                    return pollActions.pollSuccess({poll, pollId: action.pollId})
                }),
                catchError((httpError: HttpErrorResponse) => {
                    this.notificationService.notify(httpError.error.message || httpError.message)
                    return of(pollActions.pollError({pollId: action.pollId, httpError}))
                })
            )
        })
    ))

}