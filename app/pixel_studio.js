var pixel_studio = {

	init: function(){

		// couleur de la palette
		
		let colors = [
			new Color('green', [56,187,136]),
			new Color('purple', [135,35,111]),
			new Color('sand', [220,194,140]),
			new Color('lilas', [151,156,197]),
			new Color('cadetblue', [95,158,160]),
			new Color('firebrick', [178,34,34]),
			new Color('palegoldenrod', [238,232,170]),
		];
		this.palette.init_colors( colors );

		console.log('Pixel studio is initiated and ready');
	}
};

