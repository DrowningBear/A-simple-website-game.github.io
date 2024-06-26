let woodCount = 0;
let meatCount = 0;
let moneyCount = 0; // 全局货币变量
const moneyCountElement = document.getElementById("moneyCount");

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
    loadGameData();
  };

  function loadGameData() {
    woodCount = parseInt(localStorage.getItem('woodCount'), 10) || 0;
    meatCount = parseInt(localStorage.getItem('meatCount'), 10) || 0;
    moneyCount = localStorage.getItem('moneyCount') || 0; // 使用localStorage.getItem代替parseInt

    moneyCountElement.textContent = moneyCount; // 更新游戏界面上的显示
  }

  function resetGame() {
    if (confirm("确定要重置游戏吗？这将清除所有数据。")) {

      // 清除localStorage中的所有数据

      localStorage.clear();

      // 重置游戏界面上的显示

      document.getElementById("woodCountDisplay").textContent = 0;

      document.getElementById("meatCountDisplay").textContent = 0;

      document.getElementById("moneyDisplay").textContent = 0;

    }
  }
  
  // 添加事件监听器来触发重置操作
  document.getElementById("resetGame").addEventListener("click", resetGame);

  window.onload = function() {
    woodCount = parseInt(localStorage.getItem('woodCount')) || 0;
    meatCount = parseInt(localStorage.getItem('meatCount')) || 0;
    moneyCount = parseInt(localStorage.getItem('moneyCount')) || 0
    woodCountElement.textContent = woodCount;
    meatCountElement.textContent = meatCount;
    moneyCountElement.textContent = moneyCount;
  };
