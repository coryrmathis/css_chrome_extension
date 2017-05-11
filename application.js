$(document).ready(function(){
  
$("body").find("*").hover(function(){
		$(this).css("box-shadow","0px 0px 5px 0px rgba(0, 255, 0, 0.67)")
		$(this).click(function(){
			$("._Jig > div > span").css("background-color", "green")
		})
	},function(){
		$(this).css("box-shadow", "none")
})

  
});


