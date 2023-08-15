"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_lesson_lesson_module_ts"],{

/***/ 7385:
/*!********************************************************************************************!*\
  !*** ./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularEditorComponent": function() { return /* binding */ AngularEditorComponent; },
/* harmony export */   "AngularEditorModule": function() { return /* binding */ AngularEditorModule; },
/* harmony export */   "AngularEditorService": function() { return /* binding */ AngularEditorService; },
/* harmony export */   "AngularEditorToolbarComponent": function() { return /* binding */ AngularEditorToolbarComponent; },
/* harmony export */   "ɵa": function() { return /* binding */ AeSelectComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 9400);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);













var _c0 = ["editor"];
var _c1 = ["editorWrapper"];
var _c2 = ["editorToolbar"];

function AngularEditorComponent_angular_editor_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "angular-editor-toolbar", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("execute", function AngularEditorComponent_angular_editor_toolbar_2_Template_angular_editor_toolbar_execute_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r6.executeCommand($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r1.id)("uploadUrl", ctx_r1.config.uploadUrl)("upload", ctx_r1.config.upload)("showToolbar", ctx_r1.config.showToolbar !== undefined ? ctx_r1.config.showToolbar : true)("fonts", ctx_r1.getFonts())("customClasses", ctx_r1.config.customClasses)("defaultFontName", ctx_r1.config.defaultFontName)("defaultFontSize", ctx_r1.config.defaultFontSize)("hiddenButtons", ctx_r1.config.toolbarHiddenButtons);
  }
}

function AngularEditorComponent_angular_editor_toolbar_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "angular-editor-toolbar", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("execute", function AngularEditorComponent_angular_editor_toolbar_9_Template_angular_editor_toolbar_execute_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r9.executeCommand($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r4.id)("uploadUrl", ctx_r4.config.uploadUrl)("upload", ctx_r4.config.upload)("showToolbar", ctx_r4.config.showToolbar !== undefined ? ctx_r4.config.showToolbar : true)("fonts", ctx_r4.getFonts())("customClasses", ctx_r4.config.customClasses)("defaultFontName", ctx_r4.config.defaultFontName)("defaultFontSize", ctx_r4.config.defaultFontSize)("hiddenButtons", ctx_r4.config.toolbarHiddenButtons);
  }
}

var _c3 = ["fileInput"];

function AngularEditorToolbarComponent_div_0_div_55_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ae-select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r5.customClassId = $event;
    })("change", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r7.setCustomClass(ctx_r7.customClassId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r3.customClassList)("ngModel", ctx_r3.customClassId)("disabled", ctx_r3.htmlMode)("hidden", ctx_r3.isButtonHidden("customClasses"));
  }
}

function AngularEditorToolbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r8.triggerCommand("undo");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r10.triggerCommand("redo");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r11.triggerCommand("bold");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r12.triggerCommand("italic");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r13.triggerCommand("underline");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r14.triggerCommand("strikeThrough");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r15.triggerCommand("subscript");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r16.triggerCommand("superscript");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r17.triggerCommand("justifyLeft");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r18.triggerCommand("justifyCenter");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r19.triggerCommand("justifyRight");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r20.triggerCommand("justifyFull");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r21.triggerCommand("indent");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r22.triggerCommand("outdent");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r23.triggerCommand("insertUnorderedList");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r24.triggerCommand("insertOrderedList");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ae-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r25.block = $event;
    })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r26.triggerCommand(ctx_r26.block);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "ae-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r27.fontName = $event;
    })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r28.setFontName(ctx_r28.fontName);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "ae-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r29.fontSize = $event;
    })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r30.setFontSize(ctx_r30.fontSize);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AngularEditorToolbarComponent_div_0_Template_input_change_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](46);

      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r31.insertColor(_r1.value, "textColor");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](46);

      var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r32.focus();
      return _r1.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "input", 38, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AngularEditorToolbarComponent_div_0_Template_input_change_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](51);

      var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r33.insertColor(_r2.value, "backgroundColor");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](51);

      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r34.focus();
      return _r2.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, AngularEditorToolbarComponent_div_0_div_55_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r35.insertUrl();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r36.triggerCommand("unlink");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AngularEditorToolbarComponent_div_0_Template_input_change_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r37.onFileChanged($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](62);

      var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r38.focus();
      return _r4.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r39.insertVideo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r40.triggerCommand("insertHorizontalRule");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r41.triggerCommand("removeFormat");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r42.triggerCommand("toggleEditorMode");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r0.isButtonHidden("undo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r0.isButtonHidden("redo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "bold-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("bold"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "italic-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("italic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "underline-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("underline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "strikeThrough-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("strikeThrough"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "subscript-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("subscript"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "superscript-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("superscript"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "justifyLeft-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyLeft"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "justifyCenter-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyCenter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "justifyRight-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyRight"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "justifyFull-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyFull"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "indent-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("indent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "outdent-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("outdent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "insertUnorderedList-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertUnorderedList"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "insertOrderedList-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertOrderedList"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.headings)("ngModel", ctx_r0.block)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.fonts)("ngModel", ctx_r0.fontName)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("fontName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.fontSizes)("ngModel", ctx_r0.fontSize)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("fontSize"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "foregroundColorPicker-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("textColor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "backgroundColorPicker-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("backgroundColor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0._customClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "link-" + ctx_r0.id)("disabled", ctx_r0.isLinkButtonDisabled)("hidden", ctx_r0.isButtonHidden("link"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "unlink-" + ctx_r0.id)("disabled", ctx_r0.htmlMode || !ctx_r0.linkSelected)("hidden", ctx_r0.isButtonHidden("unlink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "insertImage-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertImage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "insertVideo-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertVideo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "insertHorizontalRule-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertHorizontalRule"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "clearFormatting-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("removeFormat"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "toggleEditorMode-" + ctx_r0.id)("hidden", ctx_r0.isButtonHidden("toggleEditorMode"));
  }
}

var _c4 = ["labelButton"];

var _c5 = function _c5(a0, a1) {
  return {
    "selected": a0,
    "focused": a1
  };
};

function AeSelectComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AeSelectComponent_button_8_Template_button_click_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      var item_r3 = restoredCtx.$implicit;
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r5.optionSelect(item_r3, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r3 = ctx.$implicit;
    var i_r4 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c5, item_r3.value === ctx_r1.value, i_r4 === ctx_r1.optionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r3.label, " ");
  }
}

function AeSelectComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No items for select");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

var _c6 = function _c6(a0) {
  return {
    "ae-expanded": a0
  };
};

var AngularEditorService = /*#__PURE__*/function () {
  function AngularEditorService(http, doc) {
    var _this = this;

    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AngularEditorService);

    this.http = http;
    this.doc = doc;
    /**
     * save selection when the editor is focussed out
     */

    this.saveSelection = function () {
      if (_this.doc.getSelection) {
        var sel = _this.doc.getSelection();

        if (sel.getRangeAt && sel.rangeCount) {
          _this.savedSelection = sel.getRangeAt(0);
          _this.selectedText = sel.toString();
        }
      } else if (_this.doc.getSelection && _this.doc.createRange) {
        _this.savedSelection = document.createRange();
      } else {
        _this.savedSelection = null;
      }
    };
  }
  /**
   * Executed command from editor header buttons exclude toggleEditorMode
   * @param command string from triggerCommand
   */


  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AngularEditorService, [{
    key: "executeCommand",
    value: function executeCommand(command) {
      var commands = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre'];

      if (commands.includes(command)) {
        this.doc.execCommand('formatBlock', false, command);
        return;
      }

      this.doc.execCommand(command, false, null);
    }
    /**
     * Create URL link
     * @param url string from UI prompt
     */

  }, {
    key: "createLink",
    value: function createLink(url) {
      if (!url.includes('http')) {
        this.doc.execCommand('createlink', false, url);
      } else {
        var newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + '</a>';
        this.insertHtml(newUrl);
      }
    }
    /**
     * insert color either font or background
     *
     * @param color color to be inserted
     * @param where where the color has to be inserted either text/background
     */

  }, {
    key: "insertColor",
    value: function insertColor(color, where) {
      var restored = this.restoreSelection();

      if (restored) {
        if (where === 'textColor') {
          this.doc.execCommand('foreColor', false, color);
        } else {
          this.doc.execCommand('hiliteColor', false, color);
        }
      }
    }
    /**
     * Set font name
     * @param fontName string
     */

  }, {
    key: "setFontName",
    value: function setFontName(fontName) {
      this.doc.execCommand('fontName', false, fontName);
    }
    /**
     * Set font size
     * @param fontSize string
     */

  }, {
    key: "setFontSize",
    value: function setFontSize(fontSize) {
      this.doc.execCommand('fontSize', false, fontSize);
    }
    /**
     * Create raw HTML
     * @param html HTML string
     */

  }, {
    key: "insertHtml",
    value: function insertHtml(html) {
      var isHTMLInserted = this.doc.execCommand('insertHTML', false, html);

      if (!isHTMLInserted) {
        throw new Error('Unable to perform the operation');
      }
    }
    /**
     * restore selection when the editor is focused in
     *
     * saved selection when the editor is focused out
     */

  }, {
    key: "restoreSelection",
    value: function restoreSelection() {
      if (this.savedSelection) {
        if (this.doc.getSelection) {
          var sel = this.doc.getSelection();
          sel.removeAllRanges();
          sel.addRange(this.savedSelection);
          return true;
        } else if (this.doc.getSelection
        /*&& this.savedSelection.select*/
        ) {
            // this.savedSelection.select();
            return true;
          }
      } else {
        return false;
      }
    }
    /**
     * setTimeout used for execute 'saveSelection' method in next event loop iteration
     */

  }, {
    key: "executeInNextQueueIteration",
    value: function executeInNextQueueIteration(callbackFn) {
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e2;
      setTimeout(callbackFn, timeout);
    }
    /** check any selection is made or not */

  }, {
    key: "checkSelection",
    value: function checkSelection() {
      var selectedText = this.savedSelection.toString();

      if (selectedText.length === 0) {
        throw new Error('No Selection Made');
      }

      return true;
    }
    /**
     * Upload file to uploadUrl
     * @param file The file
     */

  }, {
    key: "uploadImage",
    value: function uploadImage(file) {
      var uploadData = new FormData();
      uploadData.append('file', file, file.name);
      return this.http.post(this.uploadUrl, uploadData, {
        reportProgress: true,
        observe: 'events',
        withCredentials: this.uploadWithCredentials
      });
    }
    /**
     * Insert image with Url
     * @param imageUrl The imageUrl.
     */

  }, {
    key: "insertImage",
    value: function insertImage(imageUrl) {
      this.doc.execCommand('insertImage', false, imageUrl);
    }
  }, {
    key: "setDefaultParagraphSeparator",
    value: function setDefaultParagraphSeparator(separator) {
      this.doc.execCommand('defaultParagraphSeparator', false, separator);
    }
  }, {
    key: "createCustomClass",
    value: function createCustomClass(customClass) {
      var newTag = this.selectedText;

      if (customClass) {
        var tagName = customClass.tag ? customClass.tag : 'span';
        newTag = '<' + tagName + ' class="' + customClass.class + '">' + this.selectedText + '</' + tagName + '>';
      }

      this.insertHtml(newTag);
    }
  }, {
    key: "insertVideo",
    value: function insertVideo(videoUrl) {
      if (videoUrl.match('www.youtube.com')) {
        this.insertYouTubeVideoTag(videoUrl);
      }

      if (videoUrl.match('vimeo.com')) {
        this.insertVimeoVideoTag(videoUrl);
      }
    }
  }, {
    key: "insertYouTubeVideoTag",
    value: function insertYouTubeVideoTag(videoUrl) {
      var id = videoUrl.split('v=')[1];
      var imageUrl = "https://img.youtube.com/vi/".concat(id, "/0.jpg");
      var thumbnail = "\n      <div style='position: relative'>\n        <a href='".concat(videoUrl, "' target='_blank'>\n          <img src=\"").concat(imageUrl, "\" alt=\"click to watch\"/>\n          <img style='position: absolute; left:200px; top:140px'\n          src=\"https://img.icons8.com/color/96/000000/youtube-play.png\"/>\n        </a>\n      </div>");
      this.insertHtml(thumbnail);
    }
  }, {
    key: "insertVimeoVideoTag",
    value: function insertVimeoVideoTag(videoUrl) {
      var _this2 = this;

      var sub = this.http.get("https://vimeo.com/api/oembed.json?url=".concat(videoUrl)).subscribe(function (data) {
        var imageUrl = data.thumbnail_url_with_play_button;
        var thumbnail = "<div>\n        <a href='".concat(videoUrl, "' target='_blank'>\n          <img src=\"").concat(imageUrl, "\" alt=\"").concat(data.title, "\"/>\n        </a>\n      </div>");

        _this2.insertHtml(thumbnail);

        sub.unsubscribe();
      });
    }
  }, {
    key: "nextNode",
    value: function nextNode(node) {
      if (node.hasChildNodes()) {
        return node.firstChild;
      } else {
        while (node && !node.nextSibling) {
          node = node.parentNode;
        }

        if (!node) {
          return null;
        }

        return node.nextSibling;
      }
    }
  }, {
    key: "getRangeSelectedNodes",
    value: function getRangeSelectedNodes(range, includePartiallySelectedContainers) {
      var node = range.startContainer;
      var endNode = range.endContainer;
      var rangeNodes = []; // Special case for a range that is contained within a single node

      if (node === endNode) {
        rangeNodes = [node];
      } else {
        // Iterate nodes until we hit the end container
        while (node && node !== endNode) {
          rangeNodes.push(node = this.nextNode(node));
        } // Add partially selected nodes at the start of the range


        node = range.startContainer;

        while (node && node !== range.commonAncestorContainer) {
          rangeNodes.unshift(node);
          node = node.parentNode;
        }
      } // Add ancestors of the range container, if required


      if (includePartiallySelectedContainers) {
        node = range.commonAncestorContainer;

        while (node) {
          rangeNodes.push(node);
          node = node.parentNode;
        }
      }

      return rangeNodes;
    }
  }, {
    key: "getSelectedNodes",
    value: function getSelectedNodes() {
      var nodes = [];

      if (this.doc.getSelection) {
        var sel = this.doc.getSelection();

        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
          nodes.push.apply(nodes, this.getRangeSelectedNodes(sel.getRangeAt(i), true));
        }
      }

      return nodes;
    }
  }, {
    key: "replaceWithOwnChildren",
    value: function replaceWithOwnChildren(el) {
      var parent = el.parentNode;

      while (el.hasChildNodes()) {
        parent.insertBefore(el.firstChild, el);
      }

      parent.removeChild(el);
    }
  }, {
    key: "removeSelectedElements",
    value: function removeSelectedElements(tagNames) {
      var _this3 = this;

      var tagNamesArray = tagNames.toLowerCase().split(',');
      this.getSelectedNodes().forEach(function (node) {
        if (node.nodeType === 1 && tagNamesArray.indexOf(node.tagName.toLowerCase()) > -1) {
          // Remove the node and replace it with its children
          _this3.replaceWithOwnChildren(node);
        }
      });
    }
  }]);

  return AngularEditorService;
}();

AngularEditorService.ɵfac = function AngularEditorService_Factory(t) {
  return new (t || AngularEditorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
};

AngularEditorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AngularEditorService,
  factory: AngularEditorService.ɵfac
});

AngularEditorService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AngularEditorService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
      }]
    }];
  }, null);
})();

var angularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: 'auto',
  minHeight: '0',
  maxHeight: 'auto',
  width: 'auto',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Enter text here...',
  defaultParagraphSeparator: '',
  defaultFontName: '',
  defaultFontSize: '',
  fonts: [{
    class: 'arial',
    name: 'Arial'
  }, {
    class: 'times-new-roman',
    name: 'Times New Roman'
  }, {
    class: 'calibri',
    name: 'Calibri'
  }, {
    class: 'comic-sans-ms',
    name: 'Comic Sans MS'
  }],
  uploadUrl: 'v1/image',
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: 'top',
  outline: true
  /*toolbarHiddenButtons: [
    ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
    ['heading', 'fontName', 'fontSize', 'color'],
    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
    ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
    ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
    ['link', 'unlink', 'image', 'video']
  ]*/

};

function isDefined(value) {
  return value !== undefined && value !== null;
}

var AngularEditorComponent = /*#__PURE__*/function () {
  function AngularEditorComponent(r, editorService, doc, sanitizer, cdRef, defaultTabIndex, autoFocus) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AngularEditorComponent);

    this.r = r;
    this.editorService = editorService;
    this.doc = doc;
    this.sanitizer = sanitizer;
    this.cdRef = cdRef;
    this.autoFocus = autoFocus;
    this.modeVisual = true;
    this.showPlaceholder = false;
    this.disabled = false;
    this.focused = false;
    this.touched = false;
    this.changed = false;
    this.id = '';
    this.config = angularEditorConfig;
    this.placeholder = '';
    this.viewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /** emits `blur` event when focused out from the textarea */
    // eslint-disable-next-line @angular-eslint/no-output-native, @angular-eslint/no-output-rename

    this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /** emits `focus` event when focused in to the textarea */
    // eslint-disable-next-line @angular-eslint/no-output-rename, @angular-eslint/no-output-native

    this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.tabindex = -1;
    var parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AngularEditorComponent, [{
    key: "onFocus",
    value: function onFocus() {
      this.focus();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.config.toolbarPosition = this.config.toolbarPosition ? this.config.toolbarPosition : angularEditorConfig.toolbarPosition;
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      if (isDefined(this.autoFocus)) {
        this.focus();
      }
    }
  }, {
    key: "onPaste",
    value: function onPaste(event) {
      if (this.config.rawPaste) {
        event.preventDefault();
        var text = event.clipboardData.getData('text/plain');
        document.execCommand('insertHTML', false, text);
        return text;
      }
    }
    /**
     * Executed command from editor header buttons
     * @param command string from triggerCommand
     */

  }, {
    key: "executeCommand",
    value: function executeCommand(command) {
      this.focus();

      if (command === 'focus') {
        return;
      }

      if (command === 'toggleEditorMode') {
        this.toggleEditorMode(this.modeVisual);
      } else if (command !== '') {
        if (command === 'clear') {
          this.editorService.removeSelectedElements(this.getCustomTags());
          this.onContentChange(this.textArea.nativeElement);
        } else if (command === 'default') {
          this.editorService.removeSelectedElements('h1,h2,h3,h4,h5,h6,p,pre');
          this.onContentChange(this.textArea.nativeElement);
        } else {
          this.editorService.executeCommand(command);
        }

        this.exec();
      }
    }
    /**
     * focus event
     */

  }, {
    key: "onTextAreaFocus",
    value: function onTextAreaFocus(event) {
      var _this4 = this;

      if (this.focused) {
        event.stopPropagation();
        return;
      }

      this.focused = true;
      this.focusEvent.emit(event);

      if (!this.touched || !this.changed) {
        this.editorService.executeInNextQueueIteration(function () {
          _this4.configure();

          _this4.touched = true;
        });
      }
    }
    /**
     * @description fires when cursor leaves textarea
     */

  }, {
    key: "onTextAreaMouseOut",
    value: function onTextAreaMouseOut(event) {
      this.editorService.saveSelection();
    }
    /**
     * blur event
     */

  }, {
    key: "onTextAreaBlur",
    value: function onTextAreaBlur(event) {
      /**
       * save selection if focussed out
       */
      this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);

      if (typeof this.onTouched === 'function') {
        this.onTouched();
      }

      if (event.relatedTarget !== null) {
        var parent = event.relatedTarget.parentElement;

        if (!parent.classList.contains('angular-editor-toolbar-set') && !parent.classList.contains('ae-picker')) {
          this.blurEvent.emit(event);
          this.focused = false;
        }
      }
    }
    /**
     *  focus the text area when the editor is focused
     */

  }, {
    key: "focus",
    value: function focus() {
      if (this.modeVisual) {
        this.textArea.nativeElement.focus();
      } else {
        var sourceText = this.doc.getElementById('sourceText' + this.id);
        sourceText.focus();
        this.focused = true;
      }
    }
    /**
     * Executed from the contenteditable section while the input property changes
     * @param element html element from contenteditable
     */

  }, {
    key: "onContentChange",
    value: function onContentChange(element) {
      var html = '';

      if (this.modeVisual) {
        html = element.innerHTML;
      } else {
        html = element.innerText;
      }

      if (!html || html === '<br>') {
        html = '';
      }

      if (typeof this.onChange === 'function') {
        this.onChange(this.config.sanitize || this.config.sanitize === undefined ? this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_3__.SecurityContext.HTML, html) : html);

        if (!html !== this.showPlaceholder) {
          this.togglePlaceholder(this.showPlaceholder);
        }
      }

      this.changed = true;
    }
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param fn a function
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = function (e) {
        return e === '<br>' ? fn('') : fn(e);
      };
    }
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param fn a function
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Write a new value to the element.
     *
     * @param value value to be executed when there is a change in contenteditable
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      if ((!value || value === '<br>' || value === '') !== this.showPlaceholder) {
        this.togglePlaceholder(this.showPlaceholder);
      }

      if (value === undefined || value === '' || value === '<br>') {
        value = null;
      }

      this.refreshView(value);
    }
    /**
     * refresh view/HTML of the editor
     *
     * @param value html string from the editor
     */

  }, {
    key: "refreshView",
    value: function refreshView(value) {
      var normalizedValue = value === null ? '' : value;
      this.r.setProperty(this.textArea.nativeElement, 'innerHTML', normalizedValue);
      return;
    }
    /**
     * toggles placeholder based on input string
     *
     * @param value A HTML string from the editor
     */

  }, {
    key: "togglePlaceholder",
    value: function togglePlaceholder(value) {
      if (!value) {
        this.r.addClass(this.editorWrapper.nativeElement, 'show-placeholder');
        this.showPlaceholder = true;
      } else {
        this.r.removeClass(this.editorWrapper.nativeElement, 'show-placeholder');
        this.showPlaceholder = false;
      }
    }
    /**
     * Implements disabled state for this element
     *
     * @param isDisabled Disabled flag
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      var div = this.textArea.nativeElement;
      var action = isDisabled ? 'addClass' : 'removeClass';
      this.r[action](div, 'disabled');
      this.disabled = isDisabled;
    }
    /**
     * toggles editor mode based on bToSource bool
     *
     * @param bToSource A boolean value from the editor
     */

  }, {
    key: "toggleEditorMode",
    value: function toggleEditorMode(bToSource) {
      var _this5 = this;

      var oContent;
      var editableElement = this.textArea.nativeElement;

      if (bToSource) {
        oContent = this.r.createText(editableElement.innerHTML);
        this.r.setProperty(editableElement, 'innerHTML', '');
        this.r.setProperty(editableElement, 'contentEditable', false);
        var oPre = this.r.createElement('pre');
        this.r.setStyle(oPre, 'margin', '0');
        this.r.setStyle(oPre, 'outline', 'none');
        var oCode = this.r.createElement('code');
        this.r.setProperty(oCode, 'id', 'sourceText' + this.id);
        this.r.setStyle(oCode, 'display', 'block');
        this.r.setStyle(oCode, 'white-space', 'pre-wrap');
        this.r.setStyle(oCode, 'word-break', 'keep-all');
        this.r.setStyle(oCode, 'outline', 'none');
        this.r.setStyle(oCode, 'margin', '0');
        this.r.setStyle(oCode, 'background-color', '#fff5b9');
        this.r.setProperty(oCode, 'contentEditable', true);
        this.r.appendChild(oCode, oContent);
        this.focusInstance = this.r.listen(oCode, 'focus', function (event) {
          return _this5.onTextAreaFocus(event);
        });
        this.blurInstance = this.r.listen(oCode, 'blur', function (event) {
          return _this5.onTextAreaBlur(event);
        });
        this.r.appendChild(oPre, oCode);
        this.r.appendChild(editableElement, oPre); // ToDo move to service

        this.doc.execCommand('defaultParagraphSeparator', false, 'div');
        this.modeVisual = false;
        this.viewMode.emit(false);
        oCode.focus();
      } else {
        if (this.doc.querySelectorAll) {
          this.r.setProperty(editableElement, 'innerHTML', editableElement.innerText);
        } else {
          oContent = this.doc.createRange();
          oContent.selectNodeContents(editableElement.firstChild);
          this.r.setProperty(editableElement, 'innerHTML', oContent.toString());
        }

        this.r.setProperty(editableElement, 'contentEditable', true);
        this.modeVisual = true;
        this.viewMode.emit(true);
        this.onContentChange(editableElement);
        editableElement.focus();
      }

      this.editorToolbar.setEditorMode(!this.modeVisual);
    }
    /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     */

  }, {
    key: "exec",
    value: function exec() {
      this.editorToolbar.triggerButtons();
      var userSelection;

      if (this.doc.getSelection) {
        userSelection = this.doc.getSelection();
        this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
      }

      var a = userSelection.focusNode;
      var els = [];

      while (a && a.id !== 'editor') {
        els.unshift(a);
        a = a.parentNode;
      }

      this.editorToolbar.triggerBlocks(els);
    }
  }, {
    key: "configure",
    value: function configure() {
      this.editorService.uploadUrl = this.config.uploadUrl;
      this.editorService.uploadWithCredentials = this.config.uploadWithCredentials;

      if (this.config.defaultParagraphSeparator) {
        this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
      }

      if (this.config.defaultFontName) {
        this.editorService.setFontName(this.config.defaultFontName);
      }

      if (this.config.defaultFontSize) {
        this.editorService.setFontSize(this.config.defaultFontSize);
      }
    }
  }, {
    key: "getFonts",
    value: function getFonts() {
      var fonts = this.config.fonts ? this.config.fonts : angularEditorConfig.fonts;
      return fonts.map(function (x) {
        return {
          label: x.name,
          value: x.name
        };
      });
    }
  }, {
    key: "getCustomTags",
    value: function getCustomTags() {
      var tags = ['span'];
      this.config.customClasses.forEach(function (x) {
        if (x.tag !== undefined) {
          if (!tags.includes(x.tag)) {
            tags.push(x.tag);
          }
        }
      });
      return tags.join(',');
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.blurInstance) {
        this.blurInstance();
      }

      if (this.focusInstance) {
        this.focusInstance();
      }
    }
  }, {
    key: "filterStyles",
    value: function filterStyles(html) {
      html = html.replace('position: fixed;', '');
      return html;
    }
  }]);

  return AngularEditorComponent;
}();

AngularEditorComponent.ɵfac = function AngularEditorComponent_Factory(t) {
  return new (t || AngularEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](AngularEditorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('autofocus'));
};

AngularEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AngularEditorComponent,
  selectors: [["angular-editor"]],
  viewQuery: function AngularEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.textArea = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editorWrapper = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editorToolbar = _t.first);
    }
  },
  hostVars: 1,
  hostBindings: function AngularEditorComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function AngularEditorComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", ctx.tabindex);
    }
  },
  inputs: {
    id: "id",
    config: "config",
    placeholder: "placeholder",
    tabIndex: "tabIndex"
  },
  outputs: {
    viewMode: "viewMode",
    blurEvent: "blur",
    focusEvent: "focus",
    html: "html"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function () {
      return AngularEditorComponent;
    }),
    multi: true
  }, AngularEditorService])],
  decls: 10,
  vars: 19,
  consts: [[1, "angular-editor"], ["angularEditor", ""], [3, "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons", "execute", 4, "ngIf"], [1, "angular-editor-wrapper"], ["editorWrapper", ""], [1, "angular-editor-textarea", 3, "input", "focus", "blur", "click", "keyup", "mouseout", "paste"], ["editor", ""], [1, "angular-editor-placeholder"], [3, "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons", "execute"], ["editorToolbar", ""]],
  template: function AngularEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AngularEditorComponent_angular_editor_toolbar_2_Template, 2, 9, "angular-editor-toolbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AngularEditorComponent_Template_div_input_5_listener($event) {
        return ctx.onContentChange($event.target);
      })("focus", function AngularEditorComponent_Template_div_focus_5_listener($event) {
        return ctx.onTextAreaFocus($event);
      })("blur", function AngularEditorComponent_Template_div_blur_5_listener($event) {
        return ctx.onTextAreaBlur($event);
      })("click", function AngularEditorComponent_Template_div_click_5_listener() {
        return ctx.exec();
      })("keyup", function AngularEditorComponent_Template_div_keyup_5_listener() {
        return ctx.exec();
      })("mouseout", function AngularEditorComponent_Template_div_mouseout_5_listener($event) {
        return ctx.onTextAreaMouseOut($event);
      })("paste", function AngularEditorComponent_Template_div_paste_5_listener($event) {
        return ctx.onPaste($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AngularEditorComponent_angular_editor_toolbar_9_Template, 2, 9, "angular-editor-toolbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx.config.width)("min-width", ctx.config.minWidth);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.config.toolbarPosition === "top");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx.config.height)("min-height", ctx.config.minHeight)("max-height", ctx.config.maxHeight)("outline", ctx.config.outline === false ? "none" : undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("contenteditable", ctx.config.editable)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("translate", ctx.config.translate)("spellcheck", ctx.config.spellcheck);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.placeholder || ctx.config["placeholder"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.config.toolbarPosition === "bottom");
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, AngularEditorToolbarComponent];
  },
  styles: ["@charset \"UTF-8\";\n@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse[_ngcontent-%COMP%]{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}[_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%]{filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:\"\uF000\"}.fa-music[_ngcontent-%COMP%]:before{content:\"\uF001\"}.fa-search[_ngcontent-%COMP%]:before{content:\"\uF002\"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:\"\uF003\"}.fa-heart[_ngcontent-%COMP%]:before{content:\"\uF004\"}.fa-star[_ngcontent-%COMP%]:before{content:\"\uF005\"}.fa-star-o[_ngcontent-%COMP%]:before{content:\"\uF006\"}.fa-user[_ngcontent-%COMP%]:before{content:\"\uF007\"}.fa-film[_ngcontent-%COMP%]:before{content:\"\uF008\"}.fa-th-large[_ngcontent-%COMP%]:before{content:\"\uF009\"}.fa-th[_ngcontent-%COMP%]:before{content:\"\uF00A\"}.fa-th-list[_ngcontent-%COMP%]:before{content:\"\uF00B\"}.fa-check[_ngcontent-%COMP%]:before{content:\"\uF00C\"}.fa-close[_ngcontent-%COMP%]:before, .fa-remove[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:\"\uF00D\"}.fa-search-plus[_ngcontent-%COMP%]:before{content:\"\uF00E\"}.fa-search-minus[_ngcontent-%COMP%]:before{content:\"\uF010\"}.fa-power-off[_ngcontent-%COMP%]:before{content:\"\uF011\"}.fa-signal[_ngcontent-%COMP%]:before{content:\"\uF012\"}.fa-cog[_ngcontent-%COMP%]:before, .fa-gear[_ngcontent-%COMP%]:before{content:\"\uF013\"}.fa-trash-o[_ngcontent-%COMP%]:before{content:\"\uF014\"}.fa-home[_ngcontent-%COMP%]:before{content:\"\uF015\"}.fa-file-o[_ngcontent-%COMP%]:before{content:\"\uF016\"}.fa-clock-o[_ngcontent-%COMP%]:before{content:\"\uF017\"}.fa-road[_ngcontent-%COMP%]:before{content:\"\uF018\"}.fa-download[_ngcontent-%COMP%]:before{content:\"\uF019\"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:\"\uF01A\"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:\"\uF01B\"}.fa-inbox[_ngcontent-%COMP%]:before{content:\"\uF01C\"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:\"\uF01D\"}.fa-repeat[_ngcontent-%COMP%]:before, .fa-rotate-right[_ngcontent-%COMP%]:before{content:\"\uF01E\"}.fa-refresh[_ngcontent-%COMP%]:before{content:\"\uF021\"}.fa-list-alt[_ngcontent-%COMP%]:before{content:\"\uF022\"}.fa-lock[_ngcontent-%COMP%]:before{content:\"\uF023\"}.fa-flag[_ngcontent-%COMP%]:before{content:\"\uF024\"}.fa-headphones[_ngcontent-%COMP%]:before{content:\"\uF025\"}.fa-volume-off[_ngcontent-%COMP%]:before{content:\"\uF026\"}.fa-volume-down[_ngcontent-%COMP%]:before{content:\"\uF027\"}.fa-volume-up[_ngcontent-%COMP%]:before{content:\"\uF028\"}.fa-qrcode[_ngcontent-%COMP%]:before{content:\"\uF029\"}.fa-barcode[_ngcontent-%COMP%]:before{content:\"\uF02A\"}.fa-tag[_ngcontent-%COMP%]:before{content:\"\uF02B\"}.fa-tags[_ngcontent-%COMP%]:before{content:\"\uF02C\"}.fa-book[_ngcontent-%COMP%]:before{content:\"\uF02D\"}.fa-bookmark[_ngcontent-%COMP%]:before{content:\"\uF02E\"}.fa-print[_ngcontent-%COMP%]:before{content:\"\uF02F\"}.fa-camera[_ngcontent-%COMP%]:before{content:\"\uF030\"}.fa-font[_ngcontent-%COMP%]:before{content:\"\uF031\"}.fa-bold[_ngcontent-%COMP%]:before{content:\"\uF032\"}.fa-italic[_ngcontent-%COMP%]:before{content:\"\uF033\"}.fa-text-height[_ngcontent-%COMP%]:before{content:\"\uF034\"}.fa-text-width[_ngcontent-%COMP%]:before{content:\"\uF035\"}.fa-align-left[_ngcontent-%COMP%]:before{content:\"\uF036\"}.fa-align-center[_ngcontent-%COMP%]:before{content:\"\uF037\"}.fa-align-right[_ngcontent-%COMP%]:before{content:\"\uF038\"}.fa-align-justify[_ngcontent-%COMP%]:before{content:\"\uF039\"}.fa-list[_ngcontent-%COMP%]:before{content:\"\uF03A\"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:\"\uF03B\"}.fa-indent[_ngcontent-%COMP%]:before{content:\"\uF03C\"}.fa-video-camera[_ngcontent-%COMP%]:before{content:\"\uF03D\"}.fa-image[_ngcontent-%COMP%]:before, .fa-photo[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:\"\uF03E\"}.fa-pencil[_ngcontent-%COMP%]:before{content:\"\uF040\"}.fa-map-marker[_ngcontent-%COMP%]:before{content:\"\uF041\"}.fa-adjust[_ngcontent-%COMP%]:before{content:\"\uF042\"}.fa-tint[_ngcontent-%COMP%]:before{content:\"\uF043\"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:\"\uF044\"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:\"\uF045\"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:\"\uF046\"}.fa-arrows[_ngcontent-%COMP%]:before{content:\"\uF047\"}.fa-step-backward[_ngcontent-%COMP%]:before{content:\"\uF048\"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:\"\uF049\"}.fa-backward[_ngcontent-%COMP%]:before{content:\"\uF04A\"}.fa-play[_ngcontent-%COMP%]:before{content:\"\uF04B\"}.fa-pause[_ngcontent-%COMP%]:before{content:\"\uF04C\"}.fa-stop[_ngcontent-%COMP%]:before{content:\"\uF04D\"}.fa-forward[_ngcontent-%COMP%]:before{content:\"\uF04E\"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:\"\uF050\"}.fa-step-forward[_ngcontent-%COMP%]:before{content:\"\uF051\"}.fa-eject[_ngcontent-%COMP%]:before{content:\"\uF052\"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:\"\uF053\"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:\"\uF054\"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:\"\uF055\"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:\"\uF056\"}.fa-times-circle[_ngcontent-%COMP%]:before{content:\"\uF057\"}.fa-check-circle[_ngcontent-%COMP%]:before{content:\"\uF058\"}.fa-question-circle[_ngcontent-%COMP%]:before{content:\"\uF059\"}.fa-info-circle[_ngcontent-%COMP%]:before{content:\"\uF05A\"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:\"\uF05B\"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05C\"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05D\"}.fa-ban[_ngcontent-%COMP%]:before{content:\"\uF05E\"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF060\"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF061\"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF062\"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF063\"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:\"\uF064\"}.fa-expand[_ngcontent-%COMP%]:before{content:\"\uF065\"}.fa-compress[_ngcontent-%COMP%]:before{content:\"\uF066\"}.fa-plus[_ngcontent-%COMP%]:before{content:\"\uF067\"}.fa-minus[_ngcontent-%COMP%]:before{content:\"\uF068\"}.fa-asterisk[_ngcontent-%COMP%]:before{content:\"\uF069\"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:\"\uF06A\"}.fa-gift[_ngcontent-%COMP%]:before{content:\"\uF06B\"}.fa-leaf[_ngcontent-%COMP%]:before{content:\"\uF06C\"}.fa-fire[_ngcontent-%COMP%]:before{content:\"\uF06D\"}.fa-eye[_ngcontent-%COMP%]:before{content:\"\uF06E\"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:\"\uF070\"}.fa-exclamation-triangle[_ngcontent-%COMP%]:before, .fa-warning[_ngcontent-%COMP%]:before{content:\"\uF071\"}.fa-plane[_ngcontent-%COMP%]:before{content:\"\uF072\"}.fa-calendar[_ngcontent-%COMP%]:before{content:\"\uF073\"}.fa-random[_ngcontent-%COMP%]:before{content:\"\uF074\"}.fa-comment[_ngcontent-%COMP%]:before{content:\"\uF075\"}.fa-magnet[_ngcontent-%COMP%]:before{content:\"\uF076\"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:\"\uF077\"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:\"\uF078\"}.fa-retweet[_ngcontent-%COMP%]:before{content:\"\uF079\"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:\"\uF07A\"}.fa-folder[_ngcontent-%COMP%]:before{content:\"\uF07B\"}.fa-folder-open[_ngcontent-%COMP%]:before{content:\"\uF07C\"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:\"\uF07D\"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:\"\uF07E\"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:\"\uF080\"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:\"\uF081\"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:\"\uF082\"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:\"\uF083\"}.fa-key[_ngcontent-%COMP%]:before{content:\"\uF084\"}.fa-cogs[_ngcontent-%COMP%]:before, .fa-gears[_ngcontent-%COMP%]:before{content:\"\uF085\"}.fa-comments[_ngcontent-%COMP%]:before{content:\"\uF086\"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:\"\uF087\"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:\"\uF088\"}.fa-star-half[_ngcontent-%COMP%]:before{content:\"\uF089\"}.fa-heart-o[_ngcontent-%COMP%]:before{content:\"\uF08A\"}.fa-sign-out[_ngcontent-%COMP%]:before{content:\"\uF08B\"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:\"\uF08C\"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:\"\uF08D\"}.fa-external-link[_ngcontent-%COMP%]:before{content:\"\uF08E\"}.fa-sign-in[_ngcontent-%COMP%]:before{content:\"\uF090\"}.fa-trophy[_ngcontent-%COMP%]:before{content:\"\uF091\"}.fa-github-square[_ngcontent-%COMP%]:before{content:\"\uF092\"}.fa-upload[_ngcontent-%COMP%]:before{content:\"\uF093\"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:\"\uF094\"}.fa-phone[_ngcontent-%COMP%]:before{content:\"\uF095\"}.fa-square-o[_ngcontent-%COMP%]:before{content:\"\uF096\"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:\"\uF097\"}.fa-phone-square[_ngcontent-%COMP%]:before{content:\"\uF098\"}.fa-twitter[_ngcontent-%COMP%]:before{content:\"\uF099\"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:\"\uF09A\"}.fa-github[_ngcontent-%COMP%]:before{content:\"\uF09B\"}.fa-unlock[_ngcontent-%COMP%]:before{content:\"\uF09C\"}.fa-credit-card[_ngcontent-%COMP%]:before{content:\"\uF09D\"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:\"\uF09E\"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:\"\uF0A0\"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:\"\uF0A1\"}.fa-bell[_ngcontent-%COMP%]:before{content:\"\uF0F3\"}.fa-certificate[_ngcontent-%COMP%]:before{content:\"\uF0A3\"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:\"\uF0A4\"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:\"\uF0A5\"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:\"\uF0A6\"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:\"\uF0A7\"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:\"\uF0A8\"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:\"\uF0A9\"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:\"\uF0AA\"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:\"\uF0AB\"}.fa-globe[_ngcontent-%COMP%]:before{content:\"\uF0AC\"}.fa-wrench[_ngcontent-%COMP%]:before{content:\"\uF0AD\"}.fa-tasks[_ngcontent-%COMP%]:before{content:\"\uF0AE\"}.fa-filter[_ngcontent-%COMP%]:before{content:\"\uF0B0\"}.fa-briefcase[_ngcontent-%COMP%]:before{content:\"\uF0B1\"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:\"\uF0B2\"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:\"\uF0C0\"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:\"\uF0C1\"}.fa-cloud[_ngcontent-%COMP%]:before{content:\"\uF0C2\"}.fa-flask[_ngcontent-%COMP%]:before{content:\"\uF0C3\"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:\"\uF0C4\"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:\"\uF0C5\"}.fa-paperclip[_ngcontent-%COMP%]:before{content:\"\uF0C6\"}.fa-floppy-o[_ngcontent-%COMP%]:before, .fa-save[_ngcontent-%COMP%]:before{content:\"\uF0C7\"}.fa-square[_ngcontent-%COMP%]:before{content:\"\uF0C8\"}.fa-bars[_ngcontent-%COMP%]:before, .fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before{content:\"\uF0C9\"}.fa-list-ul[_ngcontent-%COMP%]:before{content:\"\uF0CA\"}.fa-list-ol[_ngcontent-%COMP%]:before{content:\"\uF0CB\"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:\"\uF0CC\"}.fa-underline[_ngcontent-%COMP%]:before{content:\"\uF0CD\"}.fa-table[_ngcontent-%COMP%]:before{content:\"\uF0CE\"}.fa-magic[_ngcontent-%COMP%]:before{content:\"\uF0D0\"}.fa-truck[_ngcontent-%COMP%]:before{content:\"\uF0D1\"}.fa-pinterest[_ngcontent-%COMP%]:before{content:\"\uF0D2\"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:\"\uF0D3\"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0D4\"}.fa-google-plus[_ngcontent-%COMP%]:before{content:\"\uF0D5\"}.fa-money[_ngcontent-%COMP%]:before{content:\"\uF0D6\"}.fa-caret-down[_ngcontent-%COMP%]:before{content:\"\uF0D7\"}.fa-caret-up[_ngcontent-%COMP%]:before{content:\"\uF0D8\"}.fa-caret-left[_ngcontent-%COMP%]:before{content:\"\uF0D9\"}.fa-caret-right[_ngcontent-%COMP%]:before{content:\"\uF0DA\"}.fa-columns[_ngcontent-%COMP%]:before{content:\"\uF0DB\"}.fa-sort[_ngcontent-%COMP%]:before, .fa-unsorted[_ngcontent-%COMP%]:before{content:\"\uF0DC\"}.fa-sort-desc[_ngcontent-%COMP%]:before, .fa-sort-down[_ngcontent-%COMP%]:before{content:\"\uF0DD\"}.fa-sort-asc[_ngcontent-%COMP%]:before, .fa-sort-up[_ngcontent-%COMP%]:before{content:\"\uF0DE\"}.fa-envelope[_ngcontent-%COMP%]:before{content:\"\uF0E0\"}.fa-linkedin[_ngcontent-%COMP%]:before{content:\"\uF0E1\"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:\"\uF0E2\"}.fa-gavel[_ngcontent-%COMP%]:before, .fa-legal[_ngcontent-%COMP%]:before{content:\"\uF0E3\"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:\"\uF0E4\"}.fa-comment-o[_ngcontent-%COMP%]:before{content:\"\uF0E5\"}.fa-comments-o[_ngcontent-%COMP%]:before{content:\"\uF0E6\"}.fa-bolt[_ngcontent-%COMP%]:before, .fa-flash[_ngcontent-%COMP%]:before{content:\"\uF0E7\"}.fa-sitemap[_ngcontent-%COMP%]:before{content:\"\uF0E8\"}.fa-umbrella[_ngcontent-%COMP%]:before{content:\"\uF0E9\"}.fa-clipboard[_ngcontent-%COMP%]:before, .fa-paste[_ngcontent-%COMP%]:before{content:\"\uF0EA\"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:\"\uF0EB\"}.fa-exchange[_ngcontent-%COMP%]:before{content:\"\uF0EC\"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:\"\uF0ED\"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:\"\uF0EE\"}.fa-user-md[_ngcontent-%COMP%]:before{content:\"\uF0F0\"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:\"\uF0F1\"}.fa-suitcase[_ngcontent-%COMP%]:before{content:\"\uF0F2\"}.fa-bell-o[_ngcontent-%COMP%]:before{content:\"\uF0A2\"}.fa-coffee[_ngcontent-%COMP%]:before{content:\"\uF0F4\"}.fa-cutlery[_ngcontent-%COMP%]:before{content:\"\uF0F5\"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:\"\uF0F6\"}.fa-building-o[_ngcontent-%COMP%]:before{content:\"\uF0F7\"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:\"\uF0F8\"}.fa-ambulance[_ngcontent-%COMP%]:before{content:\"\uF0F9\"}.fa-medkit[_ngcontent-%COMP%]:before{content:\"\uF0FA\"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:\"\uF0FB\"}.fa-beer[_ngcontent-%COMP%]:before{content:\"\uF0FC\"}.fa-h-square[_ngcontent-%COMP%]:before{content:\"\uF0FD\"}.fa-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0FE\"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:\"\uF100\"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:\"\uF101\"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:\"\uF102\"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:\"\uF103\"}.fa-angle-left[_ngcontent-%COMP%]:before{content:\"\uF104\"}.fa-angle-right[_ngcontent-%COMP%]:before{content:\"\uF105\"}.fa-angle-up[_ngcontent-%COMP%]:before{content:\"\uF106\"}.fa-angle-down[_ngcontent-%COMP%]:before{content:\"\uF107\"}.fa-desktop[_ngcontent-%COMP%]:before{content:\"\uF108\"}.fa-laptop[_ngcontent-%COMP%]:before{content:\"\uF109\"}.fa-tablet[_ngcontent-%COMP%]:before{content:\"\uF10A\"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:\"\uF10B\"}.fa-circle-o[_ngcontent-%COMP%]:before{content:\"\uF10C\"}.fa-quote-left[_ngcontent-%COMP%]:before{content:\"\uF10D\"}.fa-quote-right[_ngcontent-%COMP%]:before{content:\"\uF10E\"}.fa-spinner[_ngcontent-%COMP%]:before{content:\"\uF110\"}.fa-circle[_ngcontent-%COMP%]:before{content:\"\uF111\"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:\"\uF112\"}.fa-github-alt[_ngcontent-%COMP%]:before{content:\"\uF113\"}.fa-folder-o[_ngcontent-%COMP%]:before{content:\"\uF114\"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:\"\uF115\"}.fa-smile-o[_ngcontent-%COMP%]:before{content:\"\uF118\"}.fa-frown-o[_ngcontent-%COMP%]:before{content:\"\uF119\"}.fa-meh-o[_ngcontent-%COMP%]:before{content:\"\uF11A\"}.fa-gamepad[_ngcontent-%COMP%]:before{content:\"\uF11B\"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:\"\uF11C\"}.fa-flag-o[_ngcontent-%COMP%]:before{content:\"\uF11D\"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:\"\uF11E\"}.fa-terminal[_ngcontent-%COMP%]:before{content:\"\uF120\"}.fa-code[_ngcontent-%COMP%]:before{content:\"\uF121\"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:\"\uF122\"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:\"\uF123\"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:\"\uF124\"}.fa-crop[_ngcontent-%COMP%]:before{content:\"\uF125\"}.fa-code-fork[_ngcontent-%COMP%]:before{content:\"\uF126\"}.fa-chain-broken[_ngcontent-%COMP%]:before, .fa-unlink[_ngcontent-%COMP%]:before{content:\"\uF127\"}.fa-question[_ngcontent-%COMP%]:before{content:\"\uF128\"}.fa-info[_ngcontent-%COMP%]:before{content:\"\uF129\"}.fa-exclamation[_ngcontent-%COMP%]:before{content:\"\uF12A\"}.fa-superscript[_ngcontent-%COMP%]:before{content:\"\uF12B\"}.fa-subscript[_ngcontent-%COMP%]:before{content:\"\uF12C\"}.fa-eraser[_ngcontent-%COMP%]:before{content:\"\uF12D\"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:\"\uF12E\"}.fa-microphone[_ngcontent-%COMP%]:before{content:\"\uF130\"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:\"\uF131\"}.fa-shield[_ngcontent-%COMP%]:before{content:\"\uF132\"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:\"\uF133\"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:\"\uF134\"}.fa-rocket[_ngcontent-%COMP%]:before{content:\"\uF135\"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:\"\uF136\"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:\"\uF137\"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:\"\uF138\"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:\"\uF139\"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:\"\uF13A\"}.fa-html5[_ngcontent-%COMP%]:before{content:\"\uF13B\"}.fa-css3[_ngcontent-%COMP%]:before{content:\"\uF13C\"}.fa-anchor[_ngcontent-%COMP%]:before{content:\"\uF13D\"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:\"\uF13E\"}.fa-bullseye[_ngcontent-%COMP%]:before{content:\"\uF140\"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:\"\uF141\"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:\"\uF142\"}.fa-rss-square[_ngcontent-%COMP%]:before{content:\"\uF143\"}.fa-play-circle[_ngcontent-%COMP%]:before{content:\"\uF144\"}.fa-ticket[_ngcontent-%COMP%]:before{content:\"\uF145\"}.fa-minus-square[_ngcontent-%COMP%]:before{content:\"\uF146\"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:\"\uF147\"}.fa-level-up[_ngcontent-%COMP%]:before{content:\"\uF148\"}.fa-level-down[_ngcontent-%COMP%]:before{content:\"\uF149\"}.fa-check-square[_ngcontent-%COMP%]:before{content:\"\uF14A\"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:\"\uF14B\"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:\"\uF14C\"}.fa-share-square[_ngcontent-%COMP%]:before{content:\"\uF14D\"}.fa-compass[_ngcontent-%COMP%]:before{content:\"\uF14E\"}.fa-caret-square-o-down[_ngcontent-%COMP%]:before, .fa-toggle-down[_ngcontent-%COMP%]:before{content:\"\uF150\"}.fa-caret-square-o-up[_ngcontent-%COMP%]:before, .fa-toggle-up[_ngcontent-%COMP%]:before{content:\"\uF151\"}.fa-caret-square-o-right[_ngcontent-%COMP%]:before, .fa-toggle-right[_ngcontent-%COMP%]:before{content:\"\uF152\"}.fa-eur[_ngcontent-%COMP%]:before, .fa-euro[_ngcontent-%COMP%]:before{content:\"\uF153\"}.fa-gbp[_ngcontent-%COMP%]:before{content:\"\uF154\"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:\"\uF155\"}.fa-inr[_ngcontent-%COMP%]:before, .fa-rupee[_ngcontent-%COMP%]:before{content:\"\uF156\"}.fa-cny[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before{content:\"\uF157\"}.fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before, .fa-ruble[_ngcontent-%COMP%]:before{content:\"\uF158\"}.fa-krw[_ngcontent-%COMP%]:before, .fa-won[_ngcontent-%COMP%]:before{content:\"\uF159\"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:\"\uF15A\"}.fa-file[_ngcontent-%COMP%]:before{content:\"\uF15B\"}.fa-file-text[_ngcontent-%COMP%]:before{content:\"\uF15C\"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:\"\uF15D\"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:\"\uF15E\"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:\"\uF160\"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:\"\uF161\"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:\"\uF162\"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:\"\uF163\"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:\"\uF164\"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:\"\uF165\"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:\"\uF166\"}.fa-youtube[_ngcontent-%COMP%]:before{content:\"\uF167\"}.fa-xing[_ngcontent-%COMP%]:before{content:\"\uF168\"}.fa-xing-square[_ngcontent-%COMP%]:before{content:\"\uF169\"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:\"\uF16A\"}.fa-dropbox[_ngcontent-%COMP%]:before{content:\"\uF16B\"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:\"\uF16C\"}.fa-instagram[_ngcontent-%COMP%]:before{content:\"\uF16D\"}.fa-flickr[_ngcontent-%COMP%]:before{content:\"\uF16E\"}.fa-adn[_ngcontent-%COMP%]:before{content:\"\uF170\"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:\"\uF171\"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:\"\uF172\"}.fa-tumblr[_ngcontent-%COMP%]:before{content:\"\uF173\"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:\"\uF174\"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF175\"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF176\"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF177\"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF178\"}.fa-apple[_ngcontent-%COMP%]:before{content:\"\uF179\"}.fa-windows[_ngcontent-%COMP%]:before{content:\"\uF17A\"}.fa-android[_ngcontent-%COMP%]:before{content:\"\uF17B\"}.fa-linux[_ngcontent-%COMP%]:before{content:\"\uF17C\"}.fa-dribbble[_ngcontent-%COMP%]:before{content:\"\uF17D\"}.fa-skype[_ngcontent-%COMP%]:before{content:\"\uF17E\"}.fa-foursquare[_ngcontent-%COMP%]:before{content:\"\uF180\"}.fa-trello[_ngcontent-%COMP%]:before{content:\"\uF181\"}.fa-female[_ngcontent-%COMP%]:before{content:\"\uF182\"}.fa-male[_ngcontent-%COMP%]:before{content:\"\uF183\"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:\"\uF184\"}.fa-sun-o[_ngcontent-%COMP%]:before{content:\"\uF185\"}.fa-moon-o[_ngcontent-%COMP%]:before{content:\"\uF186\"}.fa-archive[_ngcontent-%COMP%]:before{content:\"\uF187\"}.fa-bug[_ngcontent-%COMP%]:before{content:\"\uF188\"}.fa-vk[_ngcontent-%COMP%]:before{content:\"\uF189\"}.fa-weibo[_ngcontent-%COMP%]:before{content:\"\uF18A\"}.fa-renren[_ngcontent-%COMP%]:before{content:\"\uF18B\"}.fa-pagelines[_ngcontent-%COMP%]:before{content:\"\uF18C\"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:\"\uF18D\"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:\"\uF18E\"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:\"\uF190\"}.fa-caret-square-o-left[_ngcontent-%COMP%]:before, .fa-toggle-left[_ngcontent-%COMP%]:before{content:\"\uF191\"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:\"\uF192\"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:\"\uF193\"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:\"\uF194\"}.fa-try[_ngcontent-%COMP%]:before, .fa-turkish-lira[_ngcontent-%COMP%]:before{content:\"\uF195\"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:\"\uF196\"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:\"\uF197\"}.fa-slack[_ngcontent-%COMP%]:before{content:\"\uF198\"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:\"\uF199\"}.fa-wordpress[_ngcontent-%COMP%]:before{content:\"\uF19A\"}.fa-openid[_ngcontent-%COMP%]:before{content:\"\uF19B\"}.fa-bank[_ngcontent-%COMP%]:before, .fa-institution[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:\"\uF19C\"}.fa-graduation-cap[_ngcontent-%COMP%]:before, .fa-mortar-board[_ngcontent-%COMP%]:before{content:\"\uF19D\"}.fa-yahoo[_ngcontent-%COMP%]:before{content:\"\uF19E\"}.fa-google[_ngcontent-%COMP%]:before{content:\"\uF1A0\"}.fa-reddit[_ngcontent-%COMP%]:before{content:\"\uF1A1\"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:\"\uF1A2\"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:\"\uF1A3\"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:\"\uF1A4\"}.fa-delicious[_ngcontent-%COMP%]:before{content:\"\uF1A5\"}.fa-digg[_ngcontent-%COMP%]:before{content:\"\uF1A6\"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:\"\uF1A7\"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:\"\uF1A8\"}.fa-drupal[_ngcontent-%COMP%]:before{content:\"\uF1A9\"}.fa-joomla[_ngcontent-%COMP%]:before{content:\"\uF1AA\"}.fa-language[_ngcontent-%COMP%]:before{content:\"\uF1AB\"}.fa-fax[_ngcontent-%COMP%]:before{content:\"\uF1AC\"}.fa-building[_ngcontent-%COMP%]:before{content:\"\uF1AD\"}.fa-child[_ngcontent-%COMP%]:before{content:\"\uF1AE\"}.fa-paw[_ngcontent-%COMP%]:before{content:\"\uF1B0\"}.fa-spoon[_ngcontent-%COMP%]:before{content:\"\uF1B1\"}.fa-cube[_ngcontent-%COMP%]:before{content:\"\uF1B2\"}.fa-cubes[_ngcontent-%COMP%]:before{content:\"\uF1B3\"}.fa-behance[_ngcontent-%COMP%]:before{content:\"\uF1B4\"}.fa-behance-square[_ngcontent-%COMP%]:before{content:\"\uF1B5\"}.fa-steam[_ngcontent-%COMP%]:before{content:\"\uF1B6\"}.fa-steam-square[_ngcontent-%COMP%]:before{content:\"\uF1B7\"}.fa-recycle[_ngcontent-%COMP%]:before{content:\"\uF1B8\"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:\"\uF1B9\"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:\"\uF1BA\"}.fa-tree[_ngcontent-%COMP%]:before{content:\"\uF1BB\"}.fa-spotify[_ngcontent-%COMP%]:before{content:\"\uF1BC\"}.fa-deviantart[_ngcontent-%COMP%]:before{content:\"\uF1BD\"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:\"\uF1BE\"}.fa-database[_ngcontent-%COMP%]:before{content:\"\uF1C0\"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:\"\uF1C1\"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:\"\uF1C2\"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:\"\uF1C3\"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:\"\uF1C4\"}.fa-file-image-o[_ngcontent-%COMP%]:before, .fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before{content:\"\uF1C5\"}.fa-file-archive-o[_ngcontent-%COMP%]:before, .fa-file-zip-o[_ngcontent-%COMP%]:before{content:\"\uF1C6\"}.fa-file-audio-o[_ngcontent-%COMP%]:before, .fa-file-sound-o[_ngcontent-%COMP%]:before{content:\"\uF1C7\"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:\"\uF1C8\"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:\"\uF1C9\"}.fa-vine[_ngcontent-%COMP%]:before{content:\"\uF1CA\"}.fa-codepen[_ngcontent-%COMP%]:before{content:\"\uF1CB\"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:\"\uF1CC\"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before{content:\"\uF1CD\"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:\"\uF1CE\"}.fa-ra[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before{content:\"\uF1D0\"}.fa-empire[_ngcontent-%COMP%]:before, .fa-ge[_ngcontent-%COMP%]:before{content:\"\uF1D1\"}.fa-git-square[_ngcontent-%COMP%]:before{content:\"\uF1D2\"}.fa-git[_ngcontent-%COMP%]:before{content:\"\uF1D3\"}.fa-hacker-news[_ngcontent-%COMP%]:before, .fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before{content:\"\uF1D4\"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:\"\uF1D5\"}.fa-qq[_ngcontent-%COMP%]:before{content:\"\uF1D6\"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:\"\uF1D7\"}.fa-paper-plane[_ngcontent-%COMP%]:before, .fa-send[_ngcontent-%COMP%]:before{content:\"\uF1D8\"}.fa-paper-plane-o[_ngcontent-%COMP%]:before, .fa-send-o[_ngcontent-%COMP%]:before{content:\"\uF1D9\"}.fa-history[_ngcontent-%COMP%]:before{content:\"\uF1DA\"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:\"\uF1DB\"}.fa-header[_ngcontent-%COMP%]:before{content:\"\uF1DC\"}.fa-paragraph[_ngcontent-%COMP%]:before{content:\"\uF1DD\"}.fa-sliders[_ngcontent-%COMP%]:before{content:\"\uF1DE\"}.fa-share-alt[_ngcontent-%COMP%]:before{content:\"\uF1E0\"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:\"\uF1E1\"}.fa-bomb[_ngcontent-%COMP%]:before{content:\"\uF1E2\"}.fa-futbol-o[_ngcontent-%COMP%]:before, .fa-soccer-ball-o[_ngcontent-%COMP%]:before{content:\"\uF1E3\"}.fa-tty[_ngcontent-%COMP%]:before{content:\"\uF1E4\"}.fa-binoculars[_ngcontent-%COMP%]:before{content:\"\uF1E5\"}.fa-plug[_ngcontent-%COMP%]:before{content:\"\uF1E6\"}.fa-slideshare[_ngcontent-%COMP%]:before{content:\"\uF1E7\"}.fa-twitch[_ngcontent-%COMP%]:before{content:\"\uF1E8\"}.fa-yelp[_ngcontent-%COMP%]:before{content:\"\uF1E9\"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:\"\uF1EA\"}.fa-wifi[_ngcontent-%COMP%]:before{content:\"\uF1EB\"}.fa-calculator[_ngcontent-%COMP%]:before{content:\"\uF1EC\"}.fa-paypal[_ngcontent-%COMP%]:before{content:\"\uF1ED\"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:\"\uF1EE\"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:\"\uF1F0\"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:\"\uF1F1\"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:\"\uF1F2\"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:\"\uF1F3\"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:\"\uF1F4\"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:\"\uF1F5\"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:\"\uF1F6\"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:\"\uF1F7\"}.fa-trash[_ngcontent-%COMP%]:before{content:\"\uF1F8\"}.fa-copyright[_ngcontent-%COMP%]:before{content:\"\uF1F9\"}.fa-at[_ngcontent-%COMP%]:before{content:\"\uF1FA\"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:\"\uF1FB\"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:\"\uF1FC\"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:\"\uF1FD\"}.fa-area-chart[_ngcontent-%COMP%]:before{content:\"\uF1FE\"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:\"\uF200\"}.fa-line-chart[_ngcontent-%COMP%]:before{content:\"\uF201\"}.fa-lastfm[_ngcontent-%COMP%]:before{content:\"\uF202\"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:\"\uF203\"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:\"\uF204\"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:\"\uF205\"}.fa-bicycle[_ngcontent-%COMP%]:before{content:\"\uF206\"}.fa-bus[_ngcontent-%COMP%]:before{content:\"\uF207\"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:\"\uF208\"}.fa-angellist[_ngcontent-%COMP%]:before{content:\"\uF209\"}.fa-cc[_ngcontent-%COMP%]:before{content:\"\uF20A\"}.fa-ils[_ngcontent-%COMP%]:before, .fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before{content:\"\uF20B\"}.fa-meanpath[_ngcontent-%COMP%]:before{content:\"\uF20C\"}.fa-buysellads[_ngcontent-%COMP%]:before{content:\"\uF20D\"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:\"\uF20E\"}.fa-dashcube[_ngcontent-%COMP%]:before{content:\"\uF210\"}.fa-forumbee[_ngcontent-%COMP%]:before{content:\"\uF211\"}.fa-leanpub[_ngcontent-%COMP%]:before{content:\"\uF212\"}.fa-sellsy[_ngcontent-%COMP%]:before{content:\"\uF213\"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:\"\uF214\"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:\"\uF215\"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:\"\uF216\"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:\"\uF217\"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF218\"}.fa-diamond[_ngcontent-%COMP%]:before{content:\"\uF219\"}.fa-ship[_ngcontent-%COMP%]:before{content:\"\uF21A\"}.fa-user-secret[_ngcontent-%COMP%]:before{content:\"\uF21B\"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:\"\uF21C\"}.fa-street-view[_ngcontent-%COMP%]:before{content:\"\uF21D\"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:\"\uF21E\"}.fa-venus[_ngcontent-%COMP%]:before{content:\"\uF221\"}.fa-mars[_ngcontent-%COMP%]:before{content:\"\uF222\"}.fa-mercury[_ngcontent-%COMP%]:before{content:\"\uF223\"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:\"\uF224\"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:\"\uF225\"}.fa-venus-double[_ngcontent-%COMP%]:before{content:\"\uF226\"}.fa-mars-double[_ngcontent-%COMP%]:before{content:\"\uF227\"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:\"\uF228\"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:\"\uF229\"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:\"\uF22A\"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:\"\uF22B\"}.fa-neuter[_ngcontent-%COMP%]:before{content:\"\uF22C\"}.fa-genderless[_ngcontent-%COMP%]:before{content:\"\uF22D\"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:\"\uF230\"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:\"\uF231\"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:\"\uF232\"}.fa-server[_ngcontent-%COMP%]:before{content:\"\uF233\"}.fa-user-plus[_ngcontent-%COMP%]:before{content:\"\uF234\"}.fa-user-times[_ngcontent-%COMP%]:before{content:\"\uF235\"}.fa-bed[_ngcontent-%COMP%]:before, .fa-hotel[_ngcontent-%COMP%]:before{content:\"\uF236\"}.fa-viacoin[_ngcontent-%COMP%]:before{content:\"\uF237\"}.fa-train[_ngcontent-%COMP%]:before{content:\"\uF238\"}.fa-subway[_ngcontent-%COMP%]:before{content:\"\uF239\"}.fa-medium[_ngcontent-%COMP%]:before{content:\"\uF23A\"}.fa-y-combinator[_ngcontent-%COMP%]:before, .fa-yc[_ngcontent-%COMP%]:before{content:\"\uF23B\"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:\"\uF23C\"}.fa-opencart[_ngcontent-%COMP%]:before{content:\"\uF23D\"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:\"\uF23E\"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before{content:\"\uF240\"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF241\"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:\"\uF242\"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:\"\uF243\"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:\"\uF244\"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:\"\uF245\"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:\"\uF246\"}.fa-object-group[_ngcontent-%COMP%]:before{content:\"\uF247\"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:\"\uF248\"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:\"\uF249\"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:\"\uF24A\"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:\"\uF24B\"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:\"\uF24C\"}.fa-clone[_ngcontent-%COMP%]:before{content:\"\uF24D\"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:\"\uF24E\"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:\"\uF250\"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:\"\uF251\"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:\"\uF252\"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:\"\uF253\"}.fa-hourglass[_ngcontent-%COMP%]:before{content:\"\uF254\"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:\"\uF255\"}.fa-hand-paper-o[_ngcontent-%COMP%]:before, .fa-hand-stop-o[_ngcontent-%COMP%]:before{content:\"\uF256\"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:\"\uF257\"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:\"\uF258\"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:\"\uF259\"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:\"\uF25A\"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:\"\uF25B\"}.fa-trademark[_ngcontent-%COMP%]:before{content:\"\uF25C\"}.fa-registered[_ngcontent-%COMP%]:before{content:\"\uF25D\"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:\"\uF25E\"}.fa-gg[_ngcontent-%COMP%]:before{content:\"\uF260\"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:\"\uF261\"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:\"\uF262\"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:\"\uF263\"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:\"\uF264\"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:\"\uF265\"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:\"\uF266\"}.fa-safari[_ngcontent-%COMP%]:before{content:\"\uF267\"}.fa-chrome[_ngcontent-%COMP%]:before{content:\"\uF268\"}.fa-firefox[_ngcontent-%COMP%]:before{content:\"\uF269\"}.fa-opera[_ngcontent-%COMP%]:before{content:\"\uF26A\"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:\"\uF26B\"}.fa-television[_ngcontent-%COMP%]:before, .fa-tv[_ngcontent-%COMP%]:before{content:\"\uF26C\"}.fa-contao[_ngcontent-%COMP%]:before{content:\"\uF26D\"}.fa-500px[_ngcontent-%COMP%]:before{content:\"\uF26E\"}.fa-amazon[_ngcontent-%COMP%]:before{content:\"\uF270\"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:\"\uF271\"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:\"\uF272\"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:\"\uF273\"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:\"\uF274\"}.fa-industry[_ngcontent-%COMP%]:before{content:\"\uF275\"}.fa-map-pin[_ngcontent-%COMP%]:before{content:\"\uF276\"}.fa-map-signs[_ngcontent-%COMP%]:before{content:\"\uF277\"}.fa-map-o[_ngcontent-%COMP%]:before{content:\"\uF278\"}.fa-map[_ngcontent-%COMP%]:before{content:\"\uF279\"}.fa-commenting[_ngcontent-%COMP%]:before{content:\"\uF27A\"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:\"\uF27B\"}.fa-houzz[_ngcontent-%COMP%]:before{content:\"\uF27C\"}.fa-vimeo[_ngcontent-%COMP%]:before{content:\"\uF27D\"}.fa-black-tie[_ngcontent-%COMP%]:before{content:\"\uF27E\"}.fa-fonticons[_ngcontent-%COMP%]:before{content:\"\uF280\"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:\"\uF281\"}.fa-edge[_ngcontent-%COMP%]:before{content:\"\uF282\"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:\"\uF283\"}.fa-codiepie[_ngcontent-%COMP%]:before{content:\"\uF284\"}.fa-modx[_ngcontent-%COMP%]:before{content:\"\uF285\"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:\"\uF286\"}.fa-usb[_ngcontent-%COMP%]:before{content:\"\uF287\"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:\"\uF288\"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:\"\uF289\"}.fa-scribd[_ngcontent-%COMP%]:before{content:\"\uF28A\"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:\"\uF28B\"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28C\"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:\"\uF28D\"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28E\"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:\"\uF290\"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:\"\uF291\"}.fa-hashtag[_ngcontent-%COMP%]:before{content:\"\uF292\"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:\"\uF293\"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:\"\uF294\"}.fa-percent[_ngcontent-%COMP%]:before{content:\"\uF295\"}.fa-gitlab[_ngcontent-%COMP%]:before{content:\"\uF296\"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:\"\uF297\"}.fa-wpforms[_ngcontent-%COMP%]:before{content:\"\uF298\"}.fa-envira[_ngcontent-%COMP%]:before{content:\"\uF299\"}.fa-universal-access[_ngcontent-%COMP%]:before{content:\"\uF29A\"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:\"\uF29B\"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:\"\uF29C\"}.fa-blind[_ngcontent-%COMP%]:before{content:\"\uF29D\"}.fa-audio-description[_ngcontent-%COMP%]:before{content:\"\uF29E\"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:\"\uF2A0\"}.fa-braille[_ngcontent-%COMP%]:before{content:\"\uF2A1\"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before, .fa-asl-interpreting[_ngcontent-%COMP%]:before{content:\"\uF2A3\"}.fa-deaf[_ngcontent-%COMP%]:before, .fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before{content:\"\uF2A4\"}.fa-glide[_ngcontent-%COMP%]:before{content:\"\uF2A5\"}.fa-glide-g[_ngcontent-%COMP%]:before{content:\"\uF2A6\"}.fa-sign-language[_ngcontent-%COMP%]:before, .fa-signing[_ngcontent-%COMP%]:before{content:\"\uF2A7\"}.fa-low-vision[_ngcontent-%COMP%]:before{content:\"\uF2A8\"}.fa-viadeo[_ngcontent-%COMP%]:before{content:\"\uF2A9\"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:\"\uF2AA\"}.fa-snapchat[_ngcontent-%COMP%]:before{content:\"\uF2AB\"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:\"\uF2AC\"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:\"\uF2AD\"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:\"\uF2AE\"}.fa-first-order[_ngcontent-%COMP%]:before{content:\"\uF2B0\"}.fa-yoast[_ngcontent-%COMP%]:before{content:\"\uF2B1\"}.fa-themeisle[_ngcontent-%COMP%]:before{content:\"\uF2B2\"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:\"\uF2B3\"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:\"\uF2B4\"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:\"\uF2B5\"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:\"\uF2B6\"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:\"\uF2B7\"}.fa-linode[_ngcontent-%COMP%]:before{content:\"\uF2B8\"}.fa-address-book[_ngcontent-%COMP%]:before{content:\"\uF2B9\"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:\"\uF2BA\"}.fa-address-card[_ngcontent-%COMP%]:before, .fa-vcard[_ngcontent-%COMP%]:before{content:\"\uF2BB\"}.fa-address-card-o[_ngcontent-%COMP%]:before, .fa-vcard-o[_ngcontent-%COMP%]:before{content:\"\uF2BC\"}.fa-user-circle[_ngcontent-%COMP%]:before{content:\"\uF2BD\"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:\"\uF2BE\"}.fa-user-o[_ngcontent-%COMP%]:before{content:\"\uF2C0\"}.fa-id-badge[_ngcontent-%COMP%]:before{content:\"\uF2C1\"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:\"\uF2C2\"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:\"\uF2C3\"}.fa-quora[_ngcontent-%COMP%]:before{content:\"\uF2C4\"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:\"\uF2C5\"}.fa-telegram[_ngcontent-%COMP%]:before{content:\"\uF2C6\"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before{content:\"\uF2C7\"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF2C8\"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:\"\uF2C9\"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:\"\uF2CA\"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:\"\uF2CB\"}.fa-shower[_ngcontent-%COMP%]:before{content:\"\uF2CC\"}.fa-bath[_ngcontent-%COMP%]:before, .fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before{content:\"\uF2CD\"}.fa-podcast[_ngcontent-%COMP%]:before{content:\"\uF2CE\"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:\"\uF2D0\"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:\"\uF2D1\"}.fa-window-restore[_ngcontent-%COMP%]:before{content:\"\uF2D2\"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:\"\uF2D3\"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:\"\uF2D4\"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:\"\uF2D5\"}.fa-grav[_ngcontent-%COMP%]:before{content:\"\uF2D6\"}.fa-etsy[_ngcontent-%COMP%]:before{content:\"\uF2D7\"}.fa-imdb[_ngcontent-%COMP%]:before{content:\"\uF2D8\"}.fa-ravelry[_ngcontent-%COMP%]:before{content:\"\uF2D9\"}.fa-eercast[_ngcontent-%COMP%]:before{content:\"\uF2DA\"}.fa-microchip[_ngcontent-%COMP%]:before{content:\"\uF2DB\"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:\"\uF2DC\"}.fa-superpowers[_ngcontent-%COMP%]:before{content:\"\uF2DD\"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:\"\uF2DE\"}.fa-meetup[_ngcontent-%COMP%]:before{content:\"\uF2E0\"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*=\"display:none\"]):not([style*=\"display: none\"]){display:inline-block}.angular-editor[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]     [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]     blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]     p{margin-bottom:0}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.show-placeholder[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:block}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5;pointer-events:none}"]
});

AngularEditorComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
  }, {
    type: AngularEditorService
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
    }]
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Attribute,
      args: ['tabindex']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Attribute,
      args: ['autofocus']
    }]
  }];
};

AngularEditorComponent.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  tabIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  html: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  textArea: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: ['editor', {
      static: true
    }]
  }],
  editorWrapper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: ['editorWrapper', {
      static: true
    }]
  }],
  editorToolbar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: ['editorToolbar']
  }],
  viewMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  blurEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['blur']
  }],
  focusEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['focus']
  }],
  tabindex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding,
    args: ['attr.tabindex']
  }],
  onFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['focus']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AngularEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'angular-editor',
      template: "<div\n     class=\"angular-editor\"\n     #angularEditor\n     [style.width]=\"config.width\"\n     [style.minWidth]=\"config.minWidth\"\n>\n     <angular-editor-toolbar\n          *ngIf=\"config.toolbarPosition === 'top'\"\n          #editorToolbar\n          [id]=\"id\"\n          [uploadUrl]=\"config.uploadUrl\"\n          [upload]=\"config.upload\"\n          [showToolbar]=\"config.showToolbar !== undefined ? config.showToolbar : true\"\n          [fonts]=\"getFonts()\"\n          [customClasses]=\"config.customClasses\"\n          [defaultFontName]=\"config.defaultFontName\"\n          [defaultFontSize]=\"config.defaultFontSize\"\n          [hiddenButtons]=\"config.toolbarHiddenButtons\"\n          (execute)=\"executeCommand($event)\"\n     ></angular-editor-toolbar>\n\n     <div\n          class=\"angular-editor-wrapper\"\n          #editorWrapper\n     >\n          <div\n               #editor\n               class=\"angular-editor-textarea\"\n               [attr.contenteditable]=\"config.editable\"\n               [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n               [attr.translate]=\"config.translate\"\n               [attr.spellcheck]=\"config.spellcheck\"\n               [style.height]=\"config.height\"\n               [style.minHeight]=\"config.minHeight\"\n               [style.maxHeight]=\"config.maxHeight\"\n               [style.outline]=\"config.outline === false ? 'none': undefined\"\n               (input)=\"onContentChange($event.target)\"\n               (focus)=\"onTextAreaFocus($event)\"\n               (blur)=\"onTextAreaBlur($event)\"\n               (click)=\"exec()\"\n               (keyup)=\"exec()\"\n               (mouseout)=\"onTextAreaMouseOut($event)\"\n               (paste)=\"onPaste($event)\"\n          >\n          </div>\n          <span class=\"angular-editor-placeholder\">{{ placeholder || config['placeholder'] }}</span>\n     </div>\n     <angular-editor-toolbar\n          *ngIf=\"config.toolbarPosition === 'bottom'\"\n          #editorToolbar\n          [id]=\"id\"\n          [uploadUrl]=\"config.uploadUrl\"\n          [upload]=\"config.upload\"\n          [showToolbar]=\"config.showToolbar !== undefined ? config.showToolbar : true\"\n          [fonts]=\"getFonts()\"\n          [customClasses]=\"config.customClasses\"\n          [defaultFontName]=\"config.defaultFontName\"\n          [defaultFontSize]=\"config.defaultFontSize\"\n          [hiddenButtons]=\"config.toolbarHiddenButtons\"\n          (execute)=\"executeCommand($event)\"\n     ></angular-editor-toolbar>\n</div>\n",
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function () {
          return AngularEditorComponent;
        }),
        multi: true
      }, AngularEditorService],
      styles: ["@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*=\"display:none\"]):not([style*=\"display: none\"]){display:inline-block}.angular-editor{position:relative}.angular-editor ::ng-deep [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor .angular-editor-wrapper{position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea ::ng-deep blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor .angular-editor-wrapper ::ng-deep p{margin-bottom:0}.angular-editor .angular-editor-wrapper .angular-editor-placeholder{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor .angular-editor-wrapper.show-placeholder .angular-editor-placeholder{display:block}.angular-editor .angular-editor-wrapper.disabled{cursor:not-allowed;opacity:.5;pointer-events:none}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: AngularEditorService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Attribute,
        args: ['autofocus']
      }]
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    viewMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    blurEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['blur']
    }],
    focusEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['focus']
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding,
      args: ['attr.tabindex']
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['focus']
    }],
    html: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    textArea: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: ['editor', {
        static: true
      }]
    }],
    editorWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: ['editorWrapper', {
        static: true
      }]
    }],
    editorToolbar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: ['editorToolbar']
    }]
  });
})();

