"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_conjugations_conjugations_module_ts"],{

/***/ 8351:
/*!****************************************************************************************!*\
  !*** ./src/app/conjugations/components/conjugation-list/conjugation-list.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConjugationListComponent": function() { return /* binding */ ConjugationListComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_conjugation_list_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./conjugation-list.component.html */ 4592);
/* harmony import */ var _conjugation_list_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conjugation-list.component.scss */ 1154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _shared_services_verb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/verb.service */ 9305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);









var ConjugationListComponent = /*#__PURE__*/function () {
  function ConjugationListComponent(verbService, route) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConjugationListComponent);

    this.verbService = verbService;
    this.route = route;
    this.allVerbs = [];
    this.showAll = true;
    this.limit = 100;
    this.page = 1;
    this.allVerbs = verbService.getAllVerbs();
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ConjugationListComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.route.url.subscribe(function (data) {
        if (data && data[0]) {
          if (data[0].path === 'regulares') {
            _this.filter = 'regular';
          } else if (data[0].path === 'irregulares') {
            _this.filter = 'irregular';
          }
        }

        _this.allVerbs = _this.getVerbs(1, _this.limit, _this.filter);
      });
    }
  }, {
    key: "searched",
    value: function searched(data) {
      if (data && data.length > 0) {
        this.showAll = false;
      } else {
        this.showAll = true;
      }
    }
  }, {
    key: "loadData",
    value: function loadData(event) {
      this.page = this.page + 1;
      this.allVerbs = this.getVerbs(this.page, this.limit, this.filter);
      event.target.complete();
    }
  }, {
    key: "getVerbs",
    value: function getVerbs(page, limit, filter) {
      if (filter) {
        return this.verbService.getAllVerbsFilteredByIrregular(filter).slice(0, limit * page);
      } else {
        return this.verbService.getAllVerbs().slice(0, limit * page);
      }
    }
  }]);

  return ConjugationListComponent;
}();

ConjugationListComponent.ctorParameters = function () {
  return [{
    type: _shared_services_verb_service__WEBPACK_IMPORTED_MODULE_4__.VerbService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }];
};

ConjugationListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-conjugation-list',
  template: _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_conjugation_list_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  styles: [_conjugation_list_component_scss__WEBPACK_IMPORTED_MODULE_3__]
})], ConjugationListComponent);


/***/ }),

/***/ 8273:
/*!*************************************************************!*\
  !*** ./src/app/conjugations/conjugations-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConjugationsRoutingModule": function() { return /* binding */ ConjugationsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _containers_conjugations_conjugations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/conjugations/conjugations.component */ 8687);
/* harmony import */ var _containers_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/exercises/exercises.component */ 1545);
/* harmony import */ var _components_conjugation_list_conjugation_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/conjugation-list/conjugation-list.component */ 8351);







var routes = [{
  path: 'ejercicios',
  component: _containers_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_2__.ExercisesComponent,
  data: {
    title: 'Ejercicios de conjugación',
    description: 'Ejercicios de conjugación',
    keywords: 'ejercicios conjugacion, ejercicios verbos, ejercicios conjugacion español'
  }
}, {
  path: 'irregulares',
  component: _components_conjugation_list_conjugation_list_component__WEBPACK_IMPORTED_MODULE_3__.ConjugationListComponent,
  data: {
    title: 'Conjugaciones de verbos irregulares',
    description: 'Todas los los verbos irregulares en español',
    keywords: 'Conjugaciones irregulares, verbos irregulares'
  }
}, {
  path: 'regulares',
  component: _components_conjugation_list_conjugation_list_component__WEBPACK_IMPORTED_MODULE_3__.ConjugationListComponent,
  data: {
    title: 'Conjugaciones de verbos regulares',
    description: 'Todos los verbos regulares en español',
    keywords: 'Conjugaciones regulares, verbos regulares'
  }
}, {
  path: ':verb',
  component: _containers_conjugations_conjugations_component__WEBPACK_IMPORTED_MODULE_1__.ConjugationsComponent,
  data: {
    title: 'Conjugacion del verbo ',
    description: 'Todas las formas y tiempos verbales'
  }
}, {
  path: '',
  component: _components_conjugation_list_conjugation_list_component__WEBPACK_IMPORTED_MODULE_3__.ConjugationListComponent,
  data: {
    title: 'Conjugaciones de verbos en español',
    description: 'Todos los verbos conjugados en español',
    keywords: 'todos los verbos en español, conjugaciones en español'
  }
}];

