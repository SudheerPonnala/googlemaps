import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  latitude = 51.678418;
  longitude = 7.809007;
  finalOptions;
  myOptions = [];
constructor(){
  /* for markers */
  this.myOptions = [{
  	"id":1,
  	"latitude": 51.971345808851716,
  	"longitude": 6.712646484375
  },{
  	"id":2,
  	"latitude": 52.18403686498285,
  	"longitude": 6.888427734375
  },{
  	"id":3,
  	"latitude": 52.093007639638245,
  	"longitude": 9.2999267578125
  },{
  	"id":4,
  	"latitude": 51.38206678113058,
  	"longitude": 10.3875732421875
  }];
  /* for markers */
}

ngOnInit(){
  /* for polylines */
  this.finalOptions = [
  	{
  		path: [],
  		color: "red"
  	}
  ];
  for(var i=0;i<this.myOptions.length;i++){
  	this.finalOptions[0].path.push(this.myOptions[i]);
  }
  console.log(this.finalOptions);
  
  /* for polylines */
}  
  hello(event){
  	console.log(event);
  }


}
