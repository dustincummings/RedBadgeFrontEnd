import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../../../services/foods.service';
import { Food } from '../../../models/Food';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-food-index',
  templateUrl: './food-index.component.html',
  styleUrls: ['./food-index.component.css']
})
export class FoodIndexComponent implements OnInit {

  constructor( private _foodService : FoodsService) { }

  columnNames = [ 'Name', ]
  
  dataSource: MatTableDataSource<Food>

  ngOnInit() {
    this._foodService.getFoods().subscribe((foods:Food[])=>{
      this.dataSource = new MatTableDataSource<Food>(foods);
      console.log(this.dataSource)
    });
  }

}
