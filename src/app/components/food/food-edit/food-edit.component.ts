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
      FoodID: new FormControl(this.food.foodID),
      OwnerID: new FormControl(this.food.ownerID),
      Name: new FormControl(this.food.name),
      Description: new FormControl(this.food.description),
      Ingredient: new FormControl(this.food.ingredient),
      Allergen: new FormControl(this.food.allergen),   
    });
  }
  onSubmit(form){
    const updateFood: Food ={
      foodID: form.value.FoodID,
      ownerID: form.value.OwnerID,
      name: form.value.Name,
      description: form.value.Description,
      ingredient: form.value.Ingredient,
      allergen: form.value.Allergen,
    };
    this._foodService.updateFood(updateFood).subscribe(d =>{
      this._router.navigate(['/foods']);
    });
  }


}
