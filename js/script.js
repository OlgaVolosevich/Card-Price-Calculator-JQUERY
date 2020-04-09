$(document).ready(function (){

        $('span#final_price').text(getCardPrice());
        $colorFormat = $('select#card_color option:selected').attr('data-color');

        $('select').change(function(){
        $colorFormat = $('select#card_color option:selected').attr('data-color');
        $('span#final_price').text(getCardPrice());
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

    function getCardPrice () {
        $selectedEdition = $('select#card_edition').val();
        $finalEdition = $selectedEdition / 30;
        $paperRatio = $('select#card_paper option:selected').attr('data-paper-ratio');
        $printFile = $('select#card_color option:selected').attr('data-print-file');
        $printStamp = $('select#card_color option:selected').attr('data-stamp');
        $finalPrice = $finalEdition * $paperRatio + parseInt($printFile) + $finalEdition * $printStamp;
        return $finalPrice;
    }
})