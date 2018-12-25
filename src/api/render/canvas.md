# 画布

## 创建画布

### Canvas qg.createCanvas()

创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。

#### 参数
无

#### 返回值

Canvas 画布对象

#### 示例

```javascript
var canvas = qg.createCanvas();
console.log("canvas = " + canvas);
```

## Canvas

画布对象

### 属性
| 属性      | 类型       | 说明  |
| -------- | -------- | ---- |
| width | number | 画布的宽度    |
| height | number | 画布的高度    |

### RenderingContext Canvas.getContext(string contextType)

获取画布对象的绘图上下文

#### 参数

| 参数名      | 类型       | 必填   | 说明       |
| -------- | -------- | ---- | -------- |
| contextType | String | 是    | 上下文类型     |

#### contextType取值

| 值      | 类型      | 说明       |
| -------- | -------- | -------- |
| 2d | String  | 2d 绘图上下文     |
| webgl | String  | webgl 绘图上下文     |

#### 返回值

RenderingContext 绘图上下文

#### 示例

```javascript
var canvas = qg.createCanvas();
var gl = canvas.getContext("webgl");
console.log("gl = " + gl);
```

## RenderingContext

绘图上下文

通过 Canvas.getContext('2d') 接口可以获取 CanvasRenderingContext2D 对象。CanvasRenderingContext2D 实现了 [HTML Canvas 2D Context](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D) 定义的一部分属性、方法。

通过 Canvas.getContext('webgl') 接口可以获取 WebGLRenderingContext 对象。WebGLRenderingContext 实现了 [WebGL 1.0](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext) 定义的所有属性、方法、常量。

::: tip 2D 接口支持情况
CanvasRenderingContext2D 仅用于文字渲染等功能，暂不支持游戏开发。
:::

::: tip WebGL 暂不支持的接口
* pixelStorei 当第一个参数是 gl.UNPACK_COLORSPACE_CONVERSION_WEBGL 时
* compressedTexImage2D
* compressedTexSubImage2D
* getExtension
* getSupportedExtensions
:::
    








