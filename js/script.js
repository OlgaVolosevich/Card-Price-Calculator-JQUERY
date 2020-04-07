$(document).ready(function (){
    $('select').change(function(){
        $selectedEdition = $('select#card_edition').val();
        $selectedPaper = $('select#card_paper').val();
        $selectedColor = $('select#card_color').val();
        $colorFormat = $('select#card_color option:selected').attr('data-color');
        $('.card_images img').hide();
        switch($colorFormat) {
            case '1':
                $('.card_images img#card_1_0').show(); 
                break;
            case '2':
                $('.card_images img#card_1_1').show(); 
                break;
            case '3':
                $('.card_images img#card_4_0').show(); 
                break;
            case '4':
                $('.card_images img#card_4_1').show(); 
                break;
            case '5':
                $('.card_images img#card_4_4').show(); 
                break;
        }
    })
})