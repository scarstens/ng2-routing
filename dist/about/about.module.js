"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var about_component_1 = require('./about.component');
var about_section_component_1 = require('./about-section.component');
var about_user_component_1 = require('./about-user.component');
var user_serivce_1 = require('../shared/services/user.serivce');
var about_resolve_service_1 = require('./about-resolve.service');
var about_routing_1 = require('./about.routing');
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [
                about_routing_1.AboutRouting,
                common_1.CommonModule
            ],
            exports: [],
            declarations: [
                about_component_1.AboutComponent,
                about_section_component_1.AboutSectionComponent,
                about_user_component_1.AboutUserComponent,
            ],
            providers: [
                user_serivce_1.UserService,
                about_resolve_service_1.AboutUsersResolve
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;
//# sourceMappingURL=about.module.js.map