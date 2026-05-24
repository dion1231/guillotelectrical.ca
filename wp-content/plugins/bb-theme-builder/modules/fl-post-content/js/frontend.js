(function($) {
	$(function() {

		// FitVids
		if ( 'undefined' !== typeof $.fn.fitVids ) {
			$('.fl-module-fl-post-content').fitVids( {
				ignore: '.wp-block-embed *'
			} );
		}

	});
})(jQuery);
