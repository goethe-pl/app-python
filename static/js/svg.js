$('#process').on('click', function () {
    updateSVG();
});

// $(document).ready(function () {
//     updateSVG();
// });

function updateSVG() {
    var sentence = $('#zdanie').val();
    var varr = sentence.split(' ');
    console.log(sentence, varr);
    $('#sentence').val(varr);
    $('#sentence').amsifySuggestags();

    $.ajax({
        url: "/svg/filename/pl/" + sentence
    }).done(function (data) {
        console.log(data);
        $('#svg').attr('src', data);

        // alert('done');
        // $(this).addClass("done");
    });
}
