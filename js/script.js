$(document).ready(function () {
    // IMPRIMINDO TEXTO DINAMICO
    $("input").each(function () {
        $(".digite").keyup(function () {
            $("h1").text($(this).val())
        })
    })
})