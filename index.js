document.addEventListener('DOMContentLoaded', function(){
    let div_hello = document.createElement('div')

    div_hello.append('Hello, I can do JavaScripting!')
    document.getElementsByTagName('body')[0].appendChild(div_hello)
}, false)


const btn = document.getElementById('sub_btn')
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


const btn_my_name = document.getElementById('myButton')
const my_name = 'Vladyslav'
btn_my_name.addEventListener('mouseenter', function(event) {
    console.log(my_name)
})

btn_my_name.addEventListener('click', function(event) {
    alert(my_name)
})


const students = [
    {
      name: "Stasya",
      id: "id0101"
    },
    {
      name: "Valya",
      id: "id0102"
    },
    {
      name: "Lena",
      id: "id0103"
    }
]

function create_table(){
    if (students.length){
        const append_table_elem = document.getElementById('address-table')
        const table = document.createElement('table')

        tr = table.insertRow()
        for (let title in students[0]){
            td = tr.insertCell()
            td.appendChild(document.createTextNode(title))
        }
        students.forEach (student => create_student(student))

        function create_student(student_element){
            let tr = table.insertRow()
            for (let student_data in student_element){
                let td = tr.insertCell()
                td.appendChild(document.createTextNode(student_element[student_data]))
            }
        }
        append_table_elem.appendChild(table)
    }
}
create_table()