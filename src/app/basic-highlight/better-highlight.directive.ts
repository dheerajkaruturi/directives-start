import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = " ";

  @Input() highlightColor: string = " ";

  @Input() defaultPadding: string = "0px";

  @Input() createPadding: string = "10px";

  @HostBinding("style.backgroundColor") backgroundColor: string;
  @HostBinding("style.padding") padding: string;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    this.padding = this.defaultPadding;
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.padding = this.createPadding;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.padding = this.defaultPadding;
  }
}
