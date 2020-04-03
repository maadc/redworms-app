import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { stringify } from "querystring";
import { CompileTemplateMetadata } from '@angular/compiler';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  title: string = "Home";
  news: object;

  constructor(private http: HttpClient) {}

  fire(event) {
      this.postRequest().subscribe((news: any) => {
        console.log(news);
        this.title = news.data[0].title;
        this.news= news.data;
        event.target.complete()
      })
      
  }
  postRequest() {
    let url: string = "https://schranz.io/api/list?entity=news";
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set(
        "APPCMS-TOKEN",
        "75dfd37f92d7c02700c33a91bc8aebc1ce76dc644615e5954862b9dd3f75752631ef9ec4be30443c8e6ec7ba378eed6f3d4ba5fe3c46d05d8c1f89b347425859"
      );
    return this.http.post(url, {}, {headers, responseType: 'json'});
  }
}
