// 获取元素
var lis = document.querySelectorAll(".accordion li");

// 遍历
lis.forEach((v, i) => {
  // 1-设置背景图片
  v.style.background = 'url("./images/' + (i + 1) + '.jpg")';
  // 2-布局位置
  v.style.left = i * 240 + "px";

  // 3-注册鼠标移入事件
  v.onmouseover = () => {
    // console.log(i);
    // 重新布局
    lis.forEach((v, index) => {
      // console.log(index);
      // 如果<=当前索引i
      if (index <= i) {
        animate(v, { left: index * 100 });
      } else {
        animate(v, { left: index * 100 + 700 });
      }
    });
  };

  // 4-注册鼠标移出事件
  v.onmouseout = () => lis.forEach((v, i) => animate(v, { left: i * 240 }));
});
