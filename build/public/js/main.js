$(function(){
    var pdfUrl = window.location.pathname.split("").reverse().join("").split('.', 2).pop().split("").reverse().concat(".pdf").join("");
    var pdfLink = '<a href="'+pdfUrl+'">View as PDF</a>';

    $(".pdf-link").append(pdfLink);

    $('p').each(function(i, el){
        el.innerHTML = $(el).html().replace(/\[\s]/g, "<input type='checkbox' />").replace(/\[x]/g, "<input type='checkbox' checked />");
    });


});
