function first(array, n) {
    if (n === undefined) {
        return array[0];
    } else if (n < 0) {
        return [];
    } else {
        return array.slice(0, n);
    }
}

function runTest() {
    const questions = [
        'first([7, 9, 0, -2])',
        'first([], 3)',
        'first([7, 9, 0, -2], 3)',
        'first([7, 9, 0, -2], 6)',
        'first([7, 9, 0, -2], -3)'
    ];

    const answers = [
        first([7, 9, 0, -2]),
        first([], 3),
        first([7, 9, 0, -2], 3),
        first([7, 9, 0, -2], 6),
        first([7, 9, 0, -2], -3)
    ];

    let outputHtml = '';

    for (let i = 0; i < questions.length; i++) {
        outputHtml += `
            <tr>
                <td>${questions[i]}</td>
                <td>${JSON.stringify(answers[i])}</td>
            </tr>
        `;
    }

    document.getElementById('output').innerHTML = outputHtml;
}