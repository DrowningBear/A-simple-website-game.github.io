// 商店页面的JavaScript

// 页面加载时读取存储的数据
window.onload = function() {
    loadGameData();
};

function loadGameData() {
    // 从localStorage读取木头和鲜肉的数量
    let woodCount = parseInt(localStorage.getItem('woodCount'), 10) || 0;
    let meatCount = parseInt(localStorage.getItem('meatCount'), 10) || 0;
    money = parseInt(localStorage.getItem('money'), 10) || 0;


    // 更新商店页面上的显示
    document.getElementById('woodCountDisplay').textContent = woodCount;
    document.getElementById('meatCountDisplay').textContent = meatCount;
    document.getElementById('moneyDisplay').textContent = money; // 假设这是显示货币的元素
}

// 假设在商店界面上有一个按钮用于返回游戏界面
document.getElementById('backToGame').addEventListener('click', function() {
    // 离开商店页面时保存当前的数据
    saveGameData();
    // 然后跳回到游戏界面
    window.location.href = "game.html"; // 假设游戏页面的URL是game.html
});

function saveGameData() {
    // 在这里保存任何在商店页面上的更改
    // 例如，如果用户在商店中购买了物品，更新woodCount和meatCount
    // 然后保存到localStorage
    localStorage.setItem('woodCount', woodCount);
    localStorage.setItem('meatCount', meatCount);
    localStorage.setItem('money', money); // 保存当前的货币到localStorage
}
const woodPrice = 10; // 每块木头10货币
        const meatPrice = 20; // 每块鲜肉20货币

        function sellResources() {
            const sellWood = parseInt(document.getElementById('sellWood').value, 10);
            const sellMeat = parseInt(document.getElementById('sellMeat').value, 10);

            if (sellWood > woodCount || sellMeat > meatCount) {
                alert("您没有足够的资源进行交易！");
                return;
            }

            const woodValue = sellWood * woodPrice;
            const meatValue = sellMeat * meatPrice;

            money += woodValue + meatValue;
            woodCount -= sellWood;
            meatCount -= sellMeat;

            document.getElementById('woodCount').textContent = woodCount;
            document.getElementById('meatCount').textContent = meatCount;
            document.getElementById('money').textContent = money;

            // 保存交易后的数据到localStorage
            saveGameData();

            document.getElementById('sellWood').value = 0;
            document.getElementById('sellMeat').value = 0;
        }

        function saveGameData() {
            localStorage.setItem('woodCount', woodCount);
            localStorage.setItem('meatCount', meatCount);
            localStorage.setItem('money', money);
        }

        document.getElementById('sellResources').addEventListener('click', sellResources);
