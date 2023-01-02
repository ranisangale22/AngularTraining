import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ThemePalette } from '@angular/material/core';

import {MatDialog} from '@angular/material/dialog';



export interface ChipColor

{

  name:string;

  color:ThemePalette;

}

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'materialfinaldemo';

  sports:string[]=['cricket','football','hockey','snooker'];

  colors:ChipColor[]=

  [

    {name:'cricket',color:undefined},

    {name:'football',color:'primary'},

    {name:'hockey',color:'warn'},

    {name:'snooker',color:'accent'},

  ];



 

  constructor(public dialog: MatDialog,private formBuilder:FormBuilder) {}



  openDialog() {

    this.dialog.open(contact,{

      width: '700px',

      height:'400px'

    });

  }
}

@Component({

  selector: 'contact',

  templateUrl: 'contact.html',

})

export class contact {}