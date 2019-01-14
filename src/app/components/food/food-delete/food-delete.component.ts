import { Component, OnInit } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/Food';

@Component({
  selector: 'app-food-delete',
  templateUrl: './food-delete.component.html',
  styleUrls: ['./food-delete.component.css']
})
export class FoodDeleteComponent implements OnInit {
  food:Food;

  constructor(private _foodService: FoodsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p=> {this._foodService.getFood(p.get('id')).subscribe((singleFood:Food)=> 
    {this.food = singleFood;
    });
  });
}

  ngOnInit() {
  }
  onDelete(){
    console.log(this.food.foodID)
    this._foodService.deleteFood(this.food.foodID).subscribe(()=>{
      this._router.navigate(['/foods']);
    });
  }

}
