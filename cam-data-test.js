window.test_data = {
  "sundace": {
    "title" : "Sundance",
    "link" : "Sundance Cams",
    "special": {
      "type": "html",
      "css": [
        "//js.prismcam.com/violet.css"
      ],
      "js": [
        "//js.prismcam.com/violet.js"
      ],
      "html": `<div class="prism-wrap"><div id='violet-1546311408' cam='74' data-mode='embed' class="violet-embed"></div></div>
               <div class="prism-wrap"><div id='violet-1546311408' cam='75' data-mode='embed' class="violet-embed"></div></div>`,
      "refresh": function () {
        let done = false;
        function init () {
          try {
            if (!window.Violet) {
              console.warn('Not ready yet');
              return;
            }
            Violet.Core.init();
            done = true;
            $('.prism-wrap').each(function (it) {
              this.addEventListener('click', function (evt) {
                $('html').toggleClass('prism-alt');
                evt.stopImmediatePropagation();
                Violet.Core.init();
              }, {capture: true});
            });
          } catch (e) { }
        }
        init();
        if (!done) {
          let timer = setInterval(function () {
            if (!done) {
              init();
            } else {
              done = true;
              clearInterval(timer);
            }
          }, 250);
        }
      }
    },
  },
  "solitude": {
    "title" : "Solitude Mountain",
    "link" : "Solitude Mountain Cams",
    "cams": [
      /*["Roundhouse 2", "https://webcams.solitudemountain.com/rh2.jpg"],*/
      ["Moonbeam Lodge", "https://webcams.solitudemountain.com/mbl.jpg"]
    ]
  },
	"other": {
		"title" : "Other",
		"link" : "Other Cameras",
		"cams": [
			["Empire","//udottraffic.utah.gov/1_devices/aux172.jpeg"],
		]
	},
	"ytlive": {
		"title" : "Live Animals on YouTube",
		"link" : "LiveAnimals",
    "special" : {
      "type": 'html',
      "html": `
        <div class="yt-live"><h4>Puppies</h4><iframe width="560" height="315" src="https://www.youtube.com/embed/fdMKbZnx0LI?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="yt-live"><h4>Kittens</h4><iframe width="560" height="315" src="https://www.youtube.com/embed/M5huFQWHyVI?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="yt-live"><h4>Fish</h4><iframe width="560" height="315" src="https://www.youtube.com/embed/HYknTgcw2BM?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="yt-live"><h4>Birds</h4><iframe width="560" height="315" src="https://www.youtube.com/embed/tHKvusCEic4?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      `
    },
    "subtitle_html": "<span class='smaller'>[from around the world]</span><br>BETA TEST EXPERIENCE"
	}
};

function loadDataStuff () {
  (document.head || document.body).insertAdjacentHTML('beforeend', `
      <style id="data-extra-styles">
        .prism-wrap {
            width: 400px !important;
        }
        html.prism-alt .prism-wrap,
        html.is-phone .prism-wrap {
            width: calc( 100% - 10px) !important;
        }
        @media (max-width: 825px) {
          .prism-wrap {
              width: calc( 100% - 10px) !important;
          }        
        }
        .prism-wrap {
            margin: 5px;
        }
        .prism-wrap .hover {
            opacity: 0 !important;
        }
    
        .prism-wrap .shell > * {
            transform: none !important;
        }      
        .prism-wrap .shell .time {
            margin-bottom: unset !important;
        }      
        .prism-wrap .shell .alert-hover .icon {
            display: none;
        }
        .yt-live {
            margin: 0 5px;
        }
        .yt-live h4 {
            margin: 5px 0;
            text-align: center;
        }
     </style>`);
}

if (/comp|inter|loaded/.test(document.readyState)) {
  loadDataStuff();
} else {
  document.addEventListener('DOMContentLoaded', loadDataStuff, {once: true, passive: true});
}
