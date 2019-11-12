import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatMenuTrigger, MatMenu, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

export interface Customer {
    position: number;
    FirstName: string;
    LastName: string;
    Email: string;
}

const ELEMENT_DATA: Customer[] = [
    {position: 1, FirstName: 'Hydro', LastName: 'Gen', Email: 'deniz@com' },
    {position: 2, FirstName: 'asd', LastName: 'fgsn', Email: 'deniz@com' },
    {position: 3, FirstName: 'f', LastName: 'yk', Email: 'deniz@com' },
    {position: 4, FirstName: 'rhte', LastName: 'bn', Email: 'deniz@com' },
    {position: 5, FirstName: '2345', LastName: 'sdg', Email: 'deniz@com' },
    {position: 6, FirstName: 'deniz', LastName: 'Burduroglu', Email: 'myEmail@com'}
];

@Component({
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css']
})

export class TableComponent {
  title = 'testingApp';
  tableColumns : string[] = ['Position', 'FirstName', 'LastName', 'Email', 'Actions'];
  
  dataSource: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  // @ViewChild(MatMenuTrigger, {static:false}) trigger: MatMenuTrigger;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    // this.trigger.openMenu();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  addTask() {
    console.log("Add Task");
  }
}


