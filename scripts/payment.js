(function (window) {
    'use strict';

    var PAYMENT_SELECTOR = '[data-payment="form"]';

    var App = window.App;
    console.log(FormHandler);
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(PAYMENT_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        console.log('Setting submit handler for form')
    });

}) (window);