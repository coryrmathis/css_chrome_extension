$(document).ready(function(){
  
$("body").find("*").hover(function(){
		$(this).css("box-shadow","0px 0px 5px 0px rgba(0, 255, 0, 0.67)")
		$(this).click(function(e){
			e.stopPropagation();
			var selector = $(this)
            .parents()
            .map(function() { return this.tagName; })
            .get()
            .reverse()
            .concat([this.nodeName])
            .join(" > ");

          var id = $(this).attr("id");
          if (id) { 
            selector += "#"+ id;
          }

          var classNames = $(this).attr("class");
          if (classNames) {
            selector += "." + $.trim(classNames).replace(/\s/gi, ".");
         }

         var nthChild = $(this).index() + 1
         if ($(this).parent().children().length > 1) {
         	selector += ":nth-child(" + nthChild + ")"
         }

        return console.log(selector)

    })
	},function(){
		$(this).css("box-shadow", "none")
})


});


