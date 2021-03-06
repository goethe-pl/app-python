var oldVal = "";
$("#zdanie").on("change keyup paste", function () {
    var currentVal = $(this).val();
    if (currentVal == oldVal) {
        return; //check to prevent multiple simultaneous triggers
    }

    oldVal = currentVal;
    //action to be performed on textarea changed
    // alert("changed!");
    updateSVG();
});

setTimeout(updateSVG, 350);

function updateSVG() {
    var language = $('#language').val();
    var sentence = $('#zdanie').val();
    var varr = sentence.split(' ');
    console.log(sentence, varr);
    $('#sentence').val(varr);
    // $('#sentence').amsifySuggestags();

    $.ajax({
        url: "/svg/filename/" + language + "/" + sentence
    }).done(function (data) {
        console.log(data);
        $('#svg').attr('src', '/public/svg/' + data);
        // alert('done');
        // $(this).addClass("done");
    });

    $.ajax({
        url: "/semantic/" + language + "/" + sentence
    }).done(function (data) {
        console.log(data);

        $('#sentence').amsifySuggestags({
            suggestions: data.words,
            classes: data.types,
            whiteList: false,
            afterAdd: function (value) {
                console.info(value);
            },
            afterRemove: function (value) {
                console.info(value);
            },
        });

        // $('#svg').attr('src', '/public/svg/' + data);

        // alert('done');
        // $(this).addClass("done");
    });
}


jl.obj("json/sentence.json", function (obj, url) {
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
