
//Survey cehckbox
var radios = document.getElementsByClassName('radio');
for(i=0; i<radios.length; i++ ) {
    radios[i].onclick = function(e) {
    if(e.ctrlKey || e.metaKey) {
        this.checked = false;
        }
    }
};

//Survey cehckbox

var myDate = new Date().getTime();
document.getElementById('date').innerHTML = myDate;