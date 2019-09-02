import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatTableModule, MatDialogModule, MatButtonModule } from '@angular/material';

export const materials = [
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...materials
  ],
  exports: materials
})
export class MaterialModule { }
