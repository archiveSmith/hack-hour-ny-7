/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    let roman = '';
    let times = Math.floor(n/1000);
    if (times >= 1){
        roman += 'M'.repeat(times);
    }
    let remainder = n % 1000;
    if (remainder){
        times = Math.floor(remainder/900);
        if (times >= 1){
            roman += 'CM'.repeat(times);
            remainder = n % 900;
        }
    }
    if (remainder){
    times = Math.floor(remainder/500);
    if (times >= 1){
        roman += 'D'.repeat(times);
        remainder = n % 500;
    }
}   
    
if (remainder){
    times = Math.floor(remainder/400);
    if (times >= 1){
        roman += 'CD'.repeat(times);
        remainder = n % 400;
    }
}

if (remainder){
    times = Math.floor(remainder/100);
    if (times >= 1){
        roman += 'C'.repeat(times);
        remainder = n % 100;
    }
}

if (remainder){
    times = Math.floor(remainder/90);
    if (times >= 1){
        roman += 'XC'.repeat(times);
        remainder = n % 90;
    }
}

if (remainder){
    times = Math.floor(remainder/50);
    if (times >= 1){
        roman += 'L'.repeat(times);
        remainder = n % 50;
    }
}

if (remainder){
    times = Math.floor(remainder/40);
    if (times >= 1){
        roman += 'XL'.repeat(times);
        remainder = n % 50;
    }
}

if (remainder){
    times = Math.floor(remainder/10);
    if (times >= 1){
        roman += 'X'.repeat(times);
        remainder = n % 10;
    }
}

if (remainder){
    times = Math.floor(remainder/9);
    if (times >= 1){
        roman += 'IX'.repeat(times);
        remainder = n % 9;
    }
}

if (remainder){
    times = Math.floor(remainder/5);
    if (times >= 1){
        roman += 'V'.repeat(times);
        remainder = n % 5;
    }
}

if (remainder){
    times = Math.floor(remainder/4);
    if (times >= 1){
        roman += 'IV'.repeat(times);
        remainder = n % 4;
    }
}

if (remainder){
    times = Math.floor(remainder/1);
    if (times >= 1){
        roman += 'I'.repeat(times);
}
}
return roman;
}





module.exports = romanNumeral;
