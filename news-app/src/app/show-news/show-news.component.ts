import { Component, OnInit } from '@angular/core';

import { ShowNewsService } from '../show-news.service';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {

  news={}
  constructor(service:ShowNewsService) {
    service.getData().subscribe(data=>{
  this.news=data;
  console.log("news data-->>>"+data)
    });
   }

  ngOnInit() {
  }

}
