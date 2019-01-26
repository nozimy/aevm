export const sys16const = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F'
}

export function translate10toAny(system, num10){
    const sys = parseInt(system);
    let result = '';
    let ostatok = 0; let chastnoe = 0;
    
    chastnoe = num10;
    do{
      ostatok = chastnoe % sys;
      if (sys == 16)  ostatok = ostatok.toString(sys);
      result = ostatok + '' + result;
      chastnoe = Math.floor(chastnoe / sys);
      
    } while (chastnoe !== 0);
    
    return result;
}

export function translateAnyto10(system, num){
    const sys = parseInt(system);
    let result = 0;
    
    num = '' + num;
    
    for(let i = 0; i < num.length; i++){
        let exponent = num.length-1-i;
        result += parseInt(num[i], sys) * Math.pow(sys,  exponent);
    }
    
    
    return '' + result;
}

export function frac10ToAny(numSys, frac10, dec = 1){
    const sys = parseInt(numSys);
    let ostatok = 0;
    let result = '';
    let temp = 0;
    
    
    ostatok = parseFloat(frac10);
    
    do{
        dec--;
        temp = ostatok * sys;
        
        if (sys == 16)
            result += Math.floor(temp).toString(sys)
        else
            result += Math.floor(temp)
        
        ostatok = frac(temp);
    }while(ostatok !== 0 && dec > 0)
    
    return result;
}

export function fracAnyTo10(numSys, frac, dec = 1){
    const sys = parseInt(numSys);
    let result = 0;
    
    frac = '' + frac;
    
    for(let i = 0; i < frac.length; i++){
        let exponent = -(i+1);
        result += parseInt(frac[i], sys) * Math.pow(sys, exponent);
    }
    
    
    return String(result).split('.')[1];
}

export function frac(f) {
    // f = '0.' + String(f).split('.')[1];
    // return parseFloat(f);
    return f % 1;
}