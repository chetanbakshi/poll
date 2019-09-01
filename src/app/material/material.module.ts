import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatTableModule, MatDialogModule } from '@angular/material';

export const materials = [
  MatInputModule,
  MatTableModule,
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...materials
  ],
  exports: materials
})
export class MaterialModule { }
