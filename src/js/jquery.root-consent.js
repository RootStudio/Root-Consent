import {rootConsent} from './root-consent';

function init ($) {
    $.fn.rootConsent = function (options) {
        return this.each(function () {
            var instanceOptions;

            if (!$.data(this, 'rootConsent')) {
                instanceOptions = $.extend({}, options, $(this).data());
                $.data(this, 'rootConsent', rootConsent(this, instanceOptions));
            }
        });
    };
};

if (typeof (jQuery) !== 'undefined') {
    init(jQuery);
}
