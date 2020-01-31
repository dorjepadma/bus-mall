const results = JSON.parse(localStorage.getItem('choice'));
const choice = [];
const labels = [];
//grabbing the thing results
results.forEach(thing => {
    choice.push(thing.choice);
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
            label: 'Number of Choices',
            data: choice,
            backgroundColor: ['lightred', 'red', 'orange', 'blue', 'green', 'purple', 'orange']
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