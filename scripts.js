
function calcular(event) {
    event.preventdefault(); 
    let bill = document.getElementById('bill').value;
    let serviceQual = getElementById('serviceQual').value;
    let numOfPeople = getElementById('pessoas').value
    if(bill==''| serviceQual==0){
        alert('Por favor, preencha os valores')
        return;
    }
    if(numOfPeople==""| numOfPeople<=1){
        numOfPeople=1;
        document.getElementById('each').style.display='none';
    } else{
        document.getElementById('each').style.display='block';
    
    }
    let total = (bill*serviceQual)/numOfPeople;
    total=total.toFixed(2);
    document.getElementById('tip').calculadora.HTML = total;
document.getElementById('totalTip').style.display= "block";
}
document.getElementById('totalTip').style.display= "none";
document.getElementById('each').style.display= "none";

document.getElementById('tipsForm').addEventListener("submit", calcular);

