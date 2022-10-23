import { Component, OnInit } from '@angular/core';
import { balade } from 'app/models/balade';
import { BaladeserviceService } from 'app/service/baladeservice/baladeservice.service';

@Component({
  selector: 'app-list-balade',
  templateUrl: './list-balade.component.html',
  styleUrls: ['./list-balade.component.css']
})
export class ListBaladeComponent implements OnInit {
 
listbalade:balade[]
key:string=""
//totalElements: number = 0;
pageSize=5
page=1
collectionSize:number
  constructor(private baladeservice:BaladeserviceService) { }
  
  ngOnInit(): void {
    this.getbalade({ page: 0, size: 5,search:this.key })

}

getbalade(request){
  this.baladeservice.get_all_balade(request).subscribe(
    data=>{this.listbalade=data['content']
    this.collectionSize=data['totalElements'];
  }
  )
}
nextPage(event:any){
  const request = {};
  request['page'] = event-1
  request['size'] = this.pageSize
  request['search']=this.key
  console.log(request)
  this.getbalade(request);
}
search(event){
  this.key=event
  const request = {};
  request['page'] = 0
  request['size'] = this.pageSize
  this.page=0
  request['search']=this.key
  console.log(request)
  this.getbalade(request);

}

}