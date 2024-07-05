import { Component } from '@angular/core';
import { projectData } from '../../project-data';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  projectData = projectData;

}
