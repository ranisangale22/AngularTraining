import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
Username:string="Rani";
ShowData:boolean=true;
arr:number[]=[];
num:number=0;

reset()
  {
  
    this.Username = "";
  }
  toggle()
  {
    this.ShowData=!this.ShowData;
    this.num+=1;
    this.arr.push(this.num);
  }
  getcolor(i:number)
  {
    if(i>=4)
    {
      return "blue";
    }
    else
    {
      return "white";
    }
  }
}
