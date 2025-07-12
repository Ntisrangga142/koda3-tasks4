function isValidPositiveNumber(input) {
  return typeof input === 'number' &&  input > 0;
}

function cetakTabel (n){
    for(let i = 1; i <= 10; i++){
        console.log(`${n} x ${i} = ${n*i}`)
    }
}

exports.main3 = function (number){
    try{
        if(!isValidPositiveNumber(number)) throw new Error ('Parameter harus berupa tipe data nomor dan harus positif !');
        cetakTabel(number);

    } catch (err){
        console.log(err.message)
    }
}

// const number = 3;
// try{
//     main(number)
// }catch (err){
//     console.log(err.message);
// }