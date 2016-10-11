
class Pencil extends Tool{

	constructor( canvas ){
		super('pencil', 'images/pencil.png');

		this.canvas = canvas;

		this.drawing = false;
	}

	on_mousedown( mouse_event ){

		this.draw(mouse_event);
		this.drawing = true
	}

	on_mousemove( mouse_event ){
		if (this.drawing) this.draw(mouse_event);
	}

	on_mouseup( mouse_event ){
		this.drawing = false;
	}

	draw( mouse_event ){
		let ps 	 	 = pixel_studio,
			position = ps.canvas.screen_to_canvas(mouse_event),
			color 	 = ps.palette_color.get_selected();			

		this.canvas.draw(position.x, position.y, color);
	}
}