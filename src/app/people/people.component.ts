import { Component, OnInit } from "@angular/core";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"]
})
export class PeopleComponent implements OnInit {
  constructor() {}

  faDotCircle = faDotCircle;

  ngOnInit() {}
}
