import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-detail-employee',
  imports: [
    CommonModule
  ],
  templateUrl: './detail-employee.html',
  styleUrl: './detail-employee.scss'
})
export class DetailEmployee implements OnInit {
  employee!: Employee;
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location)
  
  
  ngOnInit(): void {
    const nav = history.state;
    if (nav && nav.employee) {
      this.employee = nav.employee;
    }
  }

  goBack(): void {
    this.location.back();
  }
  
}
