import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educations = [
    {
      degree: 'Spécialisation en Analyste informaticien',
      institution: 'EQL-Montrouge',
      date: '2016-2017'
    },
    {
      degree: 'Diplôme d’ingénieur généraliste',
      institution: 'ESIEE Paris',
      date: '2012-2015'
    },
    // Add other education details
  ];
}
