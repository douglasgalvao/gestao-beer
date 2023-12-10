import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrls: ['./cadastro-fornecedor.component.scss']
})
export class CadastroFornecedorComponent {
  fornecedorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fornecedorForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required],
      imgSrc: [''],
      contatoVendedor: ['']
    });
  }

  ngOnInit(): void { }

  salvarFornecedor() {
    if (this.fornecedorForm.valid) {
      const fornecedor = this.fornecedorForm.value;
      // Aqui você pode enviar os dados do fornecedor para o seu serviço ou fazer o que for necessário.
      console.log('Fornecedor a ser salvo:', fornecedor);
    }
  }
}
