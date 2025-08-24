// src/app/primeng.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Form & Input
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';

// Button & Overlay
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PopoverModule } from 'primeng/popover';

// Data display
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';

// Feedback
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// Menu
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';

// Services
import { MessageService, ConfirmationService } from 'primeng/api';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

const PRIMENG_MODULES = [
    InputTextModule, CheckboxModule, RadioButtonModule,
    InputNumberModule, DatePickerModule,
    ButtonModule, DialogModule, TooltipModule, ConfirmDialogModule, PopoverModule,
    TableModule, PaginatorModule, TagModule, BadgeModule, ToolbarModule, CardModule,
    ToastModule, ProgressSpinnerModule,
    MenubarModule, MenuModule, IconFieldModule, InputIconModule
];

@NgModule({
    imports: [CommonModule, ...PRIMENG_MODULES],
    exports: [...PRIMENG_MODULES],
    providers: [MessageService, ConfirmationService],
})
export class PrimeNgModule { }
