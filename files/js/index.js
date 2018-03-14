
let tabSelected = false;

const decryptionForm = document.querySelector('#decryption');
const encryptionForm = document.querySelector('#encryption');

function SwitchTab() {
    if(!tabSelected) {
        decryptionForm.className = "active";
        encryptionForm.className = "";
    } else {
        decryptionForm.className = "";
        encryptionForm.className = "active";
    }
    tabSelected = !tabSelected;
}

function OnSubmitEncryption(e) {
    e.preventDefault();
    let data = {
        technique: e.target[0].value,
        input: e.target[1].value,
        output: e.target[2].value
    };
    console.log(data);
}

function OnSubmitDecryption(e) {
    e.preventDefault();
    let data = {
        technique: e.target[0].value,
        input: e.target[1].value,
        output: e.target[2].value
    };
    console.log(data);
}

encryptionForm.addEventListener('submit', OnSubmitEncryption);
decryptionForm.addEventListener('submit', OnSubmitDecryption);