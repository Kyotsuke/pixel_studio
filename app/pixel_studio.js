var pixel_studio = {

	init: function(){

		// COLOR		
		let colors = [
			new Color('green', [56,187,136]),
			new Color('purple', [135,35,111]),
			new Color('sand', [220,194,140]),
			new Color('lilas', [151,156,197]),
			new Color('cadetblue', [95,158,160]),
			new Color('firebrick', [178,34,34]),
			new Color('palegoldenrod', [238,232,170]),
		];

		this.palette_color.init( colors );

		// TOOLS
		let tools = [
			new Tool('brush', 'images/brush.png'),
			new Tool('eraser', 'images/eraser.png')
		];

		this.palette_tool.init( tools );

		// CANVAS
		this.canvas.init("zone_dessin", window.innerWidth - 125, window.innerHeight - 10, 100);

		console.log('Pixel studio is initiated and ready');
	}
};

