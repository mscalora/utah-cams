window.test_data = {
  "sundace": {
    "title" : "Sundance",
    "link" : "Sundance Cams",
    "prism" : {
      metadataUrl: "https://php.prismcam.com/public/helpers/cam_init.php",
      metaDataParams: {cams:'',pages:1546311408,url: 'https://www.sundanceresort.com/mountain-report/'},
      camFields: {
        collectionPath: "pages",
        namePath: "${cam.camTitle}",
        urlPath: "https://storage.googleapis.com/prism-cam-${current.imagePath}/720.jpg"
      }
    },
    cams: [ ]
  },
	"deervalley": {
		"title" : "Deer Valley",
		"link" : "Deer Valley Cams",
		"cams": [
			["Empire","//cdn.deervalley.com/web/Content/images/webcams/empire.jpg"], 
		]
	},
  "other": {
    "title": "Interesting Regional",
    "link": "Miscellaneous Interesting Webcams",
    "cams": [
      ["Park City", "https://b6.hdrelay.com/camera/e44d449a-8d01-4c47-8394-14bbf77c273e/snapshot"]
    ]
  }
};
