// Firebase Configuration Setup for Balaji Prints
// Replace the placeholder values below with your real Firebase Project Web App Credentials

const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase Instance Safely
if (firebaseConfig.apiKey !== "YOUR_FIREBASE_API_KEY") {
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    console.log("Database Ecosystem Connected Successfully.");
} else {
    console.warn("Firebase config elements are empty. Running website in Demo/Offline mode.");
}

// =========================================================================
// 7. ADMIN PORTAL UTILITIES VIA BROWSER CONSOLE PANEL
// =========================================================================
// Open your browser console (F12) and type these functions to view your business logs:

const AdminPortal = {
    // 1. View all incoming store orders: AdminPortal.viewAllOrders()
    viewAllOrders: function() {
        if (typeof database === 'undefined') return console.error("Database not initialized.");
        database.ref('orders').once('value', (snapshot) => {
            if(snapshot.exists()) {
                console.table(snapshot.val());
            } else {
                console.log("No custom orders found inside database.");
            }
        });
    },

    // 2. Search for any targeted order by ID: AdminPortal.searchOrder('BPXXXXXX')
    searchOrder: function(orderId) {
        if (typeof database === 'undefined') return console.error("Database not initialized.");
        database.ref('orders/' + orderId).once('value', (snapshot) => {
            if(snapshot.exists()) {
                console.log(`Order Found (${orderId}):`, snapshot.val());
            } else {
                console.log(`No order matching ID: ${orderId} was found.`);
            }
        });
    }
};

window.AdminPortal = AdminPortal;