from odoo import models


class PosSession(models.Model):
    _inherit = "pos.session"

    def _loader_params_hr_employee(self):
        result = super()._loader_params_hr_employee()
        result['search_params']['fields'].extend(['pos_sale_permission'])
        return result

    def _loader_params_res_partner(self):
        result = super()._loader_params_res_partner()
        result['search_params']['fields'].extend(['cust_type'])
        return result