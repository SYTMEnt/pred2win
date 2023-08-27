import { NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatTabNavPanel, MatTabsModule } from "@angular/material/tabs";

@Component({
    selector: 'nav-top',
    standalone: true,
    template: `
        <nav *ngIf="show" mat-tab-nav-bar backgroundColor="primary" [tabPanel]="tabPanel" color="accent" class="header">
            <a mat-tab-link *ngFor="let link of links"
            (click)="onClick(link)"
            [active]="activeLink == link"> {{link}} </a>
            <ng-content></ng-content>
        </nav>
    `,
    imports: [
        NgFor,
        NgIf,
        MatTabsModule
    ],
    styleUrls: ['nav-top.component.scss']
})
export class NavTopComponent implements OnInit {
    @Input() show = false;
    @Input() links: string[] = []
    @Input() tabPanel!: MatTabNavPanel;

    @Output() clicked = new EventEmitter<string>()

    activeLink = ''
    
    ngOnInit() {
        this.activeLink = this.links[0];
    }

    onClick(link: string) {
        this.activeLink = link;
        this.clicked.emit(link);
    }
}