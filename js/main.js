/************
 * JQUERY
 * created by: Russel Dellosa
 * Jan 12, 2020
 */

$(document).ready(function()
{
    /**** IN-VIEW SECTION *********************/

    /*************** HEADER **************/
    inView("#header-section").on("enter", function(){
        // console.log("Header is in view section");
    })
    .on("exit", function() {
        // console.log("Header is out of view");
    });
    /*************** /HEADER **************/

    /************** ABOUTME ***************/ 
    inView(".aboutHead").on("enter", function() {
        if(!$(".aboutHead").hasClass("viewed")){
            $(".aboutHead").addClass("viewed jackInTheBox");
        }  
    }).on("exit", function(){
        $(".aboutHead").removeClass("jackInTheBox");
    });

    inView(".aboutMe>.card").on("enter", function() {
        if(!$(".aboutMe>.card").hasClass("viewed")) {
            // $(".card-body>table").css("visibility", "hidden");
            $(".aboutMe>.card").css("visibility", "visible").addClass("viewed zoomIn",
            function(){
                if(!$(".card-body>table").hasClass("viewed")){
                    $(".card-body>table").css("visibility","visible").addClass("viewed fadeInUp delay-1s faster",
                    function(){
                        if(!$(".card>img").hasClass("viewed")){
                            $(".card>img").addClass("viewed bounce delay-1s");
                        }
                    });
                }
            });
        }
    }).on("exit", function() {
        $(".aboutMe>.card").removeClass("zoomIn delay-1s");
        $(".card-body>table").removeClass("fadeInUp delay-1s faster");
        $(".card>img").removeClass("bounce delay-1s");
    });

    
    //********** /ABOUTME *****************/

    /**************** ACHIEVEMENTS **************/ 
    inView(".titleAchievements").on("enter", function(){
        if(!$(".titleAchievements").hasClass("viewed")){
            $(".titleAchievements").addClass("viewed jackInTheBox");
        }
    }).on("exit", function(){
        $(".titleAchievements").removeClass("jackInTheBox");
    });
    /**************** /ACHIEVEMENTS **************/ 


    /******* /END OF IN-VIEW SECTION ************************/

    $(".aboutMe").hover(
        function() {
            $(this).addClass("about-active");
        },
        function() {
            $(this).removeClass("about-active")
        }
    );
    /******** /END OF FOR SCROLLING THE PAGE ANIMATION */


    getWindowSize();

    // for resizing the page
    $(window).on("resize", function(){
        getWindowSize();
    });

    function getWindowSize()
    {
        var win = $(window);
        var width = win.width();
        /********************* MOBILE VIEW 320 */
        if(width >= 320 && width <= 425)
        {
            /********** ABOUTME SECTION */
            $(".aboutHead").css("fontSize", "2rem"); //title head
            $(".aboutMe>.card>.card-body").removeClass("p-5 ml-4").addClass("p-3");
            if(width >= 375 && width <= 425){
                $(".card-body>.pinfo").addClass("ml-4");
                $(".card-body>.techskill").addClass("ml-4");
            } else {
                $(".card-body>table").removeClass("ml-4");
            }
            $(".card>.card-img-top").css({
                "width" : "60%",
                "margin" : "0 auto"
            });
            /********** /END OF ABOUT ME SECTION */
        }
        if(width >= 426 && width <= 765)
        {
            $(".card>.card-img-top").css({
                "width" : "30%",
                "margin" : "0 auto"
            });
            $(".card-body>table").css({
                "border" : "1px solid red",
                "marginLeft" : "15%"
            }).removeClass("table-responsive");
        }
        /********************* /END OF MOBIL VIEW  */

        /******* START OF TABLET VIEW */
        if(width >= 768 && width <= 990)
        {
            /******** ABOUT ME SECTION */
            $(".aboutHead").css("fontSize", "2rem"); //title head
            $(".aboutMe>.card>.card-body").removeClass("p-5 ml-4").addClass("p-3");
            $("#desk-view").addClass("justify-content-center");
            $(".card>.card-img-top").css({
                "width" : "45%",
                "margin" : "0 auto"
            });
            if(width >= 850 && width <= 990){
                $(".card-body>table").removeClass("ml-4");
                $(".card-body>.tbl-pinfo").addClass("ml-5");
                $(".card-body>.tbl-techskill").addClass("ml-5");
                $(".card-body>.tbl-educ").addClass("ml-5");
            } else {
                $(".card-body>table").removeClass("ml-4").addClass("ml-3");
            }

            /******** /END OF ABOUT ME SECTION */
        }
        /******* /END OF TABLET VIEW */

        /******* START OF DESKTOP VIEW */
        if(width >= 1024)
        {
            /**** ABOUTME SECTION */
            $(".aboutHead").css("fontSize", "2.5rem"); //title head
            $(".aboutMe>.card>.card-body").removeClass("p-5 ml-4").addClass("p-5");
            $(".card>.card-img-top").css({
                "width" : "40%",
                "margin" : "0 auto"
            });
            $(".card-body>table").removeClass("ml-4");
            $(".card-body>.tbl-pinfo").removeClass("ml-5").addClass("ml-5");
            $(".card-body>.tbl-techskill").removeClass("ml-5").addClass("ml-5");
            $(".card-body>.tbl-educ").removeClass("ml-5").addClass("ml-3");
            /**** /END OF ABOUT ME SECTION */
        }
        /******* /END OF DESKTOP VIEW */
    }
}); // end of document.ready function