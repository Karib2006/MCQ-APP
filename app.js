var quantity =  document.querySelector('#times');

document.querySelector('#btn').addEventListener('click', run);

var mainbox = document.querySelector('#mainb')

mainbox.addEventListener('click', test)

var points = 0

function run(){

    for (let i= 1; i<=quantity.value; i++){

        var body = document.createElement('div')
        var check_btn = document.createElement('button')
        check_btn.innerHTML = 'Correct :)'
        check_btn.setAttribute('class', 'check_btn')
        var result_btn = document.createElement('button')
        result_btn.innerHTML = 'PRESS FOR MARKS'
        result_btn.setAttribute('id', 'result')
        var number = document.createElement('h2')
        var Ac = document.createElement('p')
        var Bc = document.createElement('p')
        var Cc = document.createElement('p')
        var Dc = document.createElement('p')
        var Ab = document.createElement('input')
        var Bb = document.createElement('input')
        var Cb = document.createElement('input')
        var Db = document.createElement('input')

        Ac.innerHTML = 'A'
        Bc.innerHTML = 'B'
        Cc.innerHTML = 'C'
        Dc.innerHTML = 'D'

        number.innerHTML = i

        Ab.type= 'checkbox'
        Bb.type= 'checkbox'
        Cb.type= 'checkbox'
        Db.type= 'checkbox'
        number.setAttribute('id', 'numbers')
        body.setAttribute('id', 'mcqdiv')

        body.appendChild(number)
        body.appendChild(Ac)
        body.appendChild(Ab)
        body.appendChild(Bc)
        body.appendChild(Bb)
        body.appendChild(Cc)
        body.appendChild(Cb)
        body.appendChild(Dc)
        body.appendChild(Db)
        body.appendChild(check_btn)

        mainbox.appendChild(body)


    }

    mainbox.appendChild(result_btn)
}

function test(e){

    const item = e.target

    if(item.tagName === 'BUTTON' , item.className === 'check_btn'){

        item.setAttribute('id', 'checked')

        points++

        item.className = ''
    }
    
    if(item.tagName === 'BUTTON', item.id === 'result'){
        var markbox = document.querySelector('#heading')

        var percentage = Math.round((points/quantity.value)*100)

        var marks = 'Marks: ' + points + '/' + quantity.value + ' (' + percentage + '%' + ')'

        var marks_final = document.createElement('h2')

        marks_final.innerHTML = marks

        marks_final.setAttribute('id', 'marks')
        
        markbox.append(marks_final)

        item.id = ''

        location.href = '#heading'

    }
}












