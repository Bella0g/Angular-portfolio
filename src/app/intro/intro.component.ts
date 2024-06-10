import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  projects = [
    {
      id: '1',
      title: 'Project 1',
      img: 'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg',
      description: 'Content for the first card.'
    },
    {
      id: '2',
      title: 'Project 2',
      img: 'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg',
      description: 'Content for the second card.'
    },
    {
      id: '3',
      title: 'Project 3',
      img: 'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg',
      description: 'Content for the third card.'
    },
    {
      id: '4',
      title: 'Project 4',
      img: 'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg',
      description: 'Content for the fourth card.'
    }
  ];

}
