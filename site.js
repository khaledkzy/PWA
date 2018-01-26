navigator.serviceWorker && navigator.serviceWorker.register('./sw.js').then(function(registration) {
    console.log('Excellent, registered with scope: ', registration.scope);
  });


  // add the push subscription func

  navigator.serviceWorker && navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        // subscription will be null or a PushSubscription

        //You need this function to check the subscription
        if (subscription) {
          console.info('Got existing', subscription);
          window.subscription = subscription;
          return;  // got one, yay
        }


      
        //publickey is defined at the top of this file
        const applicationServerKey = urlB64ToUint8Array(publicKey);
        serviceWorkerRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey,
        })
          .then(function(subscription) {
            console.info('Newly subscribed to push!', subscription);
            window.subscription = subscription;
          });
      });
  });