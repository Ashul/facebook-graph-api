$(document).ready(function(){
  var myFacebookToken = 'EAACEdEose0cBAJqP5eoTupenJGVHuRLN6on0ZBCQQZAafGbBHnoFlNou0ZCP4rKxyLpCsX76eXGiixsQPZAGfnX2VcqzpMH34X5cT41HAHAmmWMrTIQDL9vwNGZCVSqv45WZCJws2NJr8Sh9UbdVsYZA2H92mCrJnao1IBPAYCTl0Tk4DcxJhhKHOptldXKRzQZD';

  function getFacebookInfo(){
    $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{
      success: function(response){
           $('.user').text(response.name);

          // -------------------Works at------------------
          var work = response.work;
           for (item in work) {
          $(".work").text(work[item].employer.name);
          }

          // -------------------Location------------------
          $('.location').text(response.location.name);
          
          // -------------------education at------------------
         var education = response.education;
           for(items in education){
            var edu = education[items];
            $('.education').text(edu.school.name);
          }

         // -------------------conatct------------------
         $('.contact').text(response.email);

         // -------------------Gender------------------
         $('.gender').text(response.gender);

         // -------------------Bio------------------
         $('#bio').text(response.bio)

         // -------------------languages ------------------
         var languages = response.languages;
           for(items in languages){
           var lang = languages[items];
           $('#language').text(lang.name)
        }

        // -------------------favoriteAthletes ------------------
        var favAth = response.favorite_athletes;
        var x = '';
          for(items in favAth){
           x += "<li>"+favAth[items].name+"</li>" ;
           $('#favAth').html("<ul>"+x+"</ul>");
          };

        // -------------------Cover Photo ------------------
        $('#cover').html('<img src="assets/images/flag.jpg"/>');

      },
        // -------------------Handling Error ------------------
       error: function(response){
         alert('Not Found...Retry')
      console.log('Not found')      }
    })
  }
getFacebookInfo();




// ------------------------------feed------------------------------

  function getFacebookFeed(){
    $.ajax('https://graph.facebook.com/me/feed?access_token='+myFacebookToken,{
      success: function(response){
        var feed = response.data;
        var x ='';
        var action = feed[item].actions;
        var actionItems = '';
         for(item in action){
             actionItems +="<li>"+ action[item].name+"</li>";
           }

         for (item in feed) {
       x += "<div class="+"info> <p><span class="+"'span-img'"+"><img src='"+feed[item].picture+"'/></span>"
         +feed[item].name+"</br>"+feed[item].created_time+"</p>"
         +" <p><img src='" +feed[item].picture+"'/></p>"
         +" <p>" +feed[item].description+"</p><hr/>"
         +" <p><ul class="+"comment"+">" +actionItems+"</ul></p></div>";
         $(".information").html(x);

      }

      },
      error: function(response){
      console.log('Not found')      }
    })
  }
getFacebookFeed();
  $().trigger('click');


});




