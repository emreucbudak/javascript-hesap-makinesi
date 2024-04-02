let sonuc = document.querySelector(".result");
const islems = document.querySelector(".input");
const buton = document.querySelector(".buttons");
const esitlik = document.querySelector("#esit");
let d;
esitlik.addEventListener("click",hesapla);
let a = 0;
let c;
buton.addEventListener("click",ekle);
function ekle(e) {
    c = e.target.textContent;
    islems.value +=c;
    islems.textContent+=c;
    c = islems.textContent;
    let z = c.length;
    while (z === 10) {
        console.log(c);
        break;
    }
}
function hesapla () {
    sonuc.textContent = eval(c);
}

