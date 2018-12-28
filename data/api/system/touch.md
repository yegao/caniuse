# 触摸事件

### qg.onTouchStart(function callback)

监听触摸开始事件

#### 参数

| 参数名   | 类型     | 必填 | 说明         |
| -------- | -------- | ---- | ------------ |
| callback | Function | 是   | 监听事件的回调函数 |

##### callback回调参数：Object data
| 属性         | 类型          | 说明                     |
| -------------- | ------------- | ------------------------ |
| touches        | Array.<Touch\> | 当前所有触摸点的列表     |
| changedTouches | Array.<Touch\> | 触发此次事件的触摸点列表 |
| timeStamp      | number        | 事件触发时的时间戳       |

#### 示例

```javascript
var startHandler = function (data) {
  console.log(data.touches)
};
qg.onTouchStart(startHandler)
```

### qg.offTouchStart(function callback)

取消监听触摸开始事件

#### 参数

| 参数名   | 类型     | 必填 | 说明         |
| -------- | -------- | ---- | ------------ |
| callback | Function | 否   | 取消监听的回调函数 |
注意：参数为空，将取消所有监听

#### 示例

```javascript
var startHandler = function (data) {
  console.log(data.touches)
};
qg.onTouchStart(startHandler)
......
qg.offTouchStart(startHandler)
```

### qg.onTouchMove(function callback)

监听触摸移动事件

#### 参数

| 参数名   | 类型     | 必填 | 说明         |
| -------- | -------- | ---- | ------------ |
| callback | Function | 是   | 监听事件的回调函数 |

##### callback回调参数：Object data

| 属性         | 类型          | 说明                     |
| -------------- | ------------- | ------------------------ |
| touches        | Array.<Touch\> | 当前所有触摸点的列表     |
| changedTouches | Array.<Touch\> | 触发此次事件的触摸点列表 |
| timeStamp      | number        | 事件触发时的时间戳       |

#### 示例

```javascript
var moveHandler = function (data) {
  console.log(data.touches)
};
qg.onTouchMove(moveHandler)
```

### qg.offTouchMove(function callback)

取消监听触摸移动事件

#### 参数

| 参数名   | 类型     | 必填 | 说明         |
| -------- | -------- | ---- | ------------ |
| callback | Function | 否   | 取消监听的回调函数 |
注意：参数为空，将取消所有监听

#### 示例：

```javascript
var moveHandler = function (data) {
  console.log(data.touches)
};
qg.onTouchMove(moveHandler)
......
qg.offTouchMove(moveHandler)
```

### qg.onTouchCancel(function callback)

监听触摸取消事件

#### 参数

| 参数名   | 类型     | 必填 | 说明         |
| -------- | -------- | ---- | ------------ |
| callback | Function | 是   | 监听事件的回调函数 |

##### callback回调参数：Object data

| 属性         | 类型          | 说明                     |
| -------------- | ------------- | ------------------------ |
| touches        | Array.<Touch\> | 当前所有触摸点的列表     |
| changedTouches | Array.<Touch\> | 触发此次事件的触摸点列表 |
| timeStamp      | number        | 事件触发时的时间戳       |

#### 示例

```javascript
var cancelHandler = function (data) {
  console.log(data.touches)
};
qg.onTouchCancel(cancelHandler)
```

### qg.offTouchCancel(function callback)

取消监听触摸取消事件

#### 参数

| 参数名   | 类型     | 必填 | 说明         |
| -------- | -------- | ---- | ------------ |
| callback | Function | 否   | 取消监听的回调函数 |
注意：参数为空，将取消所有监听

#### 示例

```javascript
var cancelHandler = function (data) {
  console.log(data.touches)
};
qg.onTouchCancel(cancelHandler)
......
qg.offTouchCancel(cancelHandler)
```

### qg.onTouchEnd(function callback)

监听触摸结束事件

#### 参数

| 参数名   | 类型     | 必填 | 说明         |
| -------- | -------- | ---- | ------------ |
| callback | Function | 是   | 监听事件的回调函数 |

##### callback回调参数：Object data

| 属性         | 类型          | 说明                     |
| -------------- | ------------- | ------------------------ |
| touches        | Array.<Touch\> | 当前所有触摸点的列表     |
| changedTouches | Array.<Touch\> | 触发此次事件的触摸点列表 |
| timeStamp      | number        | 事件触发时的时间戳       |

#### 示例

```javascript
var endHandler = function (data) {
  console.log(data.touches)
};
qg.onTouchEnd(endHandler)
```

### qg.offTouchEnd(function callback)

取消监听触点结束事件

#### 参数

| 参数名   | 类型     | 必填 | 说明         |
| -------- | -------- | ---- | ------------ |
| callback | Function | 否   | 取消监听的回调函数 |
注意：参数为空，将取消所有监听

#### 示例

```javascript
var endHandler = function (data) {
  console.log(data.touches)
};
qg.onTouchEnd(endHandler)
......
qg.offTouchEnd(this.handleEnd)
```

### Touch

在触控设备上的触摸点。通常是指手指或者触控笔在触屏设备或者触摸板上的操作。

#### 属性

| 属性       | 类型   | 说明                             |
| ---------- | ------ | -------------------------------- |
| identifier | number | Touch 对象的唯一标识符，只读属性 |
| clientX    | number | 触点相对于视图左边沿的 X 坐标    |
| clientY    | number | 触点相对于视图上边沿的 Y 坐标  |

