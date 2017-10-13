$(function () {
    localStorage.clear();
    var height = document.documentElement.clientHeight;
    var str = [
        {img:"1.jpg", name:"toys1", volume:"bla bla bla1", cena:"11usd"},
        {img:"2.jpg", name:"toys2", volume:"bla bla bla2", cena:"12usd"},
        {img:"3.jpg", name:"toys3", volume:"bla bla bla3", cena:"13usd"},
        {img:"1.jpg", name:"toys1", volume:"bla bla bla1", cena:"11usd"},
        {img:"2.jpg", name:"toys2", volume:"bla bla bla2", cena:"12usd"},
        {img:"3.jpg", name:"toys3", volume:"bla bla bla3", cena:"13usd"}
        ];
    var strtols=JSON.stringify(str);
    localStorage.setItem('toys',strtols);
    var strgetls=localStorage.getItem('toys');
    str=JSON.parse(strgetls);
    console.log(str);
    addtoys(str);


    // $(".head-a").on('click',function () {
    //     $(this).toggleClass("head-a-click")
    // });
    //

    //toys add block
    function addtoys(str) {
        for(var i=0; i<str.length; i++){
            var CardBlock=document.createElement('div');
            CardBlock.classList.add('CardBlock');
            var div=document.createElement('div');
            var nametoys=document.createElement('h3');
            nametoys.classList.add('NameToys');
            nametoys.innerHTML=str[i].name;
            div.classList.add('ToyssShopDiv');
            div.style.background="url('images/"+str[i].img+"') no-repeat";
            div.style.backgroundSize="100%";
            $(".shop").append(CardBlock);
            $(".CardBlock").eq(i).append(nametoys);
            $(".CardBlock").eq(i).append(div);
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
        // console.log($(window).scrollTop());
        if($(window).scrollTop() > 0 && $(window).scrollTop() < height-80 ) {
            $('a[href="#home"]').css('text-decoration', 'underline');
            $('a[href="#toys"]').css('text-decoration','none');
        }
        if($(window).scrollTop() > height-80 && $(window).scrollTop() < height*4){
            $(".upDiv").addClass("upShow");
            $(".downDiv").addClass("downShow");
            if($(window).scrollTop() > height-80 && $(window).scrollTop() < height*2-80){
                $("#upDiv").attr('href','#home');
                $("#downDiv").attr('href','#abaut');
                $('a[href="#home"]').css('text-decoration', 'none');
                $('a[href="#toys"]').css('text-decoration','underline');
                $('a[href="#abaut"]').css('text-decoration', 'none');
            }
            if($(window).scrollTop() > height*2-80 && $(window).scrollTop() < height*3-80){
                $("#upDiv").attr('href','#toys');
                $("#downDiv").attr('href','#contacts');
                $('a[href="#toys"]').css('text-decoration', 'none');
                $('a[href="#abaut"]').css('text-decoration','underline');
                $('a[href="#contacts"]').css('text-decoration','none');
            }
            if($(window).scrollTop() > height*3-80){
                $("#upDiv").attr('href','#abaut');
                $("#downDiv").attr('href','#endmain');
                $('a[href="#abaut"]').css('text-decoration', 'none');
                $('a[href="#contacts"]').css('text-decoration','underline');
            }
        }
        if($(window).scrollTop()<height-80){
            $(".upDiv").removeClass("upShow");
            $(".downDiv").removeClass("downShow");
        }


    });
});