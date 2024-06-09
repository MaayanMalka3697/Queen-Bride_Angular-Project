import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-service-type',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './service-type.component.html',
  styleUrl: './service-type.component.css',
  template: `<p>{{service.name}}</p>`,
})
export class ServiceTypeComponent {
  serviceName = "service";
  @Input() service: any;
}
