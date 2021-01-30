import { Component, OnInit } from "@angular/core";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"]
})
export class VideoComponent implements OnInit {
  constructor() {}
  faPlayCircle = faPlayCircle;

  ngOnInit() {}
}