var ConjugationsRoutingModule = function ConjugationsRoutingModule() {
  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConjugationsRoutingModule);
};

ConjugationsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
})], ConjugationsRoutingModule);


/***/ }),

/***/ 1768:
/*!*****************************************************!*\
  !*** ./src/app/conjugations/conjugations.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConjugationsModule": function() { return /* binding */ ConjugationsModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _conjugations_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conjugations-routing.module */ 8273);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 1382);
/* harmony import */ var _containers_conjugations_conjugations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/conjugations/conjugations.component */ 8687);
/* harmony import */ var _containers_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/exercises/exercises.component */ 1545);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _components_conjugation_list_conjugation_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/conjugation-list/conjugation-list.component */ 8351);











var ConjugationsModule = function ConjugationsModule() {
  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConjugationsModule);
};

ConjugationsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  declarations: [_containers_conjugations_conjugations_component__WEBPACK_IMPORTED_MODULE_3__.ConjugationsComponent, _containers_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_4__.ExercisesComponent, _components_conjugation_list_conjugation_list_component__WEBPACK_IMPORTED_MODULE_5__.ConjugationListComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _conjugations_routing_module__WEBPACK_IMPORTED_MODULE_1__.ConjugationsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule]
})], ConjugationsModule);


/***/ }),

/***/ 8687:
/*!********************************************************************************!*\
  !*** ./src/app/conjugations/containers/conjugations/conjugations.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConjugationsComponent": function() { return /* binding */ ConjugationsComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_conjugations_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./conjugations.component.html */ 4931);
/* harmony import */ var _conjugations_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conjugations.component.scss */ 356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _shared_services_verb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/verb.service */ 9305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_models_banner_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/models/banner.model */ 67);










var ConjugationsComponent = /*#__PURE__*/function () {
  function ConjugationsComponent(verbService, route) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConjugationsComponent);

    this.verbService = verbService;
    this.route = route;
    this.printable = false; //optional input

    this.groups = ['Indicativo', 'Subjuntivo', 'Imperativo'];
    this.banner = new _shared_models_banner_model__WEBPACK_IMPORTED_MODULE_5__.Banner('ca-pub-4641807338135449', 4558658814, 'auto', true);
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ConjugationsComponent, [{
    key: "infinitive",
    set: function set(value) {
      this.conjugation = this.verbService.getByInfinitive(value);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.route.params.subscribe(function (params) {
        if (params && params.verb) {
          _this.conjugation = _this.verbService.getByInfinitive(params.verb);
        }
      });
    }
  }, {
    key: "onPrint",
    value: function onPrint() {
      setTimeout(function () {
        window.print();
      }, 150);
    }
  }]);

  return ConjugationsComponent;
}();

ConjugationsComponent.ctorParameters = function () {
  return [{
    type: _shared_services_verb_service__WEBPACK_IMPORTED_MODULE_4__.VerbService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }];
};

ConjugationsComponent.propDecorators = {
  exercises: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  printable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  infinitive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
ConjugationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-conjugations',
  template: _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_conjugations_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectionStrategy.OnPush,
  styles: [_conjugations_component_scss__WEBPACK_IMPORTED_MODULE_3__]
})], ConjugationsComponent);


/***/ }),

/***/ 1545:
/*!**************************************************************************!*\
  !*** ./src/app/conjugations/containers/exercises/exercises.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExercisesComponent": function() { return /* binding */ ExercisesComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exercises_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exercises.component.html */ 3866);
