function student(data) {
    const container = document.getElementById('std-container');
    container.className = 'container justify-content-center';

    const row = document.createElement('div');
    row.className = 'row row-cols-1 row-cols-md-5 g-4 py-5';

    data.forEach((std, index) => {
        let genderFM = '';
        if (std.gender === 'Female') {
            genderFM = 'img/img_female.png';
        } else if (std.gender === 'Male') {
            genderFM = 'img/img_male.png';
        }

        const col = document.createElement('div');
        col.className = 'col';

        const card = document.createElement('div');
        card.className = 'card shadow';
        card.style = 'width: 15rem;';

        card.innerHTML = `<img class="card-img-top" src="${genderFM}">`

        const cardbody = document.createElement('div');
        cardbody.className = 'card-body';

        cardbody.innerHTML = `
            <h4 class="card-title">${index + 1}. ${std.name}</h4>
            <p>Physics : ${std.physics}</p>
            <p>Maths : ${std.maths}</p>
            <p>English : ${std.english}</p>
        `;
        
        card.appendChild(cardbody);
        col.appendChild(card);
        row.appendChild(col);
    });

    container.appendChild(row);
}

fetch('student-score.json')
    .then(response => response.json())
    .then(data => student(data))
    .catch(error => console.log('error', error));