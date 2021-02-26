// this section if for the Jquery animations on the gammer page only  for Task 20




$(document).ready(function() { // this is a function which will load the jQuery code once the page has loaded
   
   

    
    $("#hide1").click(function(){// each element that is clicked on will fade out but only the images will fade back in as soon as you click on their respective buttons
        $(".hiddengames1").hide();
      });
      $("#show1").click(function(){
        $(".hiddengames1").show();
      });
    
   
      $("#hide2").click(function(){// each element that is clicked on will fade out but only the images will fade back in as soon as you click on their respective buttons
        $(".hiddengames2").hide();
      });
      $("#show2").click(function(){
        $(".hiddengames2").show();
      });
    
      $("#hide3").click(function(){// each element that is clicked on will fade out but only the images will fade back in as soon as you click on their respective buttons
        $(".hiddengames3").hide();
      });
      $("#show3").click(function(){
        $(".hiddengames3").show();
      });
    
      $("#hide4").click(function(){// each element that is clicked on will fade out but only the images will fade back in as soon as you click on their respective buttons
        $(".hiddengames4").hide();
      });
      $("#show4").click(function(){
        $(".hiddengames4").show();
      });
    
      $("#hide5").click(function(){// each element that is clicked on will fade out but only the images will fade back in as soon as you click on their respective buttons
        $(".hiddengames5").hide();
      });
      $("#show5").click(function(){
        $(".hiddengames5").show();
      });
    
   

    

    
    /// Fadout section ends here
    
    

    //  the accordian style menu bar section 
    $('li').hover(function(){
    
        $(this).find('ul > li').stop().slideToggle(400); //This is the slide//You can also use the fadeToggle propertites 
         
     });





     /// This section is to create the animation sliding  and to have the back ground changing colours 
 setInterval(animateImages, 4000);// set intervals for how long each animation and effect should take 
setInterval(changecolors, 2000)
   
     function animateImages() {
 
        $('button').fadeOut(1500).fadeIn(1500);
     $('button').slideUp(1500).slideDown(1500);
       // the chained effect of fade in and out animation with a slide up and down chanied effect
     }
     animateImages();
   let counter = 0;
   function changecolors() {
           let colors = ["yellow", "red", "orange", "pink", "green"]; // storing the warm colours in an array in order for the counter variible to help with the change of the colours for each interval
           
           if (counter < colors.length) {
               $("button").css("background-color", colors[counter], 1000);
    
               counter++;
           } else {
               counter = 0;
           }

   
       }
       changecolors();

   
 
});


/* references:
I also used most of the jQuery from my Task 19
I Found the method to select eacch item to fade from code grepper https://www.codegrepper.com/code-examples/delphi/Create+a+jQuery+function+which+fades+out+any+object+that+is+clicked+on.
I found a method to creating the accordian style drop down from https://www.youtube.com/watch?v=kxfXH0dxU70&ab_channel=CodingwithSara and from https://blog.eduonix.com/web-programming-tutorials/how-to-implement-drop-down-menu-using-jquery/
I found a method for the slide left and right animation from https://beginnersbook.com/2019/04/jquery-effects-show-and-hide/#:~:text=jQuery%20show%20and%20hide%20example&text=On%20the%20click%20event%20on,show()%3B%20.
I found a method to stop the interval from https://www.bitdegree.org/learn/javascript-setinterval#:~:text=Stopping%20the%20Function,-In%20some%20cases&text=You'll%20need%20to%20use,variable%20called%20an%20interval%20ID.
*/