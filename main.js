
const ctx = document.getElementById('canvas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ardrey Kell High School', 'Providence High School', 'Myers Park High School', 'Phillip O. Berry Academy of Technology', 'South Mecklenburg High School'],
        datasets: [{
            label: 'School Ratings in Charlotte',
            data: [ 10, 10, 8, 6, 9],
            backgroundColor: 'transparent',
            borderColor: 'blue',
            borderWidth: 4
    
    },
    {
        labels: ['Random High School'],
            label: 'School Ratings in Atlanta',
            data: [10, 9, 3, 5, 2, ],
            backgroundColor: 'transparent',
            borderColor: 'green',
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

