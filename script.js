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
          data: [500000, 10000], // Example costs
          backgroundColor: ['#0057e7', '#ffc107'],
        },
      ],
    },
    options: {
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
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
    },
  });
});

// Feedback Simulation: Update Budget Value
function updateBudget() {
  const budget = document.getElementById('budgetRange').value;
  document.getElementById('budgetValue').innerText = `$${parseInt(budget).toLocaleString()}`;

  const feedback = document.getElementById('budgetFeedback');
  if (budget > 80000) {
    feedback.classList.remove('hidden');
  } else {
    feedback.classList.add('hidden');
  }
}