/* harmony import */ var _exercises_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercises.component.scss */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _shared_services_verb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/verb.service */ 9305);








var ExercisesComponent = /*#__PURE__*/function () {
  function ExercisesComponent(verbService) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExercisesComponent);

    this.verbService = verbService;
    this.level = 50; //percentage
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ExercisesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.conjugation = this.verbService.getRandomVerb();
    }
  }]);

  return ExercisesComponent;
}();

ExercisesComponent.ctorParameters = function () {
  return [{
    type: _shared_services_verb_service__WEBPACK_IMPORTED_MODULE_4__.VerbService
  }];
};

ExercisesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-exercises',
  template: _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exercises_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
  styles: [_exercises_component_scss__WEBPACK_IMPORTED_MODULE_3__]
})], ExercisesComponent);


/***/ }),

/***/ 4592:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/conjugations/components/conjugation-list/conjugation-list.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Conjugaciones de verbos en español\"></app-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\n  <app-search (results)=\"searched($event)\"></app-search>\n\n  <div *ngIf=\"showAll\">\n    <ion-list *ngFor=\"let result of allVerbs\">\n      <ion-item [routerLink]=\"['/conjugacion/', result.verb]\">\n        {{result.verb}}\n        <ion-badge [color]=\"result.irregular ? 'warning' : 'success'\" slot=\"end\">\n          {{ result.irregular ? 'Irregular' : 'Regular' }}\n        </ion-badge>\n      </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </div>\n\n\n\n</ion-content>\n\n\n");

/***/ }),

