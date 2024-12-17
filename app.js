

document.getElementById('fetch-data').addEventListener('click', () => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = 'Fetching data...';

    // Simulating data fetch
    setTimeout(() => {
        dataContainer.innerHTML = 'Data fetched successfully!';
    }, 2000);
});

// Registering the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}



