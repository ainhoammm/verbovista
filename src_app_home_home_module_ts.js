"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 7716:
/*!******************************************************************!*\
  !*** ./src/app/home/containers/acerca-de/acerca-de.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcercaDeComponent": function() { return /* binding */ AcercaDeComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_acerca_de_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./acerca-de.component.html */ 7067);
/* harmony import */ var _acerca_de_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./acerca-de.component.scss */ 7608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);







var AcercaDeComponent = /*#__PURE__*/function () {
  function AcercaDeComponent() {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AcercaDeComponent);
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AcercaDeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return AcercaDeComponent;
}();

AcercaDeComponent.ctorParameters = function () {
  return [];
};

AcercaDeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-acerca-de',
  template: _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_acerca_de_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  styles: [_acerca_de_component_scss__WEBPACK_IMPORTED_MODULE_3__]
})], AcercaDeComponent);


/***/ }),

/***/ 6752:
/*!**************************************************************!*\
  !*** ./src/app/home/containers/contact/contact.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": function() { return /* binding */ ContactComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact.component.html */ 9575);
/* harmony import */ var _contact_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component.scss */ 3043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3981);








var ContactComponent = /*#__PURE__*/function () {
  function ContactComponent(http) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactComponent);

    this.http = http;
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      //todo: enviar email
      console.log("enviar emial");
      this.http.post('https://verbovista.com/api/saveJSON.php', {
        name: this.name,
        email: this.email,
        message: this.message
      }).subscribe(function (data) {
        console.log(data);
      });
    }
  }]);

  return ContactComponent;
}();

ContactComponent.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }];
};

ContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-contact',
  template: _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
  styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_3__]
})], ContactComponent);


/***/ }),

/***/ 9936:
/*!***************************************************!*\
  !*** ./src/app/home/containers/home/home.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 6474);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ 9289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _shared_services_verb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/verb.service */ 9305);









var HomePage = function HomePage(translate, platform, verbService) {
  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

  this.translate = translate;
  this.platform = platform;
  this.verbService = verbService;
  this.commonRegularVerbs = ['acabar', 'aceptar', 'amar', 'añadir', 'aprender', 'ayudar', 'bajar', 'beber', 'besar', 'cenar', 'cocinar', 'comer', 'compartir', 'comprar', 'dejar', 'desayunar', 'descansar', 'empujar', 'escribir', 'escuchar', 'esperar', 'estudiar', 'ganar', 'juntar', 'limpiar', 'llevar', 'mejorar', 'mirar', 'nadar', 'parar', 'preguntar', 'preparar', 'quedar', 'responder', 'saltar', 'subir', 'sumar', 'terminar', 'tomar', 'trabajar', 'usar', 'vivir'];
  this.commonIrregularVerbs = ['ser', 'estar', 'tener', 'haber', 'hacer', 'ir', 'volver', 'venir', 'dar', 'coger', 'mover', 'saber', 'seguir', 'querer', 'empezar', 'pensar', 'oler', 'salir', 'entender', 'mentir', 'caer', 'poder', 'decir', 'conocer', 'encontrar', 'jugar'];
  var today = new Date();
  var indexOfTheDay = today.getDate() + '' + today.getMonth();
  console.log(indexOfTheDay);

  if (parseInt(indexOfTheDay, 10) >= verbService.getAllVerbs().length) {
    this.verbOfTheDay = verbService.getVerbByIndex(today.getDate());
  } else {
    this.verbOfTheDay = verbService.getVerbByIndex(parseInt(indexOfTheDay, 10));
  }
};

HomePage.ctorParameters = function () {
  return [{
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
  }, {
    type: _shared_services_verb_service__WEBPACK_IMPORTED_MODULE_3__.VerbService
  }];
};

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-home',
  template: _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectionStrategy.OnPush,
  styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _containers_home_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/home/home.page */ 9936);
/* harmony import */ var _containers_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/contact/contact.component */ 6752);
/* harmony import */ var _containers_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/acerca-de/acerca-de.component */ 7716);







var routes = [{
  path: 'acerca-de',
  component: _containers_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_3__.AcercaDeComponent,
  data: {
    title: 'Acerca de verbovista',
    description: 'Verbovista es una web/app gratuita para aprender a conjugar verbos',
    keywords: 'Verbovista, verbos en español, conjugaciones en español, aprender a conjugar'
  }
}, {
  path: 'contactar',
  component: _containers_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent,
  data: {
    title: 'Contactar',
    description: 'Contactar con verbovista'
  }
}, {
  path: '',
  component: _containers_home_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
  data: {
    title: 'Inicio',
    description: 'Ver, buscar y practicar conjugaciones de verbos en castellano',
    keywords: 'Verbovista, verbos en español, conjugaciones en español, aprender a conjugar'
  }
}];

