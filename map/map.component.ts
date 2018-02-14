import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  latitude = 51.678418;
  longitude = 7.809007;

  /* for markers */
  myOptions1 = [{
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


  /* for polylines */
    myOptions = [
    {
    	path: [
    		{
			  	"id":1,
			  	"latitude": 51.971345808851716,
			  	"longitude": 6.712646484375
		  	},{
			  	"id":2,
			  	"latitude": 52.18403686498285,
			  	"longitude": 6.888427734375
		  	}
		],
		color: "red"
	},{
		path: [
			{
			  	"id":2,
			  	"latitude": 52.18403686498285,
			  	"longitude": 6.888427734375
		  	},
			{
			  	"id":3,
			  	"latitude": 52.093007639638245,
			  	"longitude": 9.2999267578125
			},{
			  	"id":4,
			  	"latitude": 51.38206678113058,
			  	"longitude": 10.3875732421875
			}
		],
		color: "blue"
	}];
  /* for polylines */
  
  hello(event){
  	console.log(event);
  }


}
