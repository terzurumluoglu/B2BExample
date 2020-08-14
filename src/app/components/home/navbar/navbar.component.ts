import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toprak : string = 'TOPRAK';
  products$ : Observable<any> = this._facadeService.products$;
  constructor(
    private _facadeService: FacadeService
  ) { }

  ngOnInit(): void {
  }

}
