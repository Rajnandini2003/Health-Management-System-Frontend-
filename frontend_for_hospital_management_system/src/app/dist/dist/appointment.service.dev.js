"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.AppointmentService = void 0;

var core_1 = require("@angular/core");

var AppointmentService =
/** @class */
function () {
  function AppointmentService(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = 'http://localhost:8080/api/v2/appointments';
  }

  AppointmentService.prototype.getAllAppointments = function () {
    return this.httpClient.get("" + this.baseUrl);
  };

  AppointmentService.prototype.createAppointment = function (appointment) {
    return this.httpClient.post("" + this.baseUrl, appointment);
  };

  AppointmentService = __decorate([core_1.Injectable({
    providedIn: 'root'
  })], AppointmentService);
  return AppointmentService;
}();

exports.AppointmentService = AppointmentService;