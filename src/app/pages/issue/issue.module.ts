import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue.component';
import { FormsModule } from '@angular/forms';
import { IssueService } from './issue.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    IssueComponent
  ],
  providers: [
    IssueService
  ]
})
export class IssueModule { }
