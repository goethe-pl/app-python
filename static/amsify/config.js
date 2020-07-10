$('input[name="first"]').amsifySuggestags();
// $('input[name="color"]').amsifySuggestags({
// 	suggestions: ['Black', 'White', 'Red', 'Blue', 'Green', 'Orange'],
// 	showAllSuggestions: true
// });
// $('input[name="color2"]').amsifySuggestags({
// 	suggestions: [
// 					{tag: 'Black', value: 1},
// 					{tag: 'White', value: 2},
// 					{tag: 'Red', value: 3},
// 					{tag: 'Blue', value: 4},
// 					{tag: 'Green', value: 5},
// 					{tag: 'Orange', value: 6},
// 				],
// 	whiteList: true
// });
// $('input[name="toAjax"]').amsifySuggestags({
// 	suggestionsAction : {
// 		url : 'jquery-plugins/suggestags/examples/suggestions.php',
// 		beforeSend : function() {
// 			console.info('beforeSend');
// 		},
// 		success: function(data) {
// 			console.info(data);
// 		},
// 		error: function() {
// 			console.info('error');
// 		},
// 		complete: function(data) {
// 			console.info('complete');
// 		}
// 	}
// });
// $('input[name="planets"]').amsifySuggestags({
// 	suggestions: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupitor', 'Uranus', 'Neptune', 'Pluto'],
// 	whiteList: true
// });

$('input[name="sentence"]').amsifySuggestags({
    suggestions: ['Ich', 'bin', 'zu', 'Hause'],
    classes: ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info'],
    whiteList: true,
    afterAdd: function (value) {
        console.info(value);
    },
    afterRemove: function (value) {
        console.info(value);
    },
});
// $('input[name="anything"]').amsifySuggestags({
// 	tagLimit: 5
// });

$('input.amsify-suggestags-input').attr("placeholder", "...");
