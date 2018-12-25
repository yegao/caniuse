# 图片

## 创建图片

### qg.createImage()

创建一个图片对象

#### 参数
无

#### 返回值

Image 对象

#### 示例

```javascript
var image = qg.createImage();
image.src = 'http://www.w3school.com.cn/i/eg_tulip.jpg';
image.onload = function() {
    console.log("w = " + image.width + ", h = " + image.height);
}
image.onerror = function() {
    console.log("onerror");
}
```

## Image

图片对象

### 属性

| 属性      | 类型       | 说明  |
| -------- | -------- | ---- |
| src | string | 图片的 URL    |
| width | number | 图片的真实宽度    |
| height | number | 图片的真实高度    |
| onload | function | 图片加载完成后触发的回调函数    |
| onerror | function | 图片加载失败触发的回调函数    |





