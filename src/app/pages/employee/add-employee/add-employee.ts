import { Component, inject, signal } from '@angular/core';
import { PrimeNgModule } from '../../../modules/primeng.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee-service';
import { Loading } from '../../../components/loading/loading';

@Component({
  selector: 'app-add-employee',
  imports: [
    PrimeNgModule,
    CommonModule,
    ReactiveFormsModule,
    Loading
  ],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.scss'
})
export class AddEmployee {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private empService = inject(EmployeeService);
  loading = signal(false);
  today: string = new Date().toISOString().slice(0, 16);

  employeeForm!: FormGroup;

  groupOptions = Array.from({ length: 10 }).map((_, i) => ({
    name: `Group ${i + 1}`,
    value: `Group${i + 1}`
  }));

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: [null, [Validators.required]],
      basicSalary: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: [null, Validators.required],
    });
  }

  onGroupChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.employeeForm.get('group')?.setValue(selectedValue);
  }

  isInvalid(field: string): boolean {
    const control = this.employeeForm.get(field);
    return !!control && control.invalid && control.touched;
  }

  onSubmit(): void {
    this.loading.set(true);
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      this.loading.set(false)
      return;
    }

    const newEmployee = this.employeeForm.value;
    console.log('Saving employee:', newEmployee);
  

    this.router.navigate(['/employee-list']);
    this.loading.set(false);
    this.empService.addEmployee(newEmployee).subscribe({
      next: (result) => {
        // 
      },
      error: (err) => {
        // 
      }
    })
  }

  onCancel(): void {
    this.router.navigate(['/employee-list']);
  }

}