var AngularEditorToolbarComponent = /*#__PURE__*/function () {
  function AngularEditorToolbarComponent(r, editorService, er, doc) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AngularEditorToolbarComponent);

    this.r = r;
    this.editorService = editorService;
    this.er = er;
    this.doc = doc;
    this.htmlMode = false;
    this.linkSelected = false;
    this.block = 'default';
    this.fontName = 'Times New Roman';
    this.fontSize = '3';
    this.headings = [{
      label: 'Heading 1',
      value: 'h1'
    }, {
      label: 'Heading 2',
      value: 'h2'
    }, {
      label: 'Heading 3',
      value: 'h3'
    }, {
      label: 'Heading 4',
      value: 'h4'
    }, {
      label: 'Heading 5',
      value: 'h5'
    }, {
      label: 'Heading 6',
      value: 'h6'
    }, {
      label: 'Heading 7',
      value: 'h7'
    }, {
      label: 'Paragraph',
      value: 'p'
    }, {
      label: 'Predefined',
      value: 'pre'
    }, {
      label: 'Standard',
      value: 'div'
    }, {
      label: 'default',
      value: 'default'
    }];
    this.fontSizes = [{
      label: '1',
      value: '1'
    }, {
      label: '2',
      value: '2'
    }, {
      label: '3',
      value: '3'
    }, {
      label: '4',
      value: '4'
    }, {
      label: '5',
      value: '5'
    }, {
      label: '6',
      value: '6'
    }, {
      label: '7',
      value: '7'
    }];
    this.customClassId = '-1';
    this.customClassList = [{
      label: '',
      value: ''
    }]; // uploadUrl: string;

    this.tagMap = {
      BLOCKQUOTE: 'indent',
      A: 'link'
    };
    this.select = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'PRE', 'DIV'];
    this.buttons = ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'insertUnorderedList', 'insertOrderedList', 'link'];
    this.fonts = [{
      label: '',
      value: ''
    }];
    this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AngularEditorToolbarComponent, [{
    key: "customClasses",
    set: function set(classes) {
      if (classes) {
        this._customClasses = classes;
        this.customClassList = this._customClasses.map(function (x, i) {
          return {
            label: x.name,
            value: i.toString()
          };
        });
        this.customClassList.unshift({
          label: 'Clear Class',
          value: '-1'
        });
      }
    }
  }, {
    key: "defaultFontName",
    set: function set(value) {
      if (value) {
        this.fontName = value;
      }
    }
  }, {
    key: "defaultFontSize",
    set: function set(value) {
      if (value) {
        this.fontSize = value;
      }
    }
  }, {
    key: "isLinkButtonDisabled",
    get: function get() {
      return this.htmlMode || !Boolean(this.editorService.selectedText);
    }
    /**
     * Trigger command from editor header buttons
     * @param command string from toolbar buttons
     */

  }, {
    key: "triggerCommand",
    value: function triggerCommand(command) {
      this.execute.emit(command);
    }
    /**
     * highlight editor buttons when cursor moved or positioning
     */

  }, {
    key: "triggerButtons",
    value: function triggerButtons() {
      var _this6 = this;

      if (!this.showToolbar) {
        return;
      }

      this.buttons.forEach(function (e) {
        var result = _this6.doc.queryCommandState(e);

        var elementById = _this6.doc.getElementById(e + '-' + _this6.id);

        if (result) {
          _this6.r.addClass(elementById, 'active');
        } else {
          _this6.r.removeClass(elementById, 'active');
        }
      });
    }
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     */

  }, {
    key: "triggerBlocks",
    value: function triggerBlocks(nodes) {
      var _this7 = this;

      if (!this.showToolbar) {
        return;
      }

      this.linkSelected = nodes.findIndex(function (x) {
        return x.nodeName === 'A';
      }) > -1;
      var found = false;
      this.select.forEach(function (y) {
        var node = nodes.find(function (x) {
          return x.nodeName === y;
        });

        if (node !== undefined && y === node.nodeName) {
          if (found === false) {
            _this7.block = node.nodeName.toLowerCase();
            found = true;
          }
        } else if (found === false) {
          _this7.block = 'default';
        }
      });
      found = false;

      if (this._customClasses) {
        this._customClasses.forEach(function (y, index) {
          var node = nodes.find(function (x) {
            if (x instanceof Element) {
              return x.className === y.class;
            }
          });

          if (node !== undefined) {
            if (found === false) {
              _this7.customClassId = index.toString();
              found = true;
            }
          } else if (found === false) {
            _this7.customClassId = '-1';
          }
        });
      }

      Object.keys(this.tagMap).map(function (e) {
        var elementById = _this7.doc.getElementById(_this7.tagMap[e] + '-' + _this7.id);

        var node = nodes.find(function (x) {
          return x.nodeName === e;
        });

        if (node !== undefined && e === node.nodeName) {
          _this7.r.addClass(elementById, 'active');
        } else {
          _this7.r.removeClass(elementById, 'active');
        }
      });
      this.foreColour = this.doc.queryCommandValue('ForeColor');
      this.fontSize = this.doc.queryCommandValue('FontSize');
      this.fontName = this.doc.queryCommandValue('FontName').replace(/"/g, '');
      this.backColor = this.doc.queryCommandValue('backColor');
    }
    /**
     * insert URL link
     */

  }, {
    key: "insertUrl",
    value: function insertUrl() {
      var url = 'https:\/\/';
      var selection = this.editorService.savedSelection;

      if (selection && selection.commonAncestorContainer.parentElement.nodeName === 'A') {
        var parent = selection.commonAncestorContainer.parentElement;

        if (parent.href !== '') {
          url = parent.href;
        }
      }

      url = prompt('Insert URL link', url);

      if (url && url !== '' && url !== 'https://') {
        this.editorService.createLink(url);
      }
    }
    /**
     * insert Video link
     */

  }, {
    key: "insertVideo",
    value: function insertVideo() {
      this.execute.emit('');
      var url = prompt('Insert Video link', "https://");

      if (url && url !== '' && url !== "https://") {
        this.editorService.insertVideo(url);
      }
    }
    /** insert color */

  }, {
    key: "insertColor",
    value: function insertColor(color, where) {
      this.editorService.insertColor(color, where);
      this.execute.emit('');
    }
    /**
     * set font Name/family
     * @param foreColor string
     */

  }, {
    key: "setFontName",
    value: function setFontName(foreColor) {
      this.editorService.setFontName(foreColor);
      this.execute.emit('');
    }
    /**
     * set font Size
     * @param fontSize string
     */

  }, {
    key: "setFontSize",
    value: function setFontSize(fontSize) {
      this.editorService.setFontSize(fontSize);
      this.execute.emit('');
    }
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param m boolean
     */

  }, {
    key: "setEditorMode",
    value: function setEditorMode(m) {
      var toggleEditorModeButton = this.doc.getElementById('toggleEditorMode' + '-' + this.id);

      if (m) {
        this.r.addClass(toggleEditorModeButton, 'active');
      } else {
        this.r.removeClass(toggleEditorModeButton, 'active');
      }

      this.htmlMode = m;
    }
    /**
     * Upload image when file is selected.
     */

  }, {
    key: "onFileChanged",
    value: function onFileChanged(event) {
      var _this8 = this;

      var file = event.target.files[0];

      if (file.type.includes('image/')) {
        if (this.upload) {
          this.upload(file).subscribe(function () {
            return _this8.watchUploadImage;
          });
        } else if (this.uploadUrl) {
          this.editorService.uploadImage(file).subscribe(function () {
            return _this8.watchUploadImage;
          });
        } else {
          var reader = new FileReader();

          reader.onload = function (e) {
            var fr = e.currentTarget;

            _this8.editorService.insertImage(fr.result.toString());
          };

          reader.readAsDataURL(file);
        }
      }
    }
  }, {
    key: "watchUploadImage",
    value: function watchUploadImage(response, event) {
      var imageUrl = response.body.imageUrl;
      this.editorService.insertImage(imageUrl);
      event.srcElement.value = null;
    }
    /**
     * Set custom class
     */

  }, {
    key: "setCustomClass",
    value: function setCustomClass(classId) {
      if (classId === '-1') {
        this.execute.emit('clear');
      } else {
        this.editorService.createCustomClass(this._customClasses[+classId]);
      }
    }
  }, {
    key: "isButtonHidden",
    value: function isButtonHidden(name) {
      if (!name) {
        return false;
      }

      if (!(this.hiddenButtons instanceof Array)) {
        return false;
      }

      var result;

      var _iterator = (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(this.hiddenButtons),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var arr = _step.value;

          if (arr instanceof Array) {
            result = arr.find(function (item) {
              return item === name;
            });
          }

          if (result) {
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result !== undefined;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.execute.emit('focus');
      console.log('focused');
    }
  }]);

  return AngularEditorToolbarComponent;
}();

AngularEditorToolbarComponent.ɵfac = function AngularEditorToolbarComponent_Factory(t) {
  return new (t || AngularEditorToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](AngularEditorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
};

AngularEditorToolbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AngularEditorToolbarComponent,
  selectors: [["angular-editor-toolbar"]],
  viewQuery: function AngularEditorToolbarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.myInputFile = _t.first);
    }
  },
  inputs: {
    fonts: "fonts",
    customClasses: "customClasses",
    defaultFontName: "defaultFontName",
    defaultFontSize: "defaultFontSize",
    id: "id",
    uploadUrl: "uploadUrl",
    upload: "upload",
    showToolbar: "showToolbar",
    hiddenButtons: "hiddenButtons"
  },
  outputs: {
    execute: "execute"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "angular-editor-toolbar", 4, "ngIf"], [1, "angular-editor-toolbar"], [1, "angular-editor-toolbar-set"], ["type", "button", "title", "Undo", "tabindex", "-1", 1, "angular-editor-button", 3, "hidden", "click"], [1, "fa", "fa-undo"], ["type", "button", "title", "Redo", "tabindex", "-1", 1, "angular-editor-button", 3, "hidden", "click"], [1, "fa", "fa-repeat"], ["type", "button", "title", "Bold", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-bold"], ["type", "button", "title", "Italic", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-italic"], ["type", "button", "title", "Underline", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-underline"], ["type", "button", "title", "Strikethrough", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-strikethrough"], ["type", "button", "title", "Subscript", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-subscript"], ["type", "button", "title", "Superscript", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-superscript"], ["type", "button", "title", "Justify Left", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-left"], ["type", "button", "title", "Justify Center", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-center"], ["type", "button", "title", "Justify Right", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-right"], ["type", "button", "title", "Justify Full", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-justify"], ["type", "button", "title", "Indent", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-indent"], ["type", "button", "title", "Outdent", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-outdent"], ["type", "button", "title", "Unordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-list-ul"], ["type", "button", "title", "Ordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-list-ol"], ["tabindex", "-1", 1, "select-heading", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["tabindex", "-1", 1, "select-font", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["tabindex", "-1", 1, "select-font-size", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["type", "color", 2, "display", "none", 3, "change"], ["fgInput", ""], ["type", "button", "title", "Text Color", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "color-label", "foreground"], [1, "fa", "fa-font"], ["bgInput", ""], ["type", "button", "title", "Background Color", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "color-label", "background"], ["class", "angular-editor-toolbar-set", 4, "ngIf"], ["type", "button", "title", "Insert Link", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-link"], ["type", "button", "title", "Unlink", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-chain-broken"], ["accept", "image/*", "type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], ["type", "button", "title", "Insert Image", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-image"], ["type", "button", "title", "Insert Video", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-video-camera"], ["type", "button", "title", "Horizontal Line", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-minus"], ["type", "button", "title", "Clear Formatting", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-remove"], ["type", "button", "title", "HTML Code", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "hidden", "click"], [1, "fa", "fa-code"], ["tabindex", "-1", 1, "select-custom-style", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"]],
  template: function AngularEditorToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AngularEditorToolbarComponent_div_0_Template, 75, 83, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showToolbar);
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, AeSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel];
  },
  styles: ["@charset \"UTF-8\";\n@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse[_ngcontent-%COMP%]{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}[_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%]{filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:\"\uF000\"}.fa-music[_ngcontent-%COMP%]:before{content:\"\uF001\"}.fa-search[_ngcontent-%COMP%]:before{content:\"\uF002\"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:\"\uF003\"}.fa-heart[_ngcontent-%COMP%]:before{content:\"\uF004\"}.fa-star[_ngcontent-%COMP%]:before{content:\"\uF005\"}.fa-star-o[_ngcontent-%COMP%]:before{content:\"\uF006\"}.fa-user[_ngcontent-%COMP%]:before{content:\"\uF007\"}.fa-film[_ngcontent-%COMP%]:before{content:\"\uF008\"}.fa-th-large[_ngcontent-%COMP%]:before{content:\"\uF009\"}.fa-th[_ngcontent-%COMP%]:before{content:\"\uF00A\"}.fa-th-list[_ngcontent-%COMP%]:before{content:\"\uF00B\"}.fa-check[_ngcontent-%COMP%]:before{content:\"\uF00C\"}.fa-close[_ngcontent-%COMP%]:before, .fa-remove[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:\"\uF00D\"}.fa-search-plus[_ngcontent-%COMP%]:before{content:\"\uF00E\"}.fa-search-minus[_ngcontent-%COMP%]:before{content:\"\uF010\"}.fa-power-off[_ngcontent-%COMP%]:before{content:\"\uF011\"}.fa-signal[_ngcontent-%COMP%]:before{content:\"\uF012\"}.fa-cog[_ngcontent-%COMP%]:before, .fa-gear[_ngcontent-%COMP%]:before{content:\"\uF013\"}.fa-trash-o[_ngcontent-%COMP%]:before{content:\"\uF014\"}.fa-home[_ngcontent-%COMP%]:before{content:\"\uF015\"}.fa-file-o[_ngcontent-%COMP%]:before{content:\"\uF016\"}.fa-clock-o[_ngcontent-%COMP%]:before{content:\"\uF017\"}.fa-road[_ngcontent-%COMP%]:before{content:\"\uF018\"}.fa-download[_ngcontent-%COMP%]:before{content:\"\uF019\"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:\"\uF01A\"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:\"\uF01B\"}.fa-inbox[_ngcontent-%COMP%]:before{content:\"\uF01C\"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:\"\uF01D\"}.fa-repeat[_ngcontent-%COMP%]:before, .fa-rotate-right[_ngcontent-%COMP%]:before{content:\"\uF01E\"}.fa-refresh[_ngcontent-%COMP%]:before{content:\"\uF021\"}.fa-list-alt[_ngcontent-%COMP%]:before{content:\"\uF022\"}.fa-lock[_ngcontent-%COMP%]:before{content:\"\uF023\"}.fa-flag[_ngcontent-%COMP%]:before{content:\"\uF024\"}.fa-headphones[_ngcontent-%COMP%]:before{content:\"\uF025\"}.fa-volume-off[_ngcontent-%COMP%]:before{content:\"\uF026\"}.fa-volume-down[_ngcontent-%COMP%]:before{content:\"\uF027\"}.fa-volume-up[_ngcontent-%COMP%]:before{content:\"\uF028\"}.fa-qrcode[_ngcontent-%COMP%]:before{content:\"\uF029\"}.fa-barcode[_ngcontent-%COMP%]:before{content:\"\uF02A\"}.fa-tag[_ngcontent-%COMP%]:before{content:\"\uF02B\"}.fa-tags[_ngcontent-%COMP%]:before{content:\"\uF02C\"}.fa-book[_ngcontent-%COMP%]:before{content:\"\uF02D\"}.fa-bookmark[_ngcontent-%COMP%]:before{content:\"\uF02E\"}.fa-print[_ngcontent-%COMP%]:before{content:\"\uF02F\"}.fa-camera[_ngcontent-%COMP%]:before{content:\"\uF030\"}.fa-font[_ngcontent-%COMP%]:before{content:\"\uF031\"}.fa-bold[_ngcontent-%COMP%]:before{content:\"\uF032\"}.fa-italic[_ngcontent-%COMP%]:before{content:\"\uF033\"}.fa-text-height[_ngcontent-%COMP%]:before{content:\"\uF034\"}.fa-text-width[_ngcontent-%COMP%]:before{content:\"\uF035\"}.fa-align-left[_ngcontent-%COMP%]:before{content:\"\uF036\"}.fa-align-center[_ngcontent-%COMP%]:before{content:\"\uF037\"}.fa-align-right[_ngcontent-%COMP%]:before{content:\"\uF038\"}.fa-align-justify[_ngcontent-%COMP%]:before{content:\"\uF039\"}.fa-list[_ngcontent-%COMP%]:before{content:\"\uF03A\"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:\"\uF03B\"}.fa-indent[_ngcontent-%COMP%]:before{content:\"\uF03C\"}.fa-video-camera[_ngcontent-%COMP%]:before{content:\"\uF03D\"}.fa-image[_ngcontent-%COMP%]:before, .fa-photo[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:\"\uF03E\"}.fa-pencil[_ngcontent-%COMP%]:before{content:\"\uF040\"}.fa-map-marker[_ngcontent-%COMP%]:before{content:\"\uF041\"}.fa-adjust[_ngcontent-%COMP%]:before{content:\"\uF042\"}.fa-tint[_ngcontent-%COMP%]:before{content:\"\uF043\"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:\"\uF044\"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:\"\uF045\"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:\"\uF046\"}.fa-arrows[_ngcontent-%COMP%]:before{content:\"\uF047\"}.fa-step-backward[_ngcontent-%COMP%]:before{content:\"\uF048\"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:\"\uF049\"}.fa-backward[_ngcontent-%COMP%]:before{content:\"\uF04A\"}.fa-play[_ngcontent-%COMP%]:before{content:\"\uF04B\"}.fa-pause[_ngcontent-%COMP%]:before{content:\"\uF04C\"}.fa-stop[_ngcontent-%COMP%]:before{content:\"\uF04D\"}.fa-forward[_ngcontent-%COMP%]:before{content:\"\uF04E\"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:\"\uF050\"}.fa-step-forward[_ngcontent-%COMP%]:before{content:\"\uF051\"}.fa-eject[_ngcontent-%COMP%]:before{content:\"\uF052\"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:\"\uF053\"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:\"\uF054\"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:\"\uF055\"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:\"\uF056\"}.fa-times-circle[_ngcontent-%COMP%]:before{content:\"\uF057\"}.fa-check-circle[_ngcontent-%COMP%]:before{content:\"\uF058\"}.fa-question-circle[_ngcontent-%COMP%]:before{content:\"\uF059\"}.fa-info-circle[_ngcontent-%COMP%]:before{content:\"\uF05A\"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:\"\uF05B\"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05C\"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05D\"}.fa-ban[_ngcontent-%COMP%]:before{content:\"\uF05E\"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF060\"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF061\"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF062\"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF063\"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:\"\uF064\"}.fa-expand[_ngcontent-%COMP%]:before{content:\"\uF065\"}.fa-compress[_ngcontent-%COMP%]:before{content:\"\uF066\"}.fa-plus[_ngcontent-%COMP%]:before{content:\"\uF067\"}.fa-minus[_ngcontent-%COMP%]:before{content:\"\uF068\"}.fa-asterisk[_ngcontent-%COMP%]:before{content:\"\uF069\"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:\"\uF06A\"}.fa-gift[_ngcontent-%COMP%]:before{content:\"\uF06B\"}.fa-leaf[_ngcontent-%COMP%]:before{content:\"\uF06C\"}.fa-fire[_ngcontent-%COMP%]:before{content:\"\uF06D\"}.fa-eye[_ngcontent-%COMP%]:before{content:\"\uF06E\"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:\"\uF070\"}.fa-exclamation-triangle[_ngcontent-%COMP%]:before, .fa-warning[_ngcontent-%COMP%]:before{content:\"\uF071\"}.fa-plane[_ngcontent-%COMP%]:before{content:\"\uF072\"}.fa-calendar[_ngcontent-%COMP%]:before{content:\"\uF073\"}.fa-random[_ngcontent-%COMP%]:before{content:\"\uF074\"}.fa-comment[_ngcontent-%COMP%]:before{content:\"\uF075\"}.fa-magnet[_ngcontent-%COMP%]:before{content:\"\uF076\"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:\"\uF077\"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:\"\uF078\"}.fa-retweet[_ngcontent-%COMP%]:before{content:\"\uF079\"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:\"\uF07A\"}.fa-folder[_ngcontent-%COMP%]:before{content:\"\uF07B\"}.fa-folder-open[_ngcontent-%COMP%]:before{content:\"\uF07C\"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:\"\uF07D\"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:\"\uF07E\"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:\"\uF080\"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:\"\uF081\"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:\"\uF082\"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:\"\uF083\"}.fa-key[_ngcontent-%COMP%]:before{content:\"\uF084\"}.fa-cogs[_ngcontent-%COMP%]:before, .fa-gears[_ngcontent-%COMP%]:before{content:\"\uF085\"}.fa-comments[_ngcontent-%COMP%]:before{content:\"\uF086\"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:\"\uF087\"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:\"\uF088\"}.fa-star-half[_ngcontent-%COMP%]:before{content:\"\uF089\"}.fa-heart-o[_ngcontent-%COMP%]:before{content:\"\uF08A\"}.fa-sign-out[_ngcontent-%COMP%]:before{content:\"\uF08B\"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:\"\uF08C\"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:\"\uF08D\"}.fa-external-link[_ngcontent-%COMP%]:before{content:\"\uF08E\"}.fa-sign-in[_ngcontent-%COMP%]:before{content:\"\uF090\"}.fa-trophy[_ngcontent-%COMP%]:before{content:\"\uF091\"}.fa-github-square[_ngcontent-%COMP%]:before{content:\"\uF092\"}.fa-upload[_ngcontent-%COMP%]:before{content:\"\uF093\"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:\"\uF094\"}.fa-phone[_ngcontent-%COMP%]:before{content:\"\uF095\"}.fa-square-o[_ngcontent-%COMP%]:before{content:\"\uF096\"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:\"\uF097\"}.fa-phone-square[_ngcontent-%COMP%]:before{content:\"\uF098\"}.fa-twitter[_ngcontent-%COMP%]:before{content:\"\uF099\"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:\"\uF09A\"}.fa-github[_ngcontent-%COMP%]:before{content:\"\uF09B\"}.fa-unlock[_ngcontent-%COMP%]:before{content:\"\uF09C\"}.fa-credit-card[_ngcontent-%COMP%]:before{content:\"\uF09D\"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:\"\uF09E\"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:\"\uF0A0\"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:\"\uF0A1\"}.fa-bell[_ngcontent-%COMP%]:before{content:\"\uF0F3\"}.fa-certificate[_ngcontent-%COMP%]:before{content:\"\uF0A3\"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:\"\uF0A4\"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:\"\uF0A5\"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:\"\uF0A6\"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:\"\uF0A7\"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:\"\uF0A8\"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:\"\uF0A9\"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:\"\uF0AA\"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:\"\uF0AB\"}.fa-globe[_ngcontent-%COMP%]:before{content:\"\uF0AC\"}.fa-wrench[_ngcontent-%COMP%]:before{content:\"\uF0AD\"}.fa-tasks[_ngcontent-%COMP%]:before{content:\"\uF0AE\"}.fa-filter[_ngcontent-%COMP%]:before{content:\"\uF0B0\"}.fa-briefcase[_ngcontent-%COMP%]:before{content:\"\uF0B1\"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:\"\uF0B2\"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:\"\uF0C0\"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:\"\uF0C1\"}.fa-cloud[_ngcontent-%COMP%]:before{content:\"\uF0C2\"}.fa-flask[_ngcontent-%COMP%]:before{content:\"\uF0C3\"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:\"\uF0C4\"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:\"\uF0C5\"}.fa-paperclip[_ngcontent-%COMP%]:before{content:\"\uF0C6\"}.fa-floppy-o[_ngcontent-%COMP%]:before, .fa-save[_ngcontent-%COMP%]:before{content:\"\uF0C7\"}.fa-square[_ngcontent-%COMP%]:before{content:\"\uF0C8\"}.fa-bars[_ngcontent-%COMP%]:before, .fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before{content:\"\uF0C9\"}.fa-list-ul[_ngcontent-%COMP%]:before{content:\"\uF0CA\"}.fa-list-ol[_ngcontent-%COMP%]:before{content:\"\uF0CB\"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:\"\uF0CC\"}.fa-underline[_ngcontent-%COMP%]:before{content:\"\uF0CD\"}.fa-table[_ngcontent-%COMP%]:before{content:\"\uF0CE\"}.fa-magic[_ngcontent-%COMP%]:before{content:\"\uF0D0\"}.fa-truck[_ngcontent-%COMP%]:before{content:\"\uF0D1\"}.fa-pinterest[_ngcontent-%COMP%]:before{content:\"\uF0D2\"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:\"\uF0D3\"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0D4\"}.fa-google-plus[_ngcontent-%COMP%]:before{content:\"\uF0D5\"}.fa-money[_ngcontent-%COMP%]:before{content:\"\uF0D6\"}.fa-caret-down[_ngcontent-%COMP%]:before{content:\"\uF0D7\"}.fa-caret-up[_ngcontent-%COMP%]:before{content:\"\uF0D8\"}.fa-caret-left[_ngcontent-%COMP%]:before{content:\"\uF0D9\"}.fa-caret-right[_ngcontent-%COMP%]:before{content:\"\uF0DA\"}.fa-columns[_ngcontent-%COMP%]:before{content:\"\uF0DB\"}.fa-sort[_ngcontent-%COMP%]:before, .fa-unsorted[_ngcontent-%COMP%]:before{content:\"\uF0DC\"}.fa-sort-desc[_ngcontent-%COMP%]:before, .fa-sort-down[_ngcontent-%COMP%]:before{content:\"\uF0DD\"}.fa-sort-asc[_ngcontent-%COMP%]:before, .fa-sort-up[_ngcontent-%COMP%]:before{content:\"\uF0DE\"}.fa-envelope[_ngcontent-%COMP%]:before{content:\"\uF0E0\"}.fa-linkedin[_ngcontent-%COMP%]:before{content:\"\uF0E1\"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:\"\uF0E2\"}.fa-gavel[_ngcontent-%COMP%]:before, .fa-legal[_ngcontent-%COMP%]:before{content:\"\uF0E3\"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:\"\uF0E4\"}.fa-comment-o[_ngcontent-%COMP%]:before{content:\"\uF0E5\"}.fa-comments-o[_ngcontent-%COMP%]:before{content:\"\uF0E6\"}.fa-bolt[_ngcontent-%COMP%]:before, .fa-flash[_ngcontent-%COMP%]:before{content:\"\uF0E7\"}.fa-sitemap[_ngcontent-%COMP%]:before{content:\"\uF0E8\"}.fa-umbrella[_ngcontent-%COMP%]:before{content:\"\uF0E9\"}.fa-clipboard[_ngcontent-%COMP%]:before, .fa-paste[_ngcontent-%COMP%]:before{content:\"\uF0EA\"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:\"\uF0EB\"}.fa-exchange[_ngcontent-%COMP%]:before{content:\"\uF0EC\"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:\"\uF0ED\"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:\"\uF0EE\"}.fa-user-md[_ngcontent-%COMP%]:before{content:\"\uF0F0\"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:\"\uF0F1\"}.fa-suitcase[_ngcontent-%COMP%]:before{content:\"\uF0F2\"}.fa-bell-o[_ngcontent-%COMP%]:before{content:\"\uF0A2\"}.fa-coffee[_ngcontent-%COMP%]:before{content:\"\uF0F4\"}.fa-cutlery[_ngcontent-%COMP%]:before{content:\"\uF0F5\"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:\"\uF0F6\"}.fa-building-o[_ngcontent-%COMP%]:before{content:\"\uF0F7\"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:\"\uF0F8\"}.fa-ambulance[_ngcontent-%COMP%]:before{content:\"\uF0F9\"}.fa-medkit[_ngcontent-%COMP%]:before{content:\"\uF0FA\"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:\"\uF0FB\"}.fa-beer[_ngcontent-%COMP%]:before{content:\"\uF0FC\"}.fa-h-square[_ngcontent-%COMP%]:before{content:\"\uF0FD\"}.fa-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0FE\"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:\"\uF100\"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:\"\uF101\"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:\"\uF102\"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:\"\uF103\"}.fa-angle-left[_ngcontent-%COMP%]:before{content:\"\uF104\"}.fa-angle-right[_ngcontent-%COMP%]:before{content:\"\uF105\"}.fa-angle-up[_ngcontent-%COMP%]:before{content:\"\uF106\"}.fa-angle-down[_ngcontent-%COMP%]:before{content:\"\uF107\"}.fa-desktop[_ngcontent-%COMP%]:before{content:\"\uF108\"}.fa-laptop[_ngcontent-%COMP%]:before{content:\"\uF109\"}.fa-tablet[_ngcontent-%COMP%]:before{content:\"\uF10A\"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:\"\uF10B\"}.fa-circle-o[_ngcontent-%COMP%]:before{content:\"\uF10C\"}.fa-quote-left[_ngcontent-%COMP%]:before{content:\"\uF10D\"}.fa-quote-right[_ngcontent-%COMP%]:before{content:\"\uF10E\"}.fa-spinner[_ngcontent-%COMP%]:before{content:\"\uF110\"}.fa-circle[_ngcontent-%COMP%]:before{content:\"\uF111\"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:\"\uF112\"}.fa-github-alt[_ngcontent-%COMP%]:before{content:\"\uF113\"}.fa-folder-o[_ngcontent-%COMP%]:before{content:\"\uF114\"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:\"\uF115\"}.fa-smile-o[_ngcontent-%COMP%]:before{content:\"\uF118\"}.fa-frown-o[_ngcontent-%COMP%]:before{content:\"\uF119\"}.fa-meh-o[_ngcontent-%COMP%]:before{content:\"\uF11A\"}.fa-gamepad[_ngcontent-%COMP%]:before{content:\"\uF11B\"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:\"\uF11C\"}.fa-flag-o[_ngcontent-%COMP%]:before{content:\"\uF11D\"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:\"\uF11E\"}.fa-terminal[_ngcontent-%COMP%]:before{content:\"\uF120\"}.fa-code[_ngcontent-%COMP%]:before{content:\"\uF121\"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:\"\uF122\"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:\"\uF123\"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:\"\uF124\"}.fa-crop[_ngcontent-%COMP%]:before{content:\"\uF125\"}.fa-code-fork[_ngcontent-%COMP%]:before{content:\"\uF126\"}.fa-chain-broken[_ngcontent-%COMP%]:before, .fa-unlink[_ngcontent-%COMP%]:before{content:\"\uF127\"}.fa-question[_ngcontent-%COMP%]:before{content:\"\uF128\"}.fa-info[_ngcontent-%COMP%]:before{content:\"\uF129\"}.fa-exclamation[_ngcontent-%COMP%]:before{content:\"\uF12A\"}.fa-superscript[_ngcontent-%COMP%]:before{content:\"\uF12B\"}.fa-subscript[_ngcontent-%COMP%]:before{content:\"\uF12C\"}.fa-eraser[_ngcontent-%COMP%]:before{content:\"\uF12D\"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:\"\uF12E\"}.fa-microphone[_ngcontent-%COMP%]:before{content:\"\uF130\"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:\"\uF131\"}.fa-shield[_ngcontent-%COMP%]:before{content:\"\uF132\"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:\"\uF133\"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:\"\uF134\"}.fa-rocket[_ngcontent-%COMP%]:before{content:\"\uF135\"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:\"\uF136\"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:\"\uF137\"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:\"\uF138\"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:\"\uF139\"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:\"\uF13A\"}.fa-html5[_ngcontent-%COMP%]:before{content:\"\uF13B\"}.fa-css3[_ngcontent-%COMP%]:before{content:\"\uF13C\"}.fa-anchor[_ngcontent-%COMP%]:before{content:\"\uF13D\"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:\"\uF13E\"}.fa-bullseye[_ngcontent-%COMP%]:before{content:\"\uF140\"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:\"\uF141\"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:\"\uF142\"}.fa-rss-square[_ngcontent-%COMP%]:before{content:\"\uF143\"}.fa-play-circle[_ngcontent-%COMP%]:before{content:\"\uF144\"}.fa-ticket[_ngcontent-%COMP%]:before{content:\"\uF145\"}.fa-minus-square[_ngcontent-%COMP%]:before{content:\"\uF146\"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:\"\uF147\"}.fa-level-up[_ngcontent-%COMP%]:before{content:\"\uF148\"}.fa-level-down[_ngcontent-%COMP%]:before{content:\"\uF149\"}.fa-check-square[_ngcontent-%COMP%]:before{content:\"\uF14A\"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:\"\uF14B\"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:\"\uF14C\"}.fa-share-square[_ngcontent-%COMP%]:before{content:\"\uF14D\"}.fa-compass[_ngcontent-%COMP%]:before{content:\"\uF14E\"}.fa-caret-square-o-down[_ngcontent-%COMP%]:before, .fa-toggle-down[_ngcontent-%COMP%]:before{content:\"\uF150\"}.fa-caret-square-o-up[_ngcontent-%COMP%]:before, .fa-toggle-up[_ngcontent-%COMP%]:before{content:\"\uF151\"}.fa-caret-square-o-right[_ngcontent-%COMP%]:before, .fa-toggle-right[_ngcontent-%COMP%]:before{content:\"\uF152\"}.fa-eur[_ngcontent-%COMP%]:before, .fa-euro[_ngcontent-%COMP%]:before{content:\"\uF153\"}.fa-gbp[_ngcontent-%COMP%]:before{content:\"\uF154\"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:\"\uF155\"}.fa-inr[_ngcontent-%COMP%]:before, .fa-rupee[_ngcontent-%COMP%]:before{content:\"\uF156\"}.fa-cny[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before{content:\"\uF157\"}.fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before, .fa-ruble[_ngcontent-%COMP%]:before{content:\"\uF158\"}.fa-krw[_ngcontent-%COMP%]:before, .fa-won[_ngcontent-%COMP%]:before{content:\"\uF159\"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:\"\uF15A\"}.fa-file[_ngcontent-%COMP%]:before{content:\"\uF15B\"}.fa-file-text[_ngcontent-%COMP%]:before{content:\"\uF15C\"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:\"\uF15D\"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:\"\uF15E\"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:\"\uF160\"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:\"\uF161\"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:\"\uF162\"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:\"\uF163\"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:\"\uF164\"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:\"\uF165\"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:\"\uF166\"}.fa-youtube[_ngcontent-%COMP%]:before{content:\"\uF167\"}.fa-xing[_ngcontent-%COMP%]:before{content:\"\uF168\"}.fa-xing-square[_ngcontent-%COMP%]:before{content:\"\uF169\"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:\"\uF16A\"}.fa-dropbox[_ngcontent-%COMP%]:before{content:\"\uF16B\"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:\"\uF16C\"}.fa-instagram[_ngcontent-%COMP%]:before{content:\"\uF16D\"}.fa-flickr[_ngcontent-%COMP%]:before{content:\"\uF16E\"}.fa-adn[_ngcontent-%COMP%]:before{content:\"\uF170\"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:\"\uF171\"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:\"\uF172\"}.fa-tumblr[_ngcontent-%COMP%]:before{content:\"\uF173\"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:\"\uF174\"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF175\"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF176\"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF177\"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF178\"}.fa-apple[_ngcontent-%COMP%]:before{content:\"\uF179\"}.fa-windows[_ngcontent-%COMP%]:before{content:\"\uF17A\"}.fa-android[_ngcontent-%COMP%]:before{content:\"\uF17B\"}.fa-linux[_ngcontent-%COMP%]:before{content:\"\uF17C\"}.fa-dribbble[_ngcontent-%COMP%]:before{content:\"\uF17D\"}.fa-skype[_ngcontent-%COMP%]:before{content:\"\uF17E\"}.fa-foursquare[_ngcontent-%COMP%]:before{content:\"\uF180\"}.fa-trello[_ngcontent-%COMP%]:before{content:\"\uF181\"}.fa-female[_ngcontent-%COMP%]:before{content:\"\uF182\"}.fa-male[_ngcontent-%COMP%]:before{content:\"\uF183\"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:\"\uF184\"}.fa-sun-o[_ngcontent-%COMP%]:before{content:\"\uF185\"}.fa-moon-o[_ngcontent-%COMP%]:before{content:\"\uF186\"}.fa-archive[_ngcontent-%COMP%]:before{content:\"\uF187\"}.fa-bug[_ngcontent-%COMP%]:before{content:\"\uF188\"}.fa-vk[_ngcontent-%COMP%]:before{content:\"\uF189\"}.fa-weibo[_ngcontent-%COMP%]:before{content:\"\uF18A\"}.fa-renren[_ngcontent-%COMP%]:before{content:\"\uF18B\"}.fa-pagelines[_ngcontent-%COMP%]:before{content:\"\uF18C\"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:\"\uF18D\"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:\"\uF18E\"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:\"\uF190\"}.fa-caret-square-o-left[_ngcontent-%COMP%]:before, .fa-toggle-left[_ngcontent-%COMP%]:before{content:\"\uF191\"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:\"\uF192\"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:\"\uF193\"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:\"\uF194\"}.fa-try[_ngcontent-%COMP%]:before, .fa-turkish-lira[_ngcontent-%COMP%]:before{content:\"\uF195\"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:\"\uF196\"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:\"\uF197\"}.fa-slack[_ngcontent-%COMP%]:before{content:\"\uF198\"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:\"\uF199\"}.fa-wordpress[_ngcontent-%COMP%]:before{content:\"\uF19A\"}.fa-openid[_ngcontent-%COMP%]:before{content:\"\uF19B\"}.fa-bank[_ngcontent-%COMP%]:before, .fa-institution[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:\"\uF19C\"}.fa-graduation-cap[_ngcontent-%COMP%]:before, .fa-mortar-board[_ngcontent-%COMP%]:before{content:\"\uF19D\"}.fa-yahoo[_ngcontent-%COMP%]:before{content:\"\uF19E\"}.fa-google[_ngcontent-%COMP%]:before{content:\"\uF1A0\"}.fa-reddit[_ngcontent-%COMP%]:before{content:\"\uF1A1\"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:\"\uF1A2\"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:\"\uF1A3\"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:\"\uF1A4\"}.fa-delicious[_ngcontent-%COMP%]:before{content:\"\uF1A5\"}.fa-digg[_ngcontent-%COMP%]:before{content:\"\uF1A6\"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:\"\uF1A7\"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:\"\uF1A8\"}.fa-drupal[_ngcontent-%COMP%]:before{content:\"\uF1A9\"}.fa-joomla[_ngcontent-%COMP%]:before{content:\"\uF1AA\"}.fa-language[_ngcontent-%COMP%]:before{content:\"\uF1AB\"}.fa-fax[_ngcontent-%COMP%]:before{content:\"\uF1AC\"}.fa-building[_ngcontent-%COMP%]:before{content:\"\uF1AD\"}.fa-child[_ngcontent-%COMP%]:before{content:\"\uF1AE\"}.fa-paw[_ngcontent-%COMP%]:before{content:\"\uF1B0\"}.fa-spoon[_ngcontent-%COMP%]:before{content:\"\uF1B1\"}.fa-cube[_ngcontent-%COMP%]:before{content:\"\uF1B2\"}.fa-cubes[_ngcontent-%COMP%]:before{content:\"\uF1B3\"}.fa-behance[_ngcontent-%COMP%]:before{content:\"\uF1B4\"}.fa-behance-square[_ngcontent-%COMP%]:before{content:\"\uF1B5\"}.fa-steam[_ngcontent-%COMP%]:before{content:\"\uF1B6\"}.fa-steam-square[_ngcontent-%COMP%]:before{content:\"\uF1B7\"}.fa-recycle[_ngcontent-%COMP%]:before{content:\"\uF1B8\"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:\"\uF1B9\"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:\"\uF1BA\"}.fa-tree[_ngcontent-%COMP%]:before{content:\"\uF1BB\"}.fa-spotify[_ngcontent-%COMP%]:before{content:\"\uF1BC\"}.fa-deviantart[_ngcontent-%COMP%]:before{content:\"\uF1BD\"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:\"\uF1BE\"}.fa-database[_ngcontent-%COMP%]:before{content:\"\uF1C0\"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:\"\uF1C1\"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:\"\uF1C2\"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:\"\uF1C3\"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:\"\uF1C4\"}.fa-file-image-o[_ngcontent-%COMP%]:before, .fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before{content:\"\uF1C5\"}.fa-file-archive-o[_ngcontent-%COMP%]:before, .fa-file-zip-o[_ngcontent-%COMP%]:before{content:\"\uF1C6\"}.fa-file-audio-o[_ngcontent-%COMP%]:before, .fa-file-sound-o[_ngcontent-%COMP%]:before{content:\"\uF1C7\"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:\"\uF1C8\"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:\"\uF1C9\"}.fa-vine[_ngcontent-%COMP%]:before{content:\"\uF1CA\"}.fa-codepen[_ngcontent-%COMP%]:before{content:\"\uF1CB\"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:\"\uF1CC\"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before{content:\"\uF1CD\"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:\"\uF1CE\"}.fa-ra[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before{content:\"\uF1D0\"}.fa-empire[_ngcontent-%COMP%]:before, .fa-ge[_ngcontent-%COMP%]:before{content:\"\uF1D1\"}.fa-git-square[_ngcontent-%COMP%]:before{content:\"\uF1D2\"}.fa-git[_ngcontent-%COMP%]:before{content:\"\uF1D3\"}.fa-hacker-news[_ngcontent-%COMP%]:before, .fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before{content:\"\uF1D4\"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:\"\uF1D5\"}.fa-qq[_ngcontent-%COMP%]:before{content:\"\uF1D6\"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:\"\uF1D7\"}.fa-paper-plane[_ngcontent-%COMP%]:before, .fa-send[_ngcontent-%COMP%]:before{content:\"\uF1D8\"}.fa-paper-plane-o[_ngcontent-%COMP%]:before, .fa-send-o[_ngcontent-%COMP%]:before{content:\"\uF1D9\"}.fa-history[_ngcontent-%COMP%]:before{content:\"\uF1DA\"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:\"\uF1DB\"}.fa-header[_ngcontent-%COMP%]:before{content:\"\uF1DC\"}.fa-paragraph[_ngcontent-%COMP%]:before{content:\"\uF1DD\"}.fa-sliders[_ngcontent-%COMP%]:before{content:\"\uF1DE\"}.fa-share-alt[_ngcontent-%COMP%]:before{content:\"\uF1E0\"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:\"\uF1E1\"}.fa-bomb[_ngcontent-%COMP%]:before{content:\"\uF1E2\"}.fa-futbol-o[_ngcontent-%COMP%]:before, .fa-soccer-ball-o[_ngcontent-%COMP%]:before{content:\"\uF1E3\"}.fa-tty[_ngcontent-%COMP%]:before{content:\"\uF1E4\"}.fa-binoculars[_ngcontent-%COMP%]:before{content:\"\uF1E5\"}.fa-plug[_ngcontent-%COMP%]:before{content:\"\uF1E6\"}.fa-slideshare[_ngcontent-%COMP%]:before{content:\"\uF1E7\"}.fa-twitch[_ngcontent-%COMP%]:before{content:\"\uF1E8\"}.fa-yelp[_ngcontent-%COMP%]:before{content:\"\uF1E9\"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:\"\uF1EA\"}.fa-wifi[_ngcontent-%COMP%]:before{content:\"\uF1EB\"}.fa-calculator[_ngcontent-%COMP%]:before{content:\"\uF1EC\"}.fa-paypal[_ngcontent-%COMP%]:before{content:\"\uF1ED\"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:\"\uF1EE\"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:\"\uF1F0\"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:\"\uF1F1\"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:\"\uF1F2\"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:\"\uF1F3\"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:\"\uF1F4\"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:\"\uF1F5\"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:\"\uF1F6\"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:\"\uF1F7\"}.fa-trash[_ngcontent-%COMP%]:before{content:\"\uF1F8\"}.fa-copyright[_ngcontent-%COMP%]:before{content:\"\uF1F9\"}.fa-at[_ngcontent-%COMP%]:before{content:\"\uF1FA\"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:\"\uF1FB\"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:\"\uF1FC\"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:\"\uF1FD\"}.fa-area-chart[_ngcontent-%COMP%]:before{content:\"\uF1FE\"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:\"\uF200\"}.fa-line-chart[_ngcontent-%COMP%]:before{content:\"\uF201\"}.fa-lastfm[_ngcontent-%COMP%]:before{content:\"\uF202\"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:\"\uF203\"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:\"\uF204\"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:\"\uF205\"}.fa-bicycle[_ngcontent-%COMP%]:before{content:\"\uF206\"}.fa-bus[_ngcontent-%COMP%]:before{content:\"\uF207\"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:\"\uF208\"}.fa-angellist[_ngcontent-%COMP%]:before{content:\"\uF209\"}.fa-cc[_ngcontent-%COMP%]:before{content:\"\uF20A\"}.fa-ils[_ngcontent-%COMP%]:before, .fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before{content:\"\uF20B\"}.fa-meanpath[_ngcontent-%COMP%]:before{content:\"\uF20C\"}.fa-buysellads[_ngcontent-%COMP%]:before{content:\"\uF20D\"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:\"\uF20E\"}.fa-dashcube[_ngcontent-%COMP%]:before{content:\"\uF210\"}.fa-forumbee[_ngcontent-%COMP%]:before{content:\"\uF211\"}.fa-leanpub[_ngcontent-%COMP%]:before{content:\"\uF212\"}.fa-sellsy[_ngcontent-%COMP%]:before{content:\"\uF213\"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:\"\uF214\"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:\"\uF215\"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:\"\uF216\"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:\"\uF217\"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF218\"}.fa-diamond[_ngcontent-%COMP%]:before{content:\"\uF219\"}.fa-ship[_ngcontent-%COMP%]:before{content:\"\uF21A\"}.fa-user-secret[_ngcontent-%COMP%]:before{content:\"\uF21B\"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:\"\uF21C\"}.fa-street-view[_ngcontent-%COMP%]:before{content:\"\uF21D\"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:\"\uF21E\"}.fa-venus[_ngcontent-%COMP%]:before{content:\"\uF221\"}.fa-mars[_ngcontent-%COMP%]:before{content:\"\uF222\"}.fa-mercury[_ngcontent-%COMP%]:before{content:\"\uF223\"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:\"\uF224\"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:\"\uF225\"}.fa-venus-double[_ngcontent-%COMP%]:before{content:\"\uF226\"}.fa-mars-double[_ngcontent-%COMP%]:before{content:\"\uF227\"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:\"\uF228\"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:\"\uF229\"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:\"\uF22A\"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:\"\uF22B\"}.fa-neuter[_ngcontent-%COMP%]:before{content:\"\uF22C\"}.fa-genderless[_ngcontent-%COMP%]:before{content:\"\uF22D\"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:\"\uF230\"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:\"\uF231\"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:\"\uF232\"}.fa-server[_ngcontent-%COMP%]:before{content:\"\uF233\"}.fa-user-plus[_ngcontent-%COMP%]:before{content:\"\uF234\"}.fa-user-times[_ngcontent-%COMP%]:before{content:\"\uF235\"}.fa-bed[_ngcontent-%COMP%]:before, .fa-hotel[_ngcontent-%COMP%]:before{content:\"\uF236\"}.fa-viacoin[_ngcontent-%COMP%]:before{content:\"\uF237\"}.fa-train[_ngcontent-%COMP%]:before{content:\"\uF238\"}.fa-subway[_ngcontent-%COMP%]:before{content:\"\uF239\"}.fa-medium[_ngcontent-%COMP%]:before{content:\"\uF23A\"}.fa-y-combinator[_ngcontent-%COMP%]:before, .fa-yc[_ngcontent-%COMP%]:before{content:\"\uF23B\"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:\"\uF23C\"}.fa-opencart[_ngcontent-%COMP%]:before{content:\"\uF23D\"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:\"\uF23E\"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before{content:\"\uF240\"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF241\"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:\"\uF242\"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:\"\uF243\"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:\"\uF244\"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:\"\uF245\"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:\"\uF246\"}.fa-object-group[_ngcontent-%COMP%]:before{content:\"\uF247\"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:\"\uF248\"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:\"\uF249\"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:\"\uF24A\"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:\"\uF24B\"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:\"\uF24C\"}.fa-clone[_ngcontent-%COMP%]:before{content:\"\uF24D\"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:\"\uF24E\"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:\"\uF250\"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:\"\uF251\"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:\"\uF252\"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:\"\uF253\"}.fa-hourglass[_ngcontent-%COMP%]:before{content:\"\uF254\"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:\"\uF255\"}.fa-hand-paper-o[_ngcontent-%COMP%]:before, .fa-hand-stop-o[_ngcontent-%COMP%]:before{content:\"\uF256\"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:\"\uF257\"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:\"\uF258\"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:\"\uF259\"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:\"\uF25A\"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:\"\uF25B\"}.fa-trademark[_ngcontent-%COMP%]:before{content:\"\uF25C\"}.fa-registered[_ngcontent-%COMP%]:before{content:\"\uF25D\"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:\"\uF25E\"}.fa-gg[_ngcontent-%COMP%]:before{content:\"\uF260\"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:\"\uF261\"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:\"\uF262\"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:\"\uF263\"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:\"\uF264\"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:\"\uF265\"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:\"\uF266\"}.fa-safari[_ngcontent-%COMP%]:before{content:\"\uF267\"}.fa-chrome[_ngcontent-%COMP%]:before{content:\"\uF268\"}.fa-firefox[_ngcontent-%COMP%]:before{content:\"\uF269\"}.fa-opera[_ngcontent-%COMP%]:before{content:\"\uF26A\"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:\"\uF26B\"}.fa-television[_ngcontent-%COMP%]:before, .fa-tv[_ngcontent-%COMP%]:before{content:\"\uF26C\"}.fa-contao[_ngcontent-%COMP%]:before{content:\"\uF26D\"}.fa-500px[_ngcontent-%COMP%]:before{content:\"\uF26E\"}.fa-amazon[_ngcontent-%COMP%]:before{content:\"\uF270\"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:\"\uF271\"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:\"\uF272\"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:\"\uF273\"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:\"\uF274\"}.fa-industry[_ngcontent-%COMP%]:before{content:\"\uF275\"}.fa-map-pin[_ngcontent-%COMP%]:before{content:\"\uF276\"}.fa-map-signs[_ngcontent-%COMP%]:before{content:\"\uF277\"}.fa-map-o[_ngcontent-%COMP%]:before{content:\"\uF278\"}.fa-map[_ngcontent-%COMP%]:before{content:\"\uF279\"}.fa-commenting[_ngcontent-%COMP%]:before{content:\"\uF27A\"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:\"\uF27B\"}.fa-houzz[_ngcontent-%COMP%]:before{content:\"\uF27C\"}.fa-vimeo[_ngcontent-%COMP%]:before{content:\"\uF27D\"}.fa-black-tie[_ngcontent-%COMP%]:before{content:\"\uF27E\"}.fa-fonticons[_ngcontent-%COMP%]:before{content:\"\uF280\"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:\"\uF281\"}.fa-edge[_ngcontent-%COMP%]:before{content:\"\uF282\"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:\"\uF283\"}.fa-codiepie[_ngcontent-%COMP%]:before{content:\"\uF284\"}.fa-modx[_ngcontent-%COMP%]:before{content:\"\uF285\"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:\"\uF286\"}.fa-usb[_ngcontent-%COMP%]:before{content:\"\uF287\"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:\"\uF288\"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:\"\uF289\"}.fa-scribd[_ngcontent-%COMP%]:before{content:\"\uF28A\"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:\"\uF28B\"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28C\"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:\"\uF28D\"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28E\"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:\"\uF290\"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:\"\uF291\"}.fa-hashtag[_ngcontent-%COMP%]:before{content:\"\uF292\"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:\"\uF293\"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:\"\uF294\"}.fa-percent[_ngcontent-%COMP%]:before{content:\"\uF295\"}.fa-gitlab[_ngcontent-%COMP%]:before{content:\"\uF296\"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:\"\uF297\"}.fa-wpforms[_ngcontent-%COMP%]:before{content:\"\uF298\"}.fa-envira[_ngcontent-%COMP%]:before{content:\"\uF299\"}.fa-universal-access[_ngcontent-%COMP%]:before{content:\"\uF29A\"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:\"\uF29B\"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:\"\uF29C\"}.fa-blind[_ngcontent-%COMP%]:before{content:\"\uF29D\"}.fa-audio-description[_ngcontent-%COMP%]:before{content:\"\uF29E\"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:\"\uF2A0\"}.fa-braille[_ngcontent-%COMP%]:before{content:\"\uF2A1\"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before, .fa-asl-interpreting[_ngcontent-%COMP%]:before{content:\"\uF2A3\"}.fa-deaf[_ngcontent-%COMP%]:before, .fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before{content:\"\uF2A4\"}.fa-glide[_ngcontent-%COMP%]:before{content:\"\uF2A5\"}.fa-glide-g[_ngcontent-%COMP%]:before{content:\"\uF2A6\"}.fa-sign-language[_ngcontent-%COMP%]:before, .fa-signing[_ngcontent-%COMP%]:before{content:\"\uF2A7\"}.fa-low-vision[_ngcontent-%COMP%]:before{content:\"\uF2A8\"}.fa-viadeo[_ngcontent-%COMP%]:before{content:\"\uF2A9\"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:\"\uF2AA\"}.fa-snapchat[_ngcontent-%COMP%]:before{content:\"\uF2AB\"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:\"\uF2AC\"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:\"\uF2AD\"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:\"\uF2AE\"}.fa-first-order[_ngcontent-%COMP%]:before{content:\"\uF2B0\"}.fa-yoast[_ngcontent-%COMP%]:before{content:\"\uF2B1\"}.fa-themeisle[_ngcontent-%COMP%]:before{content:\"\uF2B2\"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:\"\uF2B3\"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:\"\uF2B4\"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:\"\uF2B5\"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:\"\uF2B6\"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:\"\uF2B7\"}.fa-linode[_ngcontent-%COMP%]:before{content:\"\uF2B8\"}.fa-address-book[_ngcontent-%COMP%]:before{content:\"\uF2B9\"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:\"\uF2BA\"}.fa-address-card[_ngcontent-%COMP%]:before, .fa-vcard[_ngcontent-%COMP%]:before{content:\"\uF2BB\"}.fa-address-card-o[_ngcontent-%COMP%]:before, .fa-vcard-o[_ngcontent-%COMP%]:before{content:\"\uF2BC\"}.fa-user-circle[_ngcontent-%COMP%]:before{content:\"\uF2BD\"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:\"\uF2BE\"}.fa-user-o[_ngcontent-%COMP%]:before{content:\"\uF2C0\"}.fa-id-badge[_ngcontent-%COMP%]:before{content:\"\uF2C1\"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:\"\uF2C2\"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:\"\uF2C3\"}.fa-quora[_ngcontent-%COMP%]:before{content:\"\uF2C4\"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:\"\uF2C5\"}.fa-telegram[_ngcontent-%COMP%]:before{content:\"\uF2C6\"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before{content:\"\uF2C7\"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF2C8\"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:\"\uF2C9\"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:\"\uF2CA\"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:\"\uF2CB\"}.fa-shower[_ngcontent-%COMP%]:before{content:\"\uF2CC\"}.fa-bath[_ngcontent-%COMP%]:before, .fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before{content:\"\uF2CD\"}.fa-podcast[_ngcontent-%COMP%]:before{content:\"\uF2CE\"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:\"\uF2D0\"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:\"\uF2D1\"}.fa-window-restore[_ngcontent-%COMP%]:before{content:\"\uF2D2\"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:\"\uF2D3\"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:\"\uF2D4\"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:\"\uF2D5\"}.fa-grav[_ngcontent-%COMP%]:before{content:\"\uF2D6\"}.fa-etsy[_ngcontent-%COMP%]:before{content:\"\uF2D7\"}.fa-imdb[_ngcontent-%COMP%]:before{content:\"\uF2D8\"}.fa-ravelry[_ngcontent-%COMP%]:before{content:\"\uF2D9\"}.fa-eercast[_ngcontent-%COMP%]:before{content:\"\uF2DA\"}.fa-microchip[_ngcontent-%COMP%]:before{content:\"\uF2DB\"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:\"\uF2DC\"}.fa-superpowers[_ngcontent-%COMP%]:before{content:\"\uF2DD\"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:\"\uF2DE\"}.fa-meetup[_ngcontent-%COMP%]:before{content:\"\uF2E0\"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*=\"display:none\"]):not([style*=\"display: none\"]), .select-button[_ngcontent-%COMP%]{display:inline-block}.select-button.disabled[_ngcontent-%COMP%]{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}"]
});

AngularEditorToolbarComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
  }, {
    type: AngularEditorService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
    }]
  }];
};

AngularEditorToolbarComponent.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  uploadUrl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  upload: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  showToolbar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  fonts: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  customClasses: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  defaultFontName: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  defaultFontSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  hiddenButtons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  execute: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  myInputFile: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: ['fileInput', {
      static: true
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AngularEditorToolbarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'angular-editor-toolbar',
      template: "<div class=\"angular-editor-toolbar\" *ngIf=\"showToolbar\">\n  <div class=\"angular-editor-toolbar-set\">\n    <button type=\"button\" title=\"Undo\" class=\"angular-editor-button\" (click)=\"triggerCommand('undo')\"\n            [hidden]=\"isButtonHidden('undo')\" tabindex=\"-1\"><i\n      class='fa fa-undo'></i></button>\n    <button type=\"button\" title=\"Redo\" class=\"angular-editor-button\" (click)=\"triggerCommand('redo')\"\n            [hidden]=\"isButtonHidden('redo')\" tabindex=\"-1\"><i\n      class='fa fa-repeat'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'bold-'+id\" type=\"button\" title=\"Bold\" class=\"angular-editor-button\" (click)=\"triggerCommand('bold')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('bold')\" tabindex=\"-1\"><i class='fa fa-bold'></i></button>\n    <button [id]=\"'italic-'+id\" type=\"button\" title=\"Italic\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('italic')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('italic')\" tabindex=\"-1\"><i class='fa fa-italic'></i>\n    </button>\n    <button [id]=\"'underline-'+id\" type=\"button\" title=\"Underline\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('underline')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('underline')\"\n            tabindex=\"-1\"><i class='fa fa-underline'></i></button>\n    <button [id]=\"'strikeThrough-'+id\" type=\"button\" title=\"Strikethrough\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('strikeThrough')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('strikeThrough')\"\n            tabindex=\"-1\"><i class='fa fa-strikethrough'></i></button>\n    <button [id]=\"'subscript-'+id\" type=\"button\" title=\"Subscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('subscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('subscript')\"\n            tabindex=\"-1\"><i class='fa fa-subscript'></i></button>\n    <button [id]=\"'superscript-'+id\" type=\"button\" title=\"Superscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('superscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('superscript')\"\n            tabindex=\"-1\"><i class='fa fa-superscript'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'justifyLeft-'+id\" type=\"button\" title=\"Justify Left\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyLeft')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyLeft')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-left'></i></button>\n    <button [id]=\"'justifyCenter-'+id\" type=\"button\" title=\"Justify Center\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyCenter')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyCenter')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-center'></i></button>\n    <button [id]=\"'justifyRight-'+id\" type=\"button\" title=\"Justify Right\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyRight')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyRight')\"\n            tabindex=\"-1\">\n      <i class='fa fa-align-right'></i></button>\n    <button [id]=\"'justifyFull-'+id\" type=\"button\" title=\"Justify Full\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyFull')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyFull')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-justify'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'indent-'+id\" type=\"button\" title=\"Indent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('indent')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('indent')\" tabindex=\"-1\"><i\n      class='fa fa-indent'></i></button>\n    <button [id]=\"'outdent-'+id\" type=\"button\" title=\"Outdent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('outdent')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('outdent')\" tabindex=\"-1\"><i\n      class='fa fa-outdent'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'insertUnorderedList-'+id\" type=\"button\" title=\"Unordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertUnorderedList')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertUnorderedList')\" tabindex=\"-1\"><i\n      class='fa fa-list-ul'></i></button>\n    <button [id]=\"'insertOrderedList-'+id\" type=\"button\" title=\"Ordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertOrderedList')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertOrderedList')\" tabindex=\"-1\"><i\n      class='fa fa-list-ol'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-heading\" [options]=\"headings\"\n               [(ngModel)]=\"block\"\n               (change)=\"triggerCommand(block)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('heading')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-font\" [options]=\"fonts\"\n               [(ngModel)]=\"fontName\"\n               (change)=\"setFontName(fontName)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('fontName')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-font-size\" [options]=\"fontSizes\"\n               [(ngModel)]=\"fontSize\"\n               (change)=\"setFontSize(fontSize)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('fontSize')\"\n               tabindex=\"-1\">\n    </ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(fgInput.value, 'textColor')\"\n      #fgInput>\n    <button [id]=\"'foregroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); ; fgInput.click()\"\n            title=\"Text Color\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('textColor')\" tabindex=\"-1\"><span\n      class=\"color-label foreground\"><i class=\"fa fa-font\"></i></span>\n    </button>\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(bgInput.value, 'backgroundColor')\"\n      #bgInput>\n    <button [id]=\"'backgroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); ; bgInput.click()\"\n            title=\"Background Color\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('backgroundColor')\" tabindex=\"-1\"><span\n      class=\"color-label background\"><i class=\"fa fa-font\"></i></span>\n    </button>\n  </div>\n  <div *ngIf=\"_customClasses\" class=\"angular-editor-toolbar-set\">\n    <ae-select class=\"select-custom-style\" [options]=\"customClassList\"\n               [(ngModel)]=\"customClassId\"\n               (change)=\"setCustomClass(customClassId)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('customClasses')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'link-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"insertUrl()\"\n            title=\"Insert Link\" [disabled]=\"isLinkButtonDisabled\" [hidden]=\"isButtonHidden('link')\" tabindex=\"-1\">\n      <i class=\"fa fa-link\"></i>\n    </button>\n    <button [id]=\"'unlink-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"triggerCommand('unlink')\"\n            title=\"Unlink\" [disabled]=\"htmlMode || !linkSelected\" [hidden]=\"isButtonHidden('unlink')\" tabindex=\"-1\">\n      <i class=\"fa fa-chain-broken\"></i>\n    </button>\n    <input\n      style=\"display: none\"\n      accept=\"image/*\"\n      type=\"file\" (change)=\"onFileChanged($event)\"\n      #fileInput>\n    <button [id]=\"'insertImage-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); fileInput.click()\"\n            title=\"Insert Image\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertImage')\" tabindex=\"-1\"><i class=\"fa fa-image\"></i>\n    </button>\n    <button [id]=\"'insertVideo-'+id\" type=\"button\" class=\"angular-editor-button\"\n            (click)=\"insertVideo()\" title=\"Insert Video\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertVideo')\"\n            tabindex=\"-1\"><i\n      class=\"fa fa-video-camera\"></i></button>\n    <button [id]=\"'insertHorizontalRule-'+id\" type=\"button\" title=\"Horizontal Line\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertHorizontalRule')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertHorizontalRule')\" tabindex=\"-1\"><i\n      class=\"fa fa-minus\"></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'clearFormatting-'+id\" type=\"button\" title=\"Clear Formatting\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('removeFormat')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('removeFormat')\"\n            tabindex=\"-1\"><i class='fa fa-remove'></i>\n    </button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'toggleEditorMode-'+id\" type=\"button\" title=\"HTML Code\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('toggleEditorMode')\" [hidden]=\"isButtonHidden('toggleEditorMode')\" tabindex=\"-1\"><i\n      class='fa fa-code'></i></button>\n  </div>\n</div>\n",
      styles: ["@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*=\"display:none\"]):not([style*=\"display: none\"]),.select-button{display:inline-block}.select-button.disabled{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: AngularEditorService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
      }]
    }];
  }, {
    fonts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    execute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    customClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    defaultFontName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    defaultFontSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    uploadUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    upload: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    showToolbar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    hiddenButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    myInputFile: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: ['fileInput', {
        static: true
      }]
    }]
  });
})();

var AeSelectComponent = /*#__PURE__*/function () {
  function AeSelectComponent(elRef, r) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AeSelectComponent);

    this.elRef = elRef;
    this.r = r;
    this.options = [];
    this.disabled = false;
    this.optionId = 0;
    this.opened = false;
    this.hidden = 'inline-block'; // eslint-disable-next-line @angular-eslint/no-output-native, @angular-eslint/no-output-rename

    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();

    this.onChange = function () {};

    this.onTouched = function () {};
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AeSelectComponent, [{
    key: "label",
    get: function get() {
      return this.selectedOption && this.selectedOption.hasOwnProperty('label') ? this.selectedOption.label : 'Select';
    }
  }, {
    key: "value",
    get: function get() {
      return this.selectedOption.value;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.selectedOption = this.options[0];

      if (isDefined(this.isHidden) && this.isHidden) {
        this.hide();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.hidden = 'none';
    }
  }, {
    key: "optionSelect",
    value: function optionSelect(option, event) {
      event.stopPropagation();
      this.setValue(option.value);
      this.onChange(this.selectedOption.value);
      this.changeEvent.emit(this.selectedOption.value);
      this.onTouched();
      this.opened = false;
    }
  }, {
    key: "toggleOpen",
    value: function toggleOpen(event) {
      // event.stopPropagation();
      if (this.disabled) {
        return;
      }

      this.opened = !this.opened;
    }
  }, {
    key: "onClick",
    value: function onClick($event) {
      if (!this.elRef.nativeElement.contains($event.target)) {
        this.close();
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.opened = false;
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this.opened;
    }
  }, {
    key: "writeValue",
    value: function writeValue(value) {
      if (!value || typeof value !== 'string') {
        return;
      }

      this.setValue(value);
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var index = 0;
      var selectedEl = this.options.find(function (el, i) {
        index = i;
        return el.value === value;
      });

      if (selectedEl) {
        this.selectedOption = selectedEl;
        this.optionId = index;
      }
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.labelButton.nativeElement.disabled = isDisabled;
      var div = this.labelButton.nativeElement;
      var action = isDisabled ? 'addClass' : 'removeClass';
      this.r[action](div, 'disabled');
      this.disabled = isDisabled;
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown($event) {
      if (!this.opened) {
        return;
      } // console.log($event.key);
      // if (KeyCode[$event.key]) {


      switch ($event.key) {
        case 'ArrowDown':
          this._handleArrowDown($event);

          break;

        case 'ArrowUp':
          this._handleArrowUp($event);

          break;

        case 'Space':
          this._handleSpace($event);

          break;

        case 'Enter':
          this._handleEnter($event);

          break;

        case 'Tab':
          this._handleTab($event);

          break;

        case 'Escape':
          this.close();
          $event.preventDefault();
          break;

        case 'Backspace':
          this._handleBackspace();

          break;
      } // } else if ($event.key && $event.key.length === 1) {
      // this._keyPress$.next($event.key.toLocaleLowerCase());
      // }

    }
  }, {
    key: "_handleArrowDown",
    value: function _handleArrowDown($event) {
      if (this.optionId < this.options.length - 1) {
        this.optionId++;
      }
    }
  }, {
    key: "_handleArrowUp",
    value: function _handleArrowUp($event) {
      if (this.optionId >= 1) {
        this.optionId--;
      }
    }
  }, {
    key: "_handleSpace",
    value: function _handleSpace($event) {}
  }, {
    key: "_handleEnter",
    value: function _handleEnter($event) {
      this.optionSelect(this.options[this.optionId], $event);
    }
  }, {
    key: "_handleTab",
    value: function _handleTab($event) {}
  }, {
    key: "_handleBackspace",
    value: function _handleBackspace() {}
  }]);

  return AeSelectComponent;
}();

AeSelectComponent.ɵfac = function AeSelectComponent_Factory(t) {
  return new (t || AeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2));
};

AeSelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AeSelectComponent,
  selectors: [["ae-select"]],
  viewQuery: function AeSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.labelButton = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function AeSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AeSelectComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"])("keydown", function AeSelectComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.hidden);
    }
  },
  inputs: {
    options: "options",
    isHidden: ["hidden", "isHidden"]
  },
  outputs: {
    changeEvent: "change"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function () {
      return AeSelectComponent;
    }),
    multi: true
  }])],
  decls: 10,
  vars: 7,
  consts: [[1, "ae-font", "ae-picker", 3, "ngClass"], ["tabindex", "0", "type", "button", "role", "button", 1, "ae-picker-label", 3, "tabIndex", "click"], ["labelButton", ""], ["viewBox", "0 0 18 18"], ["points", "7 11 9 13 11 11 7 11", 1, "ae-stroke"], ["points", "7 7 9 5 11 7 7 7", 1, "ae-stroke"], [1, "ae-picker-options"], ["tabindex", "-1", "type", "button", "role", "button", "class", "ae-picker-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-item", 4, "ngIf"], ["tabindex", "-1", "type", "button", "role", "button", 1, "ae-picker-item", 3, "ngClass", "click"], [1, "dropdown-item"]],
  template: function AeSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AeSelectComponent_Template_button_click_1_listener($event) {
        return ctx.toggleOpen($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "polygon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "polygon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AeSelectComponent_button_8_Template, 2, 5, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AeSelectComponent_span_9_Template, 2, 0, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c6, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tabIndex", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.label, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.options.length);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: [".ae-font.ae-picker{color:#444}.ae-font.ae-picker,.ae-font .ae-picker-label{display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;height:100%;padding-left:8px;padding-right:10px;line-height:26px;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:\"\";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(90deg,#fff,#fff)}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}"],
  encapsulation: 2
});

AeSelectComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
  }];
};

AeSelectComponent.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  isHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['hidden']
  }],
  hidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding,
    args: ['style.display']
  }],
  changeEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['change']
  }],
  labelButton: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: ['labelButton', {
      static: true
    }]
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['document:click', ['$event']]
  }],
  handleKeyDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['keydown', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AeSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'ae-select',
      template: "<span class=\"ae-font ae-picker\" [ngClass]=\"{'ae-expanded':isOpen}\">\n  <button [tabIndex]=\"-1\" #labelButton tabindex=\"0\" type=\"button\" role=\"button\" class=\"ae-picker-label\" (click)=\"toggleOpen($event);\">{{label}}\n    <svg viewBox=\"0 0 18 18\">\n     <!-- <use x=\"0\" y=\"0\" xlink:href=\"../assets/icons.svg#hom\"></use>-->\n      <polygon class=\"ae-stroke\" points=\"7 11 9 13 11 11 7 11\"></polygon>\n      <polygon class=\"ae-stroke\" points=\"7 7 9 5 11 7 7 7\"></polygon>\n    </svg>\n  </button>\n  <span class=\"ae-picker-options\">\n    <button tabindex=\"-1\" type=\"button\" role=\"button\" class=\"ae-picker-item\"\n          *ngFor=\"let item of options; let i = index\"\n          [ngClass]=\"{'selected': item.value === value, 'focused': i === optionId}\"\n          (click)=\"optionSelect(item, $event)\">\n          {{item.label}}\n    </button>\n    <span class=\"dropdown-item\" *ngIf=\"!options.length\">No items for select</span>\n  </span>\n</span>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function () {
          return AeSelectComponent;
        }),
        multi: true
      }],
      styles: [".ae-font.ae-picker{color:#444}.ae-font.ae-picker,.ae-font .ae-picker-label{display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;height:100%;padding-left:8px;padding-right:10px;line-height:26px;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:\"\";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(90deg,#fff,#fff)}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding,
      args: ['style.display']
    }],
    changeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['change']
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['document:click', ['$event']]
    }],
    handleKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['keydown', ['$event']]
    }],
    isHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['hidden']
    }],
    labelButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: ['labelButton', {
        static: true
      }]
    }]
  });
})();

