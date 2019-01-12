import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FoodsService } from 'src/app/services/foods.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.css']
})
export class FoodCreateComponent implements OnInit {
  
  foodForm:FormGroup;
  
  constructor(private _foodService: FoodsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }
  
  ngOnInit() {
  }
  
  createForm() {
    this.foodForm = this._form.group({
      Name: new FormControl,
      Description: new FormControl,
      Ingredient: new FormControl,
      Allergen: new FormControl,   
    })
  }
  onSubmit(){
    this._foodService.createFood(this.foodForm.value).subscribe(data => {
      this._router.navigate(['/foods']);
    });
  }
  

}
