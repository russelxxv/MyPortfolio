/************
 * JQUERY
 * created by: Russel Dellosa
 * Jan 12, 2020
 */

$(document).ready(function()
{
    // jQuery.noConflict();
    $(".achieve-flip").flip({
        trigger: "hover",
    });
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

        if($("#aboutme-section").hasClass("animeted-false")){
            return false;
        }
        
        if(!$(".aboutHead").hasClass("viewed")){
            $(".aboutHead").addClass("viewed jackInTheBox");
        }  
    }).on("exit", function(){
        $(".aboutHead").removeClass("jackInTheBox");
    });

    inView(".aboutMe>.card").on("enter", function() {
        if($("#aboutme-section").hasClass("animeted-false")){
            return false;
        }
        if(!$(".aboutMe>.card").hasClass("viewed"))
        {
            $(".aboutMe").removeClass("finished-animating");
            $(".aboutMe>.card").addClass("viewed zoomIn fast",
            function(){
                if(!$(".card-body>table").hasClass("viewed")){
                    $(".card-body>table").addClass("viewed fadeInUp delay-1s fast",
                    function(){
                        if(!$(".card>img").hasClass("viewed")){
                            $(".card>img").addClass("viewed bounce delay-1s",
                            function() {
                                $(".aboutMe").addClass("finished-animating");
                            });
                        }
                    });
                }
            });
        }
    }).on("exit", function() {
        $(".aboutMe>.card").removeClass("zoomIn fast");
        $(".card-body>table").removeClass("fadeInUp delay-1s fast");
        $(".card>img").removeClass("bounce delay-1s");
        // $(".aboutMe").removeClass("finished-animating");
    });
    
    //********** /ABOUTME *****************/


    /**************** ACHIEVEMENTS **************/ 
    inView(".titleAchievements").on("enter", function(){
        
        if($("#achievement-section").hasClass("animeted-false")){
            return false;
        }
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
            if($(this).hasClass("finished-animating"))
            {
                var title = $(this).find(".card-title");
                $(this).addClass("hvr-float");
                title.show().addClass("flip fast");
            }
        },
        function() {
            $(this).removeClass("hvr-float");
            var title = $(this).find(".card-title");
            title.hide().removeClass("flip fast");
        }
    );
    
    $(".navbar-nav>.nav-item").hover(
        function() {
            $("a", this).addClass("hvr-grow");
        },
        function() {
            $("a", this).removeClass("hvr-grow");
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
            $(".card>.card-img-top").css({
                "width" : "60%",
                "margin" : "0 auto"
            });
            $(".card-body>.tbl-pinfo").css("marginLeft","1.2rem");
            if(width >= 375 && width <= 425){
                $(".card>.card-img-top").css({
                    "width" : "70%",
                    "margin" : "0 auto"
                });
                $(".card-body>.tbl-pinfo").css("marginLeft","2rem");
                $(".card-body>.tbl-techskill").css("marginLeft","1.3rem");
            } else {
                $(".card-body>table").removeClass("ml-4 ml-2");
            }
            /********** /END OF ABOUT ME SECTION */

            /********* ACHIEVEMENT SECTION */
            $(".achieve-flip").css({
                "marginTop" : "2rem",
                "marginBottom" : "2rem"
            });
            $(".titleAchievements").css("fontSize", "2rem");
            $(".achieve-flip>.front").css({
                "paddingRight":"2rem",
                "marginTop":"4rem"
            });
            $(".achieve-flip>.front>.fas").css("fontSize", "5em");
            $(".achieve-flip>.front>h3").css("marginBottom","2rem");
            $(".achieve-flip>.back>img").css({
                "width" : "90%",
                "heigth" : "90%",
                "cursor" : "pointer"
            });
            /********* /END OF ACHIEVEMENT SECTION */

            return; // always last
        }
        if(width >= 426 && width <= 765)
        {
            /******* ABOUT SECTION */
            $(".card>.card-img-top").css({
                "width" : "40%",
                "margin" : "0 auto"
            });
            $(".card-body>table").css({
                "marginLeft" : "15%"
            }).removeClass("table-responsive");
            /****** /END OF ABOUT SECTION */

            /********* ACHIEVEMENT SECTION */
            $(".achieve-flip").css({
                "marginTop" : "2rem",
                "marginBottom" : "2rem"
            });
            $(".titleAchievements").css("fontSize", "2rem");
            $(".achieve-flip>.front").css({
                "paddingRight":"2rem",
                "marginTop":"4rem"
            });
            $(".achieve-flip>.front>.fas").css("fontSize", "5em");
            $(".achieve-flip>.front>h3").css("marginBottom","2rem");
            $(".achieve-flip>.back>img").css({
                "width" : "80%",
                "heigth" : "80%",
                "cursor" : "pointer"
            });
            if(width >= 600){
                $(".achieve-flip>.back>img").css({
                    "width" : "60%",
                    "heigth" : "60%",
                    "cursor" : "pointer"
                });
            }
            /********* /END OF ACHIEVEMENT SECTION */

            return; // always last
        }
        /********************* /END OF MOBIL VIEW  */

        /******* START OF TABLET VIEW */
        if(width >= 768 && width <= 990)
        {
            /******** ABOUT ME SECTION */
            $("#desk-view").addClass("justify-content-center");
            $(".aboutHead").css("fontSize", "2rem"); //title head
            $(".aboutMe>.card>.card-body").removeClass("p-5 ml-4").addClass("p-3");
            $(".card-body>.tbl-pinfo").css("marginLeft","2rem");
            $(".card-body>.tbl-techskill").css("marginLeft","2rem");
            $(".card>.card-img-top").css({
                "width" : "45%",
                "margin" : "0 auto"
            });
            if(width >= 850 && width <= 990){
                $(".card-body>.tbl-pinfo").css("marginLeft","4rem");
                $(".card-body>.tbl-techskill").css("marginLeft","4rem");
                $(".card-body>.tbl-educ").css("marginLeft","3rem");
            }
            /******** /END OF ABOUT ME SECTION */

            /******** ACHIEVEMENT SECTION */
            $(".titleAchievements").css("fontSize","2rem");
            $(".achieve-flip").css({
                "marginTop" : "2rem",
                "marginBottom" : "2rem"
            });
            $(".achieve-flip>.front").css({
                "paddingRight":"2rem",
                "marginTop":"4rem"
            });
            $(".achieve-flip>.front>.fas").css("fontSize", "5em");
            $(".achieve-flip>.back>img").css({
                "width" : "80%",
                "heigth" : "80%",
                "cursor" : "pointer"
            });
            /******** /END OF ACHIEVEMENT SECTION */

            return; // always last
        }
        /******* /END OF TABLET VIEW */

        /******* START OF DESKTOP VIEW */
        if(width >= 992 && width <= 1199)
        {
            /**** ABOUTME SECTION */
            $(".aboutHead").css("fontSize", "2.5rem"); //title head
            $(".aboutMe>.card>.card-body").removeClass("p-5 ml-4").addClass("p-5");
            $(".card>.card-img-top").css({
                "width" : "55%",
                "margin" : "0 auto"
            });
            $(".card-body>.tbl-pinfo").css("marginLeft","1rem");
            $(".card-body>.tbl-techskill").css("marginLeft","0.5rem");
            $(".card-body>.tbl-educ").css("marginLeft","0.8rem");
            /**** /END OF ABOUT ME SECTION */

            /**** ACHIEVEMENT SECTION */
            $(".titleAchievements").css("fontSize","2.5rem");
            $(".achieve-flip").css({
                "marginTop" : "2rem",
                "marginBottom" : "2rem"
            });
            $(".achieve-flip>.front").css({
                "paddingRight":"2rem",
                "marginTop":"4rem"
            });
            $(".achieve-flip>.front>.fas").css("fontSize", "5em");
            $(".achieve-flip>.back>img").css({
                "width" : "80%",
                "heigth" : "80%",
                "cursor" : "pointer"
            });
            /**** /END OF ACHIEVEMENT SECTION */

            return; // always last
        }
        if(width >= 1200)
        {
            /**** ABOUTME SECTION */
            $(".aboutHead").css("fontSize", "2.5rem"); //title head
            $(".aboutMe>.card>.card-body").removeClass("p-5 ml-4").addClass("p-5");
            $(".card>.card-img-top").css({
                "width" : "55%",
                "margin" : "0 auto"
            });
            // $(".card-body").css("border", "1px solid red");
            // $(".card-body>table").css({
            //     "border" : "1px solid red"
            // }).addClass("table-bordered").removeClass("table-borderless");
            $(".card-body>.tbl-pinfo").css("marginLeft","2rem");
            $(".card-body>.tbl-techskill").css("marginLeft","1rem");
            $(".card-body>.tbl-educ").css("marginLeft","2rem");
            /**** /END OF ABOUT ME SECTION */

            /**** ACHIEVEMENT SECTION */
            $(".titleAchievements").css("fontSize","2.5rem");
            $(".achieve-flip").css({
                "marginTop" : "2rem",
                "marginBottom" : "2rem"
            });
            $(".achieve-flip>.front").css({
                "paddingRight":"2rem",
                "marginTop":"4rem"
            });
            $(".achieve-flip>.front>.fas").css("fontSize", "5em");
            $(".achieve-flip>.back>img").css({
                "width" : "80%",
                "heigth" : "80%",
                "cursor" : "pointer"
            });
            /**** /END OF ACHIEVEMENT SECTION */

            return; // always last
        }
        /******* /END OF DESKTOP VIEW */
    }
}); // end of document.ready function