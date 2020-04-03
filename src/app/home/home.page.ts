import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { stringify } from "querystring";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  title: string = "Home";

  constructor(private http: HttpClient) {}

  fire() {
    console.log(
      this.postRequest().subscribe((news: any) => {
        console.log(news);

        this.title = news.data[0].title;
      })
    );
  }
  postRequest() {
    let url: string = "https://schranz.io/api/list?entity=news";
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set(
        "APPCMS-TOKEN",
        ""
      );
    return this.http.post(url, {}, {headers, responseType: 'json'});
  }
}
