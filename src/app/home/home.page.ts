import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { tokens } from "../../../private-tokens";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  title: string = "News";
  news: object;
  ankundigung: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.postRequest("https://schranz.io/api/list?entity=news").subscribe(
      (news: any) => {
        this.news = news.data;
      }
    );

    this.postRequest("https://schranz.io/api/list?entity=seiten").subscribe(
      (content: any) => {
        content.data.forEach(e => {
          if (
            e.id == "b1e337cc-7742-11ea-9494-4061862b9065" &&
            e.title == "Ankündigung"
          ) {
            console.log(e.content);
            this.ankundigung = e.content;
          }
        });
      }
    );
  }

  private newMethod() {
    return this;
  }

  reload(event) {
    this.ngOnInit();
    event.target.complete();
  }

  postRequest(url: string) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("APPCMS-TOKEN", tokens.APPCMSTOKEN);
    return this.http.post(url, {}, { headers, responseType: "json" });
  }
}
