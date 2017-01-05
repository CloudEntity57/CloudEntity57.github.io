
<?php
    include("inc/pagelinks.php");
    include("inc/functions.php");
    include("inc/news_database.php");
    show_active_page();
    ?>
<!doctype html>
<html>

<head>
    <meta charset = "utf-8">
    <title>Heliowire</title>
    <link href="./css/bootstrap.css" rel="stylesheet" type="text/css">
    <link  href="./css/myStyles.css" rel="stylesheet" type="text/css">
    <script src="http://code.jquery.com/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
</head>
<header class="page-header lead">
    <nav class="homeheader navbar navbar-fixed-top navbar-inverse">
    <div class="">
             <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>

             </button>
                    <div class = "container-fluid">
                    <div class="navbar-brand row">
                            <div class="col-xs-2 navbar-left">
                                <div id="sunicon">
                                </div>

                            </div>
                                <div class="col-xs-10 navbar-left">
                                    <div class="maintitle">
                                        &nbsp;<?php echo $home; ?>Heliowire.com</a>
                                    </div>
                                </div>
                    </div>
    <?php include("inc/navbar.php"); ?>
        </div>
    </div>
        <div class="motto text-center">
        <br>
            A website devoted to the solar energy revolution

        </div>
    </nav>
</header>
<body>
