var app = angular.module('application', ['ngToast', 'chart.js', 'cfp.loadingBar']);

var myGroups = [];

var getUrlParameter = function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var setBalance = function (user_id_, balance_, callback) {
    /*$.ajax({
        url: 'https://byunow.ru/VKAPI/api.php?q=3&user_id=' + user_id_ + '&balance=' + balance_,
        dataType: "jsonp",
        success: function (data) {
            callback(balance_);
        }
    });*/
    //callback(balance_);
};

var error_mod_ser = function error_mod_ser (error) {
    $('#errore').html(error);
};
