import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { PdvPage } from '../pdv/pdv';
import { ClientePage } from '../cliente/cliente';
import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';
import { ProdutoPage } from '../produto/produto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public itens = [];
  lista: any;
  private pdvPage = PdvPage;
  private clientePage = ClientePage;
  private produtoPage = ProdutoPage;

  constructor(
    public login: LoginProvider, 
    public navCtrl: NavController, 
  ) {  
    
  }  
}
