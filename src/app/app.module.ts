import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BasicHiglightDirective } from "./basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from "./basic-highlight/better-highlight.directive";
import { CustomDirective } from "./basic-highlight/custom-directive.directive";
import { UnlessDirective } from "./unless.directive";

@NgModule({
  declarations: [
    AppComponent,
    BasicHiglightDirective,
    BetterHighlightDirective,
    CustomDirective,
    UnlessDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
