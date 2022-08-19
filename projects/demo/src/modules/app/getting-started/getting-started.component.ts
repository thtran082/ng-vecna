import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
})
export class GettingStartedComponent {
  data: { id: number, name: string, phone: string }[] = [
    {
      id: 1,
      name: 'John Doe',
      phone: '+1 (123) 456-7890',
    },
    {
      id: 2,
      name: 'Christian W. Smith', 
      phone: '+3 (765) 008-3332',
    },
  ];
  ngAfterViewInit(): void {}
}
