let btn = document.getElementById('btn');
btn.addEventListener('click', compatibility);
function compatibility() {
  // 0 ~ 4
  // let res = ['赤', '青', '黒', '白', '紫', '緑']; //結果の配列
  let res = [['red', '100%'], ['blue', '80%'], ['black', '60%'], ['white', '40%'], ['purple', '20%'], ['green', '0%']]; //結果の配列
  // let res = { 0: ['red', '赤'], 1: ['blue', '青'], 2: ['black', '黑'], 3: ['white', '白'], 4: ['purple', '紫'], 5: ['green', '綠'] }; //結果の配列
  let randomNum = Math.random();
  let result = document.getElementById('result');
  let resultContainer = document.getElementById('result-container');

  // Math.floor
  // Math.ceil
  // Math.round
  // 0, 1, 2, 3, 4

  // console.log(Math.floor(randomNum * res.length));
  // let num = Math.floor(randomNum * Object.keys(res).length);
  let num = Math.floor(randomNum * res.length);

  result.textContent = res[num][1];
}