import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
@Component({
  selector: 'app-incluir-conta',
  templateUrl: './incluir-conta.component.html',
  styleUrls: ['./incluir-conta.component.scss']
})

export class IncluirContaComponent implements OnInit {
  contaForm: FormGroup;
  nome: String = '';
  valorOriginal: number = null;
  dataVencimento: Date = null;
  dataPagamento: Date = null;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.contaForm = this.formBuilder.group({
    'nome' : [null, Validators.required],
    'valorOriginal' : [null, Validators.required],
    'dataVencimento' : [null, Validators.required],
    'dataPagamento' : [null, Validators.required]
  });
  }

  incluirConta(form: NgForm) {
    this.isLoadingResults = true;
    this.api.incluirConta(form)
      .subscribe(res => {
          this.isLoadingResults = true;
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
