import { RootConsent } from './root-consent';

function init ($) {
    $.fn.rootConsent = function (options) {
        return this.each(function () {
            var instanceOptions;

            if (!$.data(this, 'rootConsent')) {
                instanceOptions = $.extend({}, options, $(this).data());
                $.data(this, 'rootConsent', new RootConsent(this, instanceOptions));
            }
        });
    };
};

if (typeof (jQuery) !== 'undefined') {
    init(jQuery);
}
