<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js" integrity="sha512-d9xgZrVZpmmQlfonhQUvTR7lMPtO7NkZMkA0ABN3PHCbKA5nqylQ/yWlFAyY6hYgdF1Qh6nYiuADWwKB4C2WSw==" crossorigin="anonymous"></script>

<canvas id="myChart" width="50" height="50"></canvas>
<script>
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2021/01/02', '2021/01/03', '2021/01/04', '2021/01/05', '2021/01/06', '2021/01/07'],
        datasets: [{
            label: 'Grade percent',
            data: [90, 88, 87, 83, 86, 88],
            borderWidth: 1
        }]
    }
});
</script>
