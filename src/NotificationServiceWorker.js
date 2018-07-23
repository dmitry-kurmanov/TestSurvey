self.addEventListener('push', function(e) {
  console.log('Received push event - ' + e)  
  var URL = "https://keys.dev.dxcbps.com/roamapi/api/GetNotificationMessageUsingToken?userToken="
  //var URL = "http://localhost:1272/api/GetNotificationMessageUsingToken?userToken=";
  var responseMsg = '';    
  e.waitUntil(
    //get the subscription token
    self.registration.pushManager.getSubscription()        
    .then(function(subscription) {
      if (subscription) {
        var token = subscription.endpoint;
        var arrtoken = token.split('/');      
      var user_token=arrtoken[arrtoken.length-1];
        return user_token;
      }  
      throw new Error('User not subscribed');
    })
    .then(function(endpoint){
      console.log(endpoint);
     return fetch(URL + endpoint)
    })
    .then(function (response){
      console.log(response);
      if (response.status == 200)
      {
        var resp = response.text();       
        return resp;
      }
      // else if (response.status >= 200 && response.status < 300) {      
      //   return Promise.resolve(response)
      // } 
      else {
        return Promise.reject(new Error(response.statusText))
      }          
     })
    .then(function(respns){
      responseMsg = respns;
      console.log("Response Msg - " + responseMsg);        
      var bodymsg    
      if(responseMsg!=''){
        bodymsg = responseMsg
      }
      else{
        bodymsg = 'Technician is assigned for your case'
      }
      var options = {
          body: bodymsg,
          //icon: "../src/assets/logo_full.png",
          icon: "https://keys.dev.dxcbps.com/img/logo_notification.png",
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
          }
      };
      //show notification
      self.registration.showNotification('ROAM Notification!', options)
    })
    .catch(function(ex){
      console.log("An error occured - " + ex);
    })
  );
});
//notification click event
self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;
  console.log("Notification clicked by the user")
  if (action === 'close') {
    notification.close();
  } 
  else 
  {
    var openPage = 'https://keys.dev.dxcbps.com/ds/app/casedetailscomp'
    //var openPage ='http://localhost:8080/app/casedetailscomp'
    const urlToOpen = new URL(openPage, self.location.origin).href;
    console.log('opening the page - ' + urlToOpen);    
    e.waitUntil(
      clients.matchAll({  
        type: "window",
        includeUncontrolled: true
      })
    .then(function(windowClients) {
      let matchingClient = null;
      for (let i = 0; i < windowClients.length; i++) {
        //console.log(windowClients[i]);
        const windowClient = windowClients[i];
        if (windowClient.url === urlToOpen) {
          matchingClient = windowClient;
          break;
        }
      }      
      if (matchingClient) {
        var url1 = matchingClient.url;
        matchingClient.focus();
        matchingClient.navigate(url1);        
      } 
      else {     
        clients.openWindow(urlToOpen);          
      }
    })
  );    
    notification.close();    
  }
});
//notification close event
self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;  
  console.log('closed notification: ' + primaryKey);
});
