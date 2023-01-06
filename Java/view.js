const countEl = document.getElementById('count');
function updateVistedCount(){
    fetch()
    .then(res=>res.json())
    .then(res =>{
        countEl.innerHTML=res.value;
    });
};
// 



