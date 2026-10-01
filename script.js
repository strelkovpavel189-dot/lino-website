const form=document.getElementById('f');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const name=new FormData(form).get('name')||'друг';
  document.getElementById('msg').textContent=`Спасибо, ${name}! Демонстрационная заявка принята локально. Реальный сбор подключим отдельно.`;
  form.reset();
});
document.getElementById('lang').addEventListener('click',()=>{
  const b=document.getElementById('lang');
  b.textContent=b.textContent==='EN'?'RU':'EN';
  document.documentElement.lang=document.documentElement.lang==='ru'?'en':'ru';
});
