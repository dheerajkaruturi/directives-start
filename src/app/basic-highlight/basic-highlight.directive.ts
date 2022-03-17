import { Directive, ElementRef, OnInit } from "@angular/core";

//* the selector used in the directive decorator must be a unique name
@Directive({
  selector: "[appbasicHighlight]",
})
export class BasicHiglightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
    this.elementRef.nativeElement.style.color = "white";
  }
}
