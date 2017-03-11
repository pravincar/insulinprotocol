var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientProvider } from './patient-provider.service';
var PatientComponent = (function () {
    function PatientComponent(pp, route) {
        this.pp = pp;
        this.route = route;
    }
    PatientComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        if (!id)
            return;
        this.pp.getPatient(id).subscribe(function (patient) { });
    };
    return PatientComponent;
}());
PatientComponent = __decorate([
    Component({
        moduleId: module.id,
        template: "\n\t\t<md-toolbar style=\"margin:0 0 10px 0;\" color=\"primary\">\n\t\t\t<span>{{pp.patient.id?pp.patient.name:'New Patient'}}</span>\n\t\t</md-toolbar>\n\t\t<router-outlet></router-outlet>\n\t",
        providers: [PatientProvider]
    }),
    __metadata("design:paramtypes", [PatientProvider, ActivatedRoute])
], PatientComponent);
export { PatientComponent };
//# sourceMappingURL=patient.component.js.map