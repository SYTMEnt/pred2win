import { Directive, ElementRef, OnDestroy, OnInit } from "@angular/core";

@Directive({
    selector: "[intersectionObserver]",
    exportAs: "intersection"
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {

    isIntersecting: boolean;

    private elementRef: ElementRef;
    private observer: IntersectionObserver | null;

    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
        this.observer = null;

        this.isIntersecting = false;
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
        this.observer = null;
    }

    ngOnInit(): void {
        this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            this.isIntersecting = entries[0].isIntersecting;
        })
        this.observer.observe(this.elementRef.nativeElement)
    }
}