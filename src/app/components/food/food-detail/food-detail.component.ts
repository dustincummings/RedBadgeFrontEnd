import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodsService } from 'src/app/services/foods.service';
import { Food } from 'src/app/models/Food';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  food :Food;

  constructor(private _activatedRoute: ActivatedRoute, private _foodService: FoodsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData =>{
      this._foodService.getFood(routeData.get('id')).subscribe((singleFood: Food)=>{
        this.food = singleFood;
      })
    })
  }

}
