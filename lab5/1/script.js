function employees(data) {
    const tabody = document.querySelector('#datatable tbody');
    let rows = ''; // เก็บแถวของข้อมูล

    data.forEach(employee => {
        let genderFM = '';

        if (employee.Gender === 'Female') {
            genderFM = 'F';
        } else if (employee.Gender === 'Male') {
            genderFM = 'M';
        }

        rows += `<tr>
                    <td>${employee.id}</td>
                    <td>${employee.FirstName} ${employee.LastName}</td>
                    <td>${genderFM}</td>
                    <td>${employee.Position}</td>
                    <td>${employee.Address}</td>
                    </tr>`;
    });

    tabody.innerHTML = rows; // แสดงข้อมูลใน tbody
}

fetch('employees.json')
    .then(response => response.json())
    .then(data => employees(data))
    .catch(error => console.log('error', error));