
from odoo import fields, models
class HrEmployee(models.Model):
    _inherit = 'hr.employee'

    pos_sale_permission = fields.Boolean(string="Restrict Pos Sale Permission")


class HrEmployeePublic(models.Model):
    _inherit = "hr.employee.public"

    pos_sale_permission = fields.Boolean('hr.employee', related="employee_id.pos_sale_permission", store=True)