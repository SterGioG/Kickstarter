import Web3 from "web3";
 
let web3; // let keyword allows you to reassign variable
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/68752d9dfc1643ce8cceca55abd77806"
  );
  web3 = new Web3(provider);
}
 
export default web3;