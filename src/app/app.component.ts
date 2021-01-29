import { Component, VERSION } from "@angular/core";
import {
  faCoffee,
  faThumbsUp,
  faThumbsDown
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
}
