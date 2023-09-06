import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class ComponentNameComponent implements OnInit {

  myProperty: string = 'name';
  items: any[] = [];

  // differentiate between single and plural
  country: string = 'country';

  // autosuggest sample data based on variable used
  states: string[] = ['US', 'EU', 'UK']

  title: string = 'My Angular App';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [1, 2, 3, 4, 5];

    //autosuggest variables
    this.country = 'US';

  }

  goToAboutPage() {
    this.router.navigate(['/about']);
    // TabNine can suggest route names and navigate functions
  }

  myMethod(){

  }


}
