function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-row>\r\n      <ion-col>Olá, <font color=\"#4cb050\"><b>{{this.usuario.user_name}}</b></font><br>\r\n             <font size=\"4\"><b>Acompanhe os caminhões</b></font>\r\n    </ion-col>    \r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen [scrollEvents]=\"true\">\r\n  <div #map id=\"map\"></div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/rxjs/_esm2015/internal/observable/dom/WebSocketSubject.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/WebSocketSubject.js ***!
    \********************************************************************************/

  /*! exports provided: WebSocketSubject */

  /***/
  function node_modulesRxjs_esm2015InternalObservableDomWebSocketSubjectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebSocketSubject", function () {
      return WebSocketSubject;
    });
    /* harmony import */


    var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../Subject */
    "./node_modules/rxjs/_esm2015/internal/Subject.js");
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../Subscriber */
    "./node_modules/rxjs/_esm2015/internal/Subscriber.js");
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Observable */
    "./node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Subscription */
    "./node_modules/rxjs/_esm2015/internal/Subscription.js");
    /* harmony import */


    var _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../ReplaySubject */
    "./node_modules/rxjs/_esm2015/internal/ReplaySubject.js");

    var DEFAULT_WEBSOCKET_CONFIG = {
      url: '',
      deserializer: function deserializer(e) {
        return JSON.parse(e.data);
      },
      serializer: function serializer(value) {
        return JSON.stringify(value);
      }
    };
    var WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = 'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';

    var WebSocketSubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP) {
      _inherits(WebSocketSubject, _Subject__WEBPACK_IMP);

      var _super = _createSuper(WebSocketSubject);

      function WebSocketSubject(urlConfigOrSource, destination) {
        var _this;

        _classCallCheck(this, WebSocketSubject);

        _this = _super.call(this);

        if (urlConfigOrSource instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
          _this.destination = destination;
          _this.source = urlConfigOrSource;
        } else {
          var config = _this._config = Object.assign({}, DEFAULT_WEBSOCKET_CONFIG);
          _this._output = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

          if (typeof urlConfigOrSource === 'string') {
            config.url = urlConfigOrSource;
          } else {
            for (var key in urlConfigOrSource) {
              if (urlConfigOrSource.hasOwnProperty(key)) {
                config[key] = urlConfigOrSource[key];
              }
            }
          }

          if (!config.WebSocketCtor && WebSocket) {
            config.WebSocketCtor = WebSocket;
          } else if (!config.WebSocketCtor) {
            throw new Error('no WebSocket constructor can be found');
          }

          _this.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
        }

        return _this;
      }

      _createClass(WebSocketSubject, [{
        key: "lift",
        value: function lift(operator) {
          var sock = new WebSocketSubject(this._config, this.destination);
          sock.operator = operator;
          sock.source = this;
          return sock;
        }
      }, {
        key: "_resetState",
        value: function _resetState() {
          this._socket = null;

          if (!this.source) {
            this.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
          }

          this._output = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }
      }, {
        key: "multiplex",
        value: function multiplex(subMsg, unsubMsg, messageFilter) {
          var self = this;
          return new _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            try {
              self.next(subMsg());
            } catch (err) {
              observer.error(err);
            }

            var subscription = self.subscribe(function (x) {
              try {
                if (messageFilter(x)) {
                  observer.next(x);
                }
              } catch (err) {
                observer.error(err);
              }
            }, function (err) {
              return observer.error(err);
            }, function () {
              return observer.complete();
            });
            return function () {
              try {
                self.next(unsubMsg());
              } catch (err) {
                observer.error(err);
              }

              subscription.unsubscribe();
            };
          });
        }
      }, {
        key: "_connectSocket",
        value: function _connectSocket() {
          var _this2 = this;

          var _this$_config = this._config,
              WebSocketCtor = _this$_config.WebSocketCtor,
              protocol = _this$_config.protocol,
              url = _this$_config.url,
              binaryType = _this$_config.binaryType;
          var observer = this._output;
          var socket = null;

          try {
            socket = protocol ? new WebSocketCtor(url, protocol) : new WebSocketCtor(url);
            this._socket = socket;

            if (binaryType) {
              this._socket.binaryType = binaryType;
            }
          } catch (e) {
            observer.error(e);
            return;
          }

          var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"](function () {
            _this2._socket = null;

            if (socket && socket.readyState === 1) {
              socket.close();
            }
          });

          socket.onopen = function (e) {
            var _socket = _this2._socket;

            if (!_socket) {
              socket.close();

              _this2._resetState();

              return;
            }

            var openObserver = _this2._config.openObserver;

            if (openObserver) {
              openObserver.next(e);
            }

            var queue = _this2.destination;
            _this2.destination = _Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"].create(function (x) {
              if (socket.readyState === 1) {
                try {
                  var serializer = _this2._config.serializer;
                  socket.send(serializer(x));
                } catch (e) {
                  _this2.destination.error(e);
                }
              }
            }, function (e) {
              var closingObserver = _this2._config.closingObserver;

              if (closingObserver) {
                closingObserver.next(undefined);
              }

              if (e && e.code) {
                socket.close(e.code, e.reason);
              } else {
                observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
              }

              _this2._resetState();
            }, function () {
              var closingObserver = _this2._config.closingObserver;

              if (closingObserver) {
                closingObserver.next(undefined);
              }

              socket.close();

              _this2._resetState();
            });

            if (queue && queue instanceof _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]) {
              subscription.add(queue.subscribe(_this2.destination));
            }
          };

          socket.onerror = function (e) {
            _this2._resetState();

            observer.error(e);
          };

          socket.onclose = function (e) {
            _this2._resetState();

            var closeObserver = _this2._config.closeObserver;

            if (closeObserver) {
              closeObserver.next(e);
            }

            if (e.wasClean) {
              observer.complete();
            } else {
              observer.error(e);
            }
          };

          socket.onmessage = function (e) {
            try {
              var deserializer = _this2._config.deserializer;
              observer.next(deserializer(e));
            } catch (err) {
              observer.error(err);
            }
          };
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var _this3 = this;

          var source = this.source;

          if (source) {
            return source.subscribe(subscriber);
          }

          if (!this._socket) {
            this._connectSocket();
          }

          this._output.subscribe(subscriber);

          subscriber.add(function () {
            var _socket = _this3._socket;

            if (_this3._output.observers.length === 0) {
              if (_socket && _socket.readyState === 1) {
                _socket.close();
              }

              _this3._resetState();
            }
          });
          return subscriber;
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          var _socket = this._socket;

          if (_socket && _socket.readyState === 1) {
            _socket.close();
          }

          this._resetState();

          _get(_getPrototypeOf(WebSocketSubject.prototype), "unsubscribe", this).call(this);
        }
      }]);

      return WebSocketSubject;
    }(_Subject__WEBPACK_IMPORTED_MODULE_0__["AnonymousSubject"]); //# sourceMappingURL=WebSocketSubject.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/_esm2015/internal/observable/dom/webSocket.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/rxjs/_esm2015/internal/observable/dom/webSocket.js ***!
    \*************************************************************************/

  /*! exports provided: webSocket */

  /***/
  function node_modulesRxjs_esm2015InternalObservableDomWebSocketJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "webSocket", function () {
      return webSocket;
    });
    /* harmony import */


    var _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./WebSocketSubject */
    "./node_modules/rxjs/_esm2015/internal/observable/dom/WebSocketSubject.js");

    function webSocket(urlConfigOrSource) {
      return new _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__["WebSocketSubject"](urlConfigOrSource);
    } //# sourceMappingURL=webSocket.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/_esm2015/webSocket/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/_esm2015/webSocket/index.js ***!
    \*******************************************************/

  /*! exports provided: webSocket, WebSocketSubject */

  /***/
  function node_modulesRxjs_esm2015WebSocketIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _internal_observable_dom_webSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../internal/observable/dom/webSocket */
    "./node_modules/rxjs/_esm2015/internal/observable/dom/webSocket.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "webSocket", function () {
      return _internal_observable_dom_webSocket__WEBPACK_IMPORTED_MODULE_0__["webSocket"];
    });
    /* harmony import */


    var _internal_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../internal/observable/dom/WebSocketSubject */
    "./node_modules/rxjs/_esm2015/internal/observable/dom/WebSocketSubject.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebSocketSubject", function () {
      return _internal_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_1__["WebSocketSubject"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  height: 100%;\n}\n\nion-menu-button {\n  color: #FFFFFF;\n  --background: #4cb050;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEx1Y2FzXFxEb2N1bWVudHNcXFByb2pldG9zXFxob3JhLWRvLWxpeG9cXGFwcDJcXGlvcy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgaW9uLW1lbnUtYnV0dG9ue1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0Y2IwNTA7XHJcbiAgfSIsIiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICAtLWJhY2tncm91bmQ6ICM0Y2IwNTA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/usuario */
    "./src/app/models/usuario.ts");
    /* harmony import */


    var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth/authentication.service */
    "./src/app/services/auth/authentication.service.ts");
    /* harmony import */


    var _services_caminhao_caminhao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/caminhao/caminhao.service */
    "./src/app/services/caminhao/caminhao.service.ts");
    /* harmony import */


    var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/webSocket */
    "./node_modules/rxjs/_esm2015/webSocket/index.js");
    /* harmony import */


    var _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/usuario/usuario.service */
    "./src/app/services/usuario/usuario.service.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(authenticationService, caminhaoService, usuarioService) {
        _classCallCheck(this, HomePage);

        this.authenticationService = authenticationService;
        this.caminhaoService = caminhaoService;
        this.usuarioService = usuarioService;
        this.caminhoes = [];
        this.icon = {
          //  path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z", //SVG path of awesomefont marker
          path: "M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z",
          fillColor: 'green',
          fillOpacity: 1,
          strokeWeight: 0,
          scale: 0.05,
          anchor: new google.maps.Point(200, 510),
          labelOrigin: new google.maps.Point(205, 190) //position of the label, careful! this is affected by scale

        };
        this.markers = [];
        this.lat = -20.672310;
        this.lng = -43.771140;
        this.coordinates = new google.maps.LatLng(this.lat, this.lng);
        this.mapOptions = {
          center: this.coordinates,
          zoom: 14
        };
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
          this.authenticationService.currentUser.subscribe(function (arg) {
            _this4.usuario = arg;
            console.log(_this4.usuario);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.mapInitializer(); //this.buscarCaminhao();
        }
      }, {
        key: "mapInitializer",
        value: function mapInitializer() {
          this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
          this.listarEnderecoUsuario();
          this.caminhaoStart(); //this.findMe();
        }
      }, {
        key: "caminhaoStart",
        value: function caminhaoStart() {
          var _this5 = this;

          this.caminhaoService.TrackPost().subscribe(function (datapost) {
            console.log("POST");
            console.log(datapost);

            _this5.caminhaoService.BuscarDispositivos(null).subscribe(function (data) {
              _this5.caminhoes = data;
              console.log("caminhoes");
              console.log(data);

              _this5.caminhaoService.Server().subscribe(function (dataServer) {
                console.log("server");
                console.log(dataServer);

                _this5.caminhaoService.Session().subscribe(function (dataSession) {
                  console.log("sessão");
                  console.log(dataSession);
                  var DEFAULT_WEBSOCKET_CONFIG = {
                    url: 'ws://horadolixo.ml:8082/api/socket',
                    deserializer: function deserializer(e) {
                      return JSON.parse(e.data);
                    },
                    serializer: function serializer(value) {
                      return JSON.stringify(value);
                    }
                  };
                  var subject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_5__["webSocket"])(DEFAULT_WEBSOCKET_CONFIG);
                  subject.subscribe(function (msg) {
                    var data = msg;

                    if (data.positions) {
                      // console.log(data);
                      for (var i = 0; i < data.positions.length; i++) {
                        var position = data.positions[i];
                        var marker = _this5.markers[position.deviceId];
                        var color = 'green';

                        var caminhaoItem = _this5.caminhoes.filter(function (c) {
                          return c.id === position.deviceId;
                        });

                        if (caminhaoItem.length > 0) {
                          color = caminhaoItem[0]["attributes"]['web.reportColor'];
                          _this5.icon.fillColor = color;
                        } else {
                          _this5.icon.fillColor = 'green';
                        }

                        var location = new google.maps.LatLng(position.latitude, position.longitude); // console.log(this.markers);

                        if (!marker) {
                          console.log("novo");
                          var m = new google.maps.Marker({
                            position: location,
                            map: _this5.map,
                            title: position.deviceId.toString(),
                            icon: _this5.icon
                          });
                          _this5.markers[position.deviceId] = m;
                        } else {
                          // console.log("atualizou");
                          // let locationAntiga = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
                          marker.setPosition(location); //  marker.setRotation(10,10);
                          //this.getBearingBetweenTwoPoints1(locationAntiga, location)
                          //  console.log(this.getBearingBetweenTwoPoints1(locationAntiga, location));
                        }
                      }
                    }
                  }, function (err) {
                    return console.log(err);
                  }, // Called if at any point WebSocket API signals some kind of error.
                  function () {
                    return console.log('complete');
                  } // Called when connection is closed (for whatever reason).
                  );
                });
              });
            });
          });
        }
      }, {
        key: "getBearingBetweenTwoPoints1",
        value: function getBearingBetweenTwoPoints1(latLng1, latLng2) {
          var lat1 = this.degreesToRadians(latLng1.lat());
          var long1 = this.degreesToRadians(latLng1.lng());
          var lat2 = this.degreesToRadians(latLng2.lat());
          var long2 = this.degreesToRadians(latLng2.lng());
          var dLon = long2 - long1;
          var y = Math.sin(dLon) * Math.cos(lat2);
          var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
          var radiansBearing = Math.atan2(y, x);
          return this.radiansToDegrees(radiansBearing);
        }
      }, {
        key: "degreesToRadians",
        value: function degreesToRadians(degrees) {
          return degrees * Math.PI / 180.0;
        }
      }, {
        key: "radiansToDegrees",
        value: function radiansToDegrees(radians) {
          return radians * 180.0 / Math.PI;
        }
      }, {
        key: "listarEnderecoUsuario",
        value: function listarEnderecoUsuario() {
          var _this6 = this;

          this.usuarioService.ListarEndereco(this.usuario.user_id).subscribe(function (data) {
            for (var index = 0; index < data.length; index++) {
              var element = data[index];
              var location = new google.maps.LatLng(element.addr_lat, element.addr_long);
              new google.maps.Marker({
                position: location,
                map: _this6.map,
                title: "Meu Endereço",
                icon: {
                  url: './assets/imgs/green-dot.png',
                  rotation: 0
                }
              });
            }
          });
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _services_caminhao_caminhao_service__WEBPACK_IMPORTED_MODULE_4__["CaminhaoService"]
      }, {
        type: _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": false
    })], HomePage.prototype, "gmap", void 0);
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  },

  /***/
  "./src/app/services/caminhao/caminhao.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/caminhao/caminhao.service.ts ***!
    \*******************************************************/

  /*! exports provided: CaminhaoService */

  /***/
  function srcAppServicesCaminhaoCaminhaoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaminhaoService", function () {
      return CaminhaoService;
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

    var CaminhaoService = /*#__PURE__*/function () {
      function CaminhaoService(httpClient) {
        _classCallCheck(this, CaminhaoService);

        this.httpClient = httpClient;
      }

      _createClass(CaminhaoService, [{
        key: "BuscarCaminhao",
        value: function BuscarCaminhao(model) {
          if (model == null) {
            model = {};
          }

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              //'Content-Type': 'application/json',
              "Authorization": "Basic YWRtaW46YWRtaW4=",
              "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0"
            })
          };
          return this.httpClient.get('http://horadolixo.ml:8082/api/devices', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "BuscarDispositivos",
        value: function BuscarDispositivos(model) {
          if (model == null) {
            model = {};
          }

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              //'Content-Type': 'application/json',
              // 'Authorization': 'Basic ' + btoa('admin' + ':' + 'admin')
              "Authorization": "Basic YWRtaW46YWRtaW4=",
              "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0" //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")

            })
          };
          return this.httpClient.get('http://horadolixo.ml:8082/api/devices', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "BuscarCaminhaoCoordenadas",
        value: function BuscarCaminhaoCoordenadas(model) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({//'Content-Type': 'application/json',
              // 'Authorization': 'Basic ' + btoa('admin' + ':' + 'admin')
              //"Authorization": "Basic YWRtaW46YWRtaW4=",
              //"Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0"
              //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")
            })
          }; //return this.httpClient.get('http://horadolixo.ml/painel/ws/positions.php?auth=AKur0On8iWjP2OmasopsZA&deviceid=17&startDate=2020-05-05&startTime=00:00:00&endDate=2020-05-05&endTime=23:59:59',httpOptions).pipe(catchError(this.handleError.bind(this)));
          // console.log('http://horadolixo.ml/painel/ws/positions.php?auth=AKur0On8iWjP2OmasopsZA&deviceid=' + model.deviceId +'&startDate=' + model.dataInicio + '&startTime=00:00:00&endDate=' +  model.dataFim + '&endTime=23:59:59');

          console.log('http://horadolixo.ml/painel/ws/positions.php?auth=AKur0On8iWjP2OmasopsZA&deviceid=' + model.deviceId + '&startDate=' + model.dataInicio + '&startTime=' + model.timeIni + '&endDate=' + model.dataFim + '&endTime=' + model.timeFim);
          return this.httpClient.get('http://horadolixo.ml/painel/ws/positions.php?auth=AKur0On8iWjP2OmasopsZA&deviceid=' + model.deviceId + '&startDate=' + model.dataInicio + '&startTime=' + model.timeIni + '&endDate=' + model.dataFim + '&endTime=' + model.timeFim, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "Cadastrar",
        value: function Cadastrar(model) {
          if (model == null) {
            model = {};
          }

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              "Authorization": "Basic YWRtaW46YWRtaW4=",
              "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0" //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")

            })
          };
          return this.httpClient.post('http://horadolixo.ml:8082/api/devices', model, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "Deletar",
        value: function Deletar(id) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              "Authorization": "Basic YWRtaW46YWRtaW4=",
              "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0" //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")

            })
          };
          return this.httpClient["delete"]('http://horadolixo.ml:8082/api/devices/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "Editar",
        value: function Editar(model) {
          if (model == null) {
            model = {};
          }

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              "Authorization": "Basic YWRtaW46YWRtaW4=",
              "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0" //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")

            })
          };
          return this.httpClient.put('http://horadolixo.ml:8082/api/devices/' + model.id, model, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "TrackPost",
        value: function TrackPost() {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              "content-type": "application/x-www-form-urlencoded"
            }),
            withCredentials: true
          };
          var body = 'email=admin&password=admin';
          return this.httpClient.post('http://horadolixo.ml:8082/api/session', body, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "TrackGet",
        value: function TrackGet() {
          return this.httpClient.get('http://horadolixo.ml:8082/api/session').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "Server",
        value: function Server() {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              //'Content-Type': 'application/json',
              // 'Authorization': 'Basic ' + btoa('admin' + ':' + 'admin')
              "Authorization": "Basic YWRtaW46YWRtaW4=",
              "Cookie": "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0" //.addHeader("Cookie", "JSESSIONID=node01wqhgixln03l91w82qe2gb3rac108.node0")

            })
          };
          return this.httpClient.get('http://horadolixo.ml:8082/api/server', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "Session",
        value: function Session() {
          // const header = new Headers();
          // header.append('Content-Type', 'application/x-www-form-urlencoded');
          var body = 'email=admin&password=admin';
          return this.httpClient.post('http://horadolixo.ml:8082/api/session', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
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

      return CaminhaoService;
    }();

    CaminhaoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CaminhaoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CaminhaoService);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map