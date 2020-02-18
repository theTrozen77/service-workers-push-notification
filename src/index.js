import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import Router from './router'

const App = () => {
    return(
        <div>
            React using Webpack 2
            <Router></Router>
        </div>
    )
}


if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw_cached_v1.js')
        .then((registration) => {
            console.log('Registration was successful', registration);

            Notification.requestPermission()
            .then((permission) => {
                console.log('permission', permission);
                if(permission === 'granted') {
                    registration.showNotification('Hi',{actions : [{action: 'explore', title : 'NEw World'}]})
                    send();
                }   
            })
        })
        .catch((err) => {
            console.log('Failed to register', err);
        })
    })

    function send() {
        navigator.serviceWorker.register('sw_cached_v1.js')
        navigator.serviceWorker.ready
            .then((registration) => {
                    console.log('Registration was successful in send fn', registration);
                    registration.pushManager.subscribe({
                        userVisibleOnly : true,
                        applicationServerKey : urlBase64ToUint8Array('BM0rMgHfIzpb3kJtkpfkC3yq8sE0oW6aCJdwH3d1neygUqnK7TLUlel06ymEfLfnJY72DnHgnZO2ozCDng8Fu0Y')
            })
        .then((subscription) => {
            console.log('ssdfsdafefads', subscription);
            fetch("http://localhost:3500/subscribe",
            {
                method : 'POST',
                body : JSON.stringify(subscription),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
        })
    })
    }
    
    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
          .replace(/-/g, '+')
          .replace(/_/g, '/');
      
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
      
        for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
      }
      
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById("root"));

