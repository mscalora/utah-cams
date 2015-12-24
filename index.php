<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>Canyon Webcams</title>
		<meta name = 'viewport' content = 'width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1.0, maximum-scale=1.0'>
		<meta property="og:image" content="http://slc-canyons.mscalora.com/snow-poster.jpg"/>
        <meta property="fb:app_id" content="530506047106664"/>
        <meta property="og:url" content="http://slc-canyons.mscalora.com/"/>
        <meta property="og:title" content="SLC Canyon Webcams"/>
        <meta property="og:description" content="View a related group of webcams in Utah on a single page. Public webcams provided by UDOT and Utah businesses and organizations."/>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
        <script src="jquery.preload.min.js"></script>
        <script src="index.json"></script>
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
	<body>
		<script>
		  window.fbAsyncInit = function() {
			FB.init({
			  appId      : '446737748843781',
			  xfbml      : true,
			  version    : 'v2.5'
			});
		  };

		  (function(d, s, id){
			 var js, fjs = d.getElementsByTagName(s)[0];
			 if (d.getElementById(id)) {return;}
			 js = d.createElement(s); js.id = id;
			 js.src = "//connect.facebook.net/en_US/sdk.js";
			 fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk'));
		</script>
		<div id="main">
            <h2>Big & Little Cottonwood Canyon (SR190 &amp; SR210) Webcams</h2>
			<div id="thumbnails"><script>
				var defaultTopic = 'cottonwoods';
				var topic = (typeof localStorage != "undefined" ? localStorage.topic : defaultTopic) || defaultTopic;
				function encode(s) {
					return s.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
						return '&#'+i.charCodeAt(0)+';';
					});	
				}
				function setTopic(topic) {
					var html = "";
					var cams = cam_data[topic].cams;
					for(var i = 0; i<cams.length; i++) {
						var cam = cams[i];
						html += '<article><h4>'+encode(cam[0])+'</h4><img src="'+encode(cam[1])+'"/>\n</article>';
					}
					return html;
				}
				document.write(setTopic(topic));
			</script></div>
            <button id="closer" class="control">

            </button>
            <button id="refresher" class="control">

            </button>
		</div>
		<section class="links">
			<a href="http://sites.mscalora.com/snowbird-cams">Snowbird Mountain Webcams<a>
			<a href="http://sites.mscalora.com/alta-cams">Alta Mountain Webcams<a>
			<a href="http://provo-canyon.mscalora.com/">Sundance & Provo Canyon<a>
		</section>
<center>
<div class="fb-like" data-share="true" data-width="450" data-show-faces="true"></div>
</center>
</body>
	<script src="index.js"></script>
</html>

