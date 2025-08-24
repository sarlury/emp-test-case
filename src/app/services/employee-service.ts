import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { AddEmployeeRes, Employee, EmployeeRes } from '../pages/employee/models/employee';
import { Path } from '../utils/Path';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private httpClient = inject(HttpClient);
  url = 'assets/data/employees.json';
  
  getEmployeedata(): Observable<Employee[]> {
    return this.httpClient.get<EmployeeRes>(this.url).pipe(
      map(result => result.employees)
    )
  }

  addEmployee(body: Employee): Observable<AddEmployeeRes> {
    return this.httpClient.post<AddEmployeeRes>(Path.ADD_EMPLOYEE, body);
  }
}
