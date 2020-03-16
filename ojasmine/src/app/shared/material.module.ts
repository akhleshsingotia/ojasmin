import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  import { MatInputModule } from '@angular/material/input';
  import { MatButtonModule } from '@angular/material/button';
  import { MatIconModule } from '@angular/material/icon';
  import { MatDialogModule } from '@angular/material/dialog';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatCardModule } from '@angular/material/card';
  import { MatSnackBarModule } from '@angular/material/snack-bar';
  import { MatTooltipModule } from '@angular/material/tooltip';


const importandexport = [
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatTooltipModule
];

@NgModule({
  imports: [CommonModule, ...importandexport],
  exports: [...importandexport]
})
export class MaterialModule {}
