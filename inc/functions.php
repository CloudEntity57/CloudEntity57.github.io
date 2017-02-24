<?php
function show_active_page(){
  global $blog_on;
  global $solarnews_on;
  global $about_on;
  global $contact_on;
  global $home_on;

  $state = $_SERVER['PHP_SELF'];
  if($state == '/blog.php'){
    $blog_on = "active";
  }else if($state == '/solarnews.php' || $state == '/story.php'){
    $solarnews_on = "active";
  }else if($state == '/about.php'){
    $about_on = "active";
  }else if($state== '/contact.php'){
    $contact_on = "active";
  }else if($state== '/index.php'){
    $home_on = "active";
  };
}

function display_random_stories($solarnews,$current=null){
            unset($solarnews[$current]);
            $frontStories = array_rand($solarnews, 3);
            foreach($frontStories as $i){
               /* echo "<div><img class='img-responsive' src='" . $solarnews[$i]['image'] . "' alt='" . $solarnews[$i]['alt'] . "'>" . $solarnews[$i]['title'] . "</div> ";
            };*/
                echo "<div><a href='story.php?id=" . $i . "'><img class='img-responsive' src='" . $solarnews[$i]['image'] . "' alt='" . $solarnews[$i]['alt'] . "'>" . $solarnews[$i]['title'] . "</a></div> ";
};
}


function display_news(array $solarnews, $maxletters=null){

      $length = count($solarnews);
      foreach($solarnews as $i => $value){
          $mykey = $i;
          $link = null;
          $link_more = null;
          $text = $solarnews[$i]['text'];
          $link = "<a href='story.php?id=" .
              $mykey
               . "'";
          if(strlen($text)>800){
            $text = substr($solarnews[$i]['text'],0,$maxletters);
            $link_more = "...<a href='story.php?id=" .
              $mykey
               . "'>(more)</a>";

          };
            echo "<div class='panel well panel-default solarnews-panel'>
            <div class='row'>
            <div class='col-sm-12'><h3>" .
            $solarnews[$i]['title'] . "
            </h3></div>
            <div class='col-sm-3'>"
            . $link ."'>
            <img class='img-responsive solarnews-img' src='" . $solarnews[$i]['image'] . "' alt='" . $solarnews[$i]['alt'] . "'>
            </a>
            </div>
            <div class='col-sm-9'>
            <p>" . $text .
                $link_more .
               "</p>
            </div>
            </div>
            </div>";
        };
}

/*
function add-like($story){
    $story["likes"] = $story["likes"] + 1;
}

function subtract-like(){

}
*/

// Sort array by date

// Allow user to comment on stories by creating user object with permission status

// Create blog with comment option, login with social media

// Allow user to upvote, downvote stories and blog posts





?>
