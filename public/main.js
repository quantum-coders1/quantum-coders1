function scrollToSection() {
document.getElementById('cta').scrollIntoView({ behavior: 'smooth' });
}


fetch('/api/status')
.then(res => res.json())
.then(data => {
document.getElementById('status').textContent =
`System Status: ${data.status}`;
document.getElementById('year').textContent = data.year;
});