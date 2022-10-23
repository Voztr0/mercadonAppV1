import { Injectable } from '@angular/core';
import { Screws } from '../interfaces/screws';

@Injectable({
  providedIn: 'root',
})
export class ScrewService {
  dataList: Screws[] = [
    {
      nombre: 'Jocelin',
      precio: 'Lenglet',
      formato: 'Hurt',
      marca: 'H Acne Formula',
    },
    {
      nombre: 'Liza',
      precio: 'Chatenier',
      formato: 'Arundel',
      marca: 'Lucky Instant Hand Sanitizer with Vitamin E and Moisturizers',
    },
    {
      nombre: 'Arda',
      precio: 'Goodby',
      formato: 'Paske',
      marca: 'Poppyseed',
    },
    {
      nombre: 'Mala',
      precio: 'Crucetti',
      formato: 'Dolley',
      marca: 'Healthy Accents Cold and Flu',
    },
    {
      nombre: 'Mireille',
      precio: 'Lauderdale',
      formato: "O' Markey",
      marca: 'Lamotrigine',
    },
    {
      nombre: 'Gweneth',
      precio: 'Atherley',
      formato: 'Perago',
      marca: 'Mattifying Tonic',
    },
    {
      nombre: 'Karoly',
      precio: 'Ceccoli',
      formato: 'Lotterington',
      marca: 'Ibuprofen',
    },
    {
      nombre: 'Romonda',
      precio: 'Gypson',
      formato: 'Pancoast',
      marca: 'Covergirl Outlast Stay Fabulous 3in1 Foundation',
    },
    {
      nombre: 'Angelika',
      precio: 'Jermyn',
      formato: 'Porrett',
      marca: 'Tamsulosin Hydrochloride',
    },
    {
      nombre: 'Rebekkah',
      precio: 'Trevon',
      formato: 'Blackston',
      marca: 'Indomethacin',
    },
    {
      nombre: 'Tory',
      precio: 'Lackington',
      formato: 'Andreu',
      marca: 'QUERCUS ALBA POLLEN',
    },
    {
      nombre: 'Anne-marie',
      precio: 'Bardill',
      formato: "O' Concannon",
      marca: 'Meclizine Hydrochloride',
    },
    {
      nombre: 'Winnie',
      precio: 'Le Friec',
      formato: 'Linklater',
      marca: 'Exuviance CoverBlend Concealing Treatment Makeup',
    },
    {
      nombre: 'Daniela',
      precio: 'Trevains',
      formato: 'Broinlich',
      marca: 'Oxybutynin Chloride',
    },
    {
      nombre: 'Malvina',
      precio: 'MacAskie',
      formato: 'Rowbottom',
      marca: 'Speed Stick',
    },
    {
      nombre: 'Joletta',
      precio: 'Sterte',
      formato: 'Nijs',
      marca: 'SENSI CARE MOISTURIZING BODY',
    },
    {
      nombre: 'Michele',
      precio: 'Jeffcoate',
      formato: 'Hantusch',
      marca: 'equate sinus',
    },
    {
      nombre: 'Farrah',
      precio: 'Shama',
      formato: 'Hulle',
      marca: 'Prednisone',
    },
    {
      nombre: 'Odille',
      precio: 'Seleway',
      formato: 'Carney',
      marca: 'FLUDROCORTISONE ACETATE',
    },
    {
      nombre: 'Bobette',
      precio: 'Yitzowitz',
      formato: 'Tilling',
      marca: 'Pamine',
    },
  ];

  constructor() {}

  getScrews() {
    return this.dataList.slice();
  }

  deleteScrewById(index: number) {
    this.dataList.splice(index, 1);
  }

  addScrew(value: Screws) {
    this.dataList.unshift(value);
  }
}
