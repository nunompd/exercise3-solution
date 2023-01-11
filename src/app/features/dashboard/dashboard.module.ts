import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const COMPONENTS = [DashboardComponent];

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [...COMPONENTS],
})
export class DashboardModule {}
