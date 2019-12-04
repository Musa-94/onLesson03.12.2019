const Convert = function() {
    
}



Convert.prototype.convertToString = function(num) {
    const numStrings = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    let word = '';
    
    if(!num) {
        throw new Error('Введите число');
    }
    for( i = 0; i < numStrings.length; i++) {
        if(num === i) {
            word = numStrings[i];
        } 
    }

    return word;
}



module.exports = Convert; 