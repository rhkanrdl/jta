
$(function(){

    menu();
    coverimage();
    maintab();
    outlink();


    $("section.find .login-type button").on("click", function(){
        
        var check = $(this).attr("id"); 

        $("div.find-box").removeClass("on");
        $("div.find-box."+ check).addClass("on");
    });


    $("section.main-reserv button").on("click", function(){
        
        var check = $(this).attr("data"); 
        $("section.main-reserv button").removeClass("on");
        $(this).addClass("on");
        $("div.search-box").removeClass("on");
        $("div.search-box."+ check).addClass("on");
    });
    
    
    $("section.sub-contents #sub-menu li.on a").on("click", function(e){

        $("nav#sub-menu").toggleClass("active");
        e.preventDefault();

    });

    $(".faqList li h5").on("click", function(){
        $(".faqList li h5").removeClass("on");
        $(this).addClass("on");
    });

    $(".tabs button").on("click", function(){
        var check = $(this).attr("data"); 

        $(".tab").removeClass("on");
        $(".tab."+ check).addClass("on");
    });
    

    $("p.not").on("click", function(){
        $("div.not-text").toggleClass("on");
    });

    $("div.not-text button").on("click", function(){
        $("div.not-text").removeClass("on");
    });


    
    var searchToogle = "";

    $(".itemSearch button.moreCheck").on("click", function(){

        if (searchToogle == "") {


            $(this).addClass("on");
            $(".itemSearch").addClass("on");
            $(".itemSearch div.moreCheck").addClass("on");
    
            $(this).html("검색조건 닫기");

            searchToogle = "a";

        } else {

            
            $(this).removeClass("on");
            $(".itemSearch").removeClass("on");
            $(".itemSearch div.moreCheck").removeClass("on");
    
            $(this).html("검색조건 펼치기");

            searchToogle = "";

        }

    });
    

    $(".itemList dt button").on("click", function(){

        

        if ($(this).hasClass("open")) {

            $(this).removeClass("open");
            $(this).parent().removeClass("on");
            $(this).html("객실더보기");

        } else {
            $(".itemList dt button").removeClass("open");
            $(".itemList dt").removeClass("on");
            $(".itemList dt button").html("객실더보기");

            $(this).addClass("open");
            $(this).parent().addClass("on");
            $(this).html("접기");

        }
    
    });
    

    $(".carItemList dt button").on("click", function(){

        

        if ($(this).hasClass("open")) {

            $(this).removeClass("open");
            $(this).parent().removeClass("on");
            $(this).html("펼쳐보기");

        } else {
            $(".carItemList dt button").removeClass("open");
            $(".carItemList dt").removeClass("on");
            $(".carItemList dt button").html("펼쳐보기");

            $(this).addClass("open");
            $(this).parent().addClass("on");
            $(this).html("접기");

        }
    
    });
    

    $(".itemList .links button").on("click", function(){
        $("div.popup.qna").addClass("on");
    });

    $(".product-detail div.info strong button").on("click", function(){
        $("div.popup.insurance").addClass("on");
    });

    $("div.popup button.close").on("click", function(){
        $("div.popup").removeClass("on");
    });
    


    $(window).on("resize", function(){
        $("nav#main-menu h3 a").unbind();
        menu();
        coverimage();
    });



    $(".reservTable").on("scroll", function(){

        if (0 < $(this).scrollLeft()) {
            $(this).addClass("shadow");
        } else {
            
            $(this).removeClass("shadow");
        }
    });


    $(".reservTable button.cancle").on("click", function(){
        $("div.popup").addClass("on");
    });
    

    $(".reservTable button.info").on("click", function(){
        $("div.popBank").addClass("on");
    });

    $("div.popBank .close").on("click", function(){
        $("div.popBank").removeClass("on");
 
    });




    $(".product-detail div.text button").on("click", function () {
        $(".product-detail div.text").toggleClass("on");
    });









});


/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();

$(window).on("resize", function(){
    windowh = $(window).height();
    windowW = $(window).width();
});


/* ----- menu ----- */
function menu() {

    $("button.main-menu").on("click", function () {
        $("nav#main-menu").toggleClass("on");
    });

    $("nav#main-menu button.close").on("click", function () {
        $("nav#main-menu").toggleClass("on");
    });


}

/* ----- cover image ----- */ 
function coverimage() {


    $(".onlineEstimate .item p.image").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $(".product-detail .images p").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

}

/* ----- main tab ----- */ 
function maintab() {

    $(".main-content .news h3").on("click", function(){
        $(".main-content .news h3").removeClass("active");
        $(this).addClass("active");

        $(".main-content .news .tab-data").removeClass("active");
        
        $(".main-content .news ."+ $(this).attr("data") +"").addClass("active");

    });
}

/* ----- outlink ----- */ 
function outlink() {
    $(".agency-open").click(function() {
        console.log("클릭");
        $(this).toggleClass("on");
    });
}


