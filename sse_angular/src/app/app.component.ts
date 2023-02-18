import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sse_angular';
  constructor(private _myService: MyServiceService){}
  data = []
  ngOnInit(){
    let url = "http://localhost:3000/my-endpoint";
    this._myService.getServerSentEvents(url).subscribe((data: any) => this.data= data.data)
  }
}
