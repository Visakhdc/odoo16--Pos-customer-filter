odoo.define('pos_customer_filter.PartnerListScreen', function(require) {
    'use strict';

    const PartnerListScreen = require('point_of_sale.PartnerListScreen');
    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');
    const { debounce } = require("@web/core/utils/timing");
    const { onWillUpdateProps } = owl;

    const ExtendPartnerListScreen = (PartnerListScreen) =>
        class extends PartnerListScreen {
            setup() {
            super.setup();
            this.custom_filter = null;
        }

        all(){
            this.custom_filter = null;
            this.render();
        }

        impulse() {
            this.custom_filter = "impulse";
            this.render();
        }
        loyal(){
            this.custom_filter = "loyal";
            this.render();
        }
        potential(){
            this.custom_filter = "potential";
            this.render();
        }

        get partners() {
            let res;
            if (this.state.query && this.state.query.trim() !== '') {
                res = this.env.pos.db.search_partner(this.state.query.trim());
            } else {
                res = this.env.pos.db.get_partners_sorted(1000);
            }
            if(this.custom_filter != null){
                res = res.filter(partner => partner.cust_type === this.custom_filter);
            }
            res.sort(function (a, b) { return (a.name || '').localeCompare(b.name || '') });
            // the selected partner (if any) is displayed at the top of the list
            if (this.state.selectedPartner) {
                let indexOfSelectedPartner = res.findIndex( partner =>
                    partner.id === this.state.selectedPartner.id
                );
                if (indexOfSelectedPartner !== -1) {
                    res.splice(indexOfSelectedPartner, 1);
                }
                res.unshift(this.state.selectedPartner);
            }
            return res
        }


        }
        Registries.Component.extend(PartnerListScreen, ExtendPartnerListScreen);
        return ExtendPartnerListScreen;


});