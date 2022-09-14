import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingLIstService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild("nameInput") nameInputRef: ElementRef;
@ViewChild("amountInput") amountInputRef: ElementRef;

  constructor(private slService: ShoppingLIstService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;
   const newIngredient = new Ingredient(ingName, ingamount);
   this.slService.addIngredient(newIngredient)
  }

}
