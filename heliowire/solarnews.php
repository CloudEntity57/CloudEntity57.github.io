<?php
include("inc/header.php");

$maxletters = 800;

?>
    <div class="container">
    <?php display_news($solarnews,$maxletters); ?>
    </div>
<?php
include("inc/footer.php");
?>