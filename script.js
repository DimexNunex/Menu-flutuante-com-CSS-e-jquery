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
               //$('#menu').slideToggle("1000");
               var btmenu = $(".btmenu"), _timer, _index;
               //animarion to hide
                  
                      if($("#menu").is(":visible")){ 
                          _index = btmenu.length-1;
                          _timer = setInterval(function(){ 
                             if(_index > -1){
                                btmenu[_index].style.display = "none";
                                
                                if(_index == 0){
                                       clearInterval(_timer);
                                       $("#menu").hide();
                                }
                           }
                           _index--;
                          },50);
                       }
                        //animation to show
                       else{
                           _index = 0;
                       _timer = setInterval(function(){
                           
                           $("#menu").show();
                           if(_index <  btmenu.length  ){
                                btmenu[_index].style.display = "block";
                              
                                if(_index == btmenu.length-1){
                                       clearInterval(_timer);
                                       
                                }
                           }
                           _index++;
                          },50);
                       }
                //list menu var
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
