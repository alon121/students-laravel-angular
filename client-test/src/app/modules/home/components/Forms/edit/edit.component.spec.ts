import { TestBed, async } from '@angular/core/testing';

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit.component';

describe('AddComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule 
      ],
      declarations: [
       EditComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EditComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });



});
