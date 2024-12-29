
const ctxProfit = document.getElementById('profitChart').getContext('2d');

const profitChart = new Chart(ctxProfit, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
            label: 'Profit (₹)',
            data: [200000, 220000, 250000, 300000, 350000, 370000, 400000, 450000, 480000],
            borderColor: '#4b7bec',
            backgroundColor: 'rgba(75, 123, 236, 0.2)',
            borderWidth: 2,
            tension: 0.4,
            pointBackgroundColor: '#3867d6',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Maintain within the fixed section
        plugins: {
            legend: { display: true, position: 'top' }
        },
        scales: {
            x: { grid: { display: false } },
            y: { grid: { borderDash: [5, 5] } }
        }
    }
});
