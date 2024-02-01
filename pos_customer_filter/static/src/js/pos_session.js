odoo.define('pos_customer_filter.PosSession', function(require) {
    'use strict';

   var {PosGlobalState} = require('point_of_sale.models');
   const Registries = require('point_of_sale.Registries');
   const ExtendedPosGlobalState = (PosGlobalState) => class ExtendedPosGlobalState extends PosGlobalState {
     async _processData(loadedData) {
        await super._processData(...arguments);
        this.hr_employee = loadedData['hr.employee'];
        this.partners = loadedData['res.partner'];
     }
   }
   Registries.Model.extend(PosGlobalState,ExtendedPosGlobalState)
   });