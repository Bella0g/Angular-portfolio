import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projectData } from '../../project-data';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getProjectData();
  }

  getProjectData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = projectData.find(p => p.id === parseInt(id!));
  }
}