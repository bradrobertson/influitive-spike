/**
*
*   @file admin.js
*
*/
$(function(){
  
  $("td.rightcol button").overlay({
    // some mask tweaks suitable for modal dialogs
  	mask: {
  		color: '#ebecff',
  		loadSpeed: 200,
  		opacity: 0.9
  	},
  	onLoad: function(e){
  	  e.target.getOverlay().find("textarea").htmlarea({
        // Override/Specify the Toolbar buttons to show
        toolbar: [
          ["html"],
          ["bold", "italic", "underline"],
          ["p", "|", "h1", "h2"],
          ["justifyLeft", "justifyCenter", "justifyRight"],
          ["link", "unlink"]
        ]
      });
  	}
  });
  
  $("ul.tabs").tabs("div.panes > div"); 
});
