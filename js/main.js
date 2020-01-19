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

    // for my resume link
    $(".mResume-link").click( ()=> {
        swal({
            title: "On Development",
            content: {
                element: "i",
                attributes: {
                    className: "fas fa-3x fa-laugh-wink rounded-circle",
                    style: "color: rgb(252, 209, 118)"
                }
            }
        });
    });

    // for project link on click event
    $(".project-link").click( function() {
        var elLink = $(this).data("projlink");
        console.log("manok: "+ elLink);
        if(elLink == "not-set")
        {
            swal({
                icon: "info",
                title: "Sorry this page is not yet Live"
            });
            return;
        }
        if(elLink == "not-available")
        {
            swal({
                icon: "info",
                title: "Sorry this page is not available in public"
            });
            return;
        }
        swal({
            icon: "success",
            title: "Page Redirecting ..."
        });
        window.open(elLink, "_blank");
        return;
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

    inView(".aboutMe>.card").on("enter", el => {
        if($("#aboutme-section").hasClass("animeted-false")){
            return false;
        }
        if(!$(el).hasClass("viewed"))
        {
            $(".aboutMe").removeClass("finished-animating");
            $(el).addClass("viewed zoomIn fast", el => {
                $(".card-body>table", el).addClass("viewed fadeInUp delay-1s fast",
                function() {
                    $(".aboutMe").addClass("finished-animating");
                });
            });
        }
    }).on("exit", el => {
        $(el).removeClass("zoomIn fast");
        $(".card-body>table", el).removeClass("fadeInUp delay-1s fast");
    });

    inView(".myResume").on("enter", el => {
        $(el).addClass("jello infinite");
    }).on("exit", el => {
        $(el).ready("jello infinite");
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

    inView(".achieve-flip").on("enter", el => {
        if($("#achievement-section").hasClass("animeted-false")){
            return false;
        }
        if(!$(el).hasClass("viewed")){
            // console.log("num: "+ $("#achievement-section").find(el).length);
            $(el).addClass("viewed flipInY");
        }
    }).on("exit", el => {
        $(el).removeClass("flipInY");
    });
    /**************** /ACHIEVEMENTS **************/

    /**************** PORTFOLIO SECTION */
    inView(".portfolio-container").on("enter", el => {
        if($("#portfolio-section").hasClass("animeted-false")){
            return false;
        }
        if(!$(el).hasClass("viewed")){
            $(el).addClass("viewed bounceIn");
        }
    }).on("exit", el => {
        $(el).removeClass("bounceIn");
    });
    /**************** /PORTFOLIO SECTION */

    /**************** EXTRA SECTION */
    inView(".extra-section").on("enter", el => {
        $(el).addClass("heartBeat infinite fast delay-1s");
    }).on("exit", el => {
        $(el).removeClass("heartBeat infinite fast delay-1s");
    });
    /**************** /EXTRA SECTION */

    /**************** CONTACT SECTION */
    // contact title
    inView(".contactTitle").on("enter", el => {
        if($("#contact-section").hasClass("animeted-false")){
            return false;
        }
        if(!$(el).hasClass("viewed")){
            $(el).addClass("viewed fadeInDown");
        }
    }).on("exit", el => {
        $(el).removeClass("fadeInDown");
    });
    // contact phone
    inView(".contactPhone").on("enter", el => {
        if($("#contact-section").hasClass("animeted-false")){
            return false;
        }
        if(!$(el).hasClass("viewed")){
            $(el).addClass("viewed slideInLeft");
        }
    }).on("exit", el => {
        $(el).removeClass("slideInLeft");
    });
    // contact gmail
    inView(".contactGmail").on("enter", el => {
        if($("#contact-section").hasClass("animeted-false")){
            return false;
        }
        if(!$(el).hasClass("viewed")){
            $(el).addClass("viewed slideInRight");
        }
    }).on("exit", el => {
        $(el).removeClass("slideInRight");
    });
    // contact Social Icons
    inView(".contactSocial").on("enter", el => {
        if($("#contact-section").hasClass("animeted-false")){
            return false;
        }
        if(!$(el).hasClass("viewed")){
            $(el).addClass("viewed fadeInUp");
        }
    }).on("exit", el => {
        $(el).removeClass("fadeInUp");
    });

    /**************** /CONTACT SECTION */
    
    /******* /END OF IN-VIEW SECTION ************************/

    /*********************** ON HOVER EVENT */
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

    $(".contactSocialIcons").hover(
        function() {
            $(this).addClass("hvr-float-shadow");
        },
        function() {
            $(this).removeClass("hvr-float-shadow");
        }
    );
    /******************** /END OF ON HOVER SECTION */
    
    /*************************** ON WINDOW SIZE AND LOAD */
    getWindowSize();

    // for resizing the page
    $(window).on("resize", function(){
        // $(".loader").show();
        getWindowSize();
    });

    function getWindowSize()
    {
        var win = $(window);
        var winWidth = win.width();
        /********************* MOBILE VIEW 320 */
        if(winWidth >= 320 && winWidth <= 425)
        {
            /********** ABOUTME SECTION */
            $(".aboutHead").css("fontSize", "2rem"); //title head
            $(".aboutMe>.card>.card-body").removeClass("p-5 ml-4").addClass("p-3");
            $(".card>.card-img-top").css({
                "width" : "60%",
                "margin" : "0 auto"
            });
            $(".card-body>.tbl-pinfo").css("marginLeft","1.2rem");
            if(winWidth >= 375 && winWidth <= 425){
                $(".card>.card-img-top").css({
                    "width" : "70%",
                    "margin" : "0 auto"
                });
                $(".card-body>.tbl-pinfo").css("marginLeft","2rem");
                $(".card-body>.tbl-techskill").css("marginLeft","0.7rem");
                // $(".loader").fadeOut();
            }
            /********** /END OF ABOUT ME SECTION */

            /********* ACHIEVEMENT SECTION */
            $(".achieve-flip").css({
                "marginTop" : "2rem",
                "marginBottom" : "2rem"
            });
            $(".titleAchievements").css("fontSize", "2rem");
            $(".achieve-flip>.front").css({
                "paddingRight":"2rem"
            });
            $(".achieve-flip>.front>.fas").css("fontSize", "5em");
            $(".achieve-flip>.front>h3").css("paddingBottom","2rem");
            $(".achieve-flip>.back>img").css({
                "width" : "90%",
                "heigth" : "90%",
                "cursor" : "pointer"
            });
            /********* /END OF ACHIEVEMENT SECTION */

            // $(".loader").fadeOut();
            return; // always last
        }
        if(winWidth >= 426 && winWidth <= 765)
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
                "marginTop":"0.5rem"
            });
            $(".achieve-flip>.front>.fas").css("fontSize", "5em");
            $(".achieve-flip>.front>h3").css("marginBottom","0.5rem");
            $(".achieve-flip>.back>img").css({
                "width" : "80%",
                "heigth" : "80%",
                "cursor" : "pointer"
            });
            if(winWidth >= 600){
                $(".achieve-flip>.back>img").css({
                    "width" : "60%",
                    "heigth" : "60%",
                    "cursor" : "pointer"
                });
                // $(".loader").fadeOut();
            }
            /********* /END OF ACHIEVEMENT SECTION */
            // $(".loader").fadeOut();
            return; // always last
        }
        /********************* /END OF MOBIL VIEW  */

        /******* START OF TABLET VIEW */
        if(winWidth >= 768 && winWidth <= 990)
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
            if(winWidth >= 850 && winWidth <= 990){
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
                "marginTop":"1rem"
            });
            $(".achieve-flip>.front>.fas").css("fontSize", "5em");
            $(".achieve-flip>.back>img").css({
                "width" : "80%",
                "heigth" : "80%",
                "cursor" : "pointer"
            });
            /******** /END OF ACHIEVEMENT SECTION */
            // $(".loader").fadeOut();
            return; // always last
        }
        /******* /END OF TABLET VIEW */

        /******* START OF DESKTOP VIEW */
        if(winWidth >= 992 && winWidth <= 1199)
        {
            /**** ABOUTME SECTION */
            $(".aboutHead").css("fontSize", "2.5rem"); //title head
            $(".aboutMe>.card>.card-body").removeClass("p-5 ml-4").addClass("p-5");
            $(".card>.card-img-top").css({
                "width" : "35%",
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
                "marginTop":"1rem"
            });
            $(".achieve-flip>.front>.fas").css("fontSize", "5em");
            $(".achieve-flip>.back>img").css({
                "width" : "80%",
                "heigth" : "80%",
                "cursor" : "pointer"
            });
            /**** /END OF ACHIEVEMENT SECTION */
            // $(".loader").fadeOut();
            return; // always last
        }
        if(winWidth >= 1200)
        {
            /**** ABOUTME SECTION */
            $(".aboutHead").css("fontSize", "2.5rem"); //title head
            $(".aboutMe>.card>.card-body").removeClass("p-5 ml-4").addClass("p-5");
            $(".card>.card-img-top").css({
                "width" : "35%",
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
                "marginTop":"2rem"
            });
            $(".achieve-flip>.front>.fas").css("fontSize", "5em");
            $(".achieve-flip>.front>p").css({
                "padding" : "1rem"
            });
            $(".achieve-flip>.back>img").css({
                "width" : "80%",
                "heigth" : "80%",
                "cursor" : "pointer"
            });
            /**** /END OF ACHIEVEMENT SECTION */
            // $(".loader").fadeOut();
            return; // always last
        }
        /******* /END OF DESKTOP VIEW */
    }
    /********** /END OF IN WINDOW SIZE & LOAD */
}); // end of document.ready function