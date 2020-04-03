import { Component } from "@angular/core";
//import { HttpClient } from "@angular/common/http";
//import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage{
  title: string = "Home";

  constructor() {}

  fire() {
    this.title = "news101";
  }
}

/* export class NewsPage {
  constructor(private http: HttpClient) {}
  news1: string;
  
  fire() {
    console.log(
      this.postRequest().subscribe(news => {
        this.news1 = news.data[0];
        console.log(news);
      })
    );
  }
  

  postRequest() {
    let url: string = "https://schranz.io/api/list?entity=news";

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "APPCMS-TOKEN": "75dfd37f92d7c02700c33a91bc8aebc1ce76dc644615e5954862b9dd3f75752631ef9ec4be30443c8e6ec7ba378eed6f3d4ba5fe3c46d05d8c1f89b347425859"
      })
    };
    return this.http.post(url, {}, httpOptions)
  }
} */