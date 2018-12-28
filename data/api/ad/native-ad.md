# 原生广告
提供图片等资源供游戏自由绘制的广告

### qg.createNativeAd() `1031+`


创建一个内部 原生广告 上下文 NativeAd 对象。

#### 参数

无

#### 返回值

NativeAd 对象

#### 示例

```js
const nativeAd = qg.createNativeAd({'posId':'xxx'})
```

## NativeAd

原生广告对象，可通过 qg.createNativeAd接口获取。

### 属性

| 属性      | 类型       | 说明  |
| -------- | -------- | ---- |
| native_ad_title | string | 广告标题    |
| native_ad_desc | string | 广告描述   |
| native_ad_icon_url | string | 广告Icon图片地址    |
| native_ad_img_url | string | 广告大图图片地址   |
| native_ad_type | number | 广告类型：1网址类 8快游戏跳转   |

#### 示例

```javascript
//获取原生广告
var nativeAd = qg.createNativeAd({'posId':'xxx'});

//展示广告时，需调用曝光方法，关系到广告的曝光记录
nativeAd.onExposure();


```

### 方法


#### NativeAd.onExposure()

广告曝光

##### 参数
无

##### 示例

```javascript
//展示广告时，需调用曝光方法，关系到广告的曝光记录
nativeAd.onExposure();
```

#### NativeAd.onClick()

广告点击

##### 参数

无

##### 示例

```javascript
//用户点击广告时，需调用点击方法，关系到广告的点击记录
nativeAd.onClick();
```

### 事件

| 名称           | 描述                                   |
| -------------- | -------------------------------------- |
| onLoad          | 监听广告加载结束时的回调                   |
| offLoad          | 取消监听广告加载结束时的回调                   |

#### 示例

```javascript
const fn = function (params) {
    console.log('jswrapper', JSON.stringify(params))
}
nativeAd.onLoad(fn);
nativeAd.offLoad(fn);

```