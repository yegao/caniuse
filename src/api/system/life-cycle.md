# 生命周期

### qg.exitApplication()

退出游戏，同步方法

#### 参数
无

#### 示例

```javascript
qg.exitApplication()
```

### qg.onShow(function callback)

监听游戏切入前台事件

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
| -------- | -------- | ---- | ------------ |
| callback | Function | 是 | 接收前台事件回调 |

#### 示例

```javascript
var showf = function () {
  console.log('game enter foreground')
}
qg.onShow(showf)
```

### qg.offShow(function callback)

取消监听游戏切入前台

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
| -------- | -------- | ---- | ------------ |
| callback | Function | 否 | 需要取消的监听回调 |
注意：参数为空，将取消所有监听

#### 示例

```javascript
var showf = function () {
  console.log('game enter foreground')
}
qg.onShow(showf);
......
qg.offShow(showf);
```

### qg.onHide(function callback)

监听游戏切入后台事件

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
| -------- | -------- | ---- | ------------ |
| callback | Function | 是 | 接收后台事件回调 |

#### 示例：

```javascript
var hidef = function () {
  console.log('game enter background')
}
qg.onHide(hidef)
```

### qg.offHide(function callback)

取消监听游戏切入后台事件

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
| -------- | -------- | ---- | ------------ |
| callback | Function | 否 | 需要取消的监听回调 |
注意：参数为空，将取消所有监听

#### 示例

```javascript
var hidef = function () {
  console.log('game enter background')
}
qg.onHide(hidef)
......
qg.offHide(hidef)
```



