$(document).ready(function(){
    $(".img-thumb").click(function(){
        //!agregamos la capa que indica que thum esta seleccionada
        $(".overaly").removeClass("tumb-active");
        $(".overaly",this).addClass("tumb-active");
 
        //!hacemos un vector de las imagenes
        var imagenes=["url(images/image-product-1.jpg)","url(images/image-product-2.jpg)","url(images/image-product-3.jpg)","url(images/image-product-4.jpg)"];
        //!identificamos que imagene esta selccionando
        var idclick=$("img",this).attr("id");
        //cambiamos la imagen principal
         $(".img-principal").css("background-image", imagenes[idclick-1]);
     
    });
    //! hover sobre las miniaturas
   
    $(".img-thumb").hover(function(){
        $(".overaly",this).addClass("tumb-active2");    
    },function(){
        $(".overaly",this).removeClass("tumb-active2");
    });
   //!funcionamiento del incremento y decremento en la cantidad de producto
   $("#btn-minus").click(function(){
       var numero=parseInt($("#label-count").text(),10);
       if(numero!=1){
           
        $("#label-count").text(numero-1);

       }
       else{}
   });
   $("#btn-plus").click(function(){
    var numero=parseInt($("#label-count").text(),10);
    $("#label-count").text(numero+1);
    });

    $("#carrito-icon").click(function(){
        $(".drop-carrito").toggleClass("mostrar-carrito");
    })

    //!agregar y quitar del carrito
    $("#btn-add").click(function(){
        var cantidad=parseInt($("#label-count").text(),10) ;
        $("#indicador").text(cantidad);
        $("#cantidad-cart").text(cantidad);
        var total=cantidad*125;
        console.log(total.toFixed(2));
        $(".sub-total").text(total.toFixed(2));

        $(".carrito-vacio").addClass("ocultar-product-cart");
        $(".contenido-carrito").removeClass("ocultar-product-cart");
        $("#indicador").removeClass("ocultar-product-cart");
    });

    $("#borrar-p").click(function(){
        $(".carrito-vacio").removeClass("ocultar-product-cart");
        $(".contenido-carrito").addClass("ocultar-product-cart");
        $("#indicador").addClass("ocultar-product-cart");
    });

    $(".content-full").click(function(){
       var clases= $(".drop-carrito")[0].classList;
       for (var i = 0; i < clases.length; i++) {
        if (clases[i] === 'mostrar-carrito') {
            $(".drop-carrito").removeClass("mostrar-carrito");
        }
        else{

        }
    }
    });

//!Carrusel responsive movil
   $("#prev-destok").click(function(){
    var imagenes=["url(images/image-product-1.jpg)","url(images/image-product-2.jpg)","url(images/image-product-3.jpg)","url(images/image-product-4.jpg)"];
    var idactive= $(".tumb-active")[0].id;
    if(idactive!="des1"){
        var x=parseInt(idactive[idactive.length-1],10);
        
        $("#"+idactive).removeClass("tumb-active");
        var newid="img"+(x-1);
        $("#"+newid).addClass("tumb-active");
        $(".img-principal").css("background-image", imagenes[x-2]);

    }
    else{
        
    }
   });

   $("#next-destok").click(function(){
    var imagenes=["url(images/image-product-1.jpg)","url(images/image-product-2.jpg)","url(images/image-product-3.jpg)","url(images/image-product-4.jpg)"];

    var idactive= $(".tumb-active")[0].id;
    if(idactive!="des4"){
        var x=parseInt(idactive[idactive.length-1],10);
        $("#"+idactive).removeClass("tumb-active");
        var newid="img"+(x+1);
        $("#"+newid).addClass("tumb-active");
        $(".img-principal").css("background-image", imagenes[x]);
    }
    else{
        
    }
    });
//!carrusel del lightBox
    $("#arrow-prev2").click(function(){
    var imagenes=["url(images/image-product-1.jpg)","url(images/image-product-2.jpg)","url(images/image-product-3.jpg)","url(images/image-product-4.jpg)"];
    var idactive= $(".tumb-active")[0].id;
    if(idactive!="img1"){
        var x=parseInt(idactive[idactive.length-1],10);
        
        $("#"+idactive).removeClass("tumb-active");
        var newid="img"+(x-1);
        $("#"+newid).addClass("tumb-active");
        $(".lb-img-principal").css("background-image", imagenes[x-2]);

    }
    else{
        
    }
    });

    $("#arrow-next2").click(function(){
    var imagenes=["url(images/image-product-1.jpg)","url(images/image-product-2.jpg)","url(images/image-product-3.jpg)","url(images/image-product-4.jpg)"];

    var idactive= $(".tumb-active")[0].id;
    if(idactive!="img4"){
        var x=parseInt(idactive[idactive.length-1],10);
        $("#"+idactive).removeClass("tumb-active");
        var newid="img"+(x+1);
        $("#"+newid).addClass("tumb-active");
        $(".lb-img-principal").css("background-image", imagenes[x]);
    }
    else{
        
    }
    });
    //! seleccion manual 

    $(".img-thumb-lb").click(function(){
    var imageneslb=["url(images/image-product-1.jpg)","url(images/image-product-2.jpg)","url(images/image-product-3.jpg)","url(images/image-product-4.jpg)"];

    $(".overaly-lb").removeClass("tumb-active");
    $(".overaly-lb",this).addClass("tumb-active");
    var idclicklb=$("img",this).attr("id")[0];            
    $(".lb-img-principal").css("background-image", imageneslb[idclicklb-1]);

    });
    $(".img-thumb-lb").hover(function(){
    $(".overaly-lb",this).addClass("tumb-active2");    
},function(){
    $(".overaly-lb",this).removeClass("tumb-active2");
});
    //! Abrir y cerrar el lightBox
    $(".img-principal").click(function(){
        if($(window).width()>767){
            $("#lightBox").toggleClass("ocultar-lb");
            $(".lb-img-principal").css('background-image',$(".img-principal").css('background-image'));
        }else{}
    
    });
    $(".cerrar img").click(function(){
    $("#lightBox").toggleClass("ocultar-lb");
    });
    
    
    $("#menu-icon-movil").click(function(){
        $("#menu-movil-aside").toggleClass("mostrar-aside");
    });
    $("#cerrar-aside").click(function(){
        $("#menu-movil-aside").toggleClass("mostrar-aside");
    });
})