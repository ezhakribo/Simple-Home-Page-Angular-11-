import { Component, OnInit } from "@angular/core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-document",
  templateUrl: "./document.component.html",
  styleUrls: ["./document.component.css"]
})
export class DocumentComponent implements OnInit {
  constructor() {}

  faPlusCircle = faPlusCircle;

  ngOnInit() {}
}
