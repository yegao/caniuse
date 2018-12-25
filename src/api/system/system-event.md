# 系统事件

## 音频抢占

### qg.onAudioInterruptionBegin(function callback)
监听音频因为受到系统占用而被中断开始，以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，vivo小游戏内所有音频会暂停。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
| -------- | -------- | ---- | ------------ |
| callback | Function | 是 | 监听事件的回调函数 |

#### 示例
```javascript
var func = function () {
  // do something
};
// 开始监听
qg.onAudioInterruptionBegin(func);
```

### qg.offAudioInterruptionBegin(function callback)
取消监听音频因为受到系统占用而被中断开始。

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
| -------- | -------- | ---- | ------------ |
| callback | Function | 否 | 需要取消的监听回调 |
注意：参数为空，将取消所有监听

#### 示例
```javascript
var func = function () {
  // do something
};
// 开始监听
qg.onAudioInterruptionBegin(func);
// 取消监听
qg.offAudioInterruptionBegin(func);
```

### qg.onAudioInterruptionEnd(function callback)
监听音频中断结束，在收到 onAudioInterruptionBegin 事件之后，vivo小游戏内所有音频会暂停，收到此事件之后才可再次播放成功

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
| -------- | -------- | ---- | ------------ |
| callback | Function | 是 | 监听事件的回调函数 |

#### 示例
```javascript
var func = function () {
  // do something
};
// 开始监听
qg.onAudioInterruptionEnd(func);
```
### qg.offAudioInterruptionEnd(function callback)
监听音频中断结束，在收到 onAudioInterruptionBegin 事件之后，vivo小游戏内所有音频会暂停，收到此事件之后才可再次播放成功

#### 参数

| 参数名 | 类型 | 必填 | 说明 |
| -------- | -------- | ---- | ------------ |
| callback | Function | 否 | 需要取消的监听回调 |
注意：参数为空，将取消所有监听

#### 示例
```javascript
var func = function () {
  // do something
};
// 开始监听
qg.onAudioInterruptionEnd(func);

// 取消监听
qg.offAudioInterruptionEnd(func);
```


## 全局错误

### qg.onError(function callback)

监听全局错误事件

#### 参数

| 参数名   | 类型     | 必填 | 说明         |
| -------- | -------- | ---- | ------------ |
| callback | Function | 是   | 监听事件的回调函数 |

##### callback回调参数：Object data

| 属性  | 类型   | 说明         |
| ------- | ------ | ------------ |
| message | String | 错误堆栈信息 |

#### 示例：

```javascript
var func = function (data) {
  console.log(`message is ${data.message}`)
}

qg.onError(func)
```

### qg.offError(function callback)

取消监听全局错误事件

#### 参数

| 参数名   | 类型     | 必填 | 说明         |
| -------- | -------- | ---- | ------------ |
| callback | Function | 否   | 需要取消的监听回调 |
注意：参数为空，将取消所有监听

#### 示例：

```javascript
var func = function (data) {
  console.log(`message is ${data.message}`)
}

qg.onError(func)
......
qg.offError(func)
```




