import { Component } from '@angular/core';
import { VulnerabilityTableComponent } from '../vulnerability-table/vulnerability-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [VulnerabilityTableComponent],
  templateUrl: './dashboard.html'
})
export class Dashboard {}