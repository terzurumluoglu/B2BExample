import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { CartService } from 'src/app/services/cart/cart.service';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from 'src/app/reducer/reducer';
import { CartPipe } from 'src/app/pipes/cart/cart.pipe';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent,CartPipe ],
      imports : [StoreModule.forRoot(AppReducers)],
      providers:[CartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
