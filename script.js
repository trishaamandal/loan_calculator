
document.getElementById('loan-form').addEventListener('submit',calculateResults);;

const form = document.getElementById('loan-form');
form.addEventListener('submit',function(e){
document.getElementById('results').style.display='none';
document.getElementById('loading').style.display='block';
setTimeout(calculateResults,2000);
e.preventDefault();
});
