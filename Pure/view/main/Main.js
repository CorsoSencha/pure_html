Ext.define('Pure.view.main.Main', {
    extend: 'Ext.container.Container',

    /* Marks these are required classes to be to loaded before loading this view */
    requires: [
        'Pure.view.main.MainController',
        'Pure.view.main.MainModel'
    ],

    xtype: 'app-main',
    controller: 'main',

      /* View model of the view */

    viewModel: {
        type: 'main'
    },

    items: [
        {html: '<b>One</b>'},
        {html: '<b>Two</b>'}
    ]
});
