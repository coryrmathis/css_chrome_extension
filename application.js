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
        $('#csshelpercheck').on('click', handleCheck(selector))
        $('#csshelperex').on('click', handleEx(selector))
        return console.log(JSON.stringify(cssChanges, undefined, 2))

    })
	},function(){
		$(this).css("box-shadow", "none")
})



var handleCheck = function(selector){
	
}

var handleEx = function(selector){

}

var showInput = function(selector){
	var input = `<div id='cssinputhelper' style="display:flex; flex-direction:column; margin: 20px; border: 2px solid black; padding: 5px; justify-content: center; align-items: center;">
								<label for="selector">${selector}</label>
								${addInput(selector)}
							</div>`
	return input
}

var addInput = function(selector){
	var input = `<div>
									<input class='csshelperproperty' type="text" placeholder="Property" />
									<input class='csshelpervalue' type="text" placeholder="Value" />
									<button id='csshelpercheck'>check</button>
									<button id='csshelperex'>ex</button>
								</div>`
	return input
}

});


