    //variáveis para obter o inicio e o fim do scroll
        var startY, endY;
        //funcao chamada quando clicamos, chanda apartir do body
         document.body.ontouchstart= function(){ 
                startY = this.scrollTop; 
         }
         
        //funcao chamada quando fazemos o scroll do nosso elemento
        var menu = document.getElementById("menu1"); 
        document.body.onscroll = function(){
               var move  = "none";
                 endY = document.body.scrollTop;
                 //verificando quando as variáveis sao maior e menor, assim definir se está subindo ou descendo
               if( startY > endY) move = "up";
               else if( startY < endY)move = "down";
               if(move == "up") {$("#menu1").fadeIn("1000"); if(list_menuShow )$('#menu').fadeIn("1000");  }
               else if(move == "down" ) { $('#menu1').fadeOut("1000");  $('#menu').fadeOut("1000"); if($("#menu").is(":visible"))list_menuShow = true; }
           
        }
        //show, hide menu
        // var para mostrar os botoes do menu quanto estavam abertos
        var list_menuShow  = false;
        $("#menu1").click(function(){ 
               $('#menu').slideToggle("1000"); 
               list_menuShow = false;
        });
        
        //cam button clicado
        $("#cam").click( function(){
	           //Suas fuuncões aqui
	            
        });
        //sobre button clicado
        $("#about").click( function(){
	           //Suas fuuncões aqui
        });
        
         //Vib button clicado
        $("#vib").click( function(){
	           //Suas fuuncões aqui
        });
