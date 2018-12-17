function text_bg(color_text)    {
    $( document ).ready(function() {
        $("body").prepend(" <pre id = 'text_bg'></pre> ")
        $("#text_bg").css({
                       "user-select":"none",
                       "cursor":"default",
                       "max-width":"100%",
                       "overflow-x":"hidden",
                       "position":"absolute",
                       "z-index":"-100000",
                       "color":color_text})
        
        id = "text_bg"
        text = ("<html><head>"+document.head.innerHTML+"</head><body>"+document.body.innerHTML+"</body></html>").split("\n")
        for (i=0; i< text.length; i++){
            text[i]+="\n"
        }

        var ele = document.getElementById(id),
	    txt = text.join("").split("");
        var interval = setInterval(function(){
		if(!txt[0]){

			return clearInterval(interval);
		};

		ele.innerHTML += txt.shift();
	    });
    });
    
};
