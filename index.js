    var num = 0;

    function positionZoomedImage(img) {
        var zoomed = $('.zoomed');
        if (!zoomed.length) {
            return;
        }
        img = img || $('.webcam', zoomed);
        var nw = img.prop('naturalWidth');
        var nh = img.prop('naturalHeight');
        var ww = $('html').width();
        var wh = $('html').height();
        var miw = ww-20;
        var mih = wh-$('h4:first').height()-20;
        var iw = nw*3;
        var ih = nh*3;
        if (iw>miw || ih>mih) {
            if (miw/mih < nw/nh) {
                iw = miw;
                ih = iw/nw * nh;
            } else {
                ih = mih;
                iw = ih/nh * nw;
            }
        }
        $('.webcam', zoomed).css({
            width: iw,
            height: ih
        });
        zoomed.css({
            top: 12,
            left: (ww-zoomed.outerWidth())/2
        }).show();
		var closer = $('#closer');
        var refresher = $('#refresher');
		var secPos = zoomed.position();
		closer.css({right: Math.max(0,secPos.left-10)}).show();
        refresher.css({left: Math.max(0,secPos.left-10)}).show();
    }

    function refreshImage() {
        var zoomer = $('.zoomed');
        if (zoomer.length) {
            var img = zoomer.find('.webcam');
            img.animate({opacity:0},250).promise().then(function(){
                img.one('load error abort',function(){
                    img.animate({opacity:1},250);
                });
                var src = img.prop('src');
                if (src.search(/[?&]ucts=/)<0) {
                    src += (src.search(/[?]/)<0 ? '?' : '&') + 'ucts='+ $.now();
                } else {
                    src = src.replace(/([?&])ucts=\d+/,'$1ucts='+$.now());
                }
                img.prop('src',src);
            });
        }
    }

    function closeImage() {
		var zoomed = $('.zoomed').css({
			displau: '',
			top: '',
			left: ''
		}).removeClass('zoomed').find('.webcam').css({
			width: '',
			height: ''
		});
		$('.control').hide();
	}

    function zoomImage(posOrArticle) {
        var imgs = $('article:not(:has(.webcam[src="broken.png"],.webcam[src="placeholder.png"]))');
		if (typeof posOrArticle==="number") {
			num = (num + posOrArticle) % imgs.length;
		} else if (typeof posOrArticle==="object" && posOrArticle.length) {
			for(var i = 0; i<imgs.length; i++) {
				if (imgs[i]===posOrArticle[0]) {
					num = i;
					break;
				}
			}
		}
        if (num>imgs.length) {
            num = 0;
        } else if (num<0) {
            num = imgs.length-1;
        }
		console.log("zoomImage: %d %o", num, posOrArticle);
		if ($('.zoomed').length) {
			closeImage();
		}
		$(imgs[num]).addClass('zoomed');
        positionZoomedImage();
    }

    $(window).on('resize orientationchange', function(){
        positionZoomedImage();
    });

    $('body').on('keydown',function(evt){
        //console.log("%s %o",evt.keyCode,evt);
        if (evt.keyCode==39) {
            zoomImage(1);
        } else if (evt.keyCode==37) {
            zoomImage(-1);
        }
    });

    $('Xarticle').on('click',function(){
        zoomImage($(this).index());
    });

	function distance(x,y,p,q) {
		return Math.sqrt((x-p)*(x-p)+(y-q)*(y-q));
	}

    $('body').on('click tap',function(evt){
    	var link = $(evt.target).closest('.video-link');
		if (link.length) {			
			document.location.href = link.attr('href');
			return false;
		}
		var x = evt.pageX;
		var y = evt.pageY;
        var closer = $('#closer');
		var img = $('.zoomed');
        if (closer.is(':visible')) {
            var w = closer.width();
            var pos = closer.offset()
            var d = distance(x,y,pos.left+w/2,pos.top+w/2);
            //$('<div>').text("Click: "+x+","+y+" d="+d).appendTo('#main');
            if (d<w) {
                closeImage();
                return false;
            }
        }
        var refresher = $('#refresher');
        if (refresher.is(':visible')) {
            var w = refresher.width();
            var pos = refresher.offset()
            var d = distance(x,y,pos.left+w/2,pos.top+w/2);
            //$('<div>').text("Click: "+x+","+y+" d="+d).appendTo('#main');
            if (d<w) {
                refreshImage();
                return false;
            }
        }
		if (img.is(':visible')) {
			var center = img.offset().left+img.outerWidth()/2;
			zoomImage(x>=center ? 1 : -1);
			return false;
		}
		var article = $(evt.target).closest('article');
		if (article.length) {
			zoomImage(article);
			return false;
		}
    });

    function changeTopic(topic) {
        $('#main-heading').html(render_header(topic));
        $('#thumbnails').html(render_articles(topic));
        $.preload('#thumbnails .webcam', preload_options);
        $('#links').html(render_links(topic));
        localStorage.topic = topic;
        document.location.hash = topic;
    }
    $('#links').on('click','a',function(){
        var it = $(this);
        var topic = it.attr('href').replace(/^#/,'');
        changeTopic(topic);
        return false;
    });

var preload_options = {
    placeholder:'camera.jpg',
    notFound:'broken.png'
//    ,onComplete: function(data) {
//        if ($(data.element).closest('.zoomed').length)
//        console.log("%o %o",this,data);
//    }
}

$.preload('.webcam', preload_options);

function adjustFBPadding() {
  $('.links').css('margin-bottom', $('.fb_iframe_widget').height() + 8);
}

setTimeout(adjustFBPadding,500);
setTimeout(adjustFBPadding,1000);
setTimeout(adjustFBPadding,2500);

//console.log("HASH: %o", document.location.hash);
