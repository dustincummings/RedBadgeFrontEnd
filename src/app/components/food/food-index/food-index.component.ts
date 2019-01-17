import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodsService } from '../../../services/foods.service';
import { Food } from '../../../models/Food';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-food-index',
  templateUrl: './food-index.component.html',
  styleUrls: ['./food-index.component.css']
})
export class FoodIndexComponent implements OnInit {

  constructor( private _foodService : FoodsService) { }

  columnNames: string[] = ['details','name','buttons']
  
  dataSource: MatTableDataSource<Food>
  sort;
  @ViewChild(MatSort) set content(content:ElementRef){
    this.sort =content;
    if (this.sort){
       this.dataSource.sort=this.sort;}
  }

  ngOnInit() {
    this._foodService.getFoods().subscribe((foods:Food[])=>{
      this.dataSource = new MatTableDataSource<Food>(foods);
    });
  }

}
