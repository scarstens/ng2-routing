"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about.component');
var about_section_component_1 = require('./about-section.component');
var about_user_component_1 = require('./about-user.component');
var about_resolve_service_1 = require('./about-resolve.service');
var aboutRoutes = [
    {
        // Lazy Loaded
        path: '',
        component: about_section_component_1.AboutSectionComponent,
        children: [
            {
                path: '',
                component: about_component_1.AboutComponent,
                resolve: {
                    users: about_resolve_service_1.AboutUsersResolve
                }
            },
            {
                path: ':username',
                component: about_user_component_1.AboutUserComponent
            },
        ]
    },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
exports.AboutRouting = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=about.routing.js.map