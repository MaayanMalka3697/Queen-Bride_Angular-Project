import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Turn } from '../../models/turns.model';
import { TurnsService } from '../../services/turns/turns.service';
import { error } from 'console';


/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrl: './table.component.css',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TableComponent implements OnInit,AfterViewInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [ 'date', 'sumHour', 'type' ,'nameServiceProvider'];

  //public turnList : Turn[] = []

  dataSource = new MatTableDataSource<Turn>();

  constructor(private _tursService: TurnsService) { }

  ngOnInit(): void {
    this._tursService.getTurnsList().subscribe((t: Turn[]) => {
      console.log(t);
      
      this.dataSource.data = t;
    }, (error) => {
      console.error('Error fetching data from server', error);
    }
    )
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
