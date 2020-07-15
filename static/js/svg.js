$('#process').on('click', function () {
    updateSVG();
});

$(document).ready(function () {
    var sentence = $('#zdanie').val();
    var varr = sentence.split(' ');
    console.log(sentence, varr);
    $('#sentence').val(varr);
    $('#sentence').amsifySuggestags();

});

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
        $('#svg').attr('src', 'svg/' + data);

        // alert('done');
        // $(this).addClass("done");
    });
}


j.obj("json/sentence.json", function (obj, url) {
    console.log(obj, typeof obj, url);
    console.log(obj["q&a"]);

    each(obj["q&a"], function (v, k) {
        var varr = v.split(' ');
        console.log(k, v, varr);
        $('#first').val(varr);
        $('#zdanie').val(k);
        // $('#process').click();
    });
});
