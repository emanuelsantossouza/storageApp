import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formCadastro: FormGroup;

  constructor(private alertController: AlertController, private formBuilder: FormBuilder) { 
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(100)])],
      validade: ['',Validators.compose([Validators.required,Validators.minLength(6)])],
      preco: ['',Validators.required],
    });
  }


































  ngOnInit() {
  }

   async confirmar() {
    const alert = await this.alertController.create({
      header: 'Cadastro com sucesso',
      message: 'O novo produto pode ser visualizado na Lista',
      buttons: ['OK'],
    });

    await alert.present();
  }
}


