$('.delete').click(function (e) { 
    e.preventDefault();
    /* alert('borrando'); */
    $(this).closest('.producto').remove();
});

/* $('delete').closest('.producto').remove(); */