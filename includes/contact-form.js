(function ($) {
"use strict";

	$.fn.photologoContactForm = function( ) {
		return this.each(function() {

			var $form_wrapper 	= $(this),
				$form 			= $(this).find('form');


			$.validate({
				form: $form,
				errorMessageClass: "error",
				scrollToTopOnError: false,
				onSuccess: function(){}
			});

			$form.submit(function(event) {
				// get the form data
				// there are many ways to get this data using jQuery (you can use the class or id also)

				var formData = {
					name                : $form.find('input[name="name"]').val(),
					email               : $form.find('input[name="email"]').val(),
					subject             : $form.find('input[name="tracking_code"]').val() || '000000',
					message             : $form.find('textarea[name="question"]').val()
				};

				$form.addClass('processing');
				$form.find('input[type="submit"]').attr('disabled', 'disabled');
				$form.find('.form-submit-error').fadeOut();

				// process the form
				$.ajax({
					type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
					url         : myAjax.apibaseurl + '/contact/', // the url where we want to POST
					data        : formData, // our data object
					dataType    : 'json', // what type of data do we expect back from the server
					encode      : true,
					success     : function(response) {
						$form.removeClass('processing');
						$form.find('input[type="submit"]').removeAttr('disabled');
						window.location.href = $form.find('input[name="redirection_url"]').val();
					},
					error 		: function(jqXHR, textStatus, errorThrown) {
						if (textStatus == 'timeout') {
							$form.find('.form-submit-error').html("Connection timed out! Please try again.");
						} else {
							$form.find('.form-submit-error').html("There is an error occurred while submitting form, please try again. (Status Code: " + jqXHR.status + ", ErrorThrown: " + errorThrown + ")");
						}
						$form.removeClass('processing');
						$form.find('input[type="submit"]').removeAttr('disabled');
						$form.find('.form-submit-error').fadeIn();
					}
				});

				// stop the form from submitting the normal way and refreshing the page
				event.preventDefault();
				return false;
			});

			$form.find('.toggle-open').click(function() {
				$form_wrapper.toggleClass('opened');
			});
		});
	};

	$(document).ready(function() {
		$('.photologo-contact-form-wrapper').photologoContactForm();
	});

}(jQuery));
