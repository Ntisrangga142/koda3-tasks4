exports.buatRentang = function (x, y){
    let kalimat = ""
    for(let i = x; i <= y; i++){
        if (i == y){kalimat += `${i}`; break;}
        kalimat += `${i}, `;
    }
    return kalimat;
} 

