

# WebSocket

### qg.createWebSocket(Object object)

创建websocket实例

#### 参数

Object object

| 属性      | 类型       | 必填   | 说明                                       |
| -------- | -------- | ---- | ---------------------------------------- |
| url  | String     | 是    | 请求url， 必须是wss或ws协议 |
| protocols | Array.\<String\> | 否    | 子协议组                    |

#### 返回值

SocketTask 对象

#### 示例

```javascript
const ws = qg.createWebSocket({
  url:'wss://echo.websocket.org',
  protocols:['protocols1']
})
```
:::tip
如果使用的是wss协议，游戏配置文件manifest.json里的minPlatformVersion字段（支持的最小平台版本号）需要设置为 1030
:::

## SocketTask

### SocketTask.send(String string)

使用ws对象发送消息

#### 参数

字符串，要发送的消息

#### 示例

```javascript
ws.send('message');
```

### SocketTask.close()

关闭连接

#### 示例

```javascript
ws.close();
```

### SocketTask.onopen

监听websocket连接打开的状态。

#### 属性值

| 属性值   | 类型     | 说明         |
| -------- | -------- | ------------ |
| callback | Function | 监听打开连接的回调函数 |

#### 示例

```javascript
ws.onopen = function(evt){
  console.log('onopen');
};
```

### SocketTask.onmessage

消息事件的监听，用于接收服务端发来的message

#### 属性值

| 属性值   | 类型     | 说明                   |
| -------- | -------- | ---------------------- |
| callback | Function | 监听服务器返回消息事件的回调函数 |

##### callback回调参数：Object data

| 属性 | 类型   | 说明               |
| ------ | ------ | ------------------ |
| data   | String | 监听器接收到的消息 |


#### 示例

```javascript
ws.onmessage = function (data) {
  console.log(`message is ${data.data}`)
}
```

### SocketTask.onclose

关闭连接的监听。

#### 属性值

| 属性值   | 类型     | 说明               |
| -------- | -------- | ------------------ |
| callback | Function | 监听关闭连接事件的回调函数 |

##### callback回调参数：Object data

| 属性   | 类型    | 说明                     |
| -------- | ------- | ------------------------ |
| code     | Number  | 服务器返回关闭的状态码。 |
| reason   | String  | 服务器返回的关闭原因。   |
| wasClean | Boolean | 是否正常关闭。           |

#### 示例

```javascript
ws.onclose = function (data) {
  console.log(`onclose:data.code = ${data.code}, data.reason = ${data.reason}, data.wasClean = ${data.wasClean}`)
}
```

### SocketTask.onerror

错误事件的监听器。

#### 属性值

| 属性值   | 类型     | 说明         |
| -------- | -------- | ------------ |
| callback | Function | 监听连接错误的回调函数 |

##### callback回调参数：Object data

| 属性 | 类型   | 说明                 |
| ------ | ------ | -------------------- |
| data   | String | 监听器接收到的消息。 |


#### 示例

```javascript
ws.onerror = function (data) {
  console.log(`onerror data.data = ${data.data}`)
}
```