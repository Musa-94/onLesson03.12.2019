const writeWord = function(args) {
	let word = '';
    
	for(let i = 0; i < args.length; i++) {
    	if(i !== args.length-1) {
			word += `${args[i]},`; 
		} else {
			word += `${args[i]}`;
        }
    }

    return word;
}

const writeLetter = function(args) {
	let word = '';
    
	for(let i = 0; i < args.length; i++) {
    	if(i !== args.length-1) {
			word += `${args[i]},`; 
		} else {
			word += `${args[i]}`;
        }
    }

    return word;
}
