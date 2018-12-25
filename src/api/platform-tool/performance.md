# 性能 

### Performance qg.getPerformance() `1031+`

获取性能管理器

#### 返回值

Performance 对象

### Performance

一个性能管理器对象

#### number Performance.now()

可以获取当前时间以微秒为单位的时间戳

#### 示例

```js
const performance = qg.getPerformance()

console.log(performance.now())
```

### qg.triggerGC() `1031+`

加快触发 JavaScript VM 进行（垃圾回收），GC 时机是由 JavaScript VM 来控制的，并不能保证调用后马上触发 GC。

#### 示例

```js
qg.triggerGC()
```

