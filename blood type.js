function canGiveBlood(x, y){
    const Oneg = ['AB+','AB-','A+','A-','B+','B-','O+','O-']
    const Opos = ['AB+','A+','B+','O+']
    const Bneg = ['AB+','AB-','B+','O+']
    const Bpos = ['AB+','B+']
    const Aneg = ['AB+','AB-','A+','A-']
    const Apos = ['AB+','A+']
    const ABneg = ['AB+','AB-']
    const ABpos = ['AB+']

    if (x == 'O-' && Oneg.includes(y)){
        return true;
    } else if (x == 'O+' && Opos.includes(y)){
        return true;
    } else if (x == 'B-' && Bneg.includes(y)){
        return true;
    } else if (x == 'B+' && Bpos.includes(y)){
        return true;
    } else if (x == 'A-' && Aneg.includes(y)){
        return true;
    } else if (x == 'A+' && Apos.includes(y)){
        return true;
    } else if (x == 'AB-' && ABneg.includes(y)){
        return true;
    } else if (x == 'AB+' && ABpos.includes(y)){
        return true;
    }else{
        return false;
    }
}

console.log('Result:');
console.log('(O+ to A+): ', canGiveBlood('O+', 'A+'));
console.log('(A- to B-): ', canGiveBlood('A-', 'B-'));
console.log('(A- to AB-): ', canGiveBlood('A-', 'AB-'));