import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss']
})
export class DataFilterComponent {
  @Output() applyFilter = new EventEmitter<Date>();
  @Output() cancel = new EventEmitter<void>();

  constructor() { }
  selectedDate: Date | undefined;

  onApplyFilter(): void {
    this.applyFilter.emit(this.selectedDate);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
