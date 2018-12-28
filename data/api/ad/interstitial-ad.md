# 插屏广告
### qg.createInterstitialAd(Object object) `1031+`


> 1031标准开始支持，低版本需做兼容处理。

创建插屏广告。请通过 qg.getSystemInfoSync() 返回对象的 platformVersionCode判断标准版本号 >= 1031后再使用该 API。请直接在真机上进行调试。

#### 参数

Object object

| 属性  | 类型   | 必填 | 说明     |
| :---- | :----- | :--- | :------- |
| posId | String | 是   | 广告位id |

#### 返回值

InterstitialAd  广告组件

#### 示例

```js
var interstitialAd = qg.createInterstitialAd({
    posId: 'xxxx'
});
```


### InterstitialAd.show()

展示插屏广告

##### 参数
无

##### 示例

```js
interstitialAd.show();
```

### InterstitialAd.load()

加载插屏广告

##### 参数

无

##### 示例

```js
//插屏广告自动拉取失败可以手动拉取
interstitialAd.load();
```

### InterstitialAd.onLoad(function callback)

监听插屏广告加载结束事件

#### 参数

| 参数名   | 类型     | 必填 | 说明               |
| -------- | -------- | ---- | ------------------ |
| callback | Function | 是   | 监听事件的回调函数 |

### InterstitialAd.offLoad(function callback)

取消监听插屏广告加载结束事件

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

### InterstitialAd.onClose(function callback)

监听插屏广告关闭事件

#### 参数

| 参数名   | 类型     | 必填 | 说明               |
| -------- | -------- | ---- | ------------------ |
| callback | Function | 是   | 监听事件的回调函数 |

### InterstitialAd.offLoad(function callback)

取消监听插屏广告关闭事件

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

### InterstitialAd.onError(function callback)

监听插屏广告错误事件

#### 参数

| 参数名   | 类型     | 必填 | 说明               |
| -------- | -------- | ---- | ------------------ |
| callback | Function | 是   | 监听事件的回调函数 |

#### Object res

| 参数名  | 类型   | 说明     |
| ------- | ------ | -------- |
| errMsg  | String | 错误信息 |
| errCode | number | 错误码   |

### InterstitialAd.offError(function callback)

取消监听插屏广告错误事件

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