/***/ 4931:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/conjugations/containers/conjugations/conjugations.component.html ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header class=\"noPrintable\" [title]=\"'Conjugación verbo ' + conjugation.verb\"></app-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\n  <app-search class=\"noPrintable\"></app-search>\n\n  <div *ngIf=\"conjugation && conjugation.verb\">\n    <h1 class=\"ion-padding\">\n      <b>{{conjugation.verb}}</b>\n\n      <app-audio [textToPlay]=\"conjugation.verb\"></app-audio>\n\n      <ion-badge [color]=\"conjugation.irregular ? 'warning' : 'success'\" slot=\"end\">\n        {{ conjugation.irregular ? 'Irregular' : 'Regular' }}\n      </ion-badge>\n\n      <ion-badge *ngIf=\"conjugation.reflex\">\n        Reflexivo\n      </ion-badge>\n    </h1>\n\n    <ion-row class=\"ion-padding\">\n      <ion-col size-sm=\"6\" size-md=\"3\">\n        Participio\n      </ion-col>\n      <ion-col size-sm=\"6\" size-md=\"3\">\n        <span [innerHTML]=\"conjugation.participioHTML\"></span>\n        <app-audio [textToPlay]=\"conjugation.participio\"></app-audio>\n      </ion-col>\n      <ion-col size-sm=\"6\" size-md=\"3\">\n        Gerundio\n      </ion-col>\n      <ion-col size-sm=\"6\" size-md=\"3\">\n        <span [innerHTML]=\"conjugation.gerundioHTML\"></span>\n        <app-audio [textToPlay]=\"conjugation.gerundio\"></app-audio>\n      </ion-col>\n      <ion-col size-sm=\"6\" size-md=\"3\">\n        Forma reflexiva\n      </ion-col>\n      <ion-col size-sm=\"6\" size-md=\"3\">\n        <span [innerHTML]=\"conjugation.verb + 'se'\"></span>\n        <app-audio [textToPlay]=\"conjugation.verb + 'se'\"></app-audio>\n      </ion-col>\n    </ion-row>\n\n    <app-banner [banner]=\"banner\"></app-banner>\n\n    <h2 class=\"ion-padding\">\n      Conjugación del verbo <b>{{conjugation.verb}}</b>\n    </h2>\n\n    <ion-list *ngFor=\"let group of groups\">\n      <ion-item  lines=\"full\">\n        <ion-label>{{group}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size-xs=\"12\" size-lg=\"6\" size-xl=\"4\"\n                     *ngFor=\"let tiempo of conjugation.conjugations[group] | keyvalue\">\n              <app-conjugation\n                [exercises]=\"exercises\"\n                [values]=\"tiempo.value\"\n                [tiempo]=\"tiempo.key\">\n              </app-conjugation>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button size=\"large\" (click)=\"onPrint()\">\n          <ion-icon slot=\"start\" name=\"print\"></ion-icon>\n          {{'print' | translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n</ion-content>\n\n<div class=\"only-print\">\n  <div *ngIf=\"conjugation && conjugation.verb\" id=\"printArea\" >\n    <h1 class=\"ion-padding\">\n      {{conjugation.verb}}\n\n      <app-audio [textToPlay]=\"conjugation.verb\"></app-audio>\n\n      <ion-badge [color]=\"conjugation.irregular ? 'warning' : 'success'\" slot=\"end\">\n        {{ conjugation.irregular ? 'Irregular' : 'Regular' }}\n      </ion-badge>\n\n      <ion-badge *ngIf=\"conjugation.reflex\">\n        Reflexivo\n      </ion-badge>\n    </h1>\n\n    <ion-row class=\"ion-padding\">\n      <ion-col size=\"3\">\n        Participio\n      </ion-col>\n      <ion-col size=\"3\">\n        <span [innerHTML]=\"conjugation.participioHTML\"></span>\n        <app-audio [textToPlay]=\"conjugation.participio\"></app-audio>\n      </ion-col>\n      <ion-col size=\"3\">\n        Gerundio\n      </ion-col>\n      <ion-col size=\"3\">\n        <span [innerHTML]=\"conjugation.gerundioHTML\"></span>\n        <app-audio [textToPlay]=\"conjugation.gerundio\"></app-audio>\n      </ion-col>\n      <ion-col size=\"3\">\n        Forma reflexiva\n      </ion-col>\n      <ion-col size=\"3\">\n        <span [innerHTML]=\"conjugation.verb + 'se'\"></span>\n        <app-audio [textToPlay]=\"conjugation.verb + 'se'\"></app-audio>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-list *ngFor=\"let group of groups\">\n      <ion-item  lines=\"full\">\n        <ion-label>{{group}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\"\n                     *ngFor=\"let tiempo of conjugation.conjugations[group] | keyvalue\">\n              <app-conjugation\n                [exercises]=\"exercises\"\n                [values]=\"tiempo.value\"\n                [tiempo]=\"tiempo.key\">\n              </app-conjugation>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n\n</div>\n\n");

/***/ }),

/***/ 3866:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/conjugations/containers/exercises/exercises.component.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-conjugations\n  [infinitive]=\"conjugation.verb\"\n  [exercises]=\"level\">\n</app-conjugations>\n\n<div>\n  Configurar ejercicios\n\n  Tiempos verbales a practicar:\n\n  Verbo/s a practicar:\n\n</div>\n\n<ion-icon name=\"barbell-outline\"></ion-icon>\n");

/***/ }),

/***/ 1154:
/*!******************************************************************************************!*\
  !*** ./src/app/conjugations/components/conjugation-list/conjugation-list.component.scss ***!
  \******************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25qdWdhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 356:
/*!**********************************************************************************!*\
  !*** ./src/app/conjugations/containers/conjugations/conjugations.component.scss ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = "ion-col {\n  padding-left: 0;\n}\n\nion-item {\n  font-size: 1.4em;\n  font-weight: 400;\n}\n\nion-badge {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmp1Z2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiY29uanVnYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbHtcbiAgcGFkZGluZy1sZWZ0OiAwXG59XG5cbmlvbi1pdGVte1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pb24tYmFkZ2V7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4XG59XG4iXX0= */";

/***/ }),

/***/ 5312:
/*!****************************************************************************!*\
  !*** ./src/app/conjugations/containers/exercises/exercises.component.scss ***!
  \****************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGVyY2lzZXMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_conjugations_conjugations_module_ts.js.map