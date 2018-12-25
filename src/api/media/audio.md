# 音频


### qg.createInnerAudioContext()

创建一个内部 audio 上下文 InnerAudioContext 对象。

#### 参数

无

#### 返回值

InnerAudioContext 对象

#### 示例

```js
const innerAudioContext = qg.createInnerAudioContext()
```

## InnerAudioContext

InnerAudioContext 对象，可通过 qg.createInnerAudioContext 接口获取。

### 属性


| 属性      | 类型       | 说明  |
| -------- | -------- | ---- |
| src | string | 设置音频资源的地址    |
| loop | boolean | 设置或获取音频资源是否循环播放   |
| duration | number | 获取当前音频的长度，单位 s。只有在当前有合法的 src 时返回    |
| currentTime | number | 获取当前音频的播放位置，单位 s。只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位   |
| paused | boolean | 获取当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放    |
| volume | number | 设置或获取音频的音量，范围 0~1    |

#### 示例

```javascript
var innerAudioContext = qg.createInnerAudioContext()
innerAudioContext.src = '/audio.mp3'
innerAudioContext.loop = true
innerAudioContext.volume = 1
```

::: tip
请先设置src地址后，再调用InnerAudioContext的方法
:::

### 方法

#### InnerAudioContext.play()

播放音频

##### 参数

无

##### 示例

```javascript
innerAudioContext.play()
```

#### InnerAudioContext.seek(number position)

跳转到指定位置，单位 s

##### 参数

number position
跳转的时间

##### 示例

```javascript
innerAudioContext.seek(10)
```

#### InnerAudioContext.pause()

暂停播放音频

##### 参数

无

##### 示例

```javascript
innerAudioContext.pause()
```

#### InnerAudioContext.stop()

停止播放音频

##### 参数

无

##### 示例

```javascript
innerAudioContext.stop()
```

### 事件

| 名称           | 描述                                   |
| -------------- | -------------------------------------- |
| onEnded          | 监听播放结束时的回调                   |
| offEnded          | 取消监听播放结束时的回调                   |

#### 示例

```javascript
var func = function () {
  console.log(`audio current time: ${audio.currentTime}`)
};
innerAudioContext.onEnded(func);
innerAudioContext.offEnded(func);
```

::: tip
请先调用InnerAudioContext.play()方法后，再监听onEnded事件，否则，监听无效
:::