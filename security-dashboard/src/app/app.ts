import { Component } from '@angular/core';
import { Dashboard } from './components/dashboard/dashboard';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Sidebar, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}