var AngularEditorModule = function AngularEditorModule() {
  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AngularEditorModule);
};

AngularEditorModule.ɵfac = function AngularEditorModule_Factory(t) {
  return new (t || AngularEditorModule)();
};

AngularEditorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AngularEditorModule
});
AngularEditorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AngularEditorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule],
      declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent],
      exports: [AngularEditorComponent, AngularEditorToolbarComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AngularEditorModule, {
    declarations: function declarations() {
      return [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule];
    },
    exports: function exports() {
      return [AngularEditorComponent, AngularEditorToolbarComponent];
    }
  });
})();
/*
 * Public API Surface of angular-editor
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9107:
/*!**************************************************************!*\
  !*** ./src/app/lesson/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer.component.html */ 3991);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component.scss */ 3074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







var FooterComponent = /*#__PURE__*/function () {
  function FooterComponent() {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FooterComponent);

    this.onCheck = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.onContinue = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FooterComponent, [{
    key: "check",
    value: function check() {
      this.onCheck.emit();
    }
  }, {
    key: "continue",
    value: function _continue() {
      this.onContinue.emit();
    }
  }]);

  return FooterComponent;
}();

FooterComponent.ctorParameters = function () {
  return [];
};

FooterComponent.propDecorators = {
  checked: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  onCheck: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }],
  onContinue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-footer',
  template: _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
  styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_3__]
})], FooterComponent);


/***/ }),

/***/ 7656:
/*!**************************************************************!*\
  !*** ./src/app/lesson/containers/create/create.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": function() { return /* binding */ CreateComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create.component.html */ 6826);
/* harmony import */ var _create_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.component.scss */ 2652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);









var CreateComponent = /*#__PURE__*/function () {
  function CreateComponent(fb, http //todo: quitar de aqui cuando haya API y llevar a un servicio
  ) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreateComponent);

    this.fb = fb;
    this.http = http;
    this.editorConfig = {
      editable: true,
      spellcheck: false,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      enableToolbar: true,
      showToolbar: true,
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [{
        class: 'Open Sans',
        name: 'Open Sans'
      }],
      customClasses: [{
        name: 'quote',
        class: 'quote'
      }, {
        name: 'redText',
        class: 'redText'
      }, {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1'
      }],
      uploadWithCredentials: false,
      sanitize: true,
      toolbarPosition: 'top',
      toolbarHiddenButtons: [['fontSize', 'textColor', 'backgroundColor', 'customClasses', 'link', 'unlink', 'insertImage', 'insertVideo', 'toggleEditorMode']]
    };
    this.form = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      subtitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      exercises: this.fb.array([this.createExercise()])
    });
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "createExercise",
    value: function createExercise() {
      return this.fb.group({
        type: ['input', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        exercise: ['___', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        answers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        options: ['']
      });
    }
  }, {
    key: "addExercise",
    value: function addExercise() {
      this.exercises = this.form.get('exercises');
      this.exercises.push(this.createExercise());
    }
  }, {
    key: "removeExercise",
    value: function removeExercise(index) {
      this.exercises.removeAt(index);
    }
  }, {
    key: "getJSON",
    value: function getJSON() {
      return JSON.stringify(this.form.value);
    }
  }, {
    key: "saveJSON",
    value: function saveJSON() {
      var _this = this;

      var json = this.getJSON();
      this.http.post('https://verbovista.com/api/saveJSON.php', {
        json: json
      }).subscribe(function (data) {
        if (data['data'] === 1) {
          _this.success = true;

          _this.form.reset();
        } else {
          _this.success = false;
        }
      });
    }
    /**
     * Required!! for dinamic formgroup *ngFor
     * @param index
     * @param item
     */

  }, {
    key: "trackByFn",
    value: function trackByFn(index, item) {
      return index;
    }
  }]);

  return CreateComponent;
}();

CreateComponent.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }];
};

CreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-create',
  template: _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  styles: [_create_component_scss__WEBPACK_IMPORTED_MODULE_3__]
})], CreateComponent);


/***/ }),

/***/ 4899:
/*!******************************************************************!*\
  !*** ./src/app/lesson/containers/exercise/exercise.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseComponent": function() { return /* binding */ ExerciseComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/slicedToArray */ 7034);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 9400);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/regenerator */ 530);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exercise_component_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exercise.component.html */ 8519);
/* harmony import */ var _exercise_component_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercise.component.scss */ 9389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _assets_data_lessons_lessons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/data/lessons/lessons */ 3063);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utils */ 5219);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/storage.service */ 4460);
















var ExerciseComponent = /*#__PURE__*/function () {
  function ExerciseComponent(alertController, router, route, storageService) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ExerciseComponent);

    this.alertController = alertController;
    this.router = router;
    this.route = route;
    this.storageService = storageService;
    this.exerciseInputChars = '___';
    this.exerciseParts = [];
    this.feedback = {
      fullText: '',
      upper: false,
      accent: false,
      correct: []
    };
    this.fields = [];
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({});
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ExerciseComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.route.params.subscribe(function (params) {
        if (params) {
          _this.lessonId = Number(params.lesson);
          _this.lesson = _assets_data_lessons_lessons__WEBPACK_IMPORTED_MODULE_7__.lessons[_this.lessonId - 1];
          _this.exerciseId = Number(params.exercise);
          _this.exercise = _this.lesson.exercises[_this.exerciseId - 1];

          for (var i = 0; i < _this.getAnswersNumber(); i++) {
            var field = {
              id: 'exercise' + i,
              label: 'exercise' + i,
              value: '',
              incorrect: false,
              answer: _this.getAnswer(i)
            };

            _this.fields.push(field);

            _this.form.addControl(field.id, new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(field.value));
          }

          _this.exerciseParts = _this.getExercisesParts();

          _this.setProcessPercentage();

          _this.storageService.setObject('lastLesson', params);
        }
      });
    }
  }, {
    key: "checkExercise",
    value: function checkExercise() {
      var _iterator = (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.fields.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_step.value, 2),
              index = _step$value[0],
              field = _step$value[1];

          this.form.get(field.id).disable();

          switch (this.exercise.type) {
            case 'input':
              if (this.checkAnswer(index, this.form.get(field.id).value)) {
                //todo:mostrar respuesta correcta
                console.log("correcto");
              } else {
                //todo:mostrar respuesta correcta
                console.log("incorrecto");
                this.allCorrect = false;
                this.feedback.correct.push(this.exercise.answers[index].split('||'));
                this.fields[index].incorrect = true;
              }

              break;
            //todo: quitar de aqui o unificar

            case 'choose':
              //todo: choose
              this.checkChoose('');
              break;
          }

          this.form.get(field.id).disable();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.allCorrect !== false) {
        this.allCorrect = true;
        _shared_utils__WEBPACK_IMPORTED_MODULE_8__["default"].playSound();
      }

      this.checked = true;
    }
  }, {
    key: "continue",
    value: function _continue() {
      var _this2 = this;

      if (this.lesson.exercises.length > this.exerciseId) {
        this.router.navigate(['/aprender-a-conjugar', this.lessonId, this.exerciseId + 1]);
      } else {
        //set has done lesson:
        var completedLessons = [this.lessonId];
        this.storageService.getObject('completedLessons').then(function (values) {
          if (values) {
            completedLessons = values;
            completedLessons.push(_this2.lessonId);
          }

          _this2.storageService.setObject('completedLessons', completedLessons);
        }); //navigate to lessons:

        this.router.navigate(['/aprender-a-conjugar']);
      }
    }
  }, {
    key: "isString",
    value: function isString(variable) {
      return typeof variable === 'string';
    }
  }, {
    key: "checkChoose",
    value: function checkChoose(selectedOption) {
      if (this.checked) {
        return;
      }

      if (selectedOption === this.exercise.answers) {
        console.log("correcto");
        this.allCorrect = true;
        _shared_utils__WEBPACK_IMPORTED_MODULE_8__["default"].playSound();
      } else {
        console.log("incorrecto");
        this.allCorrect = false;
      }

      this.checked = true;
    }
  }, {
    key: "getFullCorrectedSentence",
    value: function getFullCorrectedSentence() {
      var _this3 = this;

      return this.exerciseParts.reduce(function (prev, current) {
        return _this3.isString(current) ? prev + current : prev + current.answer;
      });
    }
  }, {
    key: "getAnswer",
    value: function getAnswer(index) {
      if (this.isString(this.exercise.answers)) {
        return this.exercise.answers;
      } else {
        return this.exercise.answers[index];
      }
    }
  }, {
    key: "setProcessPercentage",
    value: function setProcessPercentage() {
      var _this4 = this;

      //Progress bar
      this.processPercentage = this.exerciseId / this.lesson.exercises.length;
      setTimeout(function () {
        _this4.processPercentage = (_this4.exerciseId + 1) / _this4.lesson.exercises.length;
      }, 500);
    }
  }, {
    key: "presentAlert",
    value: function presentAlert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var alert, _yield$alert$onDidDis, role;

        return _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.alertController.create({
                  cssClass: 'my-custom-class',
                  header: 'Recordatorio',
                  //subHeader: 'Subtitle',
                  message: this.lesson.content,
                  buttons: ['Cerrar']
                });

              case 2:
                alert = _context.sent;
                _context.next = 5;
                return alert.present();

              case 5:
                _context.next = 7;
                return alert.onDidDismiss();

              case 7:
                _yield$alert$onDidDis = _context.sent;
                role = _yield$alert$onDidDis.role;
                console.log('onDidDismiss resolved with role', role);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getExercisesParts",
    value: function getExercisesParts() {
      var parts = [];
      var fieldIndex = 0;
      var exerciseText = this.exercise.exercise;

      while (exerciseText.indexOf(this.exerciseInputChars) !== -1) {
        parts.push(exerciseText.split(this.exerciseInputChars, 1).pop());
        parts.push(this.fields[fieldIndex]);
        fieldIndex++;
        exerciseText = exerciseText.substring(exerciseText.indexOf(this.exerciseInputChars) + this.exerciseInputChars.length, exerciseText.length);
      }

      if (exerciseText) {
        parts.push(exerciseText);
      } //console.log(parts);


      return parts;
    }
  }, {
    key: "getAnswersNumber",
    value: function getAnswersNumber() {
      var questions = (this.exercise.exercise.match(/___/g) || []).length;
      return questions;
      return typeof this.exercise.answers === 'string' ? 1 : this.exercise.answers.length;
    }
  }, {
    key: "checkAnswer",
    value: function checkAnswer() {
      var _this5 = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var typedValue = arguments.length > 1 ? arguments[1] : undefined;
      var correctValues = [];

      if (this.isString(this.exercise.answers)) {
        if (this.exercise.answers.indexOf('||')) {
          correctValues = this.exercise.answers.split('||');
        } else {
          correctValues.push(this.exercise.answers);
        }
      } else {
        correctValues = this.exercise.answers[index].split('||');
      }

      var found = correctValues.find(function (correctValue) {
        if (!_shared_utils__WEBPACK_IMPORTED_MODULE_8__["default"].isEqualInAccents(correctValue, typedValue)) {
          _this5.feedback.accent = true;
        }

        if (!_shared_utils__WEBPACK_IMPORTED_MODULE_8__["default"].isEqualInCase(correctValue, typedValue)) {
          _this5.feedback.upper = true;
        }

        return _shared_utils__WEBPACK_IMPORTED_MODULE_8__["default"].isCorrectAnswer(correctValue, typedValue);
      });
      return found;
    }
  }]);

  return ExerciseComponent;
}();

ExerciseComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
  }, {
    type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_9__.StorageService
  }];
};

ExerciseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-exercise',
  template: _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exercise_component_html__WEBPACK_IMPORTED_MODULE_5__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectionStrategy.OnPush,
  styles: [_exercise_component_scss__WEBPACK_IMPORTED_MODULE_6__]
})], ExerciseComponent);


/***/ }),

/***/ 5928:
/*!**************************************************************!*\
  !*** ./src/app/lesson/containers/lesson/lesson.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonComponent": function() { return /* binding */ LessonComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lesson_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./lesson.component.html */ 5269);
/* harmony import */ var _lesson_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lesson.component.scss */ 5979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _assets_data_lessons_lessons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/data/lessons/lessons */ 3063);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9686);











var LessonComponent = /*#__PURE__*/function () {
  function LessonComponent(domSanitizer, router, route, translate, elRef) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessonComponent);

    this.domSanitizer = domSanitizer;
    this.router = router;
    this.route = route;
    this.translate = translate;
    this.elRef = elRef;
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LessonComponent, [{
    key: "lesson",
    set: function set(lesson) {
      this.lessonData = lesson;
      this.sanitizeContent();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.route.params.subscribe(function (params) {
        if (params) {
          _this.lessonId = params.lesson;
          _this.lessonData = _assets_data_lessons_lessons__WEBPACK_IMPORTED_MODULE_4__.lessons[_this.lessonId - 1];

          _this.sanitizeContent();
        }
      });
      this.translate.onLangChange.subscribe(function (event) {
        _this.sanitizeContent();
      });
    }
  }, {
    key: "sanitizeContent",
    value: function sanitizeContent() {
      this.lessonData.content = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__.SecurityContext.HTML, this.domSanitizer.bypassSecurityTrustHtml(this.lessonData.content));
      this.changeLangContent();
    }
  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      this.changeLangContent();
    }
  }, {
    key: "changeLangContent",
    value: function changeLangContent() {
      if (this.translate.currentLang === 'en') {
        if (this.elRef.nativeElement.querySelectorAll('.onlyEn')) {
          this.elRef.nativeElement.querySelectorAll('.onlyEn').forEach(function (elem) {
            return elem.classList.remove('onlyEn');
          });
        }
      }
    }
  }, {
    key: "continue",
    value: function _continue() {
      if (this.lessonData.exercises.length > 0) {
        this.router.navigate(['/aprender-a-conjugar', this.lessonId, 1]);
      } else {
        this.router.navigate(['/aprender-a-conjugar']);
      }
    }
  }]);

  return LessonComponent;
}();

LessonComponent.ctorParameters = function () {
  return [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef
  }];
};

LessonComponent.propDecorators = {
  lesson: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
LessonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-lesson',
  template: _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lesson_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
  styles: [_lesson_component_scss__WEBPACK_IMPORTED_MODULE_3__]
})], LessonComponent);


/***/ }),

/***/ 6107:
/*!****************************************************************!*\
  !*** ./src/app/lesson/containers/lessons/lessons.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonsComponent": function() { return /* binding */ LessonsComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lessons_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./lessons.component.html */ 4796);
/* harmony import */ var _lessons_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lessons.component.scss */ 1603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _assets_data_lessons_lessons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/data/lessons/lessons */ 3063);
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/storage.service */ 4460);
/* harmony import */ var _shared_models_banner_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/models/banner.model */ 67);










var LessonsComponent = /*#__PURE__*/function () {
  function LessonsComponent(storageService) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessonsComponent);

    this.storageService = storageService;
    this.lessons = _assets_data_lessons_lessons__WEBPACK_IMPORTED_MODULE_4__.lessons;
    this.banner = new _shared_models_banner_model__WEBPACK_IMPORTED_MODULE_6__.Banner('ca-pub-4641807338135449', 4558658814, 'auto', true);
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LessonsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.storageService.updated$.subscribe(function (data) {
        _this.loadStorage();
      });
    }
  }, {
    key: "loadStorage",
    value: function loadStorage() {
      this.lastLesson$ = this.storageService.getObject('lastLesson');
      this.completedLessons$ = this.storageService.getObject('completedLessons');
    }
  }, {
    key: "isCompletedLesson",
    value: function isCompletedLesson(completedLessons, index) {
      return completedLessons.find(function (item) {
        return item === index + 1;
      });
    }
  }]);

  return LessonsComponent;
}();

LessonsComponent.ctorParameters = function () {
  return [{
    type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService
  }];
};

LessonsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-lessons',
  template: _home_runner_work_verbovista_verbovista_front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lessons_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectionStrategy.OnPush,
  styles: [_lessons_component_scss__WEBPACK_IMPORTED_MODULE_3__]
})], LessonsComponent);


/***/ }),

/***/ 7329:
/*!*************************************************!*\
  !*** ./src/app/lesson/lesson-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonRoutingModule": function() { return /* binding */ LessonRoutingModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _containers_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/lessons/lessons.component */ 6107);
/* harmony import */ var _containers_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/lesson/lesson.component */ 5928);
/* harmony import */ var _containers_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/exercise/exercise.component */ 4899);
/* harmony import */ var _containers_create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/create/create.component */ 7656);








var routes = [{
  path: 'crear',
  component: _containers_create_create_component__WEBPACK_IMPORTED_MODULE_4__.CreateComponent,
  data: {
    title: 'Crear lecciones y ejercicios',
    description: 'Crea lecciones y ejercicios personalizados.',
    keywords: 'Crea lecciones y ejercicios de conjugación, Crea lecciones y ejercicios de verbos'
  }
}, {
  path: ':lesson/:exercise',
  component: _containers_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_3__.ExerciseComponent,
  data: {
    title: 'Ejercicios para aprender a conjugar verbos',
    description: 'Ejercicios para aprender a conjugar verbos en español.'
  }
}, {
  path: ':lesson',
  component: _containers_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_2__.LessonComponent,
  data: {
    title: 'Aprender a conjugar verbos',
    description: 'Aprender a conjugar verbos en español con lecciones y ejercicios.',
    keywords: 'Aprender a conjugar, Aprender a conjugar verbos en español'
  }
}, {
  path: '',
  component: _containers_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_1__.LessonsComponent,
  data: {
    title: 'Aprender a conjugar verbos',
    description: 'Aprender a conjugar verbos en español con lecciones y ejercicios.',
    keywords: 'Aprender a conjugar, Aprender a conjugar verbos en español'
  }
}];

var LessonRoutingModule = function LessonRoutingModule() {
  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessonRoutingModule);
};

LessonRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
})], LessonRoutingModule);


/***/ }),

/***/ 9805:
/*!*****************************************!*\
  !*** ./src/app/lesson/lesson.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonModule": function() { return /* binding */ LessonModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _lesson_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lesson-routing.module */ 7329);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 1382);
/* harmony import */ var _containers_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/lessons/lessons.component */ 6107);
/* harmony import */ var _containers_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/lesson/lesson.component */ 5928);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ 9107);
/* harmony import */ var _containers_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/exercise/exercise.component */ 4899);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/elements */ 1597);
/* harmony import */ var _shared_components_conjugation_conjugation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/conjugation/conjugation.component */ 3714);
/* harmony import */ var _containers_create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/create/create.component */ 7656);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @kolkov/angular-editor */ 7385);

















var LessonModule = function LessonModule(injector) {
  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessonModule);

  this.injector = injector;
  var el = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_9__.createCustomElement)(_shared_components_conjugation_conjugation_component__WEBPACK_IMPORTED_MODULE_7__.ConjugationComponent, {
    injector: injector
  });
  customElements.define('app-conjugacion', el);
};

LessonModule.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector
  }];
};

LessonModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  declarations: [_containers_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_3__.LessonsComponent, _containers_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_4__.LessonComponent, _containers_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_6__.ExerciseComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _containers_create_create_component__WEBPACK_IMPORTED_MODULE_8__.CreateComponent],
  exports: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _lesson_routing_module__WEBPACK_IMPORTED_MODULE_1__.LessonRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__.AngularEditorModule]
})], LessonModule);


/***/ }),

/***/ 4460:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": function() { return /* binding */ StorageService; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/regenerator */ 530);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 7897);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1119);








var StorageService = /*#__PURE__*/function () {
  function StorageService(storage) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StorageService);

    this.storage = storage;
    this.updated$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this._storage = null;
    this.init();
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StorageService, [{
    key: "init",
    value: function init() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var storage;
        return _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.storage.create();

              case 2:
                storage = _context.sent;
                this._storage = storage;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    } // Create and expose methods that users of this service can

  }, {
    key: "getAll",
    value: function getAll() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this = this;

        return _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._storage) {
                  this.init();
                }

                return _context2.abrupt("return", this.storage.keys().then(function (keys) {
                  return Promise.all(keys.map(function (k) {
                    return _this.storage.get(k);
                  }));
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "set",
    value: function set(key, value) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var result;
        return _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.storage.set(key, value);

              case 3:
                result = _context3.sent;
                //console.log('set string in storage: ' + result);
                this.updated$.next(this.getAll());
                return _context3.abrupt("return", true);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
                return _context3.abrupt("return", false);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));
    }
  }, {
    key: "get",
    value: function get(key) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var result;
        return _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.storage.get(key);

              case 3:
                result = _context4.sent;

                if (!(result != null)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", result);

              case 6:
                return _context4.abrupt("return", null);

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
                return _context4.abrupt("return", null);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));
    }
  }, {
    key: "setObject",
    value: function setObject(key, object) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var result;
        return _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.storage.set(key, JSON.stringify(object));

              case 3:
                result = _context5.sent;
                //console.log('set Object in storage: ' + result);
                this.updated$.next(this.getAll());
                return _context5.abrupt("return", true);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);
                return _context5.abrupt("return", false);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));
    }
  }, {
    key: "getObject",
    value: function getObject(key) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var result;
        return _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.storage.get(key);

              case 3:
                result = _context6.sent;

                if (!(result != null)) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return", JSON.parse(result));

              case 6:
                return _context6.abrupt("return", null);

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                console.log(_context6.t0);
                return _context6.abrupt("return", null);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 9]]);
      }));
    }
  }, {
    key: "remove",
    value: function remove(key) {
      this.storage.remove(key);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.storage.clear();
    }
  }]);

  return StorageService;
}();

StorageService.ctorParameters = function () {
  return [{
    type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage
  }];
};

StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], StorageService);


/***/ }),

/***/ 5581:
/*!********************************************!*\
  !*** ./src/assets/data/lessons/lesson1.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson1": function() { return /* binding */ lesson1; }
/* harmony export */ });
var lesson1 = {
  title: 'Pronombres personales',
  subtitle: 'yo, tú, él/ella/usted, nosotros/nosotras, vosotros/vosotras, ellos/ellas/ustedes',
  content: "\n    <p>Son las palabras usadas para referirnos a las tres personas gramaticales sin emplear un sustantivo. Se llaman pronombres porque \"sustituyen\" o \"equivalen\" a un nombre.</p>\n\n    <table class=\"conjugation-table\">\n        <tr>\n            <td>1\xAA persona singular</td>\n            <td><b>yo</b> <span class=\"onlyEn\">(I)</span></td>\n        </tr>\n        <tr>\n            <td>2\xAA persona singular</td>\n            <td><b>t\xFA</b> <span class=\"onlyEn\">(You)</span></td>\n        </tr>\n        <tr>\n            <td>3\xAA persona singular</td>\n            <td><b>\xE9l, ella, usted</b> <span class=\"onlyEn\">(he, she)</span> </td>\n        </tr>\n        <tr>\n            <td>1\xAA persona plural</td>\n            <td><b>nosotros, nosotras</b> <span class=\"onlyEn\">(we)</span></td>\n        </tr>\n        <tr>\n            <td>2\xAA persona plural</td>\n            <td><b>vosotros, vosotras</b> <span class=\"onlyEn\">(you)</span></td>\n        </tr>\n        <tr>\n            <td>3\xAA persona plural</td>\n            <td><b>ellos, ellas, ustedes</b> <span class=\"onlyEn\">(they)</span></td>\n        </tr>\n    </table>\n    ",
  exercises: [{
    type: 'choose',
    exercise: '___ <span class="grey">(1ª persona singular)</span> salto a la comba.',
    options: ['Yo', 'Tú'],
    answers: 'Yo'
  }, {
    type: 'choose',
    exercise: '___ <span class="grey">(2ª persona singular)</span> aprendes español.',
    options: ['Yo', 'Tú'],
    answers: 'Tú'
  }, {
    type: 'choose',
    exercise: '___ <span class="grey">(3ª persona singular)</span> lee un libro.',
    options: ['Él', 'Ellos'],
    answers: 'Él'
  }, {
    type: 'input',
    exercise: '___ <span class="grey">(1ª persona singular)</span> juego con mis amigos.',
    answers: 'Yo'
  }, {
    type: 'choose',
    exercise: '___ <span class="grey">(2ª persona singular)</span> saltas a la comba.',
    options: ['Él', 'Tú'],
    answers: 'Tú'
  }, {
    type: 'input',
    exercise: '___ <span class="grey">(3ª persona singular)</span> aprende español.',
    answers: 'Él || Ella || Usted'
  }, {
    type: 'input',
    exercise: '___ <span class="grey">(1ª persona singular)</span> juego con mis amigos y ___ juegan conmigo.',
    answers: ['Yo', 'ellos']
  }, {
    type: 'choose',
    exercise: '___ <span class="grey">(1ª persona plural)</span> jugamos con nuestros amigos.',
    options: ['Ellos', 'Nosotros'],
    answers: 'Nosotros'
  }, {
    type: 'input',
    exercise: '___ <span class="grey">(2ª persona plural)</span> saltamos a la comba.',
    answers: 'Nosotros || Nosotras'
  }, {
    type: 'input',
    exercise: '___ <span class="grey">(3ª persona plural)</span> aprenden español.',
    answers: 'Ellos || Ellas || Ustedes'
  }]
};

/***/ }),

/***/ 1926:
/*!*********************************************!*\
  !*** ./src/assets/data/lessons/lesson10.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson10": function() { return /* binding */ lesson10; }
/* harmony export */ });
var lesson10 = {
  title: 'Verbos regulares de futuro acabados en -ER',
  content: "\n    <p>Para conjugar el futuro de los verbos regulares acabados en -ER se usa la raiz + las siguientes desinencias en funcion de la persona.\n    Por ejemplo: comer en futuro de la primera persona -> com + <span class=\"regular\">er\xE9</span>\n\n    <h2>Indicativo</h2>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion title=\"Desinencias futuro (ER)\" desinencias=\"comer\" grupo=\"Indicativo\" tiempo=\"Futuro\"></app-conjugacion>\n            </ion-col>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion verbo=\"comer\" grupo=\"Indicativo\" tiempo=\"Futuro\"></app-conjugacion>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'Mañana, yo ___ <span class="grey">(comer en 1ª persona del singular)</span> fuera de casa.',
    options: ['comeré', 'comerá'],
    answers: 'comeré'
  }, {
    type: 'input',
    exercise: 'Él ___ <span class="grey">(aprender en 3ª persona del singular)</span> castellano el año que viene.',
    answers: 'aprenderá'
  }, {
    type: 'choose',
    exercise: 'Pasado mañana, nosotros ___ <span class="grey">(correr en 1ª persona del plural)</span> los cien metros lisos.',
    options: ['correremos', 'correrás'],
    answers: 'correremos'
  }, {
    type: 'input',
    exercise: 'Tú ___ <span class="grey">(comer en 2ª persona del singular)</span> en el comedor la semana que viene.',
    answers: 'comerás'
  }, {
    type: 'choose',
    exercise: 'Ellos ___ <span class="grey">(comer en 3ª persona del plural)</span> en casa los fines de semana.',
    options: ['comerán', 'comeré'],
    answers: 'comerán'
  }, {
    type: 'input',
    exercise: 'Vosotros ___ <span class="grey">(aprender en 2ª persona del plural)</span> castellano el próximo curso.',
    answers: 'aprenderéis'
  }]
};

/***/ }),

/***/ 6677:
/*!*********************************************!*\
  !*** ./src/assets/data/lessons/lesson11.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson11": function() { return /* binding */ lesson11; }
/* harmony export */ });
var lesson11 = {
  title: 'Verbos regulares de futuro acabados en -IR',
  content: "\n    <p>Para conjugar el futuro de los verbos regulares acabados en -IR se usa la raiz + las siguientes desinencias en funcion de la persona.\n    Por ejemplo: vivir en futuro de la primera persona -> viv + <span class=\"regular\">ir\xE9</span>\n\n    <h2>Indicativo</h2>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion title=\"Desinencias futuro (IR)\" desinencias=\"vivir\" grupo=\"Indicativo\" tiempo=\"Futuro\"></app-conjugacion>\n            </ion-col>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion verbo=\"vivir\" grupo=\"Indicativo\" tiempo=\"Futuro\"></app-conjugacion>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'Yo ___ <span class="grey">(vivir en 1ª persona del singular)</span> en Madrid el año que viene.',
    options: ['viviré', 'vivirá'],
    answers: 'viviré'
  }, {
    type: 'input',
    exercise: 'Él ___ <span class="grey">(abrir en 3ª persona del singular)</span> la puerta todas las mañanas.',
    answers: 'abrirá'
  }, {
    type: 'choose',
    exercise: 'Nosotros ___ <span class="grey">(permitir en 1ª persona del plural)</span> jugar a la pelota en la plaza.',
    options: ['permitiremos', 'permitirán'],
    answers: 'permitiremos'
  }, {
    type: 'input',
    exercise: 'Tú ___ <span class="grey">(partir en 2ª persona del singular)</span> el bocadillo por la mitad.',
    answers: 'partirás'
  }, {
    type: 'choose',
    exercise: 'Ellos ___ <span class="grey">(compartir en 3ª persona del plural)</span> piso el próximo año.',
    options: ['compartirán', 'compartirá'],
    answers: 'compartirán'
  }, {
    type: 'input',
    exercise: 'Vosotros ___ <span class="grey">(vivir en 2ª persona del plural)</span> en Barcelona el año que viene.',
    answers: 'viviréis'
  }]
};

