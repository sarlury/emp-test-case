import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login)
    },
    {
        path: 'employee-list',
        loadComponent: () => import('./pages/employee/employee-list/employee-list').then(m => m.EmployeeList),
    },
    {
        path: 'detail-employee',
        loadComponent: () => import('./pages/employee/detail-employee/detail-employee').then(m => m.DetailEmployee)
    },
    {
        path: 'add-employee',
        loadComponent: () => import('./pages/employee/add-employee/add-employee').then(m => m.AddEmployee)
    }
];
