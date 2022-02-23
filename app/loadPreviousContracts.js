function loadPreviousContracts() {

    if(window.localStorage.length > 0) {
        
        for (let i=1; i<=Number(window.localStorage.getItem('storageCounter')); i++){

            let data = JSON.parse(window.localStorage.getItem(i));
            let buttonId = data._buttonId;
            let arbiter = data._arbiter;
            let beneficiary = data._beneficiary;
            let value = data._value;
    
            const container = document.getElementById("container");
            container.innerHTML += createHTML(buttonId, arbiter, beneficiary, value);
    
            document.getElementById(buttonId).className = "complete";
            document.getElementById(buttonId).innerText = "✓ It's been approved!";
        }
    }
}

function createHTML(buttonId, arbiter, beneficiary, value) {
    return `
      <div class="existing-contract">
        <ul className="fields">
          <li>
            <div> Arbiter </div>
            <div> ${arbiter} </div>
          </li>
          <li>
            <div> Beneficiary </div>
            <div> ${beneficiary} </div>
          </li>
          <li>
            <div> Value </div>
            <div> ${value} </div>
          </li>
          <div class="button" id="${buttonId}">
            Approve
          </div>
        </ul>
      </div>
    `;
  }

  loadPreviousContracts();