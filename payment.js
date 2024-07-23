let tColorA = document.getElementById('tcolorA');
let tColorB = document.getElementById('tcolorB');
let tColorC = document.getElementById('tcolorC');
let iconA = document.querySelector('.fa-credit-card');
let iconB = document.querySelector('.fa-building-columns');
let iconC = document.querySelector('.fa-wallet');
let cDetails = document.querySelector('.card-details');
let internetBankingInterface = document.getElementById('internetBankingInterface');
let appleGooglePayInterface = document.getElementById('appleGooglePayInterface');

function dofun() {
  tColorA.style.color = "greenyellow";
  tColorB.style.color = "#444";
  tColorC.style.color = "#444";
  iconA.style.color = "greenyellow";
  iconB.style.color = "#aaa";
  iconC.style.color = "#aaa";
  cDetails.style.display = "block";
  internetBankingInterface.style.display = "none";
  appleGooglePayInterface.style.display = "none";
  clearTimeout(sessionTimeout);
}

function dofunA() {
  tColorA.style.color = "#444";
  tColorB.style.color = "greenyellow";
  tColorC.style.color = "#444";
  iconA.style.color = "#aaa";
  iconB.style.color = "greenyellow";
  iconC.style.color = "#aaa";
  cDetails.style.display = "none";
  internetBankingInterface.style.display = "block";
  appleGooglePayInterface.style.display = "none";
  startSessionTimer();
}

function dofunB() {
  tColorA.style.color = "#444";
  tColorB.style.color = "#444";
  tColorC.style.color = "greenyellow";
  iconA.style.color = "#aaa";
  iconB.style.color = "#aaa";
  iconC.style.color = "greenyellow";
  cDetails.style.display = "none";
  internetBankingInterface.style.display = "none";
  appleGooglePayInterface.style.display = "block";
  startQRScanner();
  startSessionTimer();
}

// Session expiration function
let sessionTimeout;

function startSessionTimer() {
  clearTimeout(sessionTimeout);
  sessionTimeout = setTimeout(() => {
    alert("Session expired");
    resetInterfaces();
  }, 2 * 60 * 1000); // 2 minutes
}

function resetInterfaces() {
  tColorA.style.color = "#444";
  tColorB.style.color = "#444";
  tColorC.style.color = "#444";
  iconA.style.color = "#aaa";
  iconB.style.color = "#aaa";
  iconC.style.color = "#aaa";
  cDetails.style.display = "none";
  internetBankingInterface.style.display = "none";
  appleGooglePayInterface.style.display = "none";
}

function startInternetBankingSession() {
  // Implement your login functionality here
  alert("Internet Banking session started");
  startSessionTimer();
}

function startQRScanner() {
  let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
  scanner.addListener('scan', function (content) {
    document.getElementById('qr-reader-results').innerText = `QR Code detected: ${content}`;
    scanner.stop();
  });
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
    }
  }).catch(function (e) {
    console.error(e);
  });
}
