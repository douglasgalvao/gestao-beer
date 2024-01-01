import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { VendaElement } from '../vendas/vendas.component';
@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }

  exportToExcel(data: any, filename: string) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, filename);
  }
}
