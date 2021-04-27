let output = document.querySelector('.output')
let button = document.querySelectorAll('.calc-btn')
let num = ''
let expression = ''
let chekNum = false

let operation = ['+','-','*','/','.']

button.forEach(btn => {
    btn.addEventListener('click', () => {
        let currentValue = btn.textContent
        if (currentValue === 'C') {
            clear()
        } else if (currentValue === '=') {
            result()
        } else if (operation.includes(currentValue)) {
            if (operation.includes(expression[expression.length - 1])) {
                expression = expression.slice(0, expression.length - 1) + currentValue
            } else {
                if (chekNum === false) {
                    expression = expression + currentValue
                    chekNum = true
                } else {
                    output.textContent = eval(expression)
                    expression = eval(expression) + currentValue
                    console.log(expression)
                }
            }
            num = ''
        } else {
            num = num + currentValue
            expression = expression + currentValue
            output.textContent = num
        }
    })
})

function  clear(){
    num = ''
    expression = ''
    output.textContent  = '0'
}
function result(){
    output.textContent = eval(expression) || 0
    num = ''
}
VanillaTilt.init(document.querySelector(".container"), {
    max: 25,
    speed: 300,
    glare: true,
    "max-glare": 0.2,
});
