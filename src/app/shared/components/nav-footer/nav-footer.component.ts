import { NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { NavigationEnd, Router } from "@angular/router";

export interface FooterNav {
    route: string,
    icon: string
}

@Component({
    selector: 'nav-footer',
    template: `
        <nav class="footer">
            <ul class="footer-nav">
                <li class="footer-nav-item" *ngFor="let nav of links" (click)="clicked.emit(nav.route)">
                    <a class="footer-nav-link" mat-icon-button [style.color]="active === nav.route ? 'white' : null">
                        <mat-icon class="footer-nav-link-icon">{{nav.icon}}</mat-icon>
                    </a>
                </li>
            </ul>
        </nav>
    `,
    styleUrls: ['nav-footer.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        MatIconModule
    ]
})
export class NavFooterComponent {

    @Input() show: boolean = false;
    @Input() links: FooterNav[] = []
    @Output() clicked = new EventEmitter<string>()

    active = ''

    constructor(private route: Router) {
        this.route.events.subscribe((event) => {
            if(event instanceof NavigationEnd) {
                this.active = event.url.substring(1);
            }
        })
    }

}