var HomePageRoutingModule = function HomePageRoutingModule() {
  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePageRoutingModule);
};

HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
})], HomePageRoutingModule);


/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _containers_home_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/home/home.page */ 9936);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 3949);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 1382);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _containers_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/contact/contact.component */ 6752);
/* harmony import */ var _containers_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/acerca-de/acerca-de.component */ 7716);












var HomePageModule = function HomePageModule() {
  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePageModule);
};

HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule],
  declarations: [_containers_home_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage, _containers_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent, _containers_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_5__.AcercaDeComponent]
})], HomePageModule);


/***/ }),

/***/ 7067:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/containers/acerca-de/acerca-de.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Inicio\"></app-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <h1>{{'about-us.title' | translate}}</h1>\n  <p>{{'about-us.subtitle' | translate}}</p>\n  <p>{{'about-us.idea' | translate}}</p>\n\n  <p>{{'about-us.characteristics' | translate}}</p>\n\n  <ul>\n    <li>{{'about-us.ch1' | translate}}</li>\n    <li>{{'about-us.ch2' | translate}}</li>\n    <li>{{'about-us.ch3' | translate}}</li>\n    <li>{{'about-us.ch4' | translate}}</li>\n  </ul>\n<!--\n  <p>Lo más destacado por venir:</p>\n  <ul>\n    <li>Más lecciones</li>\n    <li>APP para Android e IOS</li>\n    <li>Coloreado de cambios vocálicos</li>\n    <li>Un nuevo tipo de ejercicio</li>\n    <li>Descarga de lecciones en PDF</li>\n  </ul>\n  -->\n  <p>{{'about-us.next' | translate}}</p>\n  <p innerHTML=\"{{'about-us.contact' | translate}}\"></p>\n\n</ion-content>\n\n<app-web-footer></app-web-footer>\n");

/***/ }),

