import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-home',
    templateUrl: 'components/home/home.component.html',
    styleUrls: ['components/home/home.component.css']
})
export class HomeComponent {
    name: string = "Home page";
    users: {};

    constructor(public http: Http) {
        // http.get("/server")
        //     .map(data => data.json())
        //     .subscribe((data) => this.users = data);
    }

    openDialog() {
      this.http.get("/users/add")
        .map(data => data.json())
        .subscribe((data) => this.users = data);
    }
}
