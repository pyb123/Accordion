// 封装
function animate(element, obj, callback) {
  // 赋值新的定时器之前，清除上一个
  clearInterval(element.timerId);

  element.timerId = setInterval(function() {
    // 假设成立法
    var flag = true;

    for (var key in obj) {
      var attr = key;
      var target = obj[key];
      // 动画三步走
      // 1-获取当前位置（px）
      var current = window.getComputedStyle(element)[attr];
      current = parseInt(current);

      // 2-累加小碎步
      var step = (target - current) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      current += step;

      // 3-重新赋值
      element.style[attr] = current + "px";

      // 4-清除定时器
      if (current != target) {
        flag = false;
      }
    }

    if (flag == true) {
      clearInterval(element.timerId);
      callback && callback();
    }
  }, 10);
}
