var myCanvas = document.getElementById('myCanvas');
		myCanvas.width = window.screen.availWidth;
		myCanvas.height = window.screen.availHeight; 
		var draw = myCanvas.getContext('2d');
		draw.beginPath();
		// draw.fillStyle = "#666";
		// draw.fillRect(0, 0, myCanvas.width, myCanvas.height);
		var oImg = document.images[0];
		//$(window).on('load', function(){
			draw.drawImage(oImg, 0, 0, myCanvas.width, myCanvas.height);

		//});
		draw.closePath();
		draw.globalCompositeOperation="destination-out";//设置与原路径重叠的部分会变透明
		myCanvas.addEventListener('touchstart', function(e){
			myCanvas.addEventListener('touchmove', function(e){
				e.preventDefault();//阻止浏览器的默认行为，取消在canvas上滑动时页面的拖拽效果对touch事件的影响
				draw.beginPath();
				draw.fillStyle = "#ff0";
				draw.arc(e.targetTouches[0].clientX, e.targetTouches[0].clientY, 20, 0, Math.PI*2);
				draw.fill();
				draw.closePath();
			});
			myCanvas.addEventListener('touchend', function(e){
				var num = 0;
				var datas = draw.getImageData(0,0,myCanvas.width,myCanvas.height);
				for (var i = 0; i < datas.data.length; i++) {
					if (datas.data[i] == 0) {
					num++;
				};
			};
			if (num >= datas.data.length * 0.7) {
				draw.fillRect(0, 0, myCanvas.width, myCanvas.height);
			};
});
		});