/***/ 9575:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/containers/contact/contact.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Contactar\"></app-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\n  <ion-card>\n    <ion-card-header color=\"secondary\">\n      <ion-card-title>{{'contact.contact' | translate}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <!--\n      todo: subtitle\n      Ayudanos a mejorar\n      -->\n      <form>\n        <ion-item>\n          <ion-label>{{'contact.name' | translate}}:</ion-label>\n          <ion-input appIonAutofocus type=\"text\" required [(ngModel)]=\"name\" name=\"name\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Email:</ion-label>\n          <ion-input type=\"email\" required [(ngModel)]=\"email\" name=\"email\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-textarea required name=\"message\" [(ngModel)]=\"message\" placeholder=\"{{'contact.message' | translate}}\"></ion-textarea>\n        </ion-item>\n\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col class=\"ion-text-center\">\n              <ion-button class=\"ion-text-center\" type=\"submit\">{{'contact.send' | translate}}</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ 6474:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/containers/home/home.page.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Inicio\"></app-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"ion-padding home\">\n    <app-search></app-search>\n\n    <ion-grid class=\"ion-padding ion-align-items-center \">\n      <ion-row class=\"ion-hide-md-up\">\n        <ion-col class=\"subtitle\">\n          <ion-icon name='book-outline'></ion-icon> <span> {{'home-page.slogan' | translate}} </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <h2 [innerHTML]=\"'home-page.h1' | translate\"></h2>\n          <div class=\"subtitle ion-hide-md-down\">\n            <ion-icon name='book-outline'></ion-icon> <span> {{'home-page.slogan' | translate}} </span>\n          </div>\n\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-img rel=\"preload\" alt=\"{{'home-page.slogan' | translate}}\" class=\"ion-padding\" src=\"assets/svgs/home/workspace2.svg\"></ion-img>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button [expand]=\"platform.is('mobile') ? 'full' : ''\"\n                      size=\"large\"\n                      color=\"secondary\"\n                      [routerLink]=\"['/aprender-a-conjugar/']\">{{'home-page.start-learning' | translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"ion-padding\">\n      <ion-row class=\"ion-text-center\">\n        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\" class=\"ion-padding\">\n          <ion-img alt=\"Aprende a tu ritmo con una metodología probada\" class=\"ion-padding ion-margin\" src=\"assets/svgs/home/studying2.svg\"></ion-img>\n          <h3>{{'home-page.txt-method' | translate}}</h3>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\" class=\"ion-padding\">\n          <ion-img alt=\"Escucha como suena cada conjugación o frase\" class=\"ion-padding ion-margin\" src=\"assets/svgs/home/audio2.svg\"></ion-img>\n          <h3>{{'home-page.txt-listen' | translate}}</h3>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\" class=\"ion-padding\">\n          <ion-img alt=\"Orientado para mantener conversaciones en la vida real\" class=\"ion-padding ion-margin\" src=\"assets/svgs/home/conversation.svg\"></ion-img>\n          <h3>{{'home-page.txt-life' | translate}}</h3>\n        </ion-col>\n        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\" class=\"ion-padding\">\n          <ion-img alt=\"Aprende desde cualquier dispositivo: movil, tablet o PC\" class=\"ion-padding ion-margin\" src=\"assets/svgs/home/ereader2.svg\"></ion-img>\n          <h3>{{'home-page.txt-responsive' | translate}}</h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <ion-card-header color=\"secondary\">\n              {{'home-page.verb-of-the-day' | translate}}\n            </ion-card-header>\n            <ion-card-content>\n              <ion-button\n                color=\"secondary\"\n                [routerLink]=\"['/conjugacion/'+verbOfTheDay.verb]\">\n                {{verbOfTheDay.verb}}\n              </ion-button>\n            </ion-card-content>\n          </ion-card>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"ion-padding\">\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <ion-card-header color=\"secondary\"\n                             class=\"ion-justify-content-center ion-text-center\">\n              {{'home-page.most-common-reg' | translate}}\n            </ion-card-header>\n            <ion-card-content>\n              <ion-button\n                color=\"secondary\"\n                *ngFor=\"let regular of commonRegularVerbs\"\n                [routerLink]=\"['/conjugacion/'+regular]\">\n                {{regular}}\n              </ion-button>\n            </ion-card-content>\n            <ion-footer>\n              <ion-button size=\"large\" expand=\"block\" [routerLink]=\"['/conjugacion/regulares']\">\n                <ion-icon name=\"add-outline\"></ion-icon>\n                Todos los verbos regulares\n              </ion-button>\n            </ion-footer>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card>\n            <ion-card-header color=\"secondary\"\n                             class=\"ion-justify-content-center ion-text-center\">\n              {{'home-page.most-common-irreg' | translate}}\n            </ion-card-header>\n            <ion-card-content>\n              <ion-button\n                color=\"secondary\"\n                *ngFor=\"let irregular of commonIrregularVerbs\"\n                [routerLink]=\"['/conjugacion/'+irregular]\">\n                {{irregular}}\n              </ion-button>\n            </ion-card-content>\n            <ion-footer>\n              <ion-button size=\"large\" expand=\"block\" [routerLink]=\"['/conjugacion/irregulares']\">\n                <ion-icon name=\"add-outline\"></ion-icon>\n                Todos los verbos irregulares\n              </ion-button>\n            </ion-footer>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n  <app-web-footer></app-web-footer>\n\n</ion-content>\n");

/***/ }),

/***/ 7608:
/*!********************************************************************!*\
  !*** ./src/app/home/containers/acerca-de/acerca-de.component.scss ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2VyY2EtZGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3043:
/*!****************************************************************!*\
  !*** ./src/app/home/containers/contact/contact.component.scss ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 9289:
/*!*****************************************************!*\
  !*** ./src/app/home/containers/home/home.page.scss ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = "ion-card-content {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-top: 13px;\n}\n\nion-card-content ion-icon {\n  font-size: 45px;\n}\n\nh2 {\n  font-size: 4vw;\n  font-weight: bold;\n}\n\nh3 {\n  font-size: 1.6em;\n}\n\n.subtitle {\n  font-size: 1.5em;\n  color: var(--ion-color-primary);\n}\n\n.subtitle ion-icon {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0FBREY7O0FBRUU7RUFDRSxzQkFBQTtBQUFKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY2FyZC1jb250ZW50e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IGlvbi1pY29ue1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cblxuaDIge1xuICBmb250LXNpemU6IDR2dztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgze1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuXG4uc3VidGl0bGV7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGlvbi1pY29ue1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map