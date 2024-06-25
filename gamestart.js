let woodCount = 0;
let meatCount = 0;
let money = 0;
function updateStatus() {
    let status = chopping ? "正在持续砍树..." : "停止砍树";
    if (hunting) {
      status += status ? " | 正在打猎......" : "正在打猎......";
    } else if (!chopping) {
      status += status ? " | 停止打猎" : "停止打猎";
    }
  
    document.getElementById("status").textContent = status;
  }

  let chopping = false;
  let chopInterval;
  const woodCountElement = document.getElementById("woodCount");
  
  function chopWood() {
    if (chopping) {
      clearInterval(chopInterval);
      chopping = false;
    } else {
      chopping = true;
      chopInterval = setInterval(() => {
        woodCount++;
        woodCountElement.textContent = woodCount;
        localStorage.setItem('woodCount', woodCount);
      }, 1000);
    }
    updateStatus();
  }

  let hunting = false;
  let huntInterval;
  const meatCountElement = document.getElementById("meatCount");
  
  function huntMeat() {
    if (hunting) {
      clearInterval(huntInterval);
      hunting = false;
    } else {
      hunting = true;
      huntInterval = setInterval(() => {
        meatCount++;
        meatCountElement.textContent = meatCount;
        localStorage.setItem('meatCount', meatCount);
      }, 1000);
    }
    updateStatus();
  }
  
  
  window.onload = function() {
    woodCount = parseInt(localStorage.getItem('woodCount')) || 0;
    meatCount = parseInt(localStorage.getItem('meatCount')) || 0;
    woodCountElement.textContent = woodCount;
    meatCountElement.textContent = meatCount;
  };
  
