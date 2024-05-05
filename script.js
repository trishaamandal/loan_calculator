document.getElementById('loan-form').addEventListener('submit',calculateResults);;
const form = document.getElementById('loan-form');
form.addEventListener('submit',function(e){
document.getElementById('results').style.display='none';
document.getElementById('loading').style.display='block';
setTimeout(calculateResults,2000);
e.preventDefault();
});
function calculateResults(e){
console.log('calculating...');
const ELamount = document.getElementById('amount');
const ELinterest = document.getElementById('interest');
const ELyears = document.getElementById('years');
const ELMonthly_payment = document.getElementById('monthly-payment');
const ELtotal_payment = document.getElementById('total-payment');
const ELtotal_interest = document.getElementById('total-interest');
const principal = parseFloat(ELamount.value);
const calculatedInterest = parseFloat(ELinterest.value) /100 /12;
const calculatedPayment = parseFloat(ELyears.value )*12;
const x = Math.pow(1 + calculatedInterest, calculatedPayment);
const monthly = (principal * x * calculatedInterest) / (x - 1);
console.log(monthly);
if(isFinite(monthly)){
ELMonthly_payment.value = monthly.toFixed(2);
ELtotal_payment.value = (monthly*calculatedPayment).toFixed(2);
ELtotal_interest.value = ((monthly*calculatedPayment)-principal).toFixed(2);
document.getElementById('results').style.display='block';
document.getElementById('loading').style.display='none';
}else{
console.log("Plase check your numbers");
showError('Plase check your number');
}
e.preventDefault();
}
function showError(error){
document.getElementById('results').style.display='none';
document.getElementById('loading').style.display='none';
