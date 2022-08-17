const data = ['Иван','Иванов', 'Отдел разработки']

function func(emp) {
    let [name, surname, department] = emp;

    let position;
    if(position !== undefined) {
        position = emp[3]
    }else(
        posoition = 'Junior'
    )

    console.log(name, surname, department, position);
}

func(data)