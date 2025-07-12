function isValidPositiveNumber(input) {
  return typeof input === 'number' &&  input > 0;
}

function triangle (n){
    for(let i = 1; i <= n; i++){
        let kalimat = ""
        for(let j = 1; j <= i; j++){
            kalimat += `${j} `
        }
        console.log(kalimat)
    }
}

exports.main1 = function (number){
    try{
        if(!isValidPositiveNumber(number)) throw new Error ('Parameter harus berupa tipe data nomor dan harus positif !');
        triangle(number);

    } catch (err){
        console.log(err.message)
    }
}

