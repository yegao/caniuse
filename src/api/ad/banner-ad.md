# Banner广告

### qg.createBannerAd(Object object) `1031+`

> 1031标准开始支持，低版本需做兼容处理。

创建 banner 广告组件。请通过 qg.getSystemInfoSync() 返回对象的 platformVersionCode判断标准版本号 >= 1031后再使用该 API。请直接在真机上进行调试。

#### 参数

Object object

| 属性  | 类型   | 必填 | 说明                                       |
| :---- | :----- | :--- | :----------------------------------------- |
| posId | String | 是   | 广告位id                                   |
| style | Object | 否   | banner广告组件的样式，具体字段后续版本开放 |

#### 返回值

BannerAd 广告组件

#### 示例

```js
//style内无需设置任何字段，banner会在屏幕底部居中显示，style具体属性后续版本会开放
var bannerAd = qg.createBannerAd({
    posId: 'xxxx',
    style: {}
});
```

### BannerAd.hide()

隐藏banner广告

##### 参数

无

##### 示例

```javascript
bannerAd.hide();
```

### BannerAd.show()

显示banner广告

##### 参数

无

##### 示例

```javascript
//banner广告隐藏后使用show可以重新显示
bannerAd.show();
```

### BannerAd.destroy()

销毁banner广告

##### 参数

无

##### 示例

```javascript
bannerAd.destroy();
```

### BannerAd.onLoad(function callback)

监听banner广告加载结束事件

#### 参数

| 参数名   | 类型     | 必填 | 说明               |
| -------- | -------- | ---- | ------------------ |
| callback | Function | 是   | 监听事件的回调函数 |

### BannerAd.offLoad(function callback)

取消监听banner广告加载结束事件

#### 参数

| 参数名   | 类型     | 必填 | 说明               |
| -------- | -------- | ---- | ------------------ |
| callback | Function | 否   | 需要取消的监听回调 |

#### 示例

```js
var func = function () {
  // do something
};
// 开始监听
bannerAd.onLoad(func);
// 取消监听
bannerAd.offLoad(func);
```

### BannerAd.onClose(function callback)

监听banner广告关闭事件

#### 参数

| 参数名   | 类型     | 必填 | 说明               |
| -------- | -------- | ---- | ------------------ |
| callback | Function | 是   | 监听事件的回调函数 |

### BannerAd.offLoad(function callback)

取消监听banner广告关闭事件

#### 参数

| 参数名   | 类型     | 必填 | 说明               |
| -------- | -------- | ---- | ------------------ |
| callback | Function | 否   | 需要取消的监听回调 |

#### 示例

```js
var func = function () {
  // do something
};
// 开始监听
bannerAd.onClose(func);
// 取消监听
bannerAd.offClose(func);
```

### BannerAd.onError(function callback)

监听banner广告错误事件

#### 参数

| 参数名   | 类型     | 必填 | 说明               |
| -------- | -------- | ---- | ------------------ |
| callback | Function | 是   | 监听事件的回调函数 |

##### Object res

| 参数名  | 类型   | 说明     |
| ------- | ------ | -------- |
| errMsg  | String | 错误信息 |
| errCode | number | 错误码   |

### BannerAd.offError(function callback)

取消监听banner广告错误事件

#### 参数

| 参数名   | 类型     | 必填 | 说明               |
| -------- | -------- | ---- | ------------------ |
| callback | Function | 否   | 需要取消的监听回调 |

#### 示例

```js
var func = function () {
  // do something
};
// 开始监听
bannerAd.onError(func);
// 取消监听
bannerAd.offError(func);
```

### BannerAd.onSize(function callback)

监听banner广告真实宽高尺寸事件

#### 参数

| 参数名   | 类型     | 必填 | 说明               |
| -------- | -------- | ---- | ------------------ |
| callback | Function | 是   | 监听事件的回调函数 |

##### Object res

| 参数名 | 类型   | 说明           |
| ------ | ------ | -------------- |
| width  | number | banner真实宽度 |
| height | number | banner真实高度 |

### BannerAd.offSize(function callback)

取消监听banner广告真实宽高尺寸事件

#### 参数

| 参数名   | 类型     | 必填 | 说明               |
| -------- | -------- | ---- | ------------------ |
| callback | Function | 否   | 需要取消的监听回调 |

#### 示例

```js
var func = function () {
  // do something
};
// 开始监听
bannerAd.onLoad(func);
// 取消监听
bannerAd.offLoad(func);
```