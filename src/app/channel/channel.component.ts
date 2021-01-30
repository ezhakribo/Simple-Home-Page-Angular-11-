import { Component, OnInit } from "@angular/core";
import { TempService } from "../temp.service";

@Component({
  selector: "app-channel",
  templateUrl: "./channel.component.html",
  styleUrls: ["./channel.component.css"]
})
export class ChannelComponent implements OnInit {
  channel = [];

  constructor(private dataService: TempService) {}

  ngOnInit() {
    this.dataService.getChannel().subscribe((data: any[]) => {
      this.channel = data;
      this.channel.map(obj => {
        obj.avatar = "https://i.pravatar.cc/200";
        return obj;
      });
    });
  }
}
