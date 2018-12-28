# storage

### qg.getStorage(Object object)

异步读取存储内容

#### 参数

Object object

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |
| default | String | 否 | 如果key不存在，返回default。如果default未指定，返回长度为0的空字符串 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

##### success回调参数

key对应的存储内容

#### 示例

```javascript
qg.getStorage({
  key: 'keyA',
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```

### qg.setStorage(Object object)

异步添加或修改存储内容

#### 参数

Object object

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |
| value | String | 否 | 新值。如果新值是长度为0的空字符串，会删除以key为索引的数据项 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### 示例

```javascript
qg.setStorage({
  key: 'keyA',
  value: 'ValueA',
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```

### qg.deleteStorage(Object object)

异步删除存储内容

#### 参数

Object object

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### 示例

```javascript
qg.deleteStorage({
  key: 'keyA',
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```

### qg.clearStorage(Object object)

异步清空存储内容

#### 参数

Object object

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### 示例

```javascript
qg.clearStorage({
  success: function (data) {
    console.log('handling success')
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```
### qg.getStorageInfo(Object object)

异步获取当前storage的相关信息

#### 参数

Object object

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

##### success回调参数：Object data

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| keys | Array| 当前 storage 中所有的 key |
| currentSize | number | 当前占用的空间大小, 单位 KB |
| limitSize | number | 限制的空间大小，单位 KB |

#### 示例

```javascript
qg.getStorageInfo({
  success: function (data) {
    console.log('handling success, currentSize=' + data.currentSize)
  },
  fail: function (data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```

### qg.getStorageSync(Object object)

同步读取存储内容

#### 参数

Object object

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |
| default | String | 否 | 如果key不存在，返回default。如果default未指定，返回长度为0的空字符串 |

#### 返回值

| 含义 | 类型 | 内容 |
| --- | --- | --- |
| 参数传递错误 | String | key not define |
| 读取成功 | String | 参数key对应的值 |

#### 示例

```javascript
var result = qg.getStorageSync({
  key: 'keyB'
})
console.log('keyB =' + result)
```

### qg.setStorageSync(Object object)

同步插入或者修改存储内容

#### 参数

Object object

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |
| value | String | 否 | 新值。如果新值是长度为0的空字符串，会删除以key为索引的数据项 |

#### 返回值

| 含义 | 类型 | 内容 |
| --- | --- | --- |
| 参数传递错误 | String | key not define |
| 插入成功 | String | success |

#### 示例

```javascript
var result = qg.setStorageSync({
  key: 'keyB'
})
console.log('setStorageSync ' + result)
```

### qg.deleteStorageSync(Object object)

同步删除存储内容

#### 参数

Object object

| 属性 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |

#### 返回值

| 含义 | 类型 | 内容 |
| --- | --- | --- |
| 参数传递错误 | String | key not define |
| 删除成功 | String | success |

#### 示例

```javascript
var result = qg.deleteStorageSync({
  key: 'keyB'
})
console.log('deleteStorageSync' + result)
```

### qg.clearStorageSync()

同步删除所有存储内容

#### 参数

无

#### 返回值

无

#### 示例

```javascript
qg.clearStorageSync()
```

### qg.getStorageInfoSync()

同步获取当前storage的相关信息

#### 参数

无

#### 返回值

Object data

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| keys | Array | 当前 storage 中所有的 key |
| currentSize | number | 当前占用的空间大小, 单位 KB |
| limitSize | number | 限制的空间大小，单位 KB |

#### 示例：

```javascript
var data = qg.getStorageInfo()
console.log("keys = " + data.keys)
```






