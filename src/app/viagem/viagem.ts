import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viagem',
  standalone: false,
  templateUrl: './viagem.html',
  styleUrl: './viagem.css'
})
export class Viagem {
  viagemForm!: FormGroup;

  destinos = ["Paris", "Nova York", "Tóquio", "Rio de Janeiro"];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //formulario
    this.viagemForm = this.fb.group({
      destino: ['', Validators.required],
      dataIda: ['', Validators.required],
      dataVolta: ['', Validators.required],
      passageiros: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      email: ['', [Validators.required, Validators.email]]
    });

    //localstorage
    const dados = localStorage.getItem('viagem');
    if (dados) {
      this.viagemForm.patchValue(JSON.parse(dados));
    }

    //localstorage ao mudar formmulario
    this.viagemForm.valueChanges.subscribe(value => {
      localStorage.setItem('viagem', JSON.stringify(value));
    });
  }

  //enviar formulario
  submit(): void {
    if (this.viagemForm.valid) {
      console.log('Formulário enviado:', this.viagemForm.value);
      localStorage.removeItem('viagem');
      this.viagemForm.reset();
    }
  }
}