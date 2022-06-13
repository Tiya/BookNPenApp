import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


const MaterialComponents =[
  MatGridListModule,
  MatCardModule,
  MatButtonModule
]

@NgModule({
  imports: [ MaterialComponents ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
