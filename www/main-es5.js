function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" *ngIf=\"this.usuario\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>e-coleta | Ecotres</ion-list-header>\n          <ion-note>{{this.usuario.user_email}}</ion-note>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n\n            <ion-item *ngIf=\"!(p.title == 'Suporte')\" (click)=\"selectedIndex = i\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon color=\"success\" slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n              <!-- routerDirection=\"root\" -->\n            </ion-item>\n            <ion-item *ngIf=\"(p.title == 'Suporte')\" href=\"https://api.whatsapp.com/send?phone=553193567988\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon color=\"success\" slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <!-- <ion-list id=\"labels-list\"> -->\n          <!-- <ion-list-header>Sistema</ion-list-header> -->\n\n          <!-- <ion-item *ngFor=\"let label of labels\" lines=\"none\"> -->\n            <!-- <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon> -->\n            <!-- <ion-label>{{ label }}</ion-label> -->\n          <!-- </ion-item> -->\n        <!-- </ion-list> -->\n      </ion-content>\n      <ion-toolbar class=\"footer\">\n        <ion-footer>\n          <ion-button (click)=\"sair()\">Sair</ion-button>\n      </ion-footer>\n      </ion-toolbar>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/endereco/endereco.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/endereco/endereco.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsEnderecoEnderecoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>Cadastrar Endereço</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismissModal()\">Fechar</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen [scrollEvents]=\"true\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button color=\"primary\" (click)=\"getLocation()\">Pegar Localização Atual</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <form class=\"\" [formGroup]=\"form\" (ngSubmit)=\"cadastrarEndereco(form.value)\">\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Nome</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"nome\"></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">CEP</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"cep\"></ion-input>\r\n    </ion-item>\r\n\r\n\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"success\" expand=\"block\">Cadastrar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/esqueceusenha/esqueceusenha.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/esqueceusenha/esqueceusenha.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsEsqueceusenhaEsqueceusenhaHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\r\n    <ion-toolbar>\r\n        <ion-title>Recuperar Senha</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"dismissModal()\">Fechar</ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen [scrollEvents]=\"true\">\r\n    <form class=\"\" [formGroup]=\"form\" (ngSubmit)=\"esqueceuSenha(form.value)\">\r\n        <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">E-mail</ion-label>\r\n            <ion-input type=\"text\" required formControlName=\"email\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button type=\"submit\" color=\"success\" expand=\"block\">Recuperar Senha</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n    </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCadastroCadastroHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Cadastrar</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content fullscreen [scrollEvents]=\"true\">\r\n    <form class=\"\" [formGroup]=\"form\" (ngSubmit)=\"cadastrar(form.value)\">\r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">Nome</ion-label>\r\n        <ion-input type=\"text\" required formControlName=\"nome\"></ion-input>\r\n      </ion-item>\r\n\r\n       \r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">Telefone</ion-label>\r\n        <ion-input type=\"text\" required formControlName=\"telefone\"></ion-input>\r\n      </ion-item>\r\n       \r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">E-mail</ion-label>\r\n        <ion-input type=\"text\" required formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">Senha</ion-label>\r\n        <ion-input type=\"password\" required formControlName=\"senha\"></ion-input>\r\n      </ion-item>\r\n  \r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" color=\"success\" expand=\"block\">Cadastrar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </form>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confignotificacao/confignotificacao.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confignotificacao/confignotificacao.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfignotificacaoConfignotificacaoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Configurações</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n<ion-content fullscreen [scrollEvents]=\"true\">\r\n    <form class=\"\" [formGroup]=\"form\" (ngSubmit)=\"alterar(form.value)\">\r\n        <ion-list>\r\n            <ion-item>\r\n                <ion-label>Receber notificações?</ion-label>\r\n                <ion-checkbox formControlName=\"receber\" slot=\"start\"></ion-checkbox>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-checkbox  formControlName=\"seg\" slot=\"start\"></ion-checkbox>\r\n                <ion-label>Segunda</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-checkbox formControlName=\"ter\" slot=\"start\"></ion-checkbox>\r\n                <ion-label>Terça</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-checkbox formControlName=\"qua\" slot=\"start\"></ion-checkbox>\r\n                <ion-label>Quarta</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-checkbox formControlName=\"qui\" slot=\"start\"></ion-checkbox>\r\n                <ion-label>Quinta</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-checkbox formControlName=\"sex\" slot=\"start\"></ion-checkbox>\r\n                <ion-label>Sexta</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-checkbox formControlName=\"sab\" slot=\"start\"></ion-checkbox>\r\n                <ion-label>Sabado</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-checkbox formControlName=\"dom\" slot=\"start\"></ion-checkbox>\r\n                <ion-label>Domingo</ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n        <ion-row>\r\n            <ion-col>\r\n              <ion-button type=\"submit\" color=\"success\" expand=\"block\">Confirmar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n    </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecotres/ecotres.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecotres/ecotres.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEcotresEcotresHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Ecotres</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content fullscreen [scrollEvents]=\"true\">\r\n  <ion-button type=\"button\" color=\"success\" expand=\"block\" (click)=\"abrirSite()\">Abrir Site</ion-button>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historico/historico.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historico/historico.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistoricoHistoricoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Histórico</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content fullscreen [scrollEvents]=\"true\">\r\n  <ion-list no-lines>\r\n    <ion-item *ngFor=\"let hist of historicos\">\r\n      Caminhão chegou próximo de você! Dia : {{hist.history_date}}\r\n      <ion-button color=\"danger\" (click)=\"excluir(hist.history_id)\">Excluir</ion-button> \r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  </ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historiconotificacao/historiconotificacao.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historiconotificacao/historiconotificacao.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistoriconotificacaoHistoriconotificacaoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Notificações</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen [scrollEvents]=\"true\">\r\n  <ion-list no-lines>\r\n   \r\n    <ion-item *ngFor=\"let not of notificacoes\">\r\n      {{not.push_title}}\r\n        <br>\r\n      {{not.push_message}}\r\n      <ion-button color=\"danger\" (click)=\"excluir(not.push_id)\">Excluir</ion-button> \r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen [scrollEvents]=\"true\">\r\n  <div style=\"width: 100%; text-align: center;background-color: #4cb050;\">\r\n    <img alt=\"logo\" width=\"30%\" src=\"assets/imgs/icon_02.png\">\r\n  </div>\r\n  <hr>\r\n  <div style=\"width: 100%; text-align: center;\">Olá, seja bem vindo!</div>\r\n  <br>\r\n  <div style=\"width: 100%; text-align: center;\">Já possui o seu cadastro?</div>\r\n\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"login(form.value)\">\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">E-mail</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"login\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Senha</ion-label>\r\n      <ion-input type=\"password\" required formControlName=\"password\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"success\" expand=\"block\">Entrar</ion-button>\r\n        <br>\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <a (click)=\"abrirEsqueceuSenha()\" class=\"small-text\">Esqueceu sua senha?</a>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <br>\r\n    <div style=\"width: 100%; text-align: center;\">\r\n      Ainda não possui seu cadastro?<br>\r\n      <a [routerLink]=\"['/cadastro']\" class=\"small-text\">Crie sua conta agora!</a>\r\n    </div>\r\n\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meusdados/meusdados.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meusdados/meusdados.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMeusdadosMeusdadosHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Meus Dados</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content fullscreen [scrollEvents]=\"true\">\r\n    <form class=\"\" [formGroup]=\"form\" (ngSubmit)=\"alterar(form.value)\">\r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">Nome</ion-label>\r\n        <ion-input type=\"text\" required formControlName=\"nome\"></ion-input>\r\n      </ion-item>\r\n\r\n       \r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">Telefone</ion-label>\r\n        <ion-input type=\"text\" required formControlName=\"telefone\"></ion-input>\r\n      </ion-item>\r\n       <h3>Endereços</h3>\r\n      <ion-list no-lines>\r\n        <ion-item *ngFor=\"let end of enderecos\">\r\n          {{end.addr_name}}<br>\r\n          {{end.addr_street}}\r\n          <ion-button color=\"danger\" (click)=\"excluirEndereco(end.addr_id)\">Excluir</ion-button> \r\n       <!-- {{end.Nome}}\r\n          <button> \r\n              <span style=\"text-transform: capitalize;\">Excluir</span> \r\n               (click)=\"excluirEndereco(end.id)\" \r\n          </button>   -->\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"button\" color=\"success\" expand=\"block\" (click)=\"abrirModalEndereco()\">Cadastrar Endereço</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </form>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/suporte/suporte.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/suporte/suporte.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSuporteSuporteHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Suporte</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  \r\n  \r\n  <ion-content fullscreen [scrollEvents]=\"true\">\r\n    <a ion-button href=\"https://api.whatsapp.com/send?phone=553193567988\">SEND</a>\r\n    <ion-button type=\"button\" color=\"success\" expand=\"block\" (click)=\"abrirWhats()\">Enviar mensagem por WhatsApp</ion-button>\r\n  </ion-content>\r\n  \r\n ";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_login_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/login/login */
    "./src/app/pages/login/login.ts");
    /* harmony import */


    var _pages_confignotificacao_confignotificacao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/confignotificacao/confignotificacao */
    "./src/app/pages/confignotificacao/confignotificacao.ts");
    /* harmony import */


    var _pages_ecotres_ecotres__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/ecotres/ecotres */
    "./src/app/pages/ecotres/ecotres.ts");
    /* harmony import */


    var _pages_historico_historico__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/historico/historico */
    "./src/app/pages/historico/historico.ts");
    /* harmony import */


    var _pages_historiconotificacao_historiconotificacao__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/historiconotificacao/historiconotificacao */
    "./src/app/pages/historiconotificacao/historiconotificacao.ts");
    /* harmony import */


    var _pages_meusdados_meusdados__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/meusdados/meusdados */
    "./src/app/pages/meusdados/meusdados.ts");
    /* harmony import */


    var _pages_cadastro_cadastro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/cadastro/cadastro */
    "./src/app/pages/cadastro/cadastro.ts");
    /* harmony import */


    var _pages_suporte_suporte__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/suporte/suporte */
    "./src/app/pages/suporte/suporte.ts");

    var routes = [{
      path: 'login',
      component: _pages_login_login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }, {
      path: 'cadastro',
      component: _pages_cadastro_cadastro__WEBPACK_IMPORTED_MODULE_9__["CadastroPage"]
    }, {
      path: 'confignotificacao',
      component: _pages_confignotificacao_confignotificacao__WEBPACK_IMPORTED_MODULE_4__["ConfigNotificacaoPage"]
    }, {
      path: 'ecotres',
      component: _pages_ecotres_ecotres__WEBPACK_IMPORTED_MODULE_5__["EcotresPage"]
    }, {
      path: 'suporte',
      component: _pages_suporte_suporte__WEBPACK_IMPORTED_MODULE_10__["SuportePage"]
    }, {
      path: 'historico',
      component: _pages_historico_historico__WEBPACK_IMPORTED_MODULE_6__["HistoricoPage"]
    }, {
      path: 'historiconotificacao',
      component: _pages_historiconotificacao_historiconotificacao__WEBPACK_IMPORTED_MODULE_7__["HistoricoNotificacaoPage"]
    }, {
      path: 'meudados',
      component: _pages_meusdados_meusdados__WEBPACK_IMPORTED_MODULE_8__["MeusDadosPage"]
    }, // {
    //   path: '',
    //   redirectTo: 'folder/Inbox',
    //   pathMatch: 'full'
    // },
    // {
    //   path: 'folder/:id',
    //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
    // },
    {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-toolbar.footer {\n  --background: #4cb050;\n  text-align: center;\n}\n\nion-button {\n  --background: #4cb050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxMdWNhc1xcRG9jdW1lbnRzXFxQcm9qZXRvc1xcaG9yYS1kby1saXhvXFxhcHAyXFxhcHAyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTs7RUFFRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkRBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0RBQUE7QUNIRjs7QURNQTtFQUNFLCtCQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0JBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLCtCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUNKRjs7QURPQTtFQUNFLGlDQUFBO0FDSkY7O0FET0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FETUE7RUFDRSxxQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLXRvb2xiYXIuZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNGNiMDUwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNGNiMDUwO1xuICB9IiwiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tdG9vbGJhci5mb290ZXIge1xuICAtLWJhY2tncm91bmQ6ICM0Y2IwNTA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzRjYjA1MDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/auth/authentication.service */
    "./src/app/services/auth/authentication.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/firebase-x/ngx */
    "./node_modules/@ionic-native/firebase-x/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js"); //import { FCM } from '@ionic-native/fcm/ngx';


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router, routerComponent, auth, iab, firebase, alertController, geolocation) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.routerComponent = routerComponent;
        this.auth = auth;
        this.iab = iab;
        this.firebase = firebase;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.selectedIndex = 0;
        this.appPages = [{
          title: 'Home',
          url: '/home',
          icon: 'home'
        }, {
          title: 'Meus Dados',
          url: '/meudados',
          icon: 'create'
        }, {
          title: 'Histórico',
          url: '/historico',
          icon: 'time'
        }, {
          title: 'Notificações',
          url: '/historiconotificacao',
          icon: 'paper-plane'
        }, {
          title: 'Suporte',
          url: '/suporte',
          icon: 'headset'
        }, {
          title: 'Configurações',
          url: '/confignotificacao',
          icon: 'construct'
        }, {
          title: 'Ecotres',
          url: '/ecotres',
          icon: 'link'
        }];
        this.labels = ['Sair', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.auth.currentUser.subscribe(function (arg) {
            _this.usuario = arg;
          });
          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.routerComponent.navigate(['/login']);

            if (_this.auth.hasSession()) {
              _this.usuario = _this.auth.currentUserValueDecrypt;

              if (_this.usuario.user_id > 0) {
                _this.auth.updateUser(_this.usuario);

                _this.routerComponent.navigate(['/home']);
              } else {
                _this.routerComponent.navigate(['/login']);
              }
            } else {
              _this.routerComponent.navigate(['/login']);
            }

            _this.inializeFCM();

            _this.inializeGeo();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var path = window.location.pathname.split('folder/')[1];

          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) {
              return page.title.toLowerCase() === path.toLowerCase();
            });
          }
        }
      }, {
        key: "abrirEcotres",
        value: function abrirEcotres() {
          var browser = this.iab.create('https://ecotres.com.br/');
        }
      }, {
        key: "sair",
        value: function sair() {
          //this.auth.logout();
          localStorage.removeItem('user'); //App.exitApp();

          navigator['app'].exitApp(); //this.routerComponent.navigate(['/login']);
        }
      }, {
        key: "inializeGeo",
        value: function inializeGeo() {
          var _this2 = this;

          this.geolocation.getCurrentPosition().then(function (resp) {})["catch"](function (error) {
            _this2.presentAlert("Erro : ", error);
          });
        }
      }, {
        key: "inializeFCM",
        value: function inializeFCM() {
          var _this3 = this;

          // this.firebase.getToken().then(token => {alert(token); this.token = token;});
          this.firebase.onMessageReceived().subscribe(function (data) {
            //var myJSON = JSON.stringify(data.title);
            _this3.presentAlert(data.title, data.body);
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, text) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: text,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }, {
        type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_8__["FirebaseX"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _pages_login_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/login/login */
    "./src/app/pages/login/login.ts");
    /* harmony import */


    var _pages_cadastro_cadastro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/cadastro/cadastro */
    "./src/app/pages/cadastro/cadastro.ts");
    /* harmony import */


    var _pages_meusdados_meusdados__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/meusdados/meusdados */
    "./src/app/pages/meusdados/meusdados.ts");
    /* harmony import */


    var _modals_endereco_endereco__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./modals/endereco/endereco */
    "./src/app/modals/endereco/endereco.ts");
    /* harmony import */


    var _pages_historiconotificacao_historiconotificacao__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/historiconotificacao/historiconotificacao */
    "./src/app/pages/historiconotificacao/historiconotificacao.ts");
    /* harmony import */


    var _pages_historico_historico__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/historico/historico */
    "./src/app/pages/historico/historico.ts");
    /* harmony import */


    var _pages_confignotificacao_confignotificacao__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/confignotificacao/confignotificacao */
    "./src/app/pages/confignotificacao/confignotificacao.ts");
    /* harmony import */


    var _pages_ecotres_ecotres__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/ecotres/ecotres */
    "./src/app/pages/ecotres/ecotres.ts");
    /* harmony import */


    var _pages_suporte_suporte__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/suporte/suporte */
    "./src/app/pages/suporte/suporte.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/firebase-x/ngx */
    "./node_modules/@ionic-native/firebase-x/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _modals_esqueceusenha_esqueceusenha__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./modals/esqueceusenha/esqueceusenha */
    "./src/app/modals/esqueceusenha/esqueceusenha.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @fortawesome/fontawesome-svg-core */
    "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_25__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__["fas"]);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_login_login__WEBPACK_IMPORTED_MODULE_9__["LoginPage"], _pages_cadastro_cadastro__WEBPACK_IMPORTED_MODULE_10__["CadastroPage"], _pages_meusdados_meusdados__WEBPACK_IMPORTED_MODULE_11__["MeusDadosPage"], _modals_endereco_endereco__WEBPACK_IMPORTED_MODULE_12__["EnderecoModal"], _modals_esqueceusenha_esqueceusenha__WEBPACK_IMPORTED_MODULE_23__["EsqueceuSenhaModal"], _pages_historiconotificacao_historiconotificacao__WEBPACK_IMPORTED_MODULE_13__["HistoricoNotificacaoPage"], _pages_historico_historico__WEBPACK_IMPORTED_MODULE_14__["HistoricoPage"], _pages_confignotificacao_confignotificacao__WEBPACK_IMPORTED_MODULE_15__["ConfigNotificacaoPage"], _pages_ecotres_ecotres__WEBPACK_IMPORTED_MODULE_16__["EcotresPage"], _pages_suporte_suporte__WEBPACK_IMPORTED_MODULE_17__["SuportePage"], _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_22__["Geolocation"], _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_21__["FirebaseX"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__["InAppBrowser"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/modals/endereco/endereco.scss":
  /*!***********************************************!*\
    !*** ./src/app/modals/endereco/endereco.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsEnderecoEnderecoScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9lbmRlcmVjby9lbmRlcmVjby5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modals/endereco/endereco.ts":
  /*!*********************************************!*\
    !*** ./src/app/modals/endereco/endereco.ts ***!
    \*********************************************/

  /*! exports provided: EnderecoModal */

  /***/
  function srcAppModalsEnderecoEnderecoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnderecoModal", function () {
      return EnderecoModal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/authentication.service */
    "./src/app/services/auth/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/usuario/usuario.service */
    "./src/app/services/usuario/usuario.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

    var EnderecoModal = /*#__PURE__*/function () {
      function EnderecoModal(fb, usuarioService, routerComponent, modalController, authenticationService, geolocation, alertController) {
        _classCallCheck(this, EnderecoModal);

        this.fb = fb;
        this.usuarioService = usuarioService;
        this.routerComponent = routerComponent;
        this.modalController = modalController;
        this.authenticationService = authenticationService;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.geocoder = new google.maps.Geocoder();
        this.form = this.fb.group({
          nome: [''],
          cep: ['']
        });
      }

      _createClass(EnderecoModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.authenticationService.currentUser.subscribe(function (arg) {
            _this4.usuario = arg;
          });
        }
      }, {
        key: "cadastrarEndereco",
        value: function cadastrarEndereco(form) {
          var _this5 = this;

          var lat = 0;
          var lng = 0;
          this.usuarioService.ConsultarCEP(form.cep).subscribe(function (data) {
            var model = {
              user_id: _this5.usuario.user_id,
              addr_zipcode: form.cep,
              addr_name: form.nome,
              addr_street: data.logradouro,
              addr_number: 0,
              addr_district: data.bairro,
              addr_city: data.localidade,
              addr_state: data.uf,
              addr_lat: 0,
              addr_long: 0
            };

            _this5.geocoder.geocode({
              'address': form.cep
            }, function (results, status) {
              if (status == 'OK') {
                model.addr_lat = results[0].geometry.location.lat();
                model.addr_long = results[0].geometry.location.lng();
              }

              _this5.usuarioService.CadastrarEndereco(model).subscribe(function (data) {
                _this5.presentAlert("Cadastrado com sucesso.");

                _this5.dismissModal();
              });
            });
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss(); // this.modalController.dismiss({
          //   'dismissed': true
          // });
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this6 = this;

          this.geolocation.getCurrentPosition().then(function (resp) {
            var latlng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

            _this6.geocoder.geocode({
              location: latlng
            }, function (results, status) {
              if (status === "OK") {
                var model = {
                  user_id: _this6.usuario.user_id,
                  addr_zipcode: results[0].address_components[6].long_name,
                  addr_name: "Localização Atual",
                  addr_street: results[0].address_components[1].long_name,
                  addr_number: results[0].address_components[0].long_name,
                  addr_district: results[0].address_components[2].long_name,
                  addr_city: results[0].address_components[3].long_name,
                  addr_state: results[0].address_components[4].short_name,
                  addr_lat: resp.coords.latitude,
                  addr_long: resp.coords.longitude
                };

                _this6.usuarioService.CadastrarEndereco(model).subscribe(function (data) {
                  _this6.presentAlert("Cadastrado com sucesso.");

                  _this6.dismissModal();
                }); //console.log(results[0].formatted_address);

              } else {
                _this6.presentAlert("Não econtramos seu endereço digite seu cep.");
              }
            });
          })["catch"](function (error) {
            _this6.presentAlert("Erro : " + error);
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(text) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Atenção',
                      message: text,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return EnderecoModal;
    }();

    EnderecoModal.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    EnderecoModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'modal-endereco',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./endereco.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/endereco/endereco.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./endereco.scss */
      "./src/app/modals/endereco/endereco.scss"))["default"]]
    })], EnderecoModal);
    /***/
  },

  /***/
  "./src/app/modals/esqueceusenha/esqueceusenha.scss":
  /*!*********************************************************!*\
    !*** ./src/app/modals/esqueceusenha/esqueceusenha.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsEsqueceusenhaEsqueceusenhaScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-verde {\n  background-color: #8bc53f;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2VzcXVlY2V1c2VuaGEvQzpcXFVzZXJzXFxMdWNhc1xcRG9jdW1lbnRzXFxQcm9qZXRvc1xcaG9yYS1kby1saXhvXFxhcHAyXFxhcHAyL3NyY1xcYXBwXFxtb2RhbHNcXGVzcXVlY2V1c2VuaGFcXGVzcXVlY2V1c2VuaGEuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2VzcXVlY2V1c2VuaGEvZXNxdWVjZXVzZW5oYS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2VzcXVlY2V1c2VuaGEvZXNxdWVjZXVzZW5oYS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi12ZXJkZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJjNTNmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufSIsIi5idXR0b24tdmVyZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJjNTNmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modals/esqueceusenha/esqueceusenha.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modals/esqueceusenha/esqueceusenha.ts ***!
    \*******************************************************/

  /*! exports provided: EsqueceuSenhaModal */

  /***/
  function srcAppModalsEsqueceusenhaEsqueceusenhaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EsqueceuSenhaModal", function () {
      return EsqueceuSenhaModal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/authentication.service */
    "./src/app/services/auth/authentication.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var EsqueceuSenhaModal = /*#__PURE__*/function () {
      function EsqueceuSenhaModal(fb, modalController, authenticationService, alertController) {
        _classCallCheck(this, EsqueceuSenhaModal);

        this.fb = fb;
        this.modalController = modalController;
        this.authenticationService = authenticationService;
        this.alertController = alertController;
        this.form = this.fb.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(EsqueceuSenhaModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "esqueceuSenha",
        value: function esqueceuSenha(form) {
          var _this7 = this;

          this.authenticationService.EsqueceuSenha(form.email).subscribe(function (res) {
            _this7.presentAlert("Atenção", "Senha enviada para seu e-mail.");

            _this7.dismissModal();
          }, function (err) {
            _this7.presentAlert("Erro", "Verifique se seu e-mail está correto.");
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalController.dismiss(); // this.modalController.dismiss({
          //   'dismissed': true
          // });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, text) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: text,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return EsqueceuSenhaModal;
    }();

    EsqueceuSenhaModal.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    EsqueceuSenhaModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'modal-esqueceusenha',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./esqueceusenha.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/esqueceusenha/esqueceusenha.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./esqueceusenha.scss */
      "./src/app/modals/esqueceusenha/esqueceusenha.scss"))["default"]]
    })], EsqueceuSenhaModal);
    /***/
  },

  /***/
  "./src/app/models/usuario.ts":
  /*!***********************************!*\
    !*** ./src/app/models/usuario.ts ***!
    \***********************************/

  /*! exports provided: Usuario */

  /***/
  function srcAppModelsUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });

    var Usuario = function Usuario() {
      _classCallCheck(this, Usuario);
    };
    /***/

  },

  /***/
  "./src/app/pages/cadastro/cadastro.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/cadastro/cadastro.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCadastroCadastroScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2NhZGFzdHJvLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/cadastro/cadastro.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/cadastro/cadastro.ts ***!
    \********************************************/

  /*! exports provided: CadastroPage */

  /***/
  function srcAppPagesCadastroCadastroTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroPage", function () {
      return CadastroPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/authentication.service */
    "./src/app/services/auth/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/usuario/usuario.service */
    "./src/app/services/usuario/usuario.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/firebase-x/ngx */
    "./node_modules/@ionic-native/firebase-x/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var js_sha512__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! js-sha512 */
    "./node_modules/js-sha512/src/sha512.js");
    /* harmony import */


    var js_sha512__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_9__);

    var CadastroPage = /*#__PURE__*/function () {
      function CadastroPage(fb, usuarioService, routerComponent, firebase, auth, alertController) {
        _classCallCheck(this, CadastroPage);

        this.fb = fb;
        this.usuarioService = usuarioService;
        this.routerComponent = routerComponent;
        this.firebase = firebase;
        this.auth = auth;
        this.alertController = alertController;
        this.form = this.fb.group({
          nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          telefone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(CadastroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cadastrar",
        value: function cadastrar(form) {
          var _this8 = this;

          var myDate = new Date();
          var model = {
            user_name: form.nome,
            user_telephone: form.telefone,
            user_email: form.email,
            user_password: js_sha512__WEBPACK_IMPORTED_MODULE_9__["sha512"](form.senha),
            user_registration: Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(myDate, 'yyyy-MM-dd', 'en-US')
          };
          this.usuarioService.Cadastrar(model).subscribe(function (data) {
            _this8.presentAlert("Atenção", "Cadastrado com sucesso! agora faça seu login!.");

            _this8.routerComponent.navigate(['/login']);
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, text) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: text,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return CadastroPage;
    }();

    CadastroPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseX"]
      }, {
        type: src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }];
    };

    CadastroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'page-cadastro',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cadastro.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cadastro/cadastro.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cadastro.scss */
      "./src/app/pages/cadastro/cadastro.scss"))["default"]]
    })], CadastroPage);
    /***/
  },

  /***/
  "./src/app/pages/confignotificacao/confignotificacao.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/confignotificacao/confignotificacao.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfignotificacaoConfignotificacaoScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: #FFFFFF;\n  --background: #4cb050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlnbm90aWZpY2FjYW8vQzpcXFVzZXJzXFxMdWNhc1xcRG9jdW1lbnRzXFxQcm9qZXRvc1xcaG9yYS1kby1saXhvXFxhcHAyXFxhcHAyL3NyY1xcYXBwXFxwYWdlc1xcY29uZmlnbm90aWZpY2FjYW9cXGNvbmZpZ25vdGlmaWNhY2FvLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbmZpZ25vdGlmaWNhY2FvL2NvbmZpZ25vdGlmaWNhY2FvLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ25vdGlmaWNhY2FvL2NvbmZpZ25vdGlmaWNhY2FvLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b257XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjYjA1MDtcclxuICB9IiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIC0tYmFja2dyb3VuZDogIzRjYjA1MDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/confignotificacao/confignotificacao.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/confignotificacao/confignotificacao.ts ***!
    \**************************************************************/

  /*! exports provided: ConfigNotificacaoPage */

  /***/
  function srcAppPagesConfignotificacaoConfignotificacaoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigNotificacaoPage", function () {
      return ConfigNotificacaoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/authentication.service */
    "./src/app/services/auth/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/usuario/usuario.service */
    "./src/app/services/usuario/usuario.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ConfigNotificacaoPage = /*#__PURE__*/function () {
      function ConfigNotificacaoPage(fb, usuarioService, routerComponent, authenticationService, alertController) {
        _classCallCheck(this, ConfigNotificacaoPage);

        this.fb = fb;
        this.usuarioService = usuarioService;
        this.routerComponent = routerComponent;
        this.authenticationService = authenticationService;
        this.alertController = alertController;
      }

      _createClass(ConfigNotificacaoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.form = this.fb.group({
            seg: [null],
            ter: [null],
            qua: [null],
            qui: [null],
            sex: [null],
            sab: [null],
            dom: [null],
            receber: [null]
          });
          this.authenticationService.currentUser.subscribe(function (arg) {
            _this9.usuario = arg;

            _this9.listar();
          });
        }
      }, {
        key: "listar",
        value: function listar() {
          var _this10 = this;

          this.usuarioService.ListarConfiguracoes(this.usuario.user_id).subscribe(function (data) {
            if (data.length >= 0) {
              var dias = [];
              dias = data[0].notification_status_days.split(",");
              var receb = data[0].notification_status == "1" ? true : false;
              var seg = false;
              var ter = false;
              var qua = false;
              var qui = false;
              var sex = false;
              var sab = false;
              var dom = false;

              if (dias.length > 0) {
                dom = dias[0] == 1 ? true : false;
                seg = dias[1] == 1 ? true : false;
                ter = dias[2] == 1 ? true : false;
                qua = dias[3] == 1 ? true : false;
                qui = dias[4] == 1 ? true : false;
                sex = dias[5] == 1 ? true : false;
                sab = dias[6] == 1 ? true : false; //    for (let index = 0; index < dias.length; index++) {
                //        const element = dias[index];
                //        console.log(element);
                //    }
              }

              _this10.form.patchValue({
                seg: seg,
                ter: ter,
                qua: qua,
                qui: qui,
                sex: sex,
                sab: sab,
                dom: dom,
                receber: receb
              });
            }
          });
        }
      }, {
        key: "alterar",
        value: function alterar(form) {
          var _this11 = this;

          var notification_status_days;
          if (form.dom) notification_status_days = "1,";else notification_status_days = "0,";
          if (form.seg) notification_status_days += "1,";else notification_status_days += "0,";
          if (form.ter) notification_status_days += "1,";else notification_status_days += "0,";
          if (form.qua) notification_status_days += "1,";else notification_status_days += "0,";
          if (form.qui) notification_status_days += "1,";else notification_status_days += "0,";
          if (form.sex) notification_status_days += "1,";else notification_status_days += "0,";
          if (form.sab) notification_status_days += "1";else notification_status_days += "0";
          var model = {
            user_id: this.usuario.user_id,
            notification_status: form.receber == true ? "1" : "0",
            notification_status_days: notification_status_days
          };
          this.usuarioService.AlterarConfiguracoes(model).subscribe(function (data) {
            _this11.listar();

            _this11.presentAlert();
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: 'Atenção',
                      message: 'Alterado com sucesso.',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ConfigNotificacaoPage;
    }();

    ConfigNotificacaoPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    ConfigNotificacaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'page-confignotificacao',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./confignotificacao.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confignotificacao/confignotificacao.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./confignotificacao.scss */
      "./src/app/pages/confignotificacao/confignotificacao.scss"))["default"]]
    })], ConfigNotificacaoPage);
    /***/
  },

  /***/
  "./src/app/pages/ecotres/ecotres.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/ecotres/ecotres.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEcotresEcotresScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".iframe-wrapper iframe {\n  width: 100%;\n  height: 100%;\n}\n\n.iframe-wrapper iframe {\n  width: 100%;\n  height: 100%;\n}\n\nion-menu-button {\n  color: #FFFFFF;\n  --background: #4cb050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWNvdHJlcy9DOlxcVXNlcnNcXEx1Y2FzXFxEb2N1bWVudHNcXFByb2pldG9zXFxob3JhLWRvLWxpeG9cXGFwcDJcXGFwcDIvc3JjXFxhcHBcXHBhZ2VzXFxlY290cmVzXFxlY290cmVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vjb3RyZXMvZWNvdHJlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFSTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vjb3RyZXMvZWNvdHJlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcmFtZS13cmFwcGVyIGlmcmFtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuaWZyYW1lLXdyYXBwZXIgaWZyYW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1tZW51LWJ1dHRvbntcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICM0Y2IwNTA7XHJcbiAgICAgIH0iLCIuaWZyYW1lLXdyYXBwZXIgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlmcmFtZS13cmFwcGVyIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICAtLWJhY2tncm91bmQ6ICM0Y2IwNTA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/ecotres/ecotres.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/ecotres/ecotres.ts ***!
    \******************************************/

  /*! exports provided: EcotresPage */

  /***/
  function srcAppPagesEcotresEcotresTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcotresPage", function () {
      return EcotresPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EcotresPage = /*#__PURE__*/function () {
      function EcotresPage(iab, routerComponent) {
        _classCallCheck(this, EcotresPage);

        this.iab = iab;
        this.routerComponent = routerComponent;
      }

      _createClass(EcotresPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.iframeurl = 'https://google.com/';
          var browser = this.iab.create('https://ecotres.com.br/');
          this.routerComponent.navigate(['/home']);
        }
      }, {
        key: "abrirSite",
        value: function abrirSite() {
          var browser = this.iab.create('https://ecotres.com.br/');
        }
      }]);

      return EcotresPage;
    }();

    EcotresPage.ctorParameters = function () {
      return [{
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    EcotresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-ecotres',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ecotres.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecotres/ecotres.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ecotres.scss */
      "./src/app/pages/ecotres/ecotres.scss"))["default"]]
    })], EcotresPage);
    /***/
  },

  /***/
  "./src/app/pages/historico/historico.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/historico/historico.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistoricoHistoricoScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: #FFFFFF;\n  --background: #4cb050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yaWNvL0M6XFxVc2Vyc1xcTHVjYXNcXERvY3VtZW50c1xcUHJvamV0b3NcXGhvcmEtZG8tbGl4b1xcYXBwMlxcYXBwMi9zcmNcXGFwcFxccGFnZXNcXGhpc3Rvcmljb1xcaGlzdG9yaWNvLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3Rvcmljby9oaXN0b3JpY28uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yaWNvL2hpc3Rvcmljby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9ue1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0Y2IwNTA7XHJcbiAgfSIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICAtLWJhY2tncm91bmQ6ICM0Y2IwNTA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/historico/historico.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/historico/historico.ts ***!
    \**********************************************/

  /*! exports provided: HistoricoPage */

  /***/
  function srcAppPagesHistoricoHistoricoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoricoPage", function () {
      return HistoricoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/authentication.service */
    "./src/app/services/auth/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/usuario/usuario.service */
    "./src/app/services/usuario/usuario.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var HistoricoPage = /*#__PURE__*/function () {
      function HistoricoPage(fb, usuarioService, routerComponent, authenticationService, alertController) {
        _classCallCheck(this, HistoricoPage);

        this.fb = fb;
        this.usuarioService = usuarioService;
        this.routerComponent = routerComponent;
        this.authenticationService = authenticationService;
        this.alertController = alertController;
        this.historicos = [];
      }

      _createClass(HistoricoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.historicos = [];
          this.authenticationService.currentUser.subscribe(function (arg) {
            _this12.usuario = arg;

            _this12.listar();
          });
        }
      }, {
        key: "listar",
        value: function listar() {
          var _this13 = this;

          this.usuarioService.ListarHistorico(this.usuario.user_id).subscribe(function (data) {
            _this13.historicos = [];
            _this13.historicos = data;
          });
        }
      }, {
        key: "excluir",
        value: function excluir(id) {
          var _this14 = this;

          this.usuarioService.ExcluirHistorico(id).subscribe(function (data) {
            _this14.listar();

            _this14.presentAlert();
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertController.create({
                      header: 'Atenção',
                      message: 'Excluido com sucesso.',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return HistoricoPage;
    }();

    HistoricoPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    HistoricoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'page-historico',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./historico.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historico/historico.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./historico.scss */
      "./src/app/pages/historico/historico.scss"))["default"]]
    })], HistoricoPage);
    /***/
  },

  /***/
  "./src/app/pages/historiconotificacao/historiconotificacao.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/historiconotificacao/historiconotificacao.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistoriconotificacaoHistoriconotificacaoScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: #FFFFFF;\n  --background: #4cb050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yaWNvbm90aWZpY2FjYW8vQzpcXFVzZXJzXFxMdWNhc1xcRG9jdW1lbnRzXFxQcm9qZXRvc1xcaG9yYS1kby1saXhvXFxhcHAyXFxhcHAyL3NyY1xcYXBwXFxwYWdlc1xcaGlzdG9yaWNvbm90aWZpY2FjYW9cXGhpc3Rvcmljb25vdGlmaWNhY2FvLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3Rvcmljb25vdGlmaWNhY2FvL2hpc3Rvcmljb25vdGlmaWNhY2FvLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3Rvcmljb25vdGlmaWNhY2FvL2hpc3Rvcmljb25vdGlmaWNhY2FvLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b257XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjYjA1MDtcclxuICB9IiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIC0tYmFja2dyb3VuZDogIzRjYjA1MDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/historiconotificacao/historiconotificacao.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/historiconotificacao/historiconotificacao.ts ***!
    \********************************************************************/

  /*! exports provided: HistoricoNotificacaoPage */

  /***/
  function srcAppPagesHistoriconotificacaoHistoriconotificacaoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoricoNotificacaoPage", function () {
      return HistoricoNotificacaoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/authentication.service */
    "./src/app/services/auth/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/usuario/usuario.service */
    "./src/app/services/usuario/usuario.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var HistoricoNotificacaoPage = /*#__PURE__*/function () {
      function HistoricoNotificacaoPage(fb, usuarioService, routerComponent, authenticationService, alertController) {
        _classCallCheck(this, HistoricoNotificacaoPage);

        this.fb = fb;
        this.usuarioService = usuarioService;
        this.routerComponent = routerComponent;
        this.authenticationService = authenticationService;
        this.alertController = alertController;
        this.notificacoes = [];
      }

      _createClass(HistoricoNotificacaoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.notificacoes = [];
          this.authenticationService.currentUser.subscribe(function (arg) {
            _this15.usuario = arg;

            _this15.listar();
          });
        }
      }, {
        key: "listar",
        value: function listar() {
          var _this16 = this;

          this.usuarioService.ListarNotificacao(this.usuario.user_id).subscribe(function (data) {
            _this16.notificacoes = [];
            _this16.notificacoes = data;
          });
        }
      }, {
        key: "excluir",
        value: function excluir(id) {
          var _this17 = this;

          this.usuarioService.ExcluirNotificacao(id).subscribe(function (data) {
            _this17.listar();

            _this17.presentAlert();
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertController.create({
                      header: 'Atenção',
                      message: 'Excluido com sucesso.',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return HistoricoNotificacaoPage;
    }();

    HistoricoNotificacaoPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    HistoricoNotificacaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'page-historiconotificacao',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./historiconotificacao.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historiconotificacao/historiconotificacao.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./historiconotificacao.scss */
      "./src/app/pages/historiconotificacao/historiconotificacao.scss"))["default"]]
    })], HistoricoNotificacaoPage);
    /***/
  },

  /***/
  "./src/app/pages/login/login.scss":
  /*!****************************************!*\
    !*** ./src/app/pages/login/login.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/login/login.ts ***!
    \**************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var js_sha512__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! js-sha512 */
    "./node_modules/js-sha512/src/sha512.js");
    /* harmony import */


    var js_sha512__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth/authentication.service */
    "./src/app/services/auth/authentication.service.ts");
    /* harmony import */


    var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/usuario */
    "./src/app/models/usuario.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/firebase-x/ngx */
    "./node_modules/@ionic-native/firebase-x/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/usuario/usuario.service */
    "./src/app/services/usuario/usuario.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_modals_esqueceusenha_esqueceusenha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/modals/esqueceusenha/esqueceusenha */
    "./src/app/modals/esqueceusenha/esqueceusenha.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(fb, auth, routerComponent, usuarioService, modalController, firebase, alertController) {
        _classCallCheck(this, LoginPage);

        this.fb = fb;
        this.auth = auth;
        this.routerComponent = routerComponent;
        this.usuarioService = usuarioService;
        this.modalController = modalController;
        this.firebase = firebase;
        this.alertController = alertController;
        this.form = this.fb.group({
          login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login(form) {
          var _this18 = this;

          console.log(form);
          var model = {
            login: form.login,
            password: js_sha512__WEBPACK_IMPORTED_MODULE_3__["sha512"](form.password)
          };
          console.log(model); // alert("começou");

          this.auth.login(model).subscribe(function (data) {
            if (data.user_id > 0) {
              _this18.auth.TracarLogin().subscribe(function (data) {
                _this18.usuario = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
                _this18.usuario = _this18.auth.currentUserValue;

                _this18.auth.updateUser(_this18.usuario);

                var modelToken = {
                  app_id: 1,
                  user_id: _this18.usuario.user_id,
                  token_value: "token",
                  notification_status: 1,
                  notification_status_days: "1,1,1,1,1,1,1"
                };

                _this18.firebase.getToken().then(function (token) {
                  var modelToken = {
                    app_id: 1,
                    user_id: _this18.usuario.user_id,
                    token_value: token,
                    notification_status: 1,
                    notification_status_days: "1,1,1,1,1,1,1"
                  };

                  _this18.usuarioService.CadastrarToken(modelToken).subscribe(function (data) {});
                });

                _this18.routerComponent.navigate(['/home']);
              });
            } else {
              //swal.fire("Login ou senha incorretos.");
              _this18.presentAlert("Atenção", "Seu login ou senha esta incorretos.");
            }
          });
        }
      }, {
        key: "abrirEsqueceuSenha",
        value: function abrirEsqueceuSenha() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var modal;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.modalController.create({
                      component: src_app_modals_esqueceusenha_esqueceusenha__WEBPACK_IMPORTED_MODULE_10__["EsqueceuSenhaModal"],
                      cssClass: 'esqueceusenha'
                    });

                  case 2:
                    modal = _context8.sent;
                    modal.onDidDismiss().then(function (data) {});
                    _context8.next = 6;
                    return modal.present();

                  case 6:
                    return _context8.abrupt("return", _context8.sent);

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, text) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var alert;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: text,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context9.sent;
                    _context9.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
      }, {
        type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseX"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'page-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.scss */
      "./src/app/pages/login/login.scss"))["default"]]
    })], LoginPage);
    /***/
  },

  /***/
  "./src/app/pages/meusdados/meusdados.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/meusdados/meusdados.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMeusdadosMeusdadosScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: #FFFFFF;\n  --background: #4cb050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWV1c2RhZG9zL0M6XFxVc2Vyc1xcTHVjYXNcXERvY3VtZW50c1xcUHJvamV0b3NcXGhvcmEtZG8tbGl4b1xcYXBwMlxcYXBwMi9zcmNcXGFwcFxccGFnZXNcXG1ldXNkYWRvc1xcbWV1c2RhZG9zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21ldXNkYWRvcy9tZXVzZGFkb3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWV1c2RhZG9zL21ldXNkYWRvcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9ue1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0Y2IwNTA7XHJcbiAgfSIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICAtLWJhY2tncm91bmQ6ICM0Y2IwNTA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/meusdados/meusdados.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/meusdados/meusdados.ts ***!
    \**********************************************/

  /*! exports provided: MeusDadosPage */

  /***/
  function srcAppPagesMeusdadosMeusdadosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeusDadosPage", function () {
      return MeusDadosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/authentication.service */
    "./src/app/services/auth/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/usuario/usuario.service */
    "./src/app/services/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_modals_endereco_endereco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modals/endereco/endereco */
    "./src/app/modals/endereco/endereco.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var MeusDadosPage = /*#__PURE__*/function () {
      function MeusDadosPage(fb, usuarioService, routerComponent, modalController, authenticationService, alertController) {
        var _this19 = this;

        _classCallCheck(this, MeusDadosPage);

        this.fb = fb;
        this.usuarioService = usuarioService;
        this.routerComponent = routerComponent;
        this.modalController = modalController;
        this.authenticationService = authenticationService;
        this.alertController = alertController;
        this.enderecos = [];
        this.enderecos = [];
        this.form = this.fb.group({
          nome: [''],
          telefone: [''],
          email: ['']
        });
        this.authenticationService.currentUser.subscribe(function (arg) {
          _this19.usuario = arg;

          _this19.form.patchValue({
            nome: _this19.usuario.user_name,
            telefone: _this19.usuario.user_telephone,
            email: _this19.usuario.user_email
          });

          _this19.listarEndereco();
        });
      }

      _createClass(MeusDadosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "listarEndereco",
        value: function listarEndereco() {
          var _this20 = this;

          this.usuarioService.ListarEndereco(this.usuario.user_id).subscribe(function (data) {
            _this20.enderecos = [];
            _this20.enderecos = data;
          });
        }
      }, {
        key: "excluirEndereco",
        value: function excluirEndereco(id) {
          var _this21 = this;

          this.usuarioService.ExcluirEndereco(id).subscribe(function (data) {
            _this21.listarEndereco();

            _this21.presentAlert("Atenção", "Excluido com sucesso.");
          });
        }
      }, {
        key: "alterar",
        value: function alterar(model) {}
      }, {
        key: "abrirModalEndereco",
        value: function abrirModalEndereco() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this22 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.modalController.create({
                      component: src_app_modals_endereco_endereco__WEBPACK_IMPORTED_MODULE_6__["EnderecoModal"],
                      cssClass: 'endereco'
                    });

                  case 2:
                    modal = _context10.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this22.listarEndereco();
                    });
                    _context10.next = 6;
                    return modal.present();

                  case 6:
                    return _context10.abrupt("return", _context10.sent);

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, text) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var alert;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: text,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context11.sent;
                    _context11.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return MeusDadosPage;
    }();

    MeusDadosPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }];
    };

    MeusDadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'page-meusdados',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./meusdados.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meusdados/meusdados.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./meusdados.scss */
      "./src/app/pages/meusdados/meusdados.scss"))["default"]]
    })], MeusDadosPage);
    /***/
  },

  /***/
  "./src/app/pages/suporte/suporte.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/suporte/suporte.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSuporteSuporteScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: #FFFFFF;\n  --background: #4cb050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3Vwb3J0ZS9DOlxcVXNlcnNcXEx1Y2FzXFxEb2N1bWVudHNcXFByb2pldG9zXFxob3JhLWRvLWxpeG9cXGFwcDJcXGFwcDIvc3JjXFxhcHBcXHBhZ2VzXFxzdXBvcnRlXFxzdXBvcnRlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1cG9ydGUvc3Vwb3J0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdXBvcnRlL3N1cG9ydGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbntcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNGNiMDUwO1xyXG4gIH0iLCJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgLS1iYWNrZ3JvdW5kOiAjNGNiMDUwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/suporte/suporte.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/suporte/suporte.ts ***!
    \******************************************/

  /*! exports provided: SuportePage */

  /***/
  function srcAppPagesSuporteSuporteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuportePage", function () {
      return SuportePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SuportePage = /*#__PURE__*/function () {
      function SuportePage(iab, routerComponent) {
        _classCallCheck(this, SuportePage);

        this.iab = iab;
        this.routerComponent = routerComponent;
      }

      _createClass(SuportePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// const browser = this.iab.create('whatsapp//send?phone=553193567988');
          // this.routerComponent.navigate(['/home']);
        }
      }, {
        key: "abrirWhats",
        value: function abrirWhats() {
          var browser = this.iab.create('whatsapp//send?phone=553193567988');
        }
      }]);

      return SuportePage;
    }();

    SuportePage.ctorParameters = function () {
      return [{
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SuportePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-suporte',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./suporte.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/suporte/suporte.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./suporte.scss */
      "./src/app/pages/suporte/suporte.scss"))["default"]]
    })], SuportePage);
    /***/
  },

  /***/
  "./src/app/services/auth/authentication.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/auth/authentication.service.ts ***!
    \*********************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/usuario */
    "./src/app/models/usuario.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var sjcl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sjcl */
    "./node_modules/sjcl/sjcl.js");
    /* harmony import */


    var sjcl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sjcl__WEBPACK_IMPORTED_MODULE_7__);

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "hasSession",
        value: function hasSession() {
          var s = localStorage.getItem('user');

          if (s) {
            return true;
          }

          return false;
        }
      }, {
        key: "updateUser",
        value: function updateUser(u) {
          this.currentUserSubject.next(u);
          localStorage.setItem('user', sjcl__WEBPACK_IMPORTED_MODULE_7__["encrypt"](src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].EncryptPassword, JSON.stringify(u)));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('user');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "clearUser",
        value: function clearUser() {
          localStorage.clear();
        }
      }, {
        key: "login",
        value: function login(model) {
          var _this23 = this;

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].URLS.API_URL + '/painel/ws/users.php?auth=AKur0On8iWjP2OmasopsZA&user=' + model.login + '&password=' + model.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            _this23.usuario = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
            var item = user[0];

            if (item) {
              _this23.usuario.app_id = item.app_id;
              _this23.usuario.user_bio = item.user_bio;
              _this23.usuario.user_cell = item.user_cell;
              _this23.usuario.user_cnpj = item.user_cnpj;
              _this23.usuario.user_cpf = item.user_cpf;
              _this23.usuario.user_email = item.user_email;
              _this23.usuario.user_facebook = item.user_facebook;
              _this23.usuario.user_id = +item.user_id;
              _this23.usuario.user_ig = item.user_ig;
              _this23.usuario.user_lastname = item.user_lastname;
              _this23.usuario.user_lastupdate = item.user_lastupdate;
              _this23.usuario.user_level = +item.user_level;
              _this23.usuario.user_login = item.user_login;
              _this23.usuario.user_logo = item.user_logo;
              _this23.usuario.user_name = item.user_name;
              _this23.usuario.user_newpass = item.user_newpass;
              _this23.usuario.user_password = item.user_password;
              _this23.usuario.user_registration = item.user_registration;
              _this23.usuario.user_stats = item.user_stats;
              _this23.usuario.user_telephone = item.user_telephone;
              _this23.usuario.user_thumb = item.user_thumb;
              _this23.usuario.user_twitter = item.user_twitter;
              _this23.usuario.user_type = item.user_type;

              _this23.currentUserSubject.next(_this23.usuario);

              localStorage.setItem('user', sjcl__WEBPACK_IMPORTED_MODULE_7__["encrypt"](src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].EncryptPassword, JSON.stringify(user)));
            }

            return _this23.usuario;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        } // login(model): Observable<any> {
        //     const httpOptions = {
        //         headers: new HttpHeaders({
        //             'Content-Type': 'application/json',
        //         }),
        //     };
        //     return this.http.get(environment.URLS.API_URL + '/painel/ws/users.php?auth=AKur0On8iWjP2OmasopsZA&user=' + model.login + '&password=' + model.password).pipe(
        //         retry(2),
        //         catchError(this.handleError)
        //       );
        // }

      }, {
        key: "EsqueceuSenha",
        value: function EsqueceuSenha(email) {
          // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json',
          //         "Authorization": "Basic YWRtaW46YWRtaW4=",
          //         "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0"
          //     }),
          // };
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8'); // return this.http.get(environment.URLS.API_URL + '/painel/mail/forget.php?auth=AKur0On8iWjP2OmasopsZA&mail=' + model.email,httpOptions).pipe(catchError(this.handleError.bind(this)));

          return this.http.get('https://timesolucoes.tec.br/ws/mail/forget.php?mail=' + email, {
            headers: headers,
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "TracarLogin",
        value: function TracarLogin() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8');
          return this.http.get('https://horadolixo.ml/gps/?token=f9IPMcP3j9l8OpruhpjrNK8xHRHrCaum', {
            headers: headers,
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "handleError",
        value: function handleError(errorResponse) {
          //var myJSON = JSON.stringify(errorResponse);
          //alert("ERRO");
          // alert(errorResponse.ToString());
          //alert(myJSON);
          if (errorResponse.error instanceof ErrorEvent) {
            // alert(errorResponse.error.message);
            console.log('Erro no lado do cliente :', errorResponse.error.message);
          } else {
            //  alert(errorResponse);
            console.log('Erro no lado do servidor :', errorResponse);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('H� um problema com o servi�o. Somos notificados e estamos trabalhando nele. Tente novamente mais tarde.');
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }, {
        key: "currentUserValueDecrypt",
        get: function get() {
          try {
            return JSON.parse(sjcl__WEBPACK_IMPORTED_MODULE_7__["decrypt"](src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].EncryptPassword, localStorage.getItem('user')));
          } catch (e) {
            return null;
          }
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/usuario/usuario.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/usuario/usuario.service.ts ***!
    \*****************************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppServicesUsuarioUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UsuarioService = /*#__PURE__*/function () {
      function UsuarioService(httpClient) {
        _classCallCheck(this, UsuarioService);

        this.httpClient = httpClient;
      }

      _createClass(UsuarioService, [{
        key: "Cadastrar",
        value: function Cadastrar(model) {
          if (model == null) {
            model = {};
          } // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //         // "Authorization": "Basic YWRtaW46YWRtaW4=",
          //         // "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0"
          //         //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")
          //     }), 
          // };
          // console.log("https://horadolixo.ml/_ws/createUsers.php?auth=AKur0On8iWjP2OmasopsZA&user_name="
          // + model.user_name 
          // + '&user_telephone=' + model.user_telephone
          // + '&user_email=' + model.user_email 
          // + '&user_password=' + model.user_password 
          // + '&user_registration=' + model.user_registration);


          return this.httpClient.get('https://horadolixo.ml/_ws/createUsers.php?auth=AKur0On8iWjP2OmasopsZA&user_name=' + model.user_name + '&user_telephone=' + model.user_telephone + '&user_email=' + model.user_email + '&user_password=' + model.user_password + '&user_registration=' + model.user_registration, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "CadastrarEndereco",
        value: function CadastrarEndereco(model) {
          if (model == null) {
            model = {};
          } // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //     }),
          // };
          //{ responseType: 'text'}


          return this.httpClient.get('https://horadolixo.ml/_ws/createAddress.php?auth=AKur0On8iWjP2OmasopsZA&user_id=' + model.user_id + '&addr_zipcode=' + model.addr_zipcode + '&addr_name=' + model.addr_name + '&addr_street=' + model.addr_street + '&addr_number=' + model.addr_number + '&addr_district=' + model.addr_district + '&addr_city=' + model.addr_city + '&addr_state=' + model.addr_state + '&addr_lat=' + model.addr_lat + '&addr_long=' + model.addr_long, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "ConsultarCEP",
        value: function ConsultarCEP(cep) {
          // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //     }),
          // };
          return this.httpClient.get("https://viacep.com.br/ws/".concat(cep, "/json/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "ListarEndereco",
        value: function ListarEndereco(id) {
          // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //         // "Authorization": "Basic YWRtaW46YWRtaW4=",
          //         // "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0"
          //         //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")
          //     }),
          // };
          return this.httpClient.get('https://horadolixo.ml/_ws/showAddress.php?auth=AKur0On8iWjP2OmasopsZA&user_id=' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "ExcluirEndereco",
        value: function ExcluirEndereco(id) {
          // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //         // "Authorization": "Basic YWRtaW46YWRtaW4=",
          //         // "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0"
          //         //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")
          //     }),
          // };
          return this.httpClient.get('https://horadolixo.ml/_ws/deleteAddress.php?auth=AKur0On8iWjP2OmasopsZA&addr_id=' + id, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "ListarNotificacao",
        value: function ListarNotificacao(id) {
          // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //         // "Authorization": "Basic YWRtaW46YWRtaW4=",
          //         // "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0"
          //         //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")
          //     }),
          // };
          return this.httpClient.get('https://horadolixo.ml/_ws/showPush.php?auth=AKur0On8iWjP2OmasopsZA&user_id=' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "ExcluirNotificacao",
        value: function ExcluirNotificacao(id) {
          // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //         // "Authorization": "Basic YWRtaW46YWRtaW4=",
          //         // "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0"
          //         //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")
          //     }),
          // };
          return this.httpClient.get('https://horadolixo.ml/_ws/deletePush.php?auth=AKur0On8iWjP2OmasopsZA&push_id=' + id, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "ListarHistorico",
        value: function ListarHistorico(id) {
          // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //         // "Authorization": "Basic YWRtaW46YWRtaW4=",
          //         // "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0"
          //         //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")
          //     }),
          // };
          return this.httpClient.get('https://horadolixo.ml/_ws/showHistory.php?auth=AKur0On8iWjP2OmasopsZA&user_id=' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "ExcluirHistorico",
        value: function ExcluirHistorico(id) {
          // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //         // "Authorization": "Basic YWRtaW46YWRtaW4=",
          //         // "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0"
          //         //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")
          //     }),
          // };
          return this.httpClient.get('https://horadolixo.ml/_ws/deleteHistory.php?auth=AKur0On8iWjP2OmasopsZA&history_id=' + id, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "ListarConfiguracoes",
        value: function ListarConfiguracoes(id) {
          // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //     }),
          // };
          return this.httpClient.get('https://horadolixo.ml/_ws/showTokens.php?auth=AKur0On8iWjP2OmasopsZA&user_id=' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "AlterarConfiguracoes",
        value: function AlterarConfiguracoes(model) {
          if (model == null) {
            model = {};
          } // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //     }),
          // };


          return this.httpClient.get('https://horadolixo.ml/_ws/editTokens.php?auth=AKur0On8iWjP2OmasopsZA&user_id=' + model.user_id + '&notification_status=' + model.notification_status + '&notification_status_days=' + model.notification_status_days, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "CadastrarToken",
        value: function CadastrarToken(model) {
          if (model == null) {
            model = {};
          } // const httpOptions = {
          //     headers: new HttpHeaders({
          //         'Content-Type': 'application/json'
          //     }),
          // };


          return this.httpClient.get('https://horadolixo.ml/_ws/createTokens.php?auth=AKur0On8iWjP2OmasopsZA&app_id=' + model.app_id + '&user_id=' + model.user_id + '&token_value=' + model.token_value + '&notification_status=' + model.notification_status + '&notification_status_days=' + model.notification_status_days, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "handleError",
        value: function handleError(errorResponse) {
          if (errorResponse.error instanceof ErrorEvent) {
            console.log('Client Side Error :', errorResponse.error.message);
          } else {
            console.log('Server Side Error :', errorResponse);
          } // return an observable with a meaningful error message to the end user


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('There is a problem with the service. We are notified & working on it. Please try again later.');
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsuarioService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      ambiente: "homologação",
      URLS: {
        API_URL: "https://horadolixo.ml"
      },
      EncryptPassword: "HORADOLIXOX2X2",
      TimeSession: 1500
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Lucas\Documents\Projetos\hora-do-lixo\app2\app2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map