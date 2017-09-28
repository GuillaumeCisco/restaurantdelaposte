const script = `
    <script type="text/javascript">
        'serviceWorker' in window.navigator && window.addEventListener('load', function () {
            function registerServiceWorker () {
                // only register serviceWorker if online
                if (window.navigator.onLine) {
                    window.navigator.serviceWorker.register('service-worker.js');
                }   
            }
                        
            window.addEventListener('online', registerServiceWorker);
            registerServiceWorker();
        });
    </script>
`;

const serviceWorker = process.env.NODE_ENV === 'production' ? `${script}` : '';

export default serviceWorker;
