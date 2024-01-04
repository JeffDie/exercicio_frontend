$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const inputTarefa = $('#tarefa-nova').val();
        const novoItem = $(`<li id="tarefa">${inputTarefa}</li>`);    
        
            $(novoItem).appendTo('ul');
            $('#tarefa-nova').val('')
        
    })

    $(document).on('click', 'li', function(){
        $(this).toggleClass('checked');
    })
})