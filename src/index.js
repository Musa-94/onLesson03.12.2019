class Convert {
    constructor() {
        this._word = '';
        this._temp = '';
        this._arrFrom0to10 = ['','один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
        this._arrFrom10to20 = ['десять','одинадцать', 'двинадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'восемнадцать', 'девятнадцать'];
        this._arrFrom20to90 = ['','двадцать', 'тридцать', 'сорок', 'пядесят', 'шестидесят', 'семдисят', 'восемдисят', 'девяносто'];
        this._arrFrom100to900 = ['','сто', 'двести', 'тристо', 'честыресто', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятсот'];
        this._arrFrom1000 = ['тысяча', 'тысячи', 'тысяч'];
    }

    convertToString = num => {
        if(!num || num === 0) {
            throw new Error('Введите число больше нуля');
        }
        this.search(num);
    
        return this._word;
    };

    search = num => {  
        num = `${num}`;
            switch (num.length) {
            case 1:
                this.from0to10(num);

                break;
            case 2:
                this.from11to99(num);
            
                break;
            case 3:
                this.hundred(num);

                break;
            case 4:
                this.thousand(num);

                break;                 
            default:
                break;
        }
    };

    from0to10 = (num) => {
        this._word += this._arrFrom0to10[+num - 1];
    };

    from11to99 = (num) => {
        let firstNumber = (Math.trunc((+num)/10));
        let secondNumber = ((+num)%10);

        if (+num < 20) {
            this._word += this._arrFrom10to20[(secondNumber)]; 
        } else {                 //если число больше 20 считать начало + вызов функции серч со 2 цифрой 
            this._word += this._arrFrom20to90[firstNumber-2] + ' ';

            this.search(secondNumber);
        }    
    };

    from10to99 = (num) => {
        let firstNumber = (Math.trunc((+num)/10));
        let secondNumber = ((+num)%10);

        if (+num < 20) {
            this._word += this._arrFrom10to20[(secondNumber)]; 
        } else {                 //если число больше 20 считать начало + вызов функции серч со 2 цифрой 
            this._word += this._arrFrom20to90[firstNumber-2] + ' ';

            this.search(secondNumber);
        }    
    };

//     hundred = (num) => {
//         let first = +num[0];
//         this._word += this._arrFrom0to10[first - 1] + ' ' + this._arrFrom1000[0] + ' ';

//             //первые 

//         this.search(num % 100); //идет вызывать ост часть
//     };

//     thousand = (num) => {
//         let first = +num[0];
//         this._word += this._arrFrom0to10[first - 1] + ' ' + this._arrFrom1000[1] + ' ' ;

//         this.search(num % 1000); //идет вызывать ост часть
//     };
}


export default Convert; 