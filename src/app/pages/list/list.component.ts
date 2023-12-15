import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../components/ui/icon/icon.component';
import { TextInputComponent } from '../../components/ui/form-fields/text-input/text-input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, IconComponent,TextInputComponent,ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 form=new FormGroup({
  search:new FormControl(''),
 })

}