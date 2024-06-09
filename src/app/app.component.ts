import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceAdminComponent } from './components/service-admin/service-admin.component';
import { TableComponent } from './components/table/table.component';
import { ServiceTypeComponent } from './components/service-type/service-type.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ServiceAdminComponent,TableComponent, ServiceTypeComponent,ServiceListComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Queen-Bride';
}
