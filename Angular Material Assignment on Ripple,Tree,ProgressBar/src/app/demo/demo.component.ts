import { animate, state, style, transition, trigger } from '@angular/animations';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface CourseNode

  {
  
    name:string;
  
    children?:CourseNode[];
  
  }
  const TREE_DATA:CourseNode[]=[
  
    {
  
      name:'Angular for Beginners',
  
      children:[
  
          {
  
            name:'Introduction to Angular'
  
          },
  
          {
  
            name:'Installation of Angular'
  
          },
  
          {
  
            name:'Routing'
  
          }
  
       ],
  
  },
  
  {
  
    name:'Angular in depth',
  
    children:[
  
        {
  
          name:'Services',
  
          children:[
  
            {
  
              name:'Injectable'
  
            }
  
          ],
  
        },
  
        {
  
          name:'HttpClient'
  
        },
  
        {
  
          name:'Forms'
  
        }
  
     ],
  
  
  
  },
  
  {
  
    name:'Angular Material',
  
    children:[
  
          {
  
            name:'Tree Components'
  
          },
  
          {
  
            name:'Material Module'
  
          }
  
        ],
  
    },
  
    ];
  
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})

export class DemoComponent {
  
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  
  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
   treeControl=new NestedTreeControl<CourseNode>(node=>node.children);
      dataSource=new MatTreeNestedDataSource<CourseNode>();
      constructor()
      {
        this.dataSource.data=TREE_DATA;
      }
      hasChild=(_:number,node:CourseNode)=>!!node.children && node.children.length>0;
  
  openState=false;
        
  
}

