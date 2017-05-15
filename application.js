$(document).ready(function(){

	var cssChanges = {

	}
  
$("body").find("*").hover(function(){
		$(this).css("box-shadow","0px 0px 5px 0px rgba(0, 255, 0, 0.67)")
		$(this).click(function(e){
			e.stopPropagation(); //stop after finding the element selector
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

        $('#cssinputhelper').remove()
        $(this).append(showInput(selector))
        $('*').off('click')
        return console.log(selector)

    })
	},function(){
		$(this).css("box-shadow", "none")
})

var showInput = function(selector){
	var input = `<div id='cssinputhelper' style="display:flex; flex-direction:column; margin: 20px; border: 2px solid black; padding: 5px; justify-content: center; align-items: center;">
								<label for="selector">${selector}</label>
								<div>
									<input type="text" placeholder="Property" />
									<input type="text" placeholder="Value" />
									<button>check</button>
									<button>ex</button>
								</div>
							</div>`
	return input
}

});


