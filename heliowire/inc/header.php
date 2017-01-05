
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
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css/myStyles.css" rel="stylesheet" type="text/css">
</head>
<header class="page-header lead">
    <nav class="navbar navbar-fixed-top navbar-inverse">

             <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>


             </button>

                    <div class = "generalheader container-fluid">
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

    </nav>
</header>
<body>
