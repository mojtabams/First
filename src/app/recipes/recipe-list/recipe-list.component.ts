import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model' ;

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('test','testing','http://coastguard.dodlive.mil/files/2014/06/IMG_7999.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
