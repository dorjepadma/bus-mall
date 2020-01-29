const results = JSON.parse(localStorage.getIte('choices'));
const choices = [];
const labels = [];
//grabbing the thing results
results.forEach(thing => {
    choices.push(thing.choices);
    labels.push(thing.id);
});
//what is ctx again?
const ctx = document.getElementById('results').getContext('2d');
//where is chart defined?
new Chart (ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Choices',
            data: 'choices',
            backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});