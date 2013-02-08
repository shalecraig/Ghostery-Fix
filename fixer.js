// Google Analytics
// Google Analytics
window._gaq = {
	push: function() {
		var i, args;
		for(i=0; i<arguments.length; i++) {
			args = arguments[i];
			if (args.length) {
				if(args[0] === "_link") {
					window.location = arguments[1];
				} else if (args[0] === "_linkByPost") {
					arguments[1].submit();
				}
			}
		}
	}
};