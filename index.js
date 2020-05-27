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


let test_global_variable = 1
function global_variable_changing() {
    console.log('current global variable is', test_global_variable)
    test_global_variable = 2
    console.log('current global variable is', test_global_variable)
}
global_variable_changing()

function local_variable_print(){
    let local_variable = 'local'
    console.log('local variable is', local_variable, '; and global is', test_global_variable)
}
local_variable_print()

var var_variable = 'var_variable'
function var_changing(var_variable){
    console.log('current var variable is', var_variable)
    var var_variable = 123
    console.log('current var variable is', var_variable)
}
var_changing(var_variable)


const mockData = ['Bob', 'Alice', 'John', true, 100, 50, { name: "Doe" }]
for (i in mockData){
    console.log(mockData[i])
}

for (i = 0; i < 3; i++){
    console.log(mockData[i])
}

var mockDataCounter = 0
while (mockDataCounter < 3){
    console.log(mockData[mockDataCounter])
    mockDataCounter++
}

var mockDataCounterWithoutObject = 0
while (mockData[mockDataCounterWithoutObject]){
    if (mockData[mockDataCounterWithoutObject].constructor != Object){
        console.log(mockData[mockDataCounterWithoutObject])
    }
    mockDataCounterWithoutObject++
}

mockDataCounterDoWhile = 0
do {
    console.log(mockData[mockDataCounterDoWhile])
    mockDataCounterDoWhile++
}
while (mockData[mockDataCounterDoWhile])