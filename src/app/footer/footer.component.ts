import { Component, OnInit } from "@angular/core";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faFacebookF = faFacebookF;

  ngOnInit() {}
}
