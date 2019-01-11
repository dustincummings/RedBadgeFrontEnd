import { Component, OnInit, ViewChild } from '@angular/core';
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

  columnNames: string[] = [ 'Name',]
  
  dataSource: MatTableDataSource<Food>

  @ViewChild(MatSort) sort:MatSort;

  ngOnInit() {
    this._foodService.getFoods().subscribe((foods:Food[])=>{
      this.dataSource = new MatTableDataSource<Food>(foods);
      this.dataSource.sort=this.sort;
      console.log(this.dataSource)
    });
  }

}
