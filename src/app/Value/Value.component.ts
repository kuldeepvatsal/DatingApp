import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Value',
  templateUrl: './Value.component.html',
  styleUrls: ['./Value.component.scss']
})
export class ValueComponent implements OnInit {

values: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
     this.getvalues();
      }

    getvalues()
    {
    this.http.get('http://localhost:5000/api/values/').subscribe(
      response =>{this.values = response;},error => {console.log(error)});
    
    }
  }
