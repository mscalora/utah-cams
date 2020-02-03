window.cam_data = {
	"cottonwoods": {
		"title" : "Cottonwood Canyons",
		"link" : "Cottonwood Canyons UDOT",
		"cams": [
			["The Mouth of BCC (Wasatch Blvd & SR190)", "https://udottraffic.utah.gov/1_devices/aux14605.jpeg"],
			["BCC - SR190 @ MP 4.1 - Dogwood", "https://udottraffic.utah.gov/1_devices/aux16212.jpeg"],
			["BCC - SR190 @ MP 6.4 - S Curves", "https://udottraffic.utah.gov/1_devices/aux16213.jpeg", "bcc-scurve"],
			["BCC - SR190 @ MP 10 - Butler/Mill D South", "https://udottraffic.utah.gov/1_devices/aux16214.jpeg"],
			["BCC - SR190 @ MP 10.7 - Cardiff Fork", "https://udottraffic.utah.gov/1_devices/aux16215.jpeg"],
			["BCC - SR190 @ MP 12.54", "https://udottraffic.utah.gov/1_devices/aux16216.jpeg"],
			["Bottom of Little Cottonwood Canyon", "https://udottraffic.utah.gov/1_devices/aux14604.jpeg", "mouth-of-lcc"],
			["LCC - Upper Vault - MP 5.9", "https://udottraffic.utah.gov/1_devices/aux16265.jpeg"],
			["LCC - Lisa Falls - MP 6.5", "https://udottraffic.utah.gov/1_devices/aux16266.jpeg"],
			["LCC - Seven Turns - MP 7.4", "https://udottraffic.utah.gov/1_devices/aux16267.jpeg"],
			["LCC - Tanners Flat - MP 7.9", "https://udottraffic.utah.gov/1_devices/aux16268.jpeg"],
			["LCC - White Pine - MP 8.7", "https://udottraffic.utah.gov/1_devices/aux16269.jpeg"],
			["LCC - White Pine Parking - MP 9.2", "https://udottraffic.utah.gov/1_devices/aux16270.jpeg"]
		]
	},
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
	"provo": {
		"title" : "Provo Canyon",
		"link" : "Provo Canyon UDOT",
		"cams": [
          ["Mouth of Provo Canyon","https://udottraffic.utah.gov/1_devices/aux14310.jpeg"],
          ["Milepost 8","https://udottraffic.utah.gov/1_devices/aux16513.jpeg"],
          ["Canyon View Park mm 8","https://udottraffic.utah.gov/1_devices/aux15040.jpeg"],
          ["Springdell mm 9","https://udottraffic.utah.gov/1_devices/aux16514.jpeg"],
          ["Canyon Glenn mm 10","https://udottraffic.utah.gov/1_devices/aux15041.jpeg"],
          ["Milepost 12","https://udottraffic.utah.gov/1_devices/aux15042.jpeg"],
          ["Vivian mm 13","https://udottraffic.utah.gov/1_devices/aux15044.jpeg"],
          ["Sundance Turnoff mm 14","https://udottraffic.utah.gov/1_devices/aux15045.jpeg"],
          ["Meadow mm 16","https://udottraffic.utah.gov/1_devices/aux15047.jpeg"],
          ["Lower Deer Creek mm 17","https://udottraffic.utah.gov/1_devices/aux15048.jpeg"],
          ["Deer Creek Dam mm 18","https://udottraffic.utah.gov/1_devices/aux15108.jpeg"],
          ["Pine Hollow", "https://udottraffic.utah.gov/1_devices/sr-92-mp-14.gif"]
		]
	},
	"alta": {
		"title" : "Alta Mountain",
		"link" : "Alta Mountain Cams",
		"cams" : [
            ["Sugar Peak", "https://media.alta.com/resources/mtncam/sugar_peak.jpg"],
            ["Collins", "https://media.alta.com/resources/mtncam/collins_dtc.jpg"]
		],
		"offline-cams": [
			["East Greeley Mountain Cam","https://media.alta.com/resources//mtncam/alfsfull.jpg"],
			["Mount Superior Mountain Cam","https://media.alta.com/resources/mtncam/mtspcam.jpg"],
			["High Rustler Mountain Cam","https://media.alta.com/resources/mtncam/altafull.jpg"],
			["Sunnyside Mountain Cam","https://media.alta.com/resources/mtncam/albcam2.jpg"],
			["Sugarloaf Peak Mountain Cam","https://media.alta.com/resources/mtncam/sugar_peak.jpg"],
			["View of Salt Lake Valley","https://media.alta.com/resources/mtncam/collins_dtc.jpg"]
    ]
	},
	"snowbird": {
		"title" : "Snowbird Mountain",
		"link" : "Snowbird Mountain Cams",
		"cams" : [
		  ["Hidden Peak", "https://www.snowbird.com/webcams/resized/PrismCam_HiddenPeak-RESIZED.jpg"],
		  ["Powder Paradise", "https://www.snowbird.com/webcams/resized/PeakCam_Mineral-RESIZED.jpg"]
    ]
	},
	"solitude": {
		"title" : "Solitude Mountain",
		"link" : "Solitude Mountain Cams",
		"cams": [
			["Powderhorn", "https://webcams.solitudemountain.com/ph.jpg"],
			["Last Chance", "https://webcams.solitudemountain.com/LCMC.jpg"],
			["Roundhouse 1", "https://webcams.solitudemountain.com/rh1.jpg"],
			["Roundhouse 2", "https://webcams.solitudemountain.com/rh2.jpg"],
			["Moonbeam Lodge", "https://webcams.solitudemountain.com/mbl.jpg"]
		]
	},
	"parkcity": {
		"title" : "Park City & Canyons",
		"link" : "Park City Cams",
		"cams" : [
			["PC Snow Stake", "https://common.snow.com/Mtncams/PCSnowStake.jpg"],
			["Canyons Snow Stake", "https://common.snow.com/Mtncams/CanyonsSnowStake.jpg"],
      ["Townie","https://b6.hdrelay.com/camera/e44d449a-8d01-4c47-8394-14bbf77c273e/snapshot"]
		]
  },
	"deervalley": {
		"title" : "Deer Valley",
		"link" : "Deer Valley Cams",
		"cams": [
		  ["Burns Top", "https://cdn.deervalley.com/web/content/Images/webcams/BurnsTop.jpg"],
      ["Empire Canyon", "https://cdn.deervalley.com/web/content/Images/webcams/empire.jpg"],
      ["Empire Peak", "https://cdn.deervalley.com/web/content/Images/webcams/empiretop.jpg"],
      ["Silver Lake", "https://cdn.deervalley.com/web/content/Images/webcams/silverlake.jpg"],
      ["Silver Strike", "https://cdn.deervalley.com/web/content/Images/webcams/silverstrike.jpg"],
      ["Snow Park", "https://cdn.deervalley.com/web/content/Images/webcams/snowpark.jpg"],
      ["Sultan", "https://cdn.deervalley.com/web/content/Images/webcams/sultan.jpg"],
      ["Wasatch", "https://cdn.deervalley.com/web/content/Images/webcams/WasatchTop.jpg"]
		]
	},
	"other": {
		"title" : "Interesting Regional",
		"link" : "Miscellaneous Interesting Webcams",
		"cams": [
			["Island In The Sky","http://eldesierto.org/Isky.jpg"],
			["Mesa Verde","http://eldesierto.org/Mverde.jpg"],
			["Bald Mesa","http://eldesierto.org/BaldMesa.jpg"],
			// ["Park City","https://b6.hdrelay.com/camera/e44d449a-8d01-4c47-8394-14bbf77c273e/snapshot"],
			["U of U Weather", "http://timecam.tv/upload_image_tc/metwest/MeteoWest.jpg"],
			["BYU Weather","https://marvin.byu.edu/Weather/webcam800.jpg"],
			["Zions NP","https://www.nps.gov/webcams-zion/camera.jpg"],
			["Bear Lake","http://bearlakeweather.com/upload/netcam.jpg"],
			// ["Bountiful Bench SW","https://www.rogowx.org/SW_1min_000.jpg"],
			// ["Bountiful Bench S","https://www.rogowx.org/S_1min_000.jpg"],
			// ["Utah Lake","https://nexusapi.dropcam.com/get_image?width=1900&uuid=0731a258218a462f9c822c967170d36d"],
			["Utah Lake","https://nexusapi-us1.camera.home.nest.com/get_image?uuid=0731a258218a462f9c822c967170d36d&width=1080&public=cDr5GtmWpl"],
			["Alpine","https://www.wasatchhiker.com/wp-content/uploads/weather/weathercam.jpg"],
			["Oak City NE","https://www.finarv.net/weather/cam_1.jpg"],
			["Oak City S","https://www.finarv.net/weather/cam_2.jpg"],
			["Price","http://wwc.instacam.com/instacamimg/PRCES/PRCES_l.jpg"],
			["Bryce Canyon","https://webcam.rubysinn.com/webcam/bryce-canyon-web-cam.jpg"]
		]
	},
	"street": {
		"title" : "Misc Utah City",
		"link" : "Miscellaneous Utah City Webcams",
		"cams": [
			["Parley's Canyon @ East Canyon on I-80", "https://udottraffic.utah.gov/1_devices/aux158.jpeg", "parleys-canyon-i80-east-canyon"],
			["Triumph Blvd @ Cabelas Blvd Lehi", "https://udottraffic.utah.gov/1_devices/aux15864.jpeg", "cabelas-lehi"],
			["I215 E & Parleys Canyon", "https://udottraffic.utah.gov/1_devices/aux148.jpeg", "i215e-parleys-canyon"],
			["SLC Beck Street & Victory Rd", "https://udottraffic.utah.gov/1_devices/aux180.jpeg", "beck-st-victory-rd-slc"],
			["I-80 at Wendover, NV -", "https://udottraffic.utah.gov/1_devices/RWIS%20I-80%20@%20MP1.jpg", "i80-wendover-mp-1"],
			["I-70 EB @ Sage Flat Rd Salina", "https://www.udottraffic.utah.gov/1_devices/aux16240.jpeg", "i70-sage-flat"],
			["I15 & University Ave Provo", "https://udottraffic.utah.gov/1_devices/aux15859.jpeg", "i15-university-ave-provo"],
			["200 S Main St Salt Lake City", "https://udottraffic.utah.gov/1_devices/aux15525.jpeg", "200s-main-st-slc"],
			["2100 S @ 1300 E Salt Lake City", "https://udottraffic.utah.gov/1_devices/aux343.jpeg", "2100s-1300e-slc"],
			["State St & Center St Orem", "https://udottraffic.utah.gov/1_devices/aux404.jpeg", "center-st-state-st-orem"]
		],
		"inactive-cams" : [
			["US40 @ Daniels Summit MP 33.45 -", "https://udottraffic.utah.gov/1_devices/aux15578.jpeg", "daniels-summit-mp-33"]
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
     </style>`);
}

if (/comp|inter|loaded/.test(document.readyState)) {
  loadDataStuff();
} else {
  document.addEventListener('DOMContentLoaded', loadDataStuff, {once: true, passive: true});
}
