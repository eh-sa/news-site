import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private api:NewsapiService) { }
//techNewsData
  techNewsData: any = [];
  
  ngOnInit(): void {
    this.api.tcTechNews().subscribe((result) => {
      console.log(result.articles);
      this.techNewsData = result.articles;
    })
  }

}
