//! steps to create a custom style directive:
//? step-1 : create a class and export it

//? step-2 : add @Directive decorator and import it from the angular core.

//? step-3 : add selector property in the @Directive object, and give an unique name.

//? step-4 : in the contructor function add the element that is recieved as an argument of type ElementRef(should be imported from angular core).

//? step-5 : now in the ngOnInit define the styles you wanted

//?step-6 :  before using this directive in the html template we should tell angular abut he directive we had created here, to do so in the app.module.ts file, we point this file in the declarations array and import this file.

//?step-7 :  now we can mention the selector value in the template without any bracket enclosed.

import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appCustomDirective]",
})
export class CustomDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "maroon";
    this.elementRef.nativeElement.style.padding = "10px";
    this.elementRef.nativeElement.style.color = "white";
  }
}
