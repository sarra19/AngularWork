import { Component } from '@angular/core';
import { Fournisseur } from '../core/fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
  fournisseur: Fournisseur[] = [
    {
      idFournisseur: 105,
      code: 'A104B89',
      libelle: 'MyTeck',
      hide: false, 
    },
  ]
  toggleHide() {
    this.fournisseur[0].hide = !this.fournisseur[0].hide; // Toggle the 'hide' property
    console.log('hide:', this.fournisseur[0].hide); // Log the 'hide' property value to the browser console
  }

}
