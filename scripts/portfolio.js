$(".navbar li").click(function(){
  $(".navbar li").removeClass("active");
  $(this).addClass("active");
});



$height = $('.navbar').height();

$(".navbar-left img").css("width",(.90 * $height));

// Create array with portfolio link info
//
$links = [

    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1475689200/Allen_Brothers_cl4nrz.jpg",
        url: "http://allenb.com",
        title: "Allen Brothers Commercial Site",
        text:"PHP driven responsive site for real estate brokerage. Includes a form that emails submissions to owner while protecting against cross-site scripting attacks."
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1487384049/FatGiggler_uor5zg.png",
        url: "https://smartset-7a283.firebaseapp.co",
        title: "Musician's Gig Generator",
        text:"Project in React.js and Firebase that stores a user's songs for automatic organization into performances of different lengths and set numbers, according to desired genres. This allows a user to quickly plan a long show with sublime songs, or a short show with upbeat songs."
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1475689308/Heliowire_xsw4a7.jpg",
        url: "https://frozen-journey-83037.herokuapp.com/index.php",
        title: "Heliowire.com",
        text:"PHP driven responsive template for a solar energy news hub. Currently connects to Reddit Solar News API and displays the latest feed."
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1484190674/Web_shot_bz0men.png",
        url: "https://limitless-reaches-19249.herokuapp.com",
        title: "Pencil, Paper, Scissors",
        text:"Site built with Node.js and Express.js - RESTful MongoDB database, along with search feature that connects to the Amazon API with AJAX and saves shopping lists in real time with AJAX POST requests."
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1484279891/Web_Shot2_qeptqh.png",
        url: "https://cryptic-peak-65100.herokuapp.com/",
        title: "Favorite Albums Bulletin Board",
        text:"Online UI database where a user's favorite albums can be stored/displayed via a RESTful CRUD database built with Express.js and MongoDB."
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1475689267/Houston_TX_empn2d.jpg",
        url: "http://allenbrothersrealtors.com/Home",
        title: "Allen Brothers Residential Site",
        text:"Existing CMS website cleaned up and made professional with jQuery and JavaScript DOM manipulation on the front end. Full mobile responsivity added with Bootstrap and raw CSS; previously unusable."
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1476122562/IMG_5141-compressed_eorbdj.jpg",
        url: "http://allenbrothersrealtors.com/Home",
        title: "Coming Soon",
        text:"Many more projects in the works at all times!"
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1476122562/IMG_5141-compressed_eorbdj.jpg",
        url: "http://allenbrothersrealtors.com/Home",
        title: "Coming Soon",
        text:"Many more projects in the works at all times!"
    }
];
http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1484250781/Fav_albums_img_riuqav.png
//Populate the portfolio with links

var $portfolio_area = $('.links');

console.log('doing something');
function populate_portfolio(area,links,x){


  var links = ["<div class='portfolio-entry link col-xs-12 col-md-6'>",
            "<div class='link-title'></div><a href = '",
             links[x].url,"' title = '",links[x].title,"'><div class = 'portfolio-image' style = 'background-image:url(",links[x].photo,")' alt='", links[x].title, "'></div>",
             "<div class='portfolio-title'>", links[x].title, "</div>",
             "<div class='fa fa-ellipsis-h'></div>",
             "<div class='portfolio-text'>",
               links[x].text,
             "</div>",
             "</a>",
           "<i class='fa fa-cogs' aria-hidden='true'></i>",
             "</div>"].join('');
         area.append(links);

    }


for(i=0; i<= $links.length-1; i++){

  populate_portfolio($portfolio_area,$links,i);

};

if($links.length < 6){
        $extra = 6-$links.length;
        for(x=0;x<=$extra;x++){
            populate_portfolio($portfolio_area,$links,0);
        };
    };

$('a').on('click',function(e){
        e.preventDefault();
        if(/^#/.test($(this).attr('href'))){
          var target = this.hash;
          var $target = $(target);

          $('html, body').stop().animate({
              'scrollTop': $target.offset().top
          }, 900, 'swing', function (){
              window.location.hash = target;
          });
        }else{
          window.location = $(this).attr('href');
        };

    });


//
// $photo = $('.row .col-xs-4 img');
//
// $creepy_josh = [
// "033.JPG","034.JPG"
// ];
// function change_pic(i){
//     $photo.attr("src",$creepy_josh[i]);
// }
// var i = 0;
// while(i<1)
// {
//     for(i=0; i<=$creepy_josh.length-1; i++){
//         window.setTimeout(change_pic(i),750
//         );
//         i += 1;
//     };
//         i = 0;
// };
