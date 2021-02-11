let metamaskAddress = "";

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  // connect popup
  ethereum.enable();

  window.ethereum.on("accountsChanged", function () {
    location.reload();
  });

  web3.eth.getAccounts().then((addr) => {
    console.log(addr)
    metamaskAddress = addr[0];
  });
}

function getAddress() {
  return metamaskAddress;
}
