// Missing values chart
const ctx1 = document.getElementById('missingChart');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['InvoiceNo', 'StockCode', 'Description', 'Quantity', 'InvoiceDate', 'UnitPrice', 'CustomerID', 'Country'],
    datasets: [{
      label: 'Jumlah Missing',
      data: [0, 0, 0, 0, 0, 0, 135080, 0], // contoh hasil analisis
      backgroundColor: 'rgba(231, 76, 60, 0.7)'
    }]
  },
  options: { responsive: true }
});

// Outlier chart
const ctx2 = document.getElementById('outlierChart');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Quantity Outliers', 'UnitPrice Outliers'],
    datasets: [{
      label: 'Jumlah Outlier',
      data: [5000, 1200], // contoh hasil IQR
      backgroundColor: 'rgba(52, 152, 219, 0.7)'
    }]
  },
  options: { responsive: true }
});

// Country sales chart
const ctx3 = document.getElementById('countryChart');
new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ['UK', 'Netherlands', 'Germany', 'France', 'Others'],
    datasets: [{
      label: 'Total Penjualan',
      data: [80, 5, 4, 3, 8], // persentase contoh
      backgroundColor: [
        'rgba(46, 204, 113, 0.7)',
        'rgba(241, 196, 15, 0.7)',
        'rgba(230, 126, 34, 0.7)',
        'rgba(155, 89, 182, 0.7)',
        'rgba(127, 140, 141, 0.7)'
      ]
    }]
  },
  options: { responsive: true }
});
