import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { 
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { GridSelectionSampleComponent } from "./grid/grid-sample-selection/grid-selection.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridSelectionSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxBadgeModule,
		IgxButtonModule,
		IgxGridModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxProgressBarModule,
		IgxRippleModule,
		IgxSwitchModule,
		HttpClientModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