/***/ }),

/***/ 8190:
/*!*********************************************!*\
  !*** ./src/assets/data/lessons/lesson12.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson12": function() { return /* binding */ lesson12; }
/* harmony export */ });
var lesson12 = {
  title: 'Gerundio',
  content: "\n    <p>Es una forma com\xFAn para todas las personas y tiempos e indica que la acci\xF3n se est\xE1 llevando a cabo.</p>\n    <p>Se forma en funci\xF3n de la terminaci\xF3n del infinitivo:</p>\n    <ul>\n        <li><b>ar</b>: ra\xEDz + <span class=\"regular\">ando</span></li>\n        <li><b>er / ir</b>: ra\xEDz + <span class=\"regular\">iendo</span></li>\n    </ul>\n    <p>Por ejemplo: </p>\n    <p>saltar -> salt<span class=\"regular\">ando</span></p>\n    <p>salir -> sal<span class=\"regular\">iendo</span></p>\n    ",
  exercises: [{
    type: 'choose',
    exercise: '___ <span class="grey">(gerundio del verbo salir)</span> de casa, me encontré con mi vecino.',
    options: ['Saliendo', 'Salendo'],
    answers: 'Saliendo'
  }, {
    type: 'input',
    exercise: 'Ahora no puedo salir, estoy ___ <span class="grey">(gerundio del verbo estudiar)</span>.',
    answers: 'estudiando'
  }, {
    type: 'choose',
    exercise: 'Él está ___ <span class="grey">(gerundio del verbo escribir)</span> un libro.',
    options: ['escribiendo', 'escribendo'],
    answers: 'escribiendo'
  }, {
    type: 'input',
    exercise: 'Estoy ___ <span class="grey">(gerundio del verbo leer)</span> un libro muy bueno.',
    answers: 'leyendo'
  }, {
    type: 'choose',
    exercise: 'Nos gusta sacar fotos cuando está ___ <span class="grey">(gerundio del verbo amanecer)</span>.',
    options: ['amanecendo', 'amaneciendo'],
    answers: 'amaneciendo'
  }]
};

/***/ }),

/***/ 1092:
/*!*********************************************!*\
  !*** ./src/assets/data/lessons/lesson13.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson13": function() { return /* binding */ lesson13; }
/* harmony export */ });
var lesson13 = {
  title: 'Participio',
  content: "\n     <p>El participio es la forma no personal del verbo que funciona como adjetivo.</p>\n     <p>Se forma en funci\xF3n de la terminaci\xF3n del infinitivo:</p>\n    <ul>\n        <li><b>ar</b>: ra\xEDz + <span class=\"regular\">ado</span></li>\n        <li><b>er / ir</b>: ra\xEDz + <span class=\"regular\">ido</span></li>\n    </ul>\n\n    <p>Algunos verbos tienen doble participio, adem\xE1s del participio mencionado previamente, tienen uno m\xE1s, el ejemplo m\xE1s com\xFAn es el verbo fre\xEDr.\n    Su participio es <b>fre\xEDdo</b> y tambi\xE9n <b>frito</b>.</p>\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'El huevo estaba ___ <span class="grey">(participio del verbo freir)</span>.',
    options: ['frito', 'freado'],
    answers: 'frito'
  }, {
    type: 'input',
    exercise: 'Ya hemos ___ <span class="grey">(participio del verbo hablar)</span> sobre ese tema.',
    answers: 'hablado'
  }, {
    type: 'choose',
    exercise: '¿Has ___ <span class="grey">(participio del verbo encontrar)</span> tu teléfono móvil?',
    options: ['encotrado', 'encontrado'],
    answers: 'encontrado'
  }, {
    type: 'input',
    exercise: 'Al fin he ___ <span class="grey">(participio del verbo entender)</span> el ejercicio.',
    answers: 'entendido'
  }, {
    type: 'choose',
    exercise: 'He ___ <span class="grey">(participio del verbo vivir)</span> muchos años en Barcelona.',
    options: ['vivado', 'vivido'],
    answers: 'vivido'
  }]
};

/***/ }),

/***/ 5019:
/*!*********************************************!*\
  !*** ./src/assets/data/lessons/lesson14.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson14": function() { return /* binding */ lesson14; }
/* harmony export */ });
var lesson14 = {
  title: 'Verbos reflexivos',
  content: "\n    <p>Un verbo tiene forma reflexiva cuando la acci\xF3n recae sobre el mismo sujeto que la realiza.</p>\n    <p>Se forma a\xF1adiendo al infinitivo <span class=\"regular\">se</span></p>\n    <p>Por ejemplo:</p>\n    <p>Peinar -> peinar<span class=\"regular\">se</span></p>\n    <p>Ba\xF1ar -> ba\xF1ar<span class=\"regular\">se</span></p>\n    <p>Cortar -> cortar<span class=\"regular\">se</span></p>\n\n    <p>Las formas reflexivas tiene los siguientes pronombres reflexivos:</p>\n    <table class=\"conjugation-table\">\n        <tr>\n            <td>yo</td>\n            <td><b>me</b> peino</td>\n        </tr>\n        <tr>\n            <td>tu</td>\n            <td><b>te</b> peinas</td>\n        </tr>\n        <tr>\n            <td>\xE9l</td>\n            <td><b>se</b> peina</td>\n        </tr>\n        <tr>\n            <td>nosotros/nosotras</td>\n            <td><b>nos</b> peinamos</td>\n        </tr>\n        <tr>\n            <td>vosotros, vosotras</td>\n            <td><b>os</b> pein\xE1is</td>\n        </tr>\n        <tr>\n            <td>ellos, ellas, ustedes</td>\n            <td><b>se</b> peinan</span></td>\n        </tr>\n    </table>\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'Yo ___ peino al salir de la ducha.',
    options: ['se', 'me'],
    answers: 'me'
  }, {
    type: 'input',
    exercise: 'Él ___ corta el pelo solo.',
    answers: 'se'
  }, {
    type: 'choose',
    exercise: 'Nosotros ___ bañamos en el lago.',
    options: ['nos', 'os'],
    answers: 'nos'
  }, {
    type: 'input',
    exercise: 'Tú ___ peinas el pelo hacia el lado derecho.',
    answers: 'te'
  }, {
    type: 'choose',
    exercise: 'Ellos ___ levantan muy temprano para estudiar.',
    options: ['se', 'os'],
    answers: 'se'
  }, {
    type: 'input',
    exercise: 'Vosotros ___ acostáis temprano todos los días.',
    answers: 'os'
  }]
};

/***/ }),

/***/ 2080:
/*!********************************************!*\
  !*** ./src/assets/data/lessons/lesson2.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson2": function() { return /* binding */ lesson2; }
/* harmony export */ });
var lesson2 = {
  title: 'Raíz y desinencia',
  content: "\n    <p>Todo verbo est\xE1 compuesto por dos partes:</p>\n    <ul>\n        <li><b>Ra\xEDz</b>: Es la parte del verbo que expresa su significado y es invariable. Por ejemplo: jugar (\"jug\" es la ra\xEDz)</li>\n        <li><b>Desinencia</b>: Es la terminaci\xF3n del verbo que se ve modificada por el tiempo verbal, el modo y la persona en que est\xE9 conjugado el verbo. Por ejemplo: jugando (ando), juego (o), jugar\xEDa (ar\xEDa), jugamos (amos).</li>\n    </ul>\n\n    <p>Ejemplo:</p>\n    <img src=\"assets/raiz-des.png\">\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'La <b>raíz</b> del verbo ganar es ___.',
    options: ['gan', 'ga'],
    answers: 'gan'
  }, {
    type: 'choose',
    exercise: 'La <b>desinencia</b> de gano es ___',
    options: ['o', 'no'],
    answers: 'o'
  }, {
    type: 'input',
    exercise: 'La <b>raíz</b> del verbo saltar es ___.',
    answers: 'salt'
  }, {
    type: 'input',
    exercise: 'La <b>desinencia</b> de saltado es ___.',
    answers: 'ado'
  }, {
    type: 'choose',
    exercise: 'La <b>raíz</b> del verbo comer es ___.',
    options: ['come', 'com'],
    answers: 'com'
  }, {
    type: 'choose',
    exercise: 'La <b>desinencia</b> del verbo comer es ___',
    options: ['er', 'ar'],
    answers: 'er'
  }, {
    type: 'input',
    exercise: 'La <b>raíz</b> del verbo reir es ___.',
    answers: 're'
  }, {
    type: 'input',
    exercise: 'La <b>desinencia</b> del verbo reir es ___',
    answers: 'ir'
  }, {
    type: 'choose',
    exercise: 'La <b>raíz</b> del verbo aprender es ___.',
    options: ['aprend', 'aprende'],
    answers: 'aprend'
  }, {
    type: 'choose',
    exercise: 'La <b>desinencia</b> de aprendiendo es ___',
    options: ['endo', 'iendo'],
    answers: 'iendo'
  }]
};

/***/ }),

/***/ 9279:
/*!********************************************!*\
  !*** ./src/assets/data/lessons/lesson3.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson3": function() { return /* binding */ lesson3; }
/* harmony export */ });
var lesson3 = {
  title: 'Verbos regulares del presente acabados en -AR',
  content: "\n    <p>Para conjugar el presente de los verbos acabados en -AR se usa la raiz + las siguientes desinencias en funcion de la persona.\n    Por ejemplo: amar en presente de la primera persona -> am + <span class=\"regular\">o</span>\n\n    <h2>Indicativo</h2>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion title=\"Desinencias presente (AR)\" desinencias=\"amar\" grupo=\"Indicativo\" tiempo=\"Presente\"></app-conjugacion>\n            </ion-col>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion verbo=\"amar\" grupo=\"Indicativo\" tiempo=\"Presente\"></app-conjugacion>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'Yo ___ <span class="grey">(jugar en 1ª persona del singular)</span> con mis amigos.',
    options: ['juego', 'jugamos'],
    answers: 'juego'
  }, {
    type: 'input',
    exercise: 'Él ___ <span class="grey">(amar en 3ª persona del singular)</span> a Laura.',
    answers: 'ama'
  }, {
    type: 'choose',
    exercise: 'Nosotros ___ <span class="grey">(saltar en 1ª persona del plural)</span> a la comba.',
    options: ['saltais', 'saltamos'],
    answers: 'saltamos'
  }, {
    type: 'input',
    exercise: 'Tú ___ <span class="grey">(saltar en 2ª persona del singular)</span> a la comba.',
    answers: 'saltas'
  }, {
    type: 'choose',
    exercise: 'Ellos ___ <span class="grey">(saltar en 3ª persona del plural)</span> a la comba.',
    options: ['salta', 'saltan'],
    answers: 'saltan'
  }, {
    type: 'input',
    exercise: 'Vosotros ___ <span class="grey">(amar en 2ª persona del plural)</span> el deporte.',
    answers: 'amáis'
  }]
};

/***/ }),

/***/ 8168:
/*!********************************************!*\
  !*** ./src/assets/data/lessons/lesson4.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson4": function() { return /* binding */ lesson4; }
/* harmony export */ });
var lesson4 = {
  title: 'Verbos regulares del presente acabados en -ER',
  content: "\n    <p>Para conjugar el presente de los verbos acabados en -ER se usa la raiz + las siguientes desinencias en funcion de la persona.\n    Por ejemplo: comer en presente de la primera persona -> com + <span class=\"regular\">o</span>\n\n    <h2>Indicativo</h2>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion title=\"Desinencias presente (ER)\" desinencias=\"comer\" grupo=\"Indicativo\" tiempo=\"Presente\"></app-conjugacion>\n            </ion-col>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion verbo=\"comer\" grupo=\"Indicativo\" tiempo=\"Presente\"></app-conjugacion>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'Yo ___ <span class="grey">(comer en 1ª persona del singular)</span> con mis amigos.',
    options: ['coma', 'como'],
    answers: 'como'
  }, {
    type: 'input',
    exercise: 'Él ___ <span class="grey">(aprender en 3ª persona del singular)</span> castellano.',
    answers: 'aprende'
  }, {
    type: 'choose',
    exercise: 'Nosotros ___ <span class="grey">(beber en 1ª persona del plural)</span> limonada.',
    options: ['bebemos', 'bebéis'],
    answers: 'bebemos'
  }, {
    type: 'input',
    exercise: 'Tú ___ <span class="grey">(lees en 2ª persona del singular)</span> muchos libros.',
    answers: 'lees'
  }, {
    type: 'choose',
    exercise: 'Ellos ___ <span class="grey">(correr en 3ª persona del plural)</span> los cien metros lisos.',
    options: ['corren', 'corréis'],
    answers: 'corren'
  }, {
    type: 'input',
    exercise: 'Vosotros ___ <span class="grey">(comer en 2ª persona del plural)</span> en el restaurante.',
    answers: 'coméis'
  }]
};

/***/ }),

/***/ 36:
/*!********************************************!*\
  !*** ./src/assets/data/lessons/lesson5.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson5": function() { return /* binding */ lesson5; }
/* harmony export */ });
var lesson5 = {
  title: 'Verbos regulares del presente acabados en -IR',
  content: "\n    <p>Para conjugar el presente de los verbos acabados en -IR se usa la raiz + las siguientes desinencias en funcion de la persona.\n    Por ejemplo: vivir en presente de la primera persona -> viv + <span class=\"regular\">o</span>\n\n    <h2>Indicativo</h2>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion title=\"Desinencias presente (IR)\" desinencias=\"vivir\" grupo=\"Indicativo\" tiempo=\"Presente\"></app-conjugacion>\n            </ion-col>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion verbo=\"vivir\" grupo=\"Indicativo\" tiempo=\"Presente\"></app-conjugacion>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'Yo ___ <span class="grey">(vivir en 1ª persona del singular)</span> con mis padres.',
    options: ['viva', 'vivo'],
    answers: 'vivo'
  }, {
    type: 'input',
    exercise: 'Él ___ <span class="grey">(abrir en 3ª persona del singular)</span> la puerta todas las mañanas.',
    answers: 'abre'
  }, {
    type: 'choose',
    exercise: 'Nosotros ___ <span class="grey">(partir en 1ª persona del plural)</span> la comida en partes iguales.',
    options: ['partimos', 'partís'],
    answers: 'partimos'
  }, {
    type: 'input',
    exercise: 'Tú ___ <span class="grey">(vivir en 2ª persona del singular)</span> con tus abuelos.',
    answers: 'vives'
  }, {
    type: 'choose',
    exercise: 'Ellos ___ <span class="grey">(compartir en 3ª persona del plural)</span> sus juguetes.',
    options: ['comparten', 'comparte'],
    answers: 'comparten'
  }, {
    type: 'input',
    exercise: 'Vosotros ___ <span class="grey">(vivir en 2ª persona del plural)</span> en un piso compartido.',
    answers: 'vivís'
  }]
};

/***/ }),

/***/ 8882:
/*!********************************************!*\
  !*** ./src/assets/data/lessons/lesson6.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson6": function() { return /* binding */ lesson6; }
/* harmony export */ });
var lesson6 = {
  title: 'Verbos regulares del pretérito perfecto simple acabados en -AR',
  content: "\n    <p>Para conjugar un verbo en pasado cuando la acci\xF3n ya ha acabado se usa el pret\xE9rito perfecto simple.\n    Para conjugar el pret\xE9rito perfecto simple de los verbos acabados en -AR se usa la raiz + las siguientes desinencias en funcion de la persona.\n    Por ejemplo: saltar en pret\xE9rito perfecto simple de la primera persona -> salt + <span class=\"regular\">\xE9</span>\n\n    <h2>Indicativo</h2>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion title=\"Desinencias pret\xE9rito perfecto simple (AR)\" desinencias=\"saltar\" grupo=\"Indicativo\" tiempo=\"Pret\xE9rito perfecto simple\"></app-conjugacion>\n            </ion-col>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion verbo=\"saltar\" grupo=\"Indicativo\" tiempo=\"Pret\xE9rito perfecto simple\"></app-conjugacion>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'Ayer ___ <span class="grey">(jugar en 1ª persona del singular)</span> con mis amigos.',
    options: ['jugué', 'juega'],
    answers: 'jugué'
  }, {
    type: 'input',
    exercise: 'La semana pasada, él ___ <span class="grey">(acabar en 3ª persona del singular)</span> sus tareas.',
    answers: 'acabó'
  }, {
    type: 'choose',
    exercise: 'Nosotros ___ <span class="grey">(aceptar en 1ª persona del plural)</span> las condiciones.',
    options: ['acepté', 'aceptamos'],
    answers: 'aceptamos'
  }, {
    type: 'input',
    exercise: 'Ayer ___ <span class="grey">(firmar en 2ª persona del singular)</span> el contrato de trabajo.',
    answers: 'firmaste'
  }, {
    type: 'choose',
    exercise: 'El año pasado, ellos ___ <span class="grey">(actuar en 3ª persona del plural)</span> en el teatro.',
    options: ['actuaron', 'actuó'],
    answers: 'acturaron'
  }, {
    type: 'input',
    exercise: 'Al comienzo del curso, vosotros ___ <span class="grey">(aceptar en 2ª persona del plural)</span> las normas de la escuela.',
    answers: 'aceptasteis'
  }]
};

/***/ }),

/***/ 8705:
/*!********************************************!*\
  !*** ./src/assets/data/lessons/lesson7.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson7": function() { return /* binding */ lesson7; }
/* harmony export */ });
var lesson7 = {
  title: 'Verbos regulares del pretérito perfecto simple acabados en -ER',
  content: "\n    <p>Para conjugar un verbo en pasado cuando la acci\xF3n ya ha acabado se usa el pret\xE9rito perfecto simple.\n    Para conjugar el pret\xE9rito perfecto simple de los verbos acabados en -AR se usa la raiz + las siguientes desinencias en funcion de la persona.\n    Por ejemplo: comer en pret\xE9rito perfecto simple de la primera persona -> com + <span class=\"regular\">\xED</span>\n\n    <h2>Indicativo</h2>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion title=\"Desinencias pret\xE9rito perfecto simple (ER)\" desinencias=\"comer\" grupo=\"Indicativo\" tiempo=\"Pret\xE9rito perfecto simple\"></app-conjugacion>\n            </ion-col>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion verbo=\"comer\" grupo=\"Indicativo\" tiempo=\"Pret\xE9rito perfecto simple\"></app-conjugacion>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'Ayer yo ___ <span class="grey">(comer en 1ª persona del singular)</span> en ese restaurante.',
    options: ['comí', 'como'],
    answers: 'comí'
  }, {
    type: 'input',
    exercise: 'Él ___ <span class="grey">(aprender en 3ª persona del singular)</span> castellano de niño.',
    answers: 'aprendió'
  }, {
    type: 'choose',
    exercise: 'Hace años, nosotros ___ <span class="grey">(prometer en 1ª persona del plural)</span> cuidar de ella.',
    options: ['prometimos', 'prometiste'],
    answers: 'prometimos'
  }, {
    type: 'input',
    exercise: 'Al terminar la escuela, tú ___ <span class="grey">(prometer en 2ª persona del singular)</span> ir a la universidad.',
    answers: 'prometiste'
  }, {
    type: 'choose',
    exercise: 'Ellos ___ <span class="grey">(correr en 3ª persona del plural)</span> los cien metros lisos en las olimpiadas del año pasado.',
    options: ['corrió', 'corrieron'],
    answers: 'corrieron'
  }, {
    type: 'input',
    exercise: 'Vosotros ___ <span class="grey">(aprender en 2ª persona del plural)</span> castellano en verano del año pasado.',
    answers: 'aprendisteis'
  }]
};

/***/ }),

/***/ 3317:
/*!********************************************!*\
  !*** ./src/assets/data/lessons/lesson8.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson8": function() { return /* binding */ lesson8; }
/* harmony export */ });
var lesson8 = {
  title: 'Verbos regulares del pretérito perfecto simple acabados en -IR',
  content: "\n    <p>Para conjugar un verbo en pasado cuando la acci\xF3n ya ha acabado se usa el pret\xE9rito perfecto simple.\n    Para conjugar el pret\xE9rito perfecto simple de los verbos acabados en -AR se usa la raiz + las siguientes desinencias en funcion de la persona.\n    Por ejemplo: vivir en pret\xE9rito perfecto simple de la primera persona -> viv + <span class=\"regular\">\xED</span>\n\n    <h2>Indicativo</h2>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion title=\"Desinencias pret\xE9rito perfecto simple (IR)\" desinencias=\"vivir\" grupo=\"Indicativo\" tiempo=\"Pret\xE9rito perfecto simple\"></app-conjugacion>\n            </ion-col>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion verbo=\"vivir\" grupo=\"Indicativo\" tiempo=\"Pret\xE9rito perfecto simple\"></app-conjugacion>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'Yo ___ <span class="grey">(vivir en 1ª persona del singular)</span> toda mi infancia en otra ciudad.',
    options: ['viví', 'vivió'],
    answers: 'viví'
  }, {
    type: 'input',
    exercise: 'Él ___ <span class="grey">(abrir en 3ª persona del singular)</span> la puerta a la mañana.',
    answers: 'abrió'
  }, {
    type: 'choose',
    exercise: 'Hace años, nosotros ___ <span class="grey">(permitir en 1ª persona del plural)</span> jugar en la plaza.',
    options: ['permitimos', 'permitiste'],
    answers: 'permitimos'
  }, {
    type: 'input',
    exercise: 'Ayer, tú ___ <span class="grey">(partir en 2ª persona del singular)</span> el bocadillo por la mitad.',
    answers: 'partiste'
  }, {
    type: 'choose',
    exercise: 'Ellos ___ <span class="grey">(compartir en 3ª persona del plural)</span> piso el año pasado.',
    options: ['compartieron', 'compartió'],
    answers: 'compartieron'
  }, {
    type: 'input',
    exercise: 'Vosotros ___ <span class="grey">(vivir en 2ª persona del plural)</span> en Barcelona durante dos años.',
    answers: 'vivisteis'
  }]
};

/***/ }),

/***/ 8523:
/*!********************************************!*\
  !*** ./src/assets/data/lessons/lesson9.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lesson9": function() { return /* binding */ lesson9; }
/* harmony export */ });
var lesson9 = {
  title: 'Verbos regulares de futuro acabados en -AR',
  content: "\n    Para conjugar el futuro de los verbos regulares acabados en -AR se usa la raiz + las siguientes desinencias en funcion de la persona.\n    Por ejemplo: saltar en futuro de la primera persona -> salt + <span class=\"regular\">ar\xE9</span>\n\n    <h2>Indicativo</h2>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion title=\"Desinencias futuro (AR)\" desinencias=\"saltar\" grupo=\"Indicativo\" tiempo=\"Futuro\"></app-conjugacion>\n            </ion-col>\n            <ion-col size-xs=\"12\" size-sm=\"6\">\n                <app-conjugacion verbo=\"saltar\" grupo=\"Indicativo\" tiempo=\"Futuro\"></app-conjugacion>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    ",
  exercises: [{
    type: 'choose',
    exercise: 'Mañana ___ <span class="grey">(jugar en 1ª persona del singular)</span> con mis amigos.',
    options: ['juguaré', 'jugarás'],
    answers: 'juguaré'
  }, {
    type: 'input',
    exercise: 'El año que viene, él ___ <span class="grey">(acabar en 3ª persona del singular)</span> la universidad.',
    answers: 'acabará'
  }, {
    type: 'choose',
    exercise: 'Nosotros ___ <span class="grey">(aceptar en 1ª persona del plural)</span> el resultado de la prueba.',
    options: ['aceptaremos', 'aceptará'],
    answers: 'aceptaremos'
  }, {
    type: 'input',
    exercise: 'Mañana ___ <span class="grey">(firmar en 2ª persona del singular)</span> el contrato de trabajo.',
    answers: 'firmarás'
  }, {
    type: 'choose',
    exercise: 'El próximo fin de semana, ellos ___ <span class="grey">(actuar en 3ª persona del plural)</span> en el teatro.',
    options: ['actuarán', 'actuarás'],
    answers: 'actuarán'
  }, {
    type: 'input',
    exercise: 'Al entrar mañana, vosotros ___ <span class="grey">(aceptar en 2ª persona del plural)</span> las normas de la escuela.',
    answers: 'aceptaréis'
  }]
};

/***/ }),

/***/ 3063:
/*!********************************************!*\
  !*** ./src/assets/data/lessons/lessons.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lessons": function() { return /* binding */ lessons; }
/* harmony export */ });
/* harmony import */ var _lesson1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson1 */ 5581);
/* harmony import */ var _lesson2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lesson2 */ 2080);
/* harmony import */ var _lesson3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lesson3 */ 9279);
/* harmony import */ var _lesson4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lesson4 */ 8168);
/* harmony import */ var _lesson5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lesson5 */ 36);
/* harmony import */ var _lesson6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lesson6 */ 8882);
/* harmony import */ var _lesson7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lesson7 */ 8705);
/* harmony import */ var _lesson8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lesson8 */ 3317);
/* harmony import */ var _lesson9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lesson9 */ 8523);
/* harmony import */ var _lesson10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lesson10 */ 1926);
/* harmony import */ var _lesson11__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lesson11 */ 6677);
/* harmony import */ var _lesson12__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lesson12 */ 8190);
/* harmony import */ var _lesson13__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lesson13 */ 1092);
/* harmony import */ var _lesson14__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lesson14 */ 5019);














var lessons = [_lesson1__WEBPACK_IMPORTED_MODULE_0__.lesson1, _lesson2__WEBPACK_IMPORTED_MODULE_1__.lesson2, _lesson3__WEBPACK_IMPORTED_MODULE_2__.lesson3, _lesson4__WEBPACK_IMPORTED_MODULE_3__.lesson4, _lesson5__WEBPACK_IMPORTED_MODULE_4__.lesson5, _lesson6__WEBPACK_IMPORTED_MODULE_5__.lesson6, _lesson7__WEBPACK_IMPORTED_MODULE_6__.lesson7, _lesson8__WEBPACK_IMPORTED_MODULE_7__.lesson8, _lesson9__WEBPACK_IMPORTED_MODULE_8__.lesson9, _lesson10__WEBPACK_IMPORTED_MODULE_9__.lesson10, _lesson11__WEBPACK_IMPORTED_MODULE_10__.lesson11, _lesson12__WEBPACK_IMPORTED_MODULE_11__.lesson12, _lesson13__WEBPACK_IMPORTED_MODULE_12__.lesson13, _lesson14__WEBPACK_IMPORTED_MODULE_13__.lesson14];

/***/ }),

/***/ 3991:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/lesson/components/footer/footer.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-footer class=\"ion-padding\">\n  <ion-button *ngIf=\"!checked\"\n              color=\"success\"\n              size=\"large\"\n              expand=\"block\"\n              (click)=\"check()\">\n    {{ 'conjugate.check' | translate }}\n  </ion-button>\n  <ion-button *ngIf=\"checked\"\n              color=\"primary\"\n              size=\"large\"\n              expand=\"block\"\n              (click)=\"continue()\">\n    {{ 'conjugate.continue' | translate }}\n  </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ 6826:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/lesson/containers/create/create.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Crear nuevas lecciones\"></app-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h1>{{'create.title' | translate}}</h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <form [formGroup]=\"form\">\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'create.lesson-title' | translate}}</ion-label>\n      <ion-input formControlName=\"title\" placeholder=\"{{'create.lesson-title' | translate}}\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'create.lesson-subtitle' | translate}}</ion-label>\n      <ion-input formControlName=\"subtitle\" placeholder=\"{{'create.lesson-subtitle' | translate}}\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <angular-editor placeholder=\"{{'create.lesson-content' | translate}}\" formControlName=\"content\" [config]=\"editorConfig\"></angular-editor>\n    </ion-item>\n\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col class=\"ion-text-center\">\n          <ion-button (click)=\"addExercise()\">{{'create.add' | translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <div formArrayName=\"exercises\" *ngFor=\"let exercise of form.controls.exercises?.value; let i = index; trackBy:trackByFn\">\n      <ng-container [formGroupName]=\"i\">\n\n        <ion-card>\n          <ion-card-header color=\"secondary\">\n            <ion-card-title>{{'create.exercise' | translate}} #{{i+1}}</ion-card-title>\n            <ion-icon *ngIf=\"i>=1\" class=\"clickable-icon close-icon\" (click)=\"removeExercise(i)\" name=\"close-outline\"></ion-icon>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item>\n              <ion-label>{{'create.exercise-type' | translate}}</ion-label>\n              <ion-select placeholder=\"Select One\" formControlName=\"type\">\n                <ion-select-option value=\"choose\">{{'create.choose' | translate}}</ion-select-option>\n                <ion-select-option value=\"input\">{{'create.input' | translate}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">{{'create.exercise' | translate}}</ion-label>\n              <ion-input placeholder=\"{{'create.exercise' | translate}}\" formControlName=\"exercise\"></ion-input>\n            </ion-item>\n\n            <ion-item *ngIf=\"exercise.type === 'choose'\">\n              <ion-label position=\"floating\">{{'create.exercise-options' | translate}}</ion-label>\n              <ion-input placeholder=\"{{'create.exercise-options' | translate}}\" formControlName=\"options\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">{{'create.exercise-answers' | translate}}</ion-label>\n              <ion-input placeholder=\"{{'create.exercise-answers' | translate}}\" formControlName=\"answers\"></ion-input>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n      </ng-container>\n    </div>\n\n  </form>\n\n<!--\ntodo:\n  Preview:\n    <app-lesson *ngIf=\"form.controls.title.value && form.controls.content.value\" [lesson]=\"getJSON()\"></app-lesson>\n-->\n\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col class=\"ion-text-center\">\n        <ion-button class=\"ion-align-self-center\" (click)=\"saveJSON()\">{{'create.save' | translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"success\">\n    {{'create.saved' | translate}}\n  </div>\n\n</ion-content>\n\n");

/***/ }),

