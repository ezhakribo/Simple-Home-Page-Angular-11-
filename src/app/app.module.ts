import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare
} from "@fortawesome/free-regular-svg-icons";
import {
  faStackOverflow,
  faGithub,
  faMedium
} from "@fortawesome/free-brands-svg-icons";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { VideoComponent } from "./video/video.component";
import { ActivityComponent } from "./activity/activity.component";
import { PeopleComponent } from "./people/people.component";
import { ChannelComponent } from "./channel/channel.component";
import { DocumentComponent } from "./document/document.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    HeaderComponent,
    VideoComponent,
    ActivityComponent,
    PeopleComponent,
    ChannelComponent,
    DocumentComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium
    );
  }
}
