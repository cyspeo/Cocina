import { Component } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DropDownComponent],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {}