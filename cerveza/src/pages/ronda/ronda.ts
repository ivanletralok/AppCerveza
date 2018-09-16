import { DataServiceProvider } from './../../providers/data-service/data-service';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';


import { AlertController } from 'ionic-angular';


/**
 * Generated class for the RondaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "ronda"
})
@Component({
  selector: 'page-ronda',
  templateUrl: 'ronda.html',
})
export class RondaPage {

  div = this.dataP.div;
  total = 0;
  numPersona = this.dataP.rondas
 
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public alertController: AlertController,
    public dataP: DataServiceProvider) 
    {
      // constructor
    }

  ionViewDidLoad() {
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '?',
      message: 'Cantidad De Cervezas a Pedir',
      inputs: [
        {
          name: 'cantidad',
          placeholder: 'cantidad De Cervezas'
        },
        {
          name: 'valor',
          placeholder: 'Valor De Cerveza'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Agregar',
          handler: (inputData) => {
            let numP;
            let valor;
            valor = inputData.valor;
            numP = inputData.cantidad;
            if (valor == "") {
              {
                const alert = this.alertCtrl.create({
                  title: 'Hay Algun Campo Vacio',
                  subTitle: 'llene todos los campos',
                  buttons: ['OK']
                });
                alert.present();
              }
            } else {
              this.dataP.addRonda({ numP, valor, total: numP * valor });
              this.ValorTotal();
            }

          }
        }
      ]
    });
    confirm.present();
  }

  ValorTotal() {
    this.dataP.total = 0;
    this.dataP.rondas.forEach(item => {
    this.dataP.total += item.total;
    })
  }



  DividirCuenta() {
    const confirm = this.alertCtrl.create({
      title: 'Entr Cuantas Personas Desea Dividir la Cuenta',
      message: '',
      inputs: [{
        name: "valor",
        placeholder: "Numero Personas"
      }],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Confirmar',
          handler: (data) => {
            let num = data.valor;
             this.dataP.div = this.dataP.total / num;
          }
        }
      ]
    });
    confirm.present();
  }
}






