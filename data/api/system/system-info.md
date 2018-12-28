# 系统信息

### qg.getSystemInfo(Object object)

获取系统信息

#### 参数

Object object

| 属性 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

##### success回调参数：Object data

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| brand | String | 设备品牌 |
| manufacturer | String | 设备生产商 |
| model | String | 设备型号 |
| product | String | 设备代号 |
| osType | String | 操作系统名称 |
| osVersionName | String | 操作系统版本名称 |
| osVersionCode | Number | 操作系统版本号 |
| platformVersionName | String | 运行平台版本名称 |
| platformVersionCode | Number | 运行平台版本号 |
| language | String | 系统语言 |
| region | String | 系统地区 |
| screenWidth | Number | 屏幕宽 |
| screenHeight | Number | 屏幕高 |
| battery | Number | 当前电量，0.0 - 1.0 之间 |
| wifiSignal | Number | wifi信号强度，范围0 - 4 |

#### 示例：

```js
qg.getSystemInfo({
  success: function (data) {
    console.log(`handling success， brand = ${data.brand}`)
  }
})
```

### qg.getSystemInfoSync()

获取系统信息的同步版本

#### 参数
无

#### 返回值
Object data

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| brand | String | 设备品牌 |
| manufacturer | String | 设备生产商 |
| model | String | 设备型号 |
| product | String | 设备代号 |
| osType | String | 操作系统名称 |
| osVersionName | String | 操作系统版本名称 |
| osVersionCode | Number | 操作系统版本号 |
| platformVersionName | String | 运行平台版本名称 |
| platformVersionCode | Number | 运行平台版本号 |
| language | String | 系统语言 |
| region | String | 系统地区 |
| screenWidth | Number | 屏幕宽 |
| screenHeight | Number | 屏幕高 |
| battery | Number | 当前电量，0.0 - 1.0 之间 |
| wifiSignal | Number | wifi信号强度，范围0 - 4 |

#### 示例

```js
var data = qg.getSystemInfoSync();
console.log(data.brand);
```

### qg.getNotchHeight(Object object)

获取异形屏缺口高度（竖屏时异形区域高度）

#### 参数
Object object

| 属性 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

##### success回调参数：Object data

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| height | Number | 高度为0表示不是异形屏 |

#### 示例

```js
qg.getNotchHeight({
  success: function (data) {
    console.log(`handling success: ${data.height}`)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```

### qg.getNotchHeightSync()

获取异形屏缺口高度（竖屏时异形区域高度）同步版本

#### 参数
无

#### 返回值
Object data

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| height | Number | 高度为0表示不是异形屏 |

#### 示例：

```js
var data = qg.getNotchHeightSync();
console.log(data.height);
```



