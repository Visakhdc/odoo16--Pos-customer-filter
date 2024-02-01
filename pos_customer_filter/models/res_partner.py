from odoo import models, fields


class ResPartner(models.Model):
    _inherit = 'res.partner'

    cust_type = fields.Selection([('potential', 'Potential'), ('loyal', 'Loyal'),('impulse','Impulse')], string="Customer Type")