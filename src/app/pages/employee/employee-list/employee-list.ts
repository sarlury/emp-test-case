import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { EmployeeService } from '../../../services/employee-service';
import { Loading } from '../../../components/loading/loading';
import { Employee, EmployeeRes } from '../models/employee';
import { PrimeNgModule } from "../../../modules/primeng.module";
import { CommonModule } from '@angular/common';
import { StatusOption } from '../models/status';
import { Table } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-employee-list',
  imports: [
    Loading,
    PrimeNgModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss'
})
export class EmployeeList implements OnInit {
  @ViewChild('dt1') dt1!: Table;
  loading = signal(false);
  private messageService = inject(MessageService)
  employees!: Employee[];
  searchValue = '';
  selectedStatus = '';
  statusOptions: StatusOption[] = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
    { label: 'On Leave', value: 'On Leave' },
  ];

  private empService = inject(EmployeeService);
  private router = inject(Router)

  ngOnInit(): void {
    this.employeeData();
  }

  employeeData() {
    this.loading.set(true);
    this.empService.getEmployeedata().subscribe({
      next: (result) => {
        if (result) this.loading.set(false);
        this.employees = result;
      },
      error: (err) => {
        console.log('err', err)
        this.loading.set(false);
      }
    })
  }

  onStatusChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.dt1.filter(value, 'status', 'equals');
  }

  delete() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Delete Success' });
  }

  clearSearch(dt1: Table) {
    this.searchValue = '';
    this.selectedStatus = '';
    dt1.clear();
  }

  onAddEmployee() {
    this.router.navigate(['/add-employee']);
  }

  editEmployee(emp: string) {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Employee Edit' });
  }
  
  viewEmployeeDetail(employee: any) {
  this.router.navigate(['detail-employee'], {
    state: { employee }
  });
}
  logout() {
    this.router.navigateByUrl('/login')
  }

}
