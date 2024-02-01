odoo.define('pos_customer_filter.ProductScreen', function(require) {
    'use strict';

    const ProductScreen = require('point_of_sale.ProductScreen');
    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');
    const { onWillUpdateProps } = owl;

    const ExtendProductScreen = (ProductScreen) =>
        class extends ProductScreen {
            setup() {
                super.setup();
            }

            allowed_cashier(){
                const cashier = this.env.pos.get_cashier();
                return cashier && cashier.pos_sale_permission !== undefined ? cashier.pos_sale_permission : false;
            }


        }
        Registries.Component.extend(ProductScreen, ExtendProductScreen);
        return ExtendProductScreen;

});