$(document).on('ready', function() {
/*	var resultsTemplateSource = $('#results').html();
	var resultsTemplate = Handlebars.compile(resultsTemplateSource);*/

	$(document).on('submit', '#search-form', function(e) {
		e.preventDefault();
		$.get('/search', { searchTerm: $('input[name="searchTerm"]').val() }, 
			function(answer) {
			$('.results').empty();
			var jadeEl = $('.results');
			jade.render(jadeEl.get(0), 'search', {results: answer});
		})
	});

});