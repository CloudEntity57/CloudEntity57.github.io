
$homeheader = $('.homeheader');
console.log($homeheader.height());
$homeheader_height = $homeheader.height();
$homeheader_height = $homeheader_height - 50;
$('.home-content').css("padding-top",$homeheader_height);

$destination = "inc/news_database.php";

//=========Change active class of nav buttons===========

$(".navbar li").click(function(){
  $(".navbar li").removeClass("active");
  $(this).addClass("active");
});

function getTopStories(){
  $('.side-panel').empty();

  $.get("https://www.reddit.com/r/solar/.json",function(results){
    console.log("Executing function!!");
    var stories = results.data.children;
    for(i=1; i<=11; i++){
      var story = stories[i].data;
      var url = story.url;
      var image = story.thumbnail;
      var title = story.title;
      var self_text = story.selftext;
      // console.log('image url: ',image);
      // console.log('author: ',story.author);
      // console.log('url: ',url);
      // console.log('title: ',title);
      // console.log("stories: ", stories);
      console.log("story: ",story);
      var insert = ["<div class='solar-story'><a href='",url,"'><img class='img-responsive' src='",image  ,"'>" , title, "</a>","<div class='self-text'>",self_text,"</div>","</div> "].join('');
      $('.side-panel').append(insert);
    }
  });
  $('.side-panel').html('<h3>From Reddit:</h3>');
}

getTopStories();

// function getStories(){
//   $.get("https://www.reddit.com/r/solar/.json",function(results){
//     var stories = results.data.children;
//     // console.log("stories: ", stories);
//   });
// }

//========================================================
/*function add-like-request($story){
    $.post()
}
*/
//=====================NEWS ARRAY IN JAVASCRIPT==============
/*
var solarnews = [
    {
        title: "California On The Forefront of Solar Energy in US",
        image: "images/panels3.jpg",
        alt: "Solar image 1",
        text: "texthere"
    },
    {
        title: "New Innovations in Solar",
        image: "images/panels2.jpg",
        alt: "Solar image 2",
        text: "texthere"
    },
    {
        title: "Amazing Heights",
        image: "images/panels1.jpg",
        alt: "Solar image 3",
        text: "texthere"
    }
];
*/
//===========POPULATE SIDEBAR USING JAVASCRIPT ARRAY=============
/*
for(i=0;i<=solarnews.length-1;i++){
    $('.side-panel').append(
        '<div><img class="img-responsive" src="' + solarnews[i].image + '" alt="' + solarnews[0].alt + '">' + solarnews[i].title + '</div> '
        );
}
*/
