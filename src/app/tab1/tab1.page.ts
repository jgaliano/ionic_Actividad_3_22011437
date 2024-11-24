import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  quetzales: number = 0; 
  tasaCambio: number = 8; 

  constructor(private alertController: AlertController) {}

  async convertir() {
    if (this.quetzales <= 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor ingrese un valor válido mayor a 0.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const dolares = (this.quetzales / this.tasaCambio).toFixed(2); 
    const alert = await this.alertController.create({
      header: 'Resultado de Conversión',
      message: `${this.quetzales} Quetzales equivalen a $${dolares} USD`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
