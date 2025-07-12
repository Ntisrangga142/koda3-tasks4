function isValidPositiveNumber(input) {
  return typeof input === 'number' &&  input > 0;
}

function triangle (n){
    for(let i = 1; i <= n; i++){
        let kalimat = ""
        for(let j = i; j >= 1; j--){
            kalimat += `${j} `
        }
        console.log(kalimat)
    }
}

exports.main2 = function (number){
    try{
        if(!isValidPositiveNumber(number)) throw new Error ('Parameter harus berupa tipe data nomor dan harus positif !');
        triangle(number);

    } catch (err){
        console.log(err.message)
    }
}

// const number = 10;
// try{
//     main(number)
// }catch (err){
//     console.log(err.message);
// }