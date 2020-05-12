document.addEventListener('DOMContentLoaded', function(){
    let div_hello = document.createElement('div')

    div_hello.append('Hello, I can do JavaScripting!')
    document.getElementsByTagName('body')[0].appendChild(div_hello)
}, false)

btn = document.getElementById('sub_btn')
btn.addEventListener("click", function(){
    let added_text_to_body = document.createElement('div')

    if (document.getElementById('sub_input').value.length){
        added_text_to_body.append(document.getElementById('sub_input').value)
    }
    else {
        added_text_to_body.append('ADDED TEXT')
    }
    document.getElementsByTagName('body')[0].appendChild(added_text_to_body)
})