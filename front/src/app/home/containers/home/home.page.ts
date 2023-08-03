import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { VerbService } from '../../../shared/services/verb.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage{

  public verbOfTheDay;
  public commonRegularVerbs = [
    'acabar',
    'aceptar',
    'amar',
    'añadir',
    'aprender',
    'ayudar',
    'bajar',
    'beber',
    'besar',
    'cenar',
    'cocinar',
    'comer',
    'compartir',
    'comprar',
    'dejar',
    'desayunar',
    'descansar',
    'empujar',
    'escribir',
    'escuchar',
    'esperar',
    'estudiar',
    'ganar',
    'juntar',
    'limpiar',
    'llevar',
    'mejorar',
    'mirar',
    'nadar',
    'parar',
    'preguntar',
    'preparar',
    'quedar',
    'responder',
    'saltar',
    'subir',
    'sumar',
    'terminar',
    'tomar',
    'trabajar',
    'usar',
    'vivir'
  ];

  public commonIrregularVerbs = [
    'ser',
    'estar',
    'tener',
    'haber',
    'hacer',
    'ir',
    'volver',
    'venir',
    'dar',
    'coger',
    'mover',
    'saber',
    'seguir',
    'querer',
    'empezar',
    'pensar',
    'oler',
    'salir',
    'entender',
    'mentir',
    'caer',
    'poder',
    'decir',
    'conocer',
    'encontrar',
    'jugar'
  ];

  constructor(
    public translate: TranslateService,
    public platform: Platform,
    private verbService: VerbService
  ) {
    const today = new Date();
    const indexOfTheDay = today.getDate() + '' + today.getMonth();
    console.log(indexOfTheDay);
    if(parseInt(indexOfTheDay, 10) >= verbService.getAllVerbs().length ){
      this.verbOfTheDay = verbService.getVerbByIndex(today.getDate());
    }else{
      this.verbOfTheDay = verbService.getVerbByIndex(parseInt(indexOfTheDay, 10));
    }
  }

}
