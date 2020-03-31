import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/model/conta';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss']
})
export class ContasComponent implements OnInit {
  displayedColumns: string[] = [ 'nome', 'valorOriginal', 'valorCorrigido', 'quantidadeDiasAtraso', 'quantidadeDiasAtraso', 'dataPagamento'];
  dataSource: Conta[];
  isLoadingResults = true;
  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.listarContas()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
