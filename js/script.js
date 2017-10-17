$(function () {
    var buttonUpDown=0;


    localStorage.clear();
    var height = document.documentElement.clientHeight;
    var str = [
        {img:"1.jpg", name:"toys1", volume:"bla bla bla1", cena:"11usd", top:true, colection:"toys"},
        {img:"2.jpg", name:"toys2", volume:"bla bla bla2", cena:"12usd", top:true, colection:"pillow"},
        {img:"3.jpg", name:"toys3", volume:"bla bla bla3", cena:"13usd", top:true, colection:"pillow"},
        {img:"1.jpg", name:"toys1", volume:"bla bla bla1", cena:"11usd", top:true, colection:"toys"},
        {img:"2.jpg", name:"toys2", volume:"bla bla bla2", cena:"12usd", top:true, colection:"pillow"},
        {img:"3.jpg", name:"toys3", volume:"bla bla bla3", cena:"13usd", top:true, colection:"pillow"}
        ];
    var strtols=JSON.stringify(str);
    localStorage.setItem('toys',strtols);
    var strgetls=localStorage.getItem('toys');
    str=JSON.parse(strgetls);
    // console.log(str);
    addtoys(str);

    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    //toys add block
    function addtoys(str) {
        for(var i=0; i<str.length; i++){
            if(str[i].top==true) {
                var CardBlock = document.createElement('div');
                var CardBlockShowe = document.createElement('div');
                var nametoys = document.createElement('h3');
                var text = document.createElement('p');
                var price = document.createElement('p');
                text.classList.add('TextToys');
                text.innerHTML = str[i].volume;
                price.classList.add('PriceToys');
                price.innerHTML = str[i].cena;
                CardBlock.classList.add('CardBlock');
                CardBlockShowe.classList.add('CardBlockShowe');
                nametoys.classList.add('NameToys');
                nametoys.innerHTML = str[i].name;
                CardBlock.classList.add('ToyssShopDiv');
                CardBlock.style.background = "url('images/" + str[i].img + "') no-repeat";
                CardBlock.style.backgroundSize = "100%";
                $(".shop").append(CardBlock);
                $(".CardBlock").eq(i).append(CardBlockShowe);
                $(".CardBlockShowe").eq(i).append(nametoys);
                $(".CardBlockShowe").eq(i).append(text);
                $(".CardBlockShowe").eq(i).append(price);
            }
        }
    }
    
    // move home img
    $(document).on('scroll',function (event) {
        var proc=-450;
        if($(window).scrollTop()>=0){
            $(".home").css('background-position-y',(proc+$(window).scrollTop())+'px');
        }
    });

    // button ud and down
    $(document).on('scroll',function (event) {
        if(buttonUpDown==0) {
            // console.log($(window).scrollTop());
            if ($(window).scrollTop() > 0 && $(window).scrollTop() < height - 80) {
                $('a[href="#home"]').css('text-decoration', 'underline');
                $('a[href="#toys"]').css('text-decoration', 'none');
            }
            if ($(window).scrollTop() > height - 80 && $(window).scrollTop() < height * 4) {
                $(".upDiv").addClass("upShow");
                $(".downDiv").addClass("downShow");
                if ($(window).scrollTop() > height - 80 && $(window).scrollTop() < height * 2 - 80) {
                    $("#upDiv").attr('href', '#home');
                    $("#downDiv").attr('href', '#abaut');
                    $('a[href="#home"]').css('text-decoration', 'none');
                    $('a[href="#toys"]').css('text-decoration', 'underline');
                    $('a[href="#abaut"]').css('text-decoration', 'none');
                }
                if ($(window).scrollTop() > height * 2 - 80 && $(window).scrollTop() < height * 3 - 80) {
                    $("#upDiv").attr('href', '#toys');
                    $("#downDiv").attr('href', '#contacts');
                    $('a[href="#toys"]').css('text-decoration', 'none');
                    $('a[href="#abaut"]').css('text-decoration', 'underline');
                    $('a[href="#contacts"]').css('text-decoration', 'none');
                }
                if ($(window).scrollTop() > height * 3 - 80) {
                    $("#upDiv").attr('href', '#abaut');
                    $("#downDiv").attr('href', '#endmain');
                    $('a[href="#abaut"]').css('text-decoration', 'none');
                    $('a[href="#contacts"]').css('text-decoration', 'underline');
                    $(".downDiv").removeClass("downShow");
                }
            }
        }
        if($(window).scrollTop()<height-80){
            $(".upDiv").removeClass("upShow");
            $(".downDiv").removeClass("downShow");
        }
    });
    var $page = $('html, body');

    // slowe go
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    // go to shop
    $('.shopIcon, .shoping').on('click',function(){
        var div = document.createElement('div');
        div.classList.add('OpenBackNav');
        $('.head').prepend(div);
        $(".head-li").animate({paddingleft:'0px'},"slow");
        $(".head-ul").animate({left:'-1000'},'slow');
        $(".OpenBackNav").css("z-index","300");
        $(".OpenBackNav").html("<div id='OpenBackNav'></div>");

        //return to home
        $('.OpenBackNav').on('click',function (){
            $(".head-li").animate({paddingleft:'90px'},"slow");
            $(".head-ul").animate({left:'0'},'slow');
            $(".OpenBackNav").remove();
            CloseAllShop();
        });
        OpenAllShop();
        AddContentToShop();
    });
    //fun howe open my shop
    function OpenAllShop() {
        $(".home").animate({
            height:"0px",
            opacity:"0"
            },'slowe');
        $(".abaut").animate({
            height:"0px",
            opacity:"0"
            },'slowe');
        $(".contacts").animate({
            height:"0px",
            opacity:"0"
        },'slowe');
        $("#toys").animate({
            height:"0px",
            opacity:"0"
        },'slowe');
        $("#abaut").animate({
            height:"0px",
            opacity:"0"
        },'slowe');
        $("#contacts").animate({
            height:"0px",
            opacity:"0"
        },'slowe');
        $(".head").css("margin-top","-9px");
        $(".upDiv").removeClass("upShow");
        $(".downDiv").removeClass("downShow");
        buttonUpDown=1;
    }
    //fun howe close my shop
    function CloseAllShop() {
        $(".home").animate({
            height:"88vh",
            opacity:"1"
        },'slowe');
        $(".abaut").animate({
            height:"88vh",
            opacity:"1"
        },'slowe');
        $(".contacts").animate({
            height:"88vh",
            opacity:"1"
        },'slowe');
        $("#toys").animate({
            height:"80px",
            opacity:"1"
        },'slowe');
        $("#abaut").animate({
            height:"80px",
            opacity:"1"
        },'slowe');
        $("#contacts").animate({
            height:"80px",
            opacity:"1"
        },'slowe');
        $(".endfooterP").css("padding","0px");
        $(".head").css("margin-top","0px");
        buttonUpDown=0;
        $(".upDiv").addClass("upShow");
        $(".downDiv").addClass("downShow");
    }
    //Add all shop content
    function AddContentToShop() {
        for(var i=0; i<str.length; i++){
        }
    }
});