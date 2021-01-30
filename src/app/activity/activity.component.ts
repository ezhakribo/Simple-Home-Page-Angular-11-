import { Component, OnInit } from "@angular/core";
import {
  faComment,
  faVideo,
  faStickyNote,
  faLockOpen,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.css"]
})
export class ActivityComponent implements OnInit {
  constructor() {}

  faComment = faComment;
  faVideo = faVideo;
  faStickyNote = faStickyNote;
  faLockOpen = faLockOpen;
  faHeart = faHeart;

  ngOnInit() {}
}
