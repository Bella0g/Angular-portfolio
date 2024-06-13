import { Component } from '@angular/core';
import { projectData } from '../project-data';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  
  projectData = projectData;
}
