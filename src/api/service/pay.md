# 支付

### qg.pay(Object object)

使用支付完成付款。

#### 参数

Object object

| 属性      | 类型       | 必填   | 说明       |
| -------- | -------- | ---- | -------- |
| orderInfo | string | 是    | 订单信息。支付服务器返回的订单json字符串|
| success | Function | 否    | 成功回调。 |
| fail | Function | 否    | 失败回调。 |
| complete | Function | 否    | 执行结束后的回调。 |

##### success回调参数：Object data

| 参数      | 类型      | 说明       |
| -------- | -------- | -------- |
| code | number | 返回状态码。 |
| message | string  | 消息内容。 |
| result | string  | 支付结果。 |

##### fail返回错误代码

| 参数名      | 类型      | 说明       |
| -------- | -------- | -------- |
| data | string  | 消息内容。 |
| code | number | 返回状态码。 |

#### 示例

```javascript
qg.pay({
  orderInfo: 'order1',
  success: function(ret) {
        qg.showToast({
          message: "支付成功：" + JSON.stringify(ret)
        })
      },
      fail: function (erromsg, errocode) {
        qg.showToast({
          message: "支付失败：" + errocode + ': ' + erromsg
        })
      },
      cancel: function(){
        qg.showToast({
          message: "用户取消"
        })
      }
})
```

::: tip
1.一定要使用在vivo开发者平台申请appid的包名进行打包，并在vivo手机上进行调试


2.支付必须进行服务器端对接，请查看[vivo支付接入流程](https://dev.vivo.com.cn/documentCenter/doc/144)
:::
