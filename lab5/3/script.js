let questions = [];
let userAnswers = {};

function exam(data) {
    const container = document.getElementById('exam-container');
    container.className = 'container';
    container.innerHTML = `<h1 class="text-center pb-3"><i>EXAM</i></h1>`;

    data.forEach((q, index) => {
        const questions = document.createElement('div');
        questions.className = 'mb-4';

        const qtext = document.createElement('div');
        qtext.innerText = `${index + 1}. ${q.question}`;
        questions.appendChild(qtext)

        for (const key in q.answers) {
            if (key !== 'correct') {
                const check = document.createElement('div');
                check.className = 'form-check';

                const opinput = document.createElement('input');
                opinput.type = 'radio';
                opinput.name = `q${index}`;
                opinput.value = key;
                opinput.className = 'form-check-input';

                const oplabel = document.createElement('label');
                oplabel.className = 'form-check-label';
                oplabel.innerHTML = `${key}. ${q.answers[key]}`;

                check.appendChild(oplabel);
                check.appendChild(opinput);
                questions.appendChild(check);
            }
            
        }
        
        container.appendChild(questions);
    });

    container.appendChild(row);

}

function submit() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answers.correct) {
            score++;
        }
    });

    const result = document.getElementById('result');
    result.innerText = `Your score: ${score}/${questions.length}`;
}

fetch('questionAnswerData.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
        exam(data);
    })
    .catch(error => console.log('error', error));