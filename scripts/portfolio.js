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
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/c_scale,w_836/v1475689009/IMG_5141_pijqjm.jpg",
        url: "#",
        title: "Coming Soon"
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1475689200/Allen_Brothers_cl4nrz.jpg",
        url: "http://allenb.com",
        title: "Allen Brothers Commercial Website"
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1475689267/Houston_TX_empn2d.jpg",
        url: "http://allenbrothersrealtors.com/Home",
        title: "Allen Brothers Residential Website"
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1475689308/Heliowire_xsw4a7.jpg",
        url: "https://frozen-journey-83037.herokuapp.com/index.php",
        title: "Heliowire.com"
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1484190674/Web_shot_bz0men.png",
        url: "https://limitless-reaches-19249.herokuapp.com",
        title: "Pencil, Paper, Scissors"
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1484279891/Web_Shot2_qeptqh.png",
        url: "https://cryptic-peak-65100.herokuapp.com/",
        title: "Favorite Albums Bulletin Board"
    }
];
http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1484250781/Fav_albums_img_riuqav.png
//Populate the portfolio with links

var $portfolio_area = $('.links');

console.log('doing something');
function populate_portfolio(area,links,x){


  var links = ["<div class='link col-xs-12 col-md-6'>",
            "<div class='link-title'></div><a href = '",
             links[x].url,"' title = '",links[x].title,"'><div class = 'portfolio-image' style = 'background-image:url(",links[x].photo,")' alt='", links[x].title, "'></div>",
             "</a>",
             "</div>"].join('');
         area.append(links);

    }


for(i=1; i<= $links.length-1; i++){

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
          console.log('slowly');
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
