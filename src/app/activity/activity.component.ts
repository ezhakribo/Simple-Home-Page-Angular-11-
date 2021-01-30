import { Component, OnInit } from "@angular/core";
import { TempService } from "../temp.service";

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
  faComment = faComment;
  faVideo = faVideo;
  faStickyNote = faStickyNote;
  faLockOpen = faLockOpen;
  faHeart = faHeart;

  activity = [];

  constructor(private dataService: TempService) {}

  ngOnInit() {
    this.dataService.getActivity().subscribe((data: any[]) => {
      this.activity = data;
      this.activity.map(obj => {
        obj.avatar = "https://i.pravatar.cc/200";
        obj.randIcon = Math.floor(Math.random() * (5 - 1)) + 1;
        return obj;
      });
    });
  }
}
