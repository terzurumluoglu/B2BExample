import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/services/facade/facade.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  products$ = this._facadeService.products$;
  constructor(
    private _facadeService: FacadeService
  ) { }

  ngOnInit(): void {
  }

}
