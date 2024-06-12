import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../composants/header/header.component';
import { ExperienceComponent } from '../composants/experience/experience.component';
import { EducationComponent } from '../composants/education/education.component';
import { SkillsComponent } from '../composants/skills/skills.component';
import { ContactComponent } from '../composants/contact/contact.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,

    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatCardModule, 
    MatButtonModule,
    MatListModule, 
    MatDividerModule,
    MatStepperModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cv';
}
