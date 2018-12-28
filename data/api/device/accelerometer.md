# 传感器

### qg.subscribeAccelerometer(Object object)

监听重力感应数据。如果多次调用，仅最后一次调用生效

#### 参数

Object object

| 属性 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| callback | Function | 是 | 重力感应数据变化后会回调此函数，5次每秒 |

##### callback回调参数：Object data

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| x | Number | x轴坐标 |
| y | Number | y轴坐标 |
| z | Number | z轴坐标 |

#### 示例：

```js
qg.subscribeAccelerometer({
  callback: function (data) {
    console.log(`handling callback, x = ${data.x}, y = ${data.y}, z = ${data.z}`)
  }
})
```

### qg.unsubscribeAccelerometer()

取消监听重力感应数据

#### 参数

无

#### 示例

```js
qg.unsubscribeAccelerometer()
```

### qg.subscribeCompass(Object object)

监听罗盘数据。如果多次调用，仅最后一次调用生效

#### 参数

Object object

| 属性 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| callback | Function | 是 | 重力感应数据变化后会回调此函数，5次每秒 |

##### callback回调参数：Object data

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| direction | Number | 面对的方向度数 |

#### 示例

```js
qg.subscribeCompass({
  callback: function (data) {
    console.log(`handling callback, direction = ${data.direction}`)
  }
})
```

### qg.unsubscribeCompass()

取消监听罗盘数据

#### 参数

无

#### 示例

```js
qg.unsubscribeCompass()
```

  


