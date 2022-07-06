
const ctx = document.getElementById('canvas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Good Teachers', 'Curricuium/Academics', 'School Safetly', 'Test Scores', 'Academic Grwoth Rates', 'Distance From Our Home', 'Extracurricular Activities', 'Opinions Of Other Parents', 'Disipline-Enforced', 'Cleaniness', 'Special Education', 'High Graudation Rates'],
        datasets: [{
            label: 'School Ratings in Charlotte',
            data: [ 76, 68, 58, 43, 36, 29, 27, 27, 24, 21, 18, 14],
            backgroundColor: 'transparent',
            borderColor: 'blue',
            borderWidth: 4
        }]
    },

    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

