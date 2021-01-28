import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { VideoComponent } from "./video/video.component";
import { ActivityComponent } from "./activity/activity.component";
import { PeopleComponent } from "./people/people.component";
import { ChannelComponent } from "./channel/channel.component";
import { DocumentComponent } from "./document/document.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    HeaderComponent,
    VideoComponent,
    ActivityComponent,
    PeopleComponent,
    ChannelComponent,
    DocumentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
