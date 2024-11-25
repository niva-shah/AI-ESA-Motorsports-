// Show/Hide More Details for AI Tools
function toggleDetails(id) {
  const element = document.getElementById(id);
  element.classList.toggle('hidden');
}

// Chart.js: Accessibility Gap Visualization
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('accessibilityChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['NVIDIA DriveSim', 'RACELOGIC VBOX'],
      datasets: [
        {
          label: 'Cost (USD)',
          data: [500000, 10000],
          backgroundColor: ['#0057e7', '#ffc107'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'AI Tool Cost Comparison',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Cost (USD)',
          },
        },
        x: {
          title: {
            display: true,
            text: 'AI Tools',
          },
        },
      },
    },
  });
});

// Feedback Simulation: Update Budget Value and Display Feedback
function updateBudget() {
  const budget = document.getElementById('budgetRange').value;
  document.getElementById('budgetValue').innerText = `$${parseInt(budget).toLocaleString()}`;
  const feedback = document.getElementById('budgetFeedback');
  if (budget > 75000) {
    feedback.classList.remove('hidden');
  } else {
    feedback.classList.add('hidden');
  }
}
