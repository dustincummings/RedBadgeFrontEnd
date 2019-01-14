import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Food } from 'src/app/models/Food';
import { FoodsService } from 'src/app/services/foods.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {

  food: Food;
  editFoodForm: FormGroup;
  
  constructor(private _form:FormBuilder,private _foodService: FoodsService, private _ar:ActivatedRoute,private _router: Router) {
    this._ar.paramMap.subscribe(p =>{
      this._foodService.getFood(p.get('id')).subscribe((singleFood:Food) =>{
        this.food = singleFood;
        this.createForm();
      });
    });
   }

  ngOnInit() {
  }
  createForm() {
    this.editFoodForm = this._form.group({
      FoodID: new FormControl(this.food.FoodID),
      OwnerID: new FormControl(this.food.OwnerID),
      Name: new FormControl(this.food.Name),
      Description: new FormControl(this.food.Description),
      Ingredient: new FormControl(this.food.Ingredient),
      Allergen: new FormControl(this.food.Allergen),   
    });
  }
  onSubmit(form){
    const updateFood: Food ={
      FoodID: form.value.FoodID,
      OwnerID: form.value.OwnerID,
      Name: form.value.Name,
      Description: form.value.Description,
      Ingredient: form.value.Ingredient,
      Allergen: form.value.Allergen,
    };
    this._foodService.updateFood(updateFood).subscribe(d =>{
      this._router.navigate(['/foods']);
    });
  }


}
