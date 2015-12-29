<!doctype html>
<html>
    <head>
        <title>Canyon Webcams</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <meta name = 'viewport' content = 'width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1.0, maximum-scale=1.0'>
        <meta property="og:image" content="http://utah-cams.com/snow-poster.jpg"/>
        <meta property="fb:app_id" content="530506047106664"/>
        <meta property="og:url" content="http://utah-cams.com/"/>
        <meta property="og:title" content="Utah Webcams"/>
        <meta property="og:description" content="View a related group of webcams in Utah on a single page. Public webcams provided by UDOT and Utah businesses and organizations."/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="video.css"/>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
        <script src="jquery.preload.min.js"></script>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-71689248-1', 'auto'); ga('send', 'pageview');
        </script>
        <script>$('body').on('error','img',function(){console.log('error!');$(this).attr('src','broken.jpg');});</script>
        <link type="text/css" rel="stylesheet" href="index.css"/>
    </head>
<?php
    $config = parse_ini_file('config.ini', true);
    $config = is_array($config) ? $config : array();
    $config["videos"]  = isset($config["videos"]) ? $config["videos"] : array();
    $home = isset($config["videos"]["home"]) ? trim($config["videos"]["home"]) : preg_replace('|^(/\\w*/\\w*).*|','\1',$_ENV["DOCUMENT_ROOT"]);
    $vpath = isset($config["videos"]["vpath"]) ? trim($config["videos"]["vpath"]) : "/sites/webcam/videos";
    $vdir = isset($config["videos"]["vdir"]) ? trim($config["videos"]["vdir"]) : "$home/www$vpath";
    $tdir = isset($config["videos"]["tdir "]) ? trim($config["videos"]["tdir "]) : "$home/temp";
    DEFINE('RECENT_DEFAULT', 14);

    $cam = isset($_REQUEST['cam']) ? $_REQUEST['cam'] : false;
    $list = isset($_REQUEST['list']) ? $_REQUEST['list'] : false;
    $detail = isset($_REQUEST['detail']) ? true : false;
    $all = isset($_REQUEST['all']) ? true : false;

    if ($cam===false) {
        $wdir = getcwd();
        chdir($vdir);
        $raw = `ls -1 *.mp4 | sed 's/-20[0-9][0-9]-[0-9][0-9]-[0-9][0-9]\..*//' | sort -u`;
        chdir($wdir);
        $cams = explode("\n", trim($raw));
    } else {
        $cams = array( $cam );
    }

    $cam_data = json_decode(file_get_contents('cam-data.json'), JSON_OBJECT_AS_ARRAY);
    $cam_dir = array();
    foreach($cam_data as $cam_name => $cam_section) {
        foreach($cam_section['cams'] as $cam_array) {
            if (count($cam_array)>2) {
                $cam_dir[$cam_array[2]] = array(
                    'section' => $cam_section,
                    'data' => $cam_array
                );
            }
        }
    }

    function get_videos($cam, $recent = RECENT_DEFAULT) {
        global $vdir;
        $wdir = getcwd();
        chdir($vdir);
        $raw = `ls -1 $cam-20* | sort -r`;
        chdir($wdir);
        $videos = explode("\n", trim($raw));
        return $recent===false ? $videos : array_slice($videos, 0 , $recent);
    }

?>
    <body>
        <header id="heading">
            <div id="info">
                <a href="./" class="nav-contol fa fa-home"></a>
            </div>
            <div id="controls">
                <a href="#" class="video-contol fa fa-repeat"></a>
                <a href="#" class="video-contol fa fa-play"></a>
                <a href="#" class="video-contol fa fa-pause"></a>
                <a href="#" class="video-contol fa fa-times"></a>
            </div>
            <h3>Utah Cams Video</h3>

        </header>
        <div id="player" style="display: none">
            <div id="screen">
                <video height="480" autobuffer="1" preload="metadata">

                </video>
            </div>
        </div>
        <div id="container">
            <ul class='cams'>
                <?php
                    if ($list===false) {
                        foreach ($cams as $cam) {
                            if (isset($cam_dir[$cam])) {
                                if (count($cams)<=1 || $detail) {
                                    echo "<li><h4>" . htmlentities($cam_dir[$cam]['section']['title']) . " : " .
                                        htmlentities($cam_dir[$cam]['data'][0]) . "</h4>\n";
                                    echo "<ul class='dates'>";
                                    $videos = get_videos($cam, $all ? false : RECENT_DEFAULT);
                                    foreach ($videos as $video) {
                                        $date = preg_replace('/.*-(20\d\d-\d\d-\d\d).*/', '\1', $video);
                                        echo "<li><a class='play-link' href='#//mscalora.com/$vpath/" . $video . "' data-video='$vpath/" . $video . "'><i class='fa fa-play'></i> " . htmlentities($date) . "</a></li>";
                                    }
                                    if (!$all) {
                                        echo "<li><a href='?cam=". htmlentities($cam) ."&all=1'>more</a></li>\n";
                                    }
                                    echo "</ul>";
                                } else {
                                    echo "<li><h4><a href='?cam=". htmlentities($cam) ."'>" . htmlentities($cam_dir[$cam]['section']['title']) . " : " .
                                        htmlentities($cam_dir[$cam]['data'][0]) . "\n";
                                    echo "</a></h4><ul>";
                                }
                                echo "</li>\n";
                            } else {
                                echo "<li> UNLISTED: " . htmlentities($cam) . "</li>\n";
                            }
                        }
                    }
                ?>
            </ul>
        </div>
    </body>
    <script>
        function togglePlayer(show) {
            var player =  $('#player');
            var visible = player.is(':visible');
            var action = visible ? 'slideUp' : 'slideDown';
            var action2 = visible ? 'fadeOut' : 'fadeIn';
            if (show === undefined) {
                player[action]();
                $('#controls')[action2]();
            } else if (visible !== !!show) {
                player[action]();
                $('#controls')[action2]();
            }
        }
        $('.play-link').on('click', function(evt){
            togglePlayer(true);
            evt && evt.preventDefault();
            var it = $(this);
            $('#screen video').prop('src',it.attr('href').replace( /.*#/,''))[0].play();
            var date = it.text();
            $('#container h4 span').remove();
            $('<span>').text(' • '+date).appendTo('#container h4');
        });
        $('video').on('play playing pause paused readyStateChange canplay ended waiting', function(evt){
            console.log('%s %s %o %o', evt.type, this.paused, evt, this);
            $('body').toggleClass('playing', !this.paused);
        });
        $('#controls .fa-play').on('click', function(evt) {
            $('video')[0].play();
        });
        $('#controls .fa-pause').on('click', function(evt) {
            $('video')[0].pause();
        });
        $('#controls .fa-repeat').on('click', function(evt) {
            $('video')[0].currentTime = 0;
        });
        $('#controls .fa-times').on('click', function(evt) {
            $('video')[0].currentTime = 0;
            $('video')[0].pause();
            togglePlayer(false);
        });
        if (document.location.search && document.location.search.search(/[?&]play=/)>0) {
            $('.play-link:visible:first').trigger('click');
        }
    </script>
</html>
