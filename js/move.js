(function(){

var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

// s=window.innerHeight/500;
// ss=250*(1-s);

// $('.wrap').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');

document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);

$(document).swipeUp(function(){
	if (isAnimating) return;
	
	// last.col = now.col;
	if (now.row != 12) {
		last.row = now.row;
		now.row = now.row+1; 
		// now.col = 1; 
		pageMove(towards.up);
	}else{
		last.row = now.row;
		now.row = 1;
		pageMove(towards.up);
	}
})

$(document).swipeDown(function(){
	if (isAnimating) return;
	
	// last.col = now.col;
	if (now.row!=1) { 
		last.row = now.row;
		now.row = now.row-1; 
		// now.col = 1; 
		pageMove(towards.down);
	}
})
/*
$(document).swipeLeft(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>1 && last.row<5 && last.col==1) { now.row = last.row; now.col = 2; pageMove(towards.left);}	
})

$(document).swipeRight(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>1 && last.row<5 && last.col==2) { now.row = last.row; now.col = 1; pageMove(towards.right);}	
})*/

function pageMove(tw){
	var lastPage = ".page-"+last.row+"-1",
		nowPage = ".page-"+now.row+"-1";
	
	switch(tw) {
		case 1:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		// case 2:
		// 	outClass = 'pt-page-moveToRight';
		// 	inClass = 'pt-page-moveFromLeft';
		// 	break;
		case 3:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		// case 4:
		// 	outClass = 'pt-page-moveToLeft';
		// 	inClass = 'pt-page-moveFromRight';
		// 	break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},600);
}

})();