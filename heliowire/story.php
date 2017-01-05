<?php 

include("inc/header.php");


if(isset($_GET["id"])){
    $id = filter_input(INPUT_GET,"id",FILTER_SANITIZE_NUMBER_INT);
};

if(empty($id)){
    header("location:index.php");
    exit;
}

$likes = $solarnews[$id]["upvotes"] - $solarnews[$id]["downvotes"];

$story = $solarnews[$id];

?> 
    <div class="container">
        <div class="row story-panel">
                
                <div class="col-sm-6 col-md-8">
                <div class="col-sm-12"><img src="<?php echo $story["image"];  ?>" class="mainImage img-responsive" alt="<?php echo $story["alt"] ?>"></div>
                <div class="col-sm-12"><h2><?php echo $story["title"]; ?></h2></div>
                <div class="col-md-12">
                    <p>
                        <?php echo $story["text"]; ?>
                    </p>
        </div>
                    <div class="likes col-md-12">
                        <div><?php echo $likes; ?></div>
                        <button class="glyphicon glyphicon-thumbs-up">
                        </button>
                        <button class="glyphicon glyphicon-thumbs-down">
                        </button>
                    </div>
        </div>
                <div class="col-sm-6 col-md-4">
                    <div class="col-sm-12"><h2>Top Stories</h2></div>
                    <div class="side-panel well panel panel-default col-sm-12"><?php 
        display_random_stories($solarnews,$id);

?>
                    </div>
                </div>
    </div>
    </div>
    
<?php include("inc/footer.php"); ?>