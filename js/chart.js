async function loadPage(file) {
  const content = document.getElementById("content-hrms");
  const res = await fetch(file);
  const html = await res.text();
  content.innerHTML = html;

  // ✅ Khi trang dashboard load xong thì khởi tạo chart
  if (file.includes("05.html")) {
    initAttendanceChart();
  }
}

function initAttendanceChart() {
  const canvas = document.getElementById('attendanceChart');
  if (!canvas) {
    console.error("Không tìm thấy canvas #attendanceChart");
    return;
  }

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Blue',
          data: [50, 50, 40, 50, 60, 40, 40],
          backgroundColor: '#6c63ff',
          // borderRadius: 15,
          // borderSkipped: false,
          barThickness: 15,
        },
        {
          label: 'Yellow',
          data: [30, 20, 25, 30, 20, 25, 40],
          backgroundColor: '#ffb74d',
          // borderRadius: 15,
          // borderSkipped: false,
          barThickness: 15,
        },
        {
          label: 'Red',
          data: [10, 20, 25, 10, 10, 25, 10],
          backgroundColor: '#ef5350',
          // borderRadius: 15,
          // borderSkipped: false,
          barThickness: 15,
        },
      ],
    },
    options: {
      barPercentage: 0.5,
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 10, bottom: 10 } },
      scales: {
        x: {
          stacked: true,
          grid: { display: false },
          border: { display: false },
          ticks: { color: '#444', font: { size: 13, weight: '500' } },
        },
        y: {
          stacked: true,
          grid: { display: false},
          border: { display: false },
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            color: '#666',
            callback: (value) => value + '%',
          },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          backgroundColor: '#222',
          titleColor: '#fff',
          bodyColor: '#ddd',
          borderWidth: 1,
          borderColor: '#555',
        },
      },
      barPercentage: 0.5,
      categoryPercentage: 0.4,
      datasets:{
        
        bar:{
          borderRadius: 15,
        }
      }
    },
  });
  console.log("Chart loaded!");
}
