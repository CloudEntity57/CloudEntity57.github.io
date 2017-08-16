$(".navbar li").click(function(){
  $(".navbar li").removeClass("active");
  $(this).addClass("active");
});

$(".title-text li").click(function(){
  $(".navbar li").removeClass("active");
});

//add parallax to scrolling title image:
$('.title-bar').parallax(
  {
    imageSrc: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/a_auto_right,c_scale,w_710/v1490335359/IMG_9417_mzqos1.jpg"
  }
);
$('.title-bar').css('top','110px');
$height = $('.navbar').height();

$(".navbar-left img").css("width",(.90 * $height));

// Create array with portfolio link info
//
$links = [
  {
      photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/c_scale,w_550/v1501533478/DC_6_irbfjo.png",
      url:"http://dcopenhouselist.com",
      title: "DC's Open House List",
      text:"Full stack real estate search app - uses React/Express stack. Searches Washington DC area for open houses, maps by day, sorts by price, time, days on market. Features photo carousel, contact form, custom CSS animated buttons."
  },
   {
       photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/c_scale,w_563/v1497474684/CouchPolitics_rt2ufw.png",
       url:"https://couchpolitics.herokuapp.com/",
       title: "Phacebook",
       text:"Full stack Facebook 'clone' built w React/Redux + Node/Express. Imitates core Facebook functionality. User posts, comments, likes, pages, friend-making. Also filter newsfeed by liberal/conservative. With link sharing, privacy settings, wall posting and more."
   },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/c_scale,w_564/v1489470677/Untitled_picture_c8abxv.jpg",
        url:"https://smartset-7a283.firebaseapp.com/",
        title: "SmartSet Musician Gig Generator",
        text:"Project in React.js and Firebase that stores a user's songs and automatically generates performances of different lengths and set numbers, according to desired genres. This allows a user to quickly plan a long show with sublime songs, or a short show with upbeat songs."
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/c_scale,w_544/v1491262402/SpotifyBrowser_f8qpax.png",
        url: "http://spotifybrowser.firebaseapp.com",
        title: "Spotify Speed Browser (now requires auth)",
        text:"Single page React.js/Firebase app browses Spotify by artist, displays albums/tracks, plays sample clips, and allows album toggling. Navigation using browser back button enabled with React Router."
    },
{
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/c_scale,h_327/v1495221822/Redux_Leaflet_gj7xpa.png",
        url: "https://reduxleafletapp.firebaseapp.com/",
        title: "Redux Leaflet App",
        text:"React/Redux single page app that connects to the Leaflet Maps API using React-Leaflet.js and components from the Material-UI library."    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1475689200/Allen_Brothers_cl4nrz.jpg",
        url: "http://allenb.com",
        title: "Allen Brothers Commercial Site",
        text:"PHP driven responsive site for real estate brokerage. Includes a form that emails submissions to owner while protecting against cross-site scripting attacks."
    },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1487626184/GistAlt_cbtify.png",
        url: "https://notesapp-edb56.firebaseapp.com",
        title: "Developer Notes Tool",
        text:"(Team project) A searchable database of all your individual notes appears when you log in, and it's easy to assign web-related color categories to notes as you create them. Built with React.js and Firebase."
    },
    //{
      //  photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1484279891/Web_Shot2_qeptqh.png",
        //url: "https://cryptic-peak-65100.herokuapp.com/",
       // title: "Favorite Albums Bulletin Board",
        //text:"Online UI database where a user's favorite albums can be stored/displayed via a RESTful CRUD database built with Express.js and MongoDB."
   // },
//    {
  //      photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1475689308/Heliowire_xsw4a7.jpg",
    //    url: "https://frozen-journey-83037.herokuapp.com/index.php",
      //  title: "Heliowire.com",
        // text:"PHP driven responsive template for a solar energy news hub. Currently connects to Reddit Solar News API and displays the latest feed."
   // },
    {
        photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1487829847/clouds_lvmllc.png",
        url: "/3x+1/3x+1.htm",
        title: "Collatz Conjecture",
        text:"Simple single page application allowing users to plot the iterations of a particular mathematical function. JavaScript, jQuery & Bootstrap."
    },
    // {
    //     photo: "http://res.cloudinary.com/middle-renaissance-realty-llc/image/upload/v1484190674/Web_shot_bz0men.png",
    //     url: "https://limitless-reaches-19249.herokuapp.com",
    //     title: "Pencil, Paper, Scissors",
    //     text:"Site built with Node.js and Express.js - RESTful MongoDB database, along with search feature that connects to the Amazon API with AJAX and saves shopping lists in real time with AJAX POST requests."
    // },
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
    }
];

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


for(i=0; i< $links.length-1; i++){

  populate_portfolio($portfolio_area,$links,i);

};

//If there are less than 6 entries, populate difference with 'coming soon' windows:

if($links.length < 6){
        let i = $links.length-1
        $extra = 6-$links.length;
        for(x=0;x<=$extra;x++){
            populate_portfolio($portfolio_area,$links,i);
        };
    };
//fill empty gap in case of odd number of links:

if($links.length%2 !==1){
  let i = $links.length-1;
  populate_portfolio($portfolio_area,$links,i);
}


//
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

//create prime number generator

// let makePrimes = (num)=>{
//   let primes = [1];
//   let prime = false;
//   let candidate = 2;
//   let divisor = 2;
//   for(let i=1; i<=num; i++){
//       while(!prime){
//         //go up from 1
//         while((candidate/divisor)%1 !== 0){
//           divisor++;
//         }
//         //check if divisor made it to candidate (thus a prime)
//         if(candidate===divisor){
//           primes.push(candidate);
//           candidate++;
//           prime=true;
//           divisor = 2;
//         }else{
//           candidate++;
//           divisor=2;
//         }
//       }
//       prime = false;
//   }
//   console.log(primes);
//   return primes;
// }
// //make the first 6000 prime numbers:
// makePrimes(6000);
