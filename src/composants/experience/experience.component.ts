import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Analyste programmeur .Net Core',
      company: 'REACTIS-GROUP',
      date: '04/2023 - présent',
      tasks: [
        'Travailler en méthodologie agile',
        'Ecrire ou mettre à jour la documentation dans Confluence',
        'Traiter des tickets ouverts dans Jira et en créer si une anomalie est découverte',
        // Add other tasks
      ]
    },
    {
      title: 'Analyste programmeur Fullstack',
      company: 'FINELOG-BISEUM',
      date: '09/2021 - 03/2023',
      tasks: [
        'Rédiger les spécifications techniques',
        'Participer à la mise en place de l’architecture logicielle des nouvelles fonctionnalités',
        'Effectuer la conception et le développement de l’application coté front',
        // Add other tasks
      ]
    },
    // Add other experiences
  ];
}
