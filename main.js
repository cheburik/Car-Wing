let btn = document.getElementById('btn')

let theme = document.getElementById('theme')

btn.onclick = function(){
    if(theme.getAttribute('href') == 'light.css'){
        theme.href = 'dark.css'
    }
    else{
        theme.href = 'light.css'
    }
}