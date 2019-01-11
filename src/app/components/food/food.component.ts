import { Component, OnInit } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(_foodsService:FoodsService) { }

  ngOnInit() {
  }

}
