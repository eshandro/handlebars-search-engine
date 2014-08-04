$(document).on('ready', function() {
	var resultsTemplateSource = $('#results').html();
	var resultsTemplate = Handlebars.compile(resultsTemplateSource);

	$(document).on('submit', '#search-form', function(e) {
		e.preventDefault();
		$.get('/search', { searchTerm: $('input[name="searchTerm"]').val() }, function(answer) {
			$('.results').empty();
			$('.results').append(resultsTemplate({answer: answer}));
		})
	});

});