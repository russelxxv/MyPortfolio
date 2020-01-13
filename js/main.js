/************
 * JQUERY
 * created by: Russel Dellosa
 * Jan 12, 2020
 */

$(document).ready(function()
{
    /**************** IN-VIEW SECTION */
    // HEADER
    inView("#header-section").on("enter", function(){
        console.log("Header is in view section");
    })
    .on("exit", function() {
        console.log("Header is out of view");
    });
    // /HEADER

    // ABOUTME
    inView("#aboutme-section").on("enter", function(){

        inView(".aboutHead").on("enter", function() {
            if(!$(".aboutHead").hasClass("viewed")){
                $(".aboutHead").addClass("viewed jackInTheBox");
            }  
        });
        inView(".aboutMe>.card").on("enter", function() {
            if(!$(".aboutMe>.card").hasClass("viewed")) {
                $(".aboutMe>.card").addClass("viewed zoomIn");
            }
        });
    })
    .on("exit", function() {

        // put all the removeClass animation here
        $(".aboutHead").removeClass("jackInTheBox delay-1s");
        $(".aboutMe>.card").removeClass(" zoomIn");

    });
    // /ABOUTME

    // ACHIEVEMENTS
    inView("#achievement-section").on("enter", function() {
        inView(".titleAchievements").on("enter", function(){
            if(!$(".titleAchievements").hasClass("viewed")){
                $(".titleAchievements").addClass("viewed jackInTheBox");
            }
        });
    })
    .on("exit", function() {
        // put all the removeClass here
        $(".titleAchievements").removeClass("jackInTheBox");
    });
    // /ACHIEVEMENT


    /**************** /END OF IN-VIEW SECTION */

    $(".aboutMe").hover(
        function() {
            $(this).addClass("about-active");
        },
        function() {
            $(this).removeClass("about-active")
        }
    );
    /******** /END OF FOR SCROLLING THE PAGE ANIMATION */
}); // end of document.ready function