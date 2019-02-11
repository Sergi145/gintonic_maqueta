import './gintonic.scss';

//menu
$(document).ready(main);
var cont=1;
var nav=$("nav");

function main () {
    $('.navbar-toggler').click(function(){
        
        if(cont == 1){
            nav.animate({
                left:'0'
                
            });
            cont=0;
        }
        else {
            cont=1;
            nav.animate({
                left:'-100%'
            });
        }
    })
};