/***/ 8519:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/lesson/containers/exercise/exercise.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Ejercicios para aprender a conjugar verbos\"></app-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <div *ngIf=\"exercise\" class=\"exercise\">\n\n    <ion-progress-bar [value]=\"processPercentage\"></ion-progress-bar>\n\n    <div>\n      <h1>{{lessonId}}. {{lesson.title}}:</h1><h2>Ejercicio {{exerciseId}}</h2>\n    </div>\n\n    <div class=\"text\">\n      <form [formGroup]=\"form\">\n\n        <ng-container *ngFor=\"let exercisePart of exerciseParts; let i = index\">\n\n          <span *ngIf=\"isString(exercisePart)\" [innerHTML]=\"exercisePart\"></span>\n\n          <ion-item *ngIf=\"!isString(exercisePart)\">\n\n            <ion-input *ngIf=\"exercise.type === 'input'\"\n                       [ngClass]=\"{'ok': checked && !exercisePart.incorrect, 'ko': checked && exercisePart.incorrect  }\"\n                       appAutowidth size=\"1\"\n                       class=\"exercise-input\"\n                       [appIonAutofocus]=\"exercisePart.id === 'exercise0'\"\n                       [formControlName]=\"exercisePart.id\"\n                       (keyup.enter)=\"checkExercise()\">\n            </ion-input>\n\n            <span *ngIf=\"exercise.type === 'choose'\">\n            <span class=\"exercise-choose\"\n                  *ngFor=\"let option of exercise.options\" (click)=\"checkChoose(option)\"\n                  [ngClass]=\"{'ok': checked && option === exercisePart.answer, 'ko': checked && !allCorrect && option !== exercisePart.answer  }\">\n              {{option}}\n            </span>\n          </span>\n          </ion-item>\n\n        </ng-container>\n\n        <app-audio class=\"audio\" *ngIf=\"checked\" [textToPlay]=\"getFullCorrectedSentence()\"></app-audio>\n\n      </form>\n    </div>\n\n\n    <div class=\"feedback\" *ngIf=\"allCorrect === true\">\n      <img src=\"./assets/svgs/green-checkmark.svg\">\n      <p>¡Correcto!</p>\n      <p *ngIf=\"feedback.accent || feedback.upper\">\n        <b class=\"ok\">{{exercise.answers}}</b>\n      </p>\n      <p *ngIf=\"feedback.accent\">Revisa la forma correcta, las tildes importan.</p>\n      <p *ngIf=\"feedback.upper\">Revisa la forma correcta, las mayusculas y minusculas importan.</p>\n    </div>\n\n    <div class=\"feedback\" *ngIf=\"allCorrect === false\">\n      <img src=\"./assets/svgs/close-red.svg\">\n      <p>¡Incorrecto! La respuesta correcta es\n        <b class=\"ok\">{{exercise.answers}}</b>\n      </p>\n    </div>\n\n    <ion-button *ngIf=\"allCorrect === false\"\n                color=\"medium\"\n                size=\"large\"\n                expand=\"block\"\n                (click)=\"presentAlert()\">Revisar teoria</ion-button>\n\n\n  </div>\n\n\n</ion-content>\n\n<app-footer [checked]=\"checked\" (onCheck)=\"checkExercise()\" (onContinue)=\"continue()\"></app-footer>\n");

/***/ }),

/***/ 5269:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/lesson/containers/lesson/lesson.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header [title]=\"lessonData.title\"></app-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\n  <ion-progress-bar value=\"0\"></ion-progress-bar>\n\n  <div *ngIf=\"lessonData && lessonData.title\">\n    <h1>{{lessonId}}. {{lessonData.title}}</h1>\n\n    <div class=\"text\" [innerHTML]=\"lessonData.content\"></div>\n\n  </div>\n</ion-content>\n\n<app-footer [checked]=\"true\" (onContinue)=\"continue()\"></app-footer>\n");

/***/ }),

/***/ 4796:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/lesson/containers/lessons/lessons.component.html ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Aprender a conjugar verbos\"></app-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card *ngIf=\"(lastLesson$ | async) as lastLesson\">\n          <ion-card-header color=\"secondary\"\n                           class=\"ion-justify-content-center ion-text-center\">\n            {{ 'conjugate.continue-from' | translate }}\n          </ion-card-header>\n          <ion-card-content class=\"ion-text-center\">\n            <div class=\"continueText\">\n              Lección {{lastLesson.lesson}}. {{lessons[lastLesson.lesson-1].title}}:\n              Ejercicio {{lastLesson.exercise}}\n            </div>\n            <ion-button color=\"secondary\" [routerLink]=\"['/aprender-a-conjugar', lastLesson.lesson, lastLesson.exercise]\">\n              {{ 'conjugate.continue' | translate }}\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <app-banner [banner]=\"banner\"></app-banner>\n\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"6\" *ngFor=\"let lesson of lessons; index as i\">\n        <ion-card>\n          <ion-card-header class=\"ion-justify-content-between\">\n            <ion-card-title >\n              {{i+1}}. {{lesson.title}}\n            </ion-card-title>\n\n            <ion-card-subtitle *ngIf=\"completedLessons$ | async as completed\">\n              <ion-icon *ngIf=\"isCompletedLesson(completed, i)\" color=\"primary\" name=\"checkmark-outline\"></ion-icon>\n            </ion-card-subtitle>\n\n          </ion-card-header>\n\n          <!-- isCompletedLesson(completedLessons$ | async, i) ? 'tertiary' : 'primary' -->\n          <ion-button color=\"primary\"\n                      [routerLink]=\"['/aprender-a-conjugar', i+1]\"\n                      size=\"large\"\n                      expand=\"block\">\n            {{ 'conjugate.learn' | translate }}\n          </ion-button>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"primary\"\n                    [routerLink]=\"['/aprender-a-conjugar/crear']\"\n                    size=\"large\"\n                    expand=\"block\">\n          Crear lecciones personalizadas\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ 3074:
/*!****************************************************************!*\
  !*** ./src/app/lesson/components/footer/footer.component.scss ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = "ion-footer {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4iXX0= */";

/***/ }),

/***/ 2652:
/*!****************************************************************!*\
  !*** ./src/app/lesson/containers/create/create.component.scss ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = ".close-icon {\n  position: absolute;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZS1pY29ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xufVxuIl19 */";

/***/ }),

/***/ 9389:
/*!********************************************************************!*\
  !*** ./src/app/lesson/containers/exercise/exercise.component.scss ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "h1, h2 {\n  display: inline-block;\n}\n\nh2 {\n  color: var(--ion-color-secondary);\n  margin-left: 8px;\n}\n\n.exercise {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.exercise .text {\n  font-size: 1.2em;\n  line-height: 1.6em;\n  display: inline-flex;\n  height: 100%;\n  align-items: center;\n}\n\n.exercise .text span {\n  height: 48px;\n  line-height: 48px;\n  vertical-align: top;\n}\n\n.exercise .text ion-item {\n  display: inline-block;\n  margin-left: 6px;\n  margin-right: 6px;\n}\n\nion-input {\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.exercise-choose {\n  border: solid 2px var(--ion-color-light-shade);\n  padding: 8px;\n  margin: 0 3px;\n  border-radius: 3px;\n  font-weight: bold;\n}\n\n.exercise-choose:hover {\n  border: solid 2px var(--ion-color-primary);\n  cursor: pointer;\n}\n\n.feedback {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: auto;\n}\n\n.feedback img {\n  max-width: 50px;\n  margin-right: 12px;\n}\n\n.feedback .ok {\n  font-size: 1.2em;\n  padding: 8px;\n  margin-left: 6px;\n  margin-right: 6px;\n}\n\n.audio {\n  line-height: 48px;\n  vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFFSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFOOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsOENBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLDBDQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQUlFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEYiLCJmaWxlIjoiZXhlcmNpc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSwgaDJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaDJ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmV4ZXJjaXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC50ZXh0e1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgc3BhbntcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG5cbiAgICBpb24taXRlbXtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICB9XG4gIH1cbn1cblxuXG5pb24taW5wdXR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmV4ZXJjaXNlLWNob29zZXtcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDAgM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXhlcmNpc2UtY2hvb3NlOmhvdmVye1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZlZWRiYWNre1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGltZ3tcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG4gIC5va3tcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG59XG5cbi5hdWRpb3tcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 5979:
/*!****************************************************************!*\
  !*** ./src/app/lesson/containers/lesson/lesson.component.scss ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = ".text {\n  font-size: 1.2em;\n  line-height: 1.6em;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3Nvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6Imxlc3Nvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4iXX0= */";

/***/ }),

/***/ 1603:
/*!******************************************************************!*\
  !*** ./src/app/lesson/containers/lessons/lessons.component.scss ***!
  \******************************************************************/
/***/ (function(module) {

module.exports = "ion-card-title, ion-card-subtitle {\n  font-size: 1.2em;\n}\n\n.continueText {\n  font-size: 1.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3NvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJsZXNzb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxle1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uY29udGludWVUZXh0e1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuIl19 */";

/***/ }),

/***/ 1597:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/elements/fesm2020/elements.mjs ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgElement": function() { return /* binding */ NgElement; },
/* harmony export */   "VERSION": function() { return /* binding */ VERSION; },
/* harmony export */   "createCustomElement": function() { return /* binding */ createCustomElement; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/inherits */ 1492);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ 6707);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper */ 7586);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 5455);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ 6449);
/* harmony import */ var _home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ 2700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4850);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8377);







/**
 * @license Angular v13.0.2
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Provide methods for scheduling the execution of a callback.
 */

var scheduler = {
  /**
   * Schedule a callback to be called after some delay.
   *
   * Returns a function that when executed will cancel the scheduled function.
   */
  schedule: function schedule(taskFn, delay) {
    var id = setTimeout(taskFn, delay);
    return function () {
      return clearTimeout(id);
    };
  },

  /**
   * Schedule a callback to be called before the next render.
   * (If `window.requestAnimationFrame()` is not available, use `scheduler.schedule()` instead.)
   *
   * Returns a function that when executed will cancel the scheduled function.
   */
  scheduleBeforeRender: function scheduleBeforeRender(taskFn) {
    // TODO(gkalpak): Implement a better way of accessing `requestAnimationFrame()`
    //                (e.g. accounting for vendor prefix, SSR-compatibility, etc).
    if (typeof window === 'undefined') {
      // For SSR just schedule immediately.
      return scheduler.schedule(taskFn, 0);
    }

    if (typeof window.requestAnimationFrame === 'undefined') {
      var frameMs = 16;
      return scheduler.schedule(taskFn, frameMs);
    }

    var id = window.requestAnimationFrame(taskFn);
    return function () {
      return window.cancelAnimationFrame(id);
    };
  }
};
/**
 * Convert a camelCased string to kebab-cased.
 */

function camelToDashCase(input) {
  return input.replace(/[A-Z]/g, function (char) {
    return "-".concat(char.toLowerCase());
  });
}
/**
 * Create a `CustomEvent` (even on browsers where `CustomEvent` is not a constructor).
 */


function createCustomEvent(doc, name, detail) {
  var bubbles = false;
  var cancelable = false; // On IE11, `CustomEvent` is not a constructor.

  if (typeof CustomEvent !== 'function') {
    var event = doc.createEvent('CustomEvent');
    event.initCustomEvent(name, bubbles, cancelable, detail);
    return event;
  }

  return new CustomEvent(name, {
    bubbles: bubbles,
    cancelable: cancelable,
    detail: detail
  });
}
/**
 * Check whether the input is an `Element`.
 */


function isElement(node) {
  return !!node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Check whether the input is a function.
 */


function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Convert a kebab-cased string to camelCased.
 */


function kebabToCamelCase(input) {
  return input.replace(/-([a-z\d])/g, function (_, char) {
    return char.toUpperCase();
  });
}

var _matches;
/**
 * Check whether an `Element` matches a CSS selector.
 * NOTE: this is duplicated from @angular/upgrade, and can
 * be consolidated in the future
 */


function matchesSelector(el, selector) {
  if (!_matches) {
    var elProto = Element.prototype;
    _matches = elProto.matches || elProto.matchesSelector || elProto.mozMatchesSelector || elProto.msMatchesSelector || elProto.oMatchesSelector || elProto.webkitMatchesSelector;
  }

  return el.nodeType === Node.ELEMENT_NODE ? _matches.call(el, selector) : false;
}
/**
 * Test two values for strict equality, accounting for the fact that `NaN !== NaN`.
 */


function strictEquals(value1, value2) {
  return value1 === value2 || value1 !== value1 && value2 !== value2;
}
/** Gets a map of default set of attributes to observe and the properties they affect. */


function getDefaultAttributeToPropertyInputs(inputs) {
  var attributeToPropertyInputs = {};
  inputs.forEach(function (_ref) {
    var propName = _ref.propName,
        templateName = _ref.templateName;
    attributeToPropertyInputs[camelToDashCase(templateName)] = propName;
  });
  return attributeToPropertyInputs;
}
/**
 * Gets a component's set of inputs. Uses the injector to get the component factory where the inputs
 * are defined.
 */


function getComponentInputs(component, injector) {
  var componentFactoryResolver = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_6__.ComponentFactoryResolver);
  var componentFactory = componentFactoryResolver.resolveComponentFactory(component);
  return componentFactory.inputs;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function extractProjectableNodes(host, ngContentSelectors) {
  var nodes = host.childNodes;
  var projectableNodes = ngContentSelectors.map(function () {
    return [];
  });
  var wildcardIndex = -1;
  ngContentSelectors.some(function (selector, i) {
    if (selector === '*') {
      wildcardIndex = i;
      return true;
    }

    return false;
  });

  for (var i = 0, ii = nodes.length; i < ii; ++i) {
    var node = nodes[i];
    var ngContentIndex = findMatchingIndex(node, ngContentSelectors, wildcardIndex);

    if (ngContentIndex !== -1) {
      projectableNodes[ngContentIndex].push(node);
    }
  }

  return projectableNodes;
}

function findMatchingIndex(node, selectors, defaultIndex) {
  var matchingIndex = defaultIndex;

  if (isElement(node)) {
    selectors.some(function (selector, i) {
      if (selector !== '*' && matchesSelector(node, selector)) {
        matchingIndex = i;
        return true;
      }

      return false;
    });
  }

  return matchingIndex;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Time in milliseconds to wait before destroying the component ref when disconnected. */


var DESTROY_DELAY = 10;
/**
 * Factory that creates new ComponentNgElementStrategy instance. Gets the component factory with the
 * constructor's injector's factory resolver and passes that factory to each strategy.
 *
 * @publicApi
 */

var ComponentNgElementStrategyFactory = /*#__PURE__*/function () {
  function ComponentNgElementStrategyFactory(component, injector) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ComponentNgElementStrategyFactory);

    this.componentFactory = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_6__.ComponentFactoryResolver).resolveComponentFactory(component);
  }

  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ComponentNgElementStrategyFactory, [{
    key: "create",
    value: function create(injector) {
      return new ComponentNgElementStrategy(this.componentFactory, injector);
    }
  }]);

  return ComponentNgElementStrategyFactory;
}();
/**
 * Creates and destroys a component ref using a component factory and handles change detection
 * in response to input changes.
 *
 * @publicApi
 */


var ComponentNgElementStrategy = /*#__PURE__*/function () {
  function ComponentNgElementStrategy(componentFactory, injector) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ComponentNgElementStrategy);

    this.componentFactory = componentFactory;
    this.injector = injector; // Subject of `NgElementStrategyEvent` observables corresponding to the component's outputs.

    this.eventEmitters = new rxjs__WEBPACK_IMPORTED_MODULE_7__.ReplaySubject(1);
    /** Merged stream of the component's output events. */

    this.events = this.eventEmitters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(function (emitters) {
      return rxjs__WEBPACK_IMPORTED_MODULE_9__.merge.apply(void 0, (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(emitters));
    }));
    /** Reference to the component that was created on connect. */

    this.componentRef = null;
    /** Reference to the component view's `ChangeDetectorRef`. */

    this.viewChangeDetectorRef = null;
    /**
     * Changes that have been made to component inputs since the last change detection run.
     * (NOTE: These are only recorded if the component implements the `OnChanges` interface.)
     */

    this.inputChanges = null;
    /** Whether changes have been made to component inputs since the last change detection run. */

    this.hasInputChanges = false;
    /** Whether the created component implements the `OnChanges` interface. */

    this.implementsOnChanges = false;
    /** Whether a change detection has been scheduled to run on the component. */

    this.scheduledChangeDetectionFn = null;
    /** Callback function that when called will cancel a scheduled destruction on the component. */

    this.scheduledDestroyFn = null;
    /** Initial input values that were set before the component was created. */

    this.initialInputValues = new Map();
    /**
     * Set of component inputs that have not yet changed, i.e. for which `recordInputChange()` has not
     * fired.
     * (This helps detect the first change of an input, even if it is explicitly set to `undefined`.)
     */

    this.unchangedInputs = new Set(this.componentFactory.inputs.map(function (_ref2) {
      var propName = _ref2.propName;
      return propName;
    }));
    /** Service for setting zone context. */

    this.ngZone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone);
    /** The zone the element was created in or `null` if Zone.js is not loaded. */

    this.elementZone = typeof Zone === 'undefined' ? null : this.ngZone.run(function () {
      return Zone.current;
    });
  }
  /**
   * Initializes a new component if one has not yet been created and cancels any scheduled
   * destruction.
   */


  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ComponentNgElementStrategy, [{
    key: "connect",
    value: function connect(element) {
      var _this = this;

      this.runInZone(function () {
        // If the element is marked to be destroyed, cancel the task since the component was
        // reconnected
        if (_this.scheduledDestroyFn !== null) {
          _this.scheduledDestroyFn();

          _this.scheduledDestroyFn = null;
          return;
        }

        if (_this.componentRef === null) {
          _this.initializeComponent(element);
        }
      });
    }
    /**
     * Schedules the component to be destroyed after some small delay in case the element is just
     * being moved across the DOM.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this2 = this;

      this.runInZone(function () {
        // Return if there is no componentRef or the component is already scheduled for destruction
        if (_this2.componentRef === null || _this2.scheduledDestroyFn !== null) {
          return;
        } // Schedule the component to be destroyed after a small timeout in case it is being
        // moved elsewhere in the DOM


        _this2.scheduledDestroyFn = scheduler.schedule(function () {
          if (_this2.componentRef !== null) {
            _this2.componentRef.destroy();

            _this2.componentRef = null;
            _this2.viewChangeDetectorRef = null;
          }
        }, DESTROY_DELAY);
      });
    }
    /**
     * Returns the component property value. If the component has not yet been created, the value is
     * retrieved from the cached initialization values.
     */

  }, {
    key: "getInputValue",
    value: function getInputValue(property) {
      var _this3 = this;

      return this.runInZone(function () {
        if (_this3.componentRef === null) {
          return _this3.initialInputValues.get(property);
        }

        return _this3.componentRef.instance[property];
      });
    }
    /**
     * Sets the input value for the property. If the component has not yet been created, the value is
     * cached and set when the component is created.
     */

  }, {
    key: "setInputValue",
    value: function setInputValue(property, value) {
      var _this4 = this;

      this.runInZone(function () {
        if (_this4.componentRef === null) {
          _this4.initialInputValues.set(property, value);

          return;
        } // Ignore the value if it is strictly equal to the current value, except if it is `undefined`
        // and this is the first change to the value (because an explicit `undefined` _is_ strictly
        // equal to not having a value set at all, but we still need to record this as a change).


        if (strictEquals(value, _this4.getInputValue(property)) && !(value === undefined && _this4.unchangedInputs.has(property))) {
          return;
        } // Record the changed value and update internal state to reflect the fact that this input has
        // changed.


        _this4.recordInputChange(property, value);

        _this4.unchangedInputs.delete(property);

        _this4.hasInputChanges = true; // Update the component instance and schedule change detection.

        _this4.componentRef.instance[property] = value;

        _this4.scheduleDetectChanges();
      });
    }
    /**
     * Creates a new component through the component factory with the provided element host and
     * sets up its initial inputs, listens for outputs changes, and runs an initial change detection.
     */

  }, {
    key: "initializeComponent",
    value: function initializeComponent(element) {
      var childInjector = _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector.create({
        providers: [],
        parent: this.injector
      });
      var projectableNodes = extractProjectableNodes(element, this.componentFactory.ngContentSelectors);
      this.componentRef = this.componentFactory.create(childInjector, projectableNodes, element);
      this.viewChangeDetectorRef = this.componentRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef);
      this.implementsOnChanges = isFunction(this.componentRef.instance.ngOnChanges);
      this.initializeInputs();
      this.initializeOutputs(this.componentRef);
      this.detectChanges();
      var applicationRef = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_6__.ApplicationRef);
      applicationRef.attachView(this.componentRef.hostView);
    }
    /** Set any stored initial inputs on the component's properties. */

  }, {
    key: "initializeInputs",
    value: function initializeInputs() {
      var _this5 = this;

      this.componentFactory.inputs.forEach(function (_ref3) {
        var propName = _ref3.propName;

        if (_this5.initialInputValues.has(propName)) {
          // Call `setInputValue()` now that the component has been instantiated to update its
          // properties and fire `ngOnChanges()`.
          _this5.setInputValue(propName, _this5.initialInputValues.get(propName));
        }
      });
      this.initialInputValues.clear();
    }
    /** Sets up listeners for the component's outputs so that the events stream emits the events. */

  }, {
    key: "initializeOutputs",
    value: function initializeOutputs(componentRef) {
      var eventEmitters = this.componentFactory.outputs.map(function (_ref4) {
        var propName = _ref4.propName,
            templateName = _ref4.templateName;
        var emitter = componentRef.instance[propName];
        return emitter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (value) {
          return {
            name: templateName,
            value: value
          };
        }));
      });
      this.eventEmitters.next(eventEmitters);
    }
    /** Calls ngOnChanges with all the inputs that have changed since the last call. */

  }, {
    key: "callNgOnChanges",
    value: function callNgOnChanges(componentRef) {
      if (!this.implementsOnChanges || this.inputChanges === null) {
        return;
      } // Cache the changes and set inputChanges to null to capture any changes that might occur
      // during ngOnChanges.


      var inputChanges = this.inputChanges;
      this.inputChanges = null;
      componentRef.instance.ngOnChanges(inputChanges);
    }
    /**
     * Marks the component view for check, if necessary.
     * (NOTE: This is required when the `ChangeDetectionStrategy` is set to `OnPush`.)
     */

  }, {
    key: "markViewForCheck",
    value: function markViewForCheck(viewChangeDetectorRef) {
      if (this.hasInputChanges) {
        this.hasInputChanges = false;
        viewChangeDetectorRef.markForCheck();
      }
    }
    /**
     * Schedules change detection to run on the component.
     * Ignores subsequent calls if already scheduled.
     */

  }, {
    key: "scheduleDetectChanges",
    value: function scheduleDetectChanges() {
      var _this6 = this;

      if (this.scheduledChangeDetectionFn) {
        return;
      }

      this.scheduledChangeDetectionFn = scheduler.scheduleBeforeRender(function () {
        _this6.scheduledChangeDetectionFn = null;

        _this6.detectChanges();
      });
    }
    /**
     * Records input changes so that the component receives SimpleChanges in its onChanges function.
     */

  }, {
    key: "recordInputChange",
    value: function recordInputChange(property, currentValue) {
      // Do not record the change if the component does not implement `OnChanges`.
      if (!this.implementsOnChanges) {
        return;
      }

      if (this.inputChanges === null) {
        this.inputChanges = {};
      } // If there already is a change, modify the current value to match but leave the values for
      // `previousValue` and `isFirstChange`.


      var pendingChange = this.inputChanges[property];

      if (pendingChange) {
        pendingChange.currentValue = currentValue;
        return;
      }

      var isFirstChange = this.unchangedInputs.has(property);
      var previousValue = isFirstChange ? undefined : this.getInputValue(property);
      this.inputChanges[property] = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.SimpleChange(previousValue, currentValue, isFirstChange);
    }
    /** Runs change detection on the component. */

  }, {
    key: "detectChanges",
    value: function detectChanges() {
      if (this.componentRef === null) {
        return;
      }

      this.callNgOnChanges(this.componentRef);
      this.markViewForCheck(this.viewChangeDetectorRef);
      this.componentRef.changeDetectorRef.detectChanges();
    }
    /** Runs in the angular zone, if present. */

  }, {
    key: "runInZone",
    value: function runInZone(fn) {
      return this.elementZone && Zone.current !== this.elementZone ? this.ngZone.run(fn) : fn();
    }
  }]);

  return ComponentNgElementStrategy;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Implements the functionality needed for a custom element.
 *
 * @publicApi
 */


var NgElement = /*#__PURE__*/function (_HTMLElement) {
  (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(NgElement, _HTMLElement);

  var _super = (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(NgElement);

  function NgElement() {
    var _this7;

    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgElement);

    _this7 = _super.apply(this, arguments);
    /**
     * A subscription to change, connect, and disconnect events in the custom element.
     */

    _this7.ngElementEventsSubscription = null;
    return _this7;
  }

  return NgElement;
}( /*#__PURE__*/(0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(HTMLElement));
/**
 *  @description Creates a custom element class based on an Angular component.
 *
 * Builds a class that encapsulates the functionality of the provided component and
 * uses the configuration information to provide more context to the class.
 * Takes the component factory's inputs and outputs to convert them to the proper
 * custom element API and add hooks to input changes.
 *
 * The configuration's injector is the initial injector set on the class,
 * and used by default for each created instance.This behavior can be overridden with the
 * static property to affect all newly created instances, or as a constructor argument for
 * one-off creations.
 *
 * @see [Angular Elements Overview](guide/elements "Turning Angular components into custom elements")
 *
 * @param component The component to transform.
 * @param config A configuration that provides initialization information to the created class.
 * @returns The custom-element construction class, which can be registered with
 * a browser's `CustomElementRegistry`.
 *
 * @publicApi
 */


function createCustomElement(component, config) {
  var inputs = getComponentInputs(component, config.injector);
  var strategyFactory = config.strategyFactory || new ComponentNgElementStrategyFactory(component, config.injector);
  var attributeToPropertyInputs = getDefaultAttributeToPropertyInputs(inputs);

  var NgElementImpl = /*#__PURE__*/function (_NgElement) {
    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(NgElementImpl, _NgElement);

    var _super2 = (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(NgElementImpl);

    function NgElementImpl(injector) {
      var _this8;

      (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgElementImpl);

      _this8 = _super2.call(this);
      _this8.injector = injector;
      return _this8;
    }

    (0,_home_runner_work_verbovista_verbovista_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgElementImpl, [{
      key: "ngElementStrategy",
      get: function get() {
        var _this9 = this;

        // NOTE:
        // Some polyfills (e.g. `document-register-element`) do not call the constructor, therefore
        // it is not safe to set `ngElementStrategy` in the constructor and assume it will be
        // available inside the methods.
        //
        // TODO(andrewseguin): Add e2e tests that cover cases where the constructor isn't called. For
        // now this is tested using a Google internal test suite.
        if (!this._ngElementStrategy) {
          var strategy = this._ngElementStrategy = strategyFactory.create(this.injector || config.injector); // Re-apply pre-existing input values (set as properties on the element) through the
          // strategy.

          inputs.forEach(function (_ref5) {
            var propName = _ref5.propName;

            if (!_this9.hasOwnProperty(propName)) {
              // No pre-existing value for `propName`.
              return;
            } // Delete the property from the instance and re-apply it through the strategy.


            var value = _this9[propName];
            delete _this9[propName];
            strategy.setInputValue(propName, value);
          });
        }

        return this._ngElementStrategy;
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attrName, oldValue, newValue, namespace) {
        var propName = attributeToPropertyInputs[attrName];
        this.ngElementStrategy.setInputValue(propName, newValue);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        // For historical reasons, some strategies may not have initialized the `events` property
        // until after `connect()` is run. Subscribe to `events` if it is available before running
        // `connect()` (in order to capture events emitted during initialization), otherwise subscribe
        // afterwards.
        //
        // TODO: Consider deprecating/removing the post-connect subscription in a future major version
        //       (e.g. v11).
        var subscribedToEvents = false;

        if (this.ngElementStrategy.events) {
          // `events` are already available: Subscribe to it asap.
          this.subscribeToEvents();
          subscribedToEvents = true;
        }

        this.ngElementStrategy.connect(this);

        if (!subscribedToEvents) {
          // `events` were not initialized before running `connect()`: Subscribe to them now.
          // The events emitted during the component initialization have been missed, but at least
          // future events will be captured.
          this.subscribeToEvents();
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        // Not using `this.ngElementStrategy` to avoid unnecessarily creating the `NgElementStrategy`.
        if (this._ngElementStrategy) {
          this._ngElementStrategy.disconnect();
        }

        if (this.ngElementEventsSubscription) {
          this.ngElementEventsSubscription.unsubscribe();
          this.ngElementEventsSubscription = null;
        }
      }
    }, {
      key: "subscribeToEvents",
      value: function subscribeToEvents() {
        var _this10 = this;

        // Listen for events from the strategy and dispatch them as custom events.
        this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe(function (e) {
          var customEvent = createCustomEvent(_this10.ownerDocument, e.name, e.value);

          _this10.dispatchEvent(customEvent);
        });
      }
    }]);

    return NgElementImpl;
  }(NgElement); // Work around a bug in closure typed optimizations(b/79557487) where it is not honoring static
  // field externs. So using quoted access to explicitly prevent renaming.


  NgElementImpl['observedAttributes'] = Object.keys(attributeToPropertyInputs); // Add getters and setters to the prototype for each property input.

  inputs.forEach(function (_ref6) {
    var propName = _ref6.propName;
    Object.defineProperty(NgElementImpl.prototype, propName, {
      get: function get() {
        return this.ngElementStrategy.getInputValue(propName);
      },
      set: function set(newValue) {
        this.ngElementStrategy.setInputValue(propName, newValue);
      },
      configurable: true,
      enumerable: true
    });
  });
  return NgElementImpl;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @publicApi
 */


var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.Version('13.0.2');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_lesson_lesson_module_ts.js.map