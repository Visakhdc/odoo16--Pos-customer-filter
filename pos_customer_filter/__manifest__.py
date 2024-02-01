{
    'name': 'POS Customer Filter',
    'version': '16.0.1.0.1',
    'summary': 'This Module will help to filter customers in POS',
    'description': """
        Can be filter customers by using customer type. Removing numpad for some users,
    """,
    'category': 'Point of Sale',
    'author': 'Visakh',
    'maintainer': 'Visakh',
    'depends': ['base', 'point_of_sale','hr','pos_hr'],
    'data': [
            'views/res_partner_views.xml',
            'views/hr_employee_views.xml',
        ],
    'assets': {
        'point_of_sale.assets': [
            'pos_customer_filter/static/src/js/*',
            'pos_customer_filter/static/src/xml/*',
            # 'pos_kot_cancel/static/src/css/*',
        ],
    },
    'license': 'AGPL-3',
    'installable': True,
    'application': True,
    'auto_install': False,
}