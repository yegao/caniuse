# 账号

### qg.authorize(Object object)

账号授权登录

#### 参数

Object object

| 属性      | 类型       | 必填   | 说明       |
| -------- | -------- | ---- | -------- |
| type | string | 是    | 授权码模式为code，简化模式为token。|
| redirectUri | Uri | 否    | 重定向URI。 |
| scope | string | 否    | 申请的权限范围，目前只支持一种scope，假如不填则getProfile只返回openId。scope.baseProfile：获取用户基本信息。 |
| state | string | 否    | 可以指定任意值，认证服务器会原封不动地返回这个值。 |
| success | Function | 否    | 成功回调。 |
| fail | Function | 否    | 失败回调。 |
| complete | Function | 否    | 执行结束后的回调。 |

##### success回调参数：Object data

| 属性      | 类型      | 说明       |
| -------- | -------- | -------- |
| state | string  | 请求时同字段指定的任意值。 |
| code | string  | 授权码模式下可用，返回的授权码。 |
| accessToken | string  | 简化模式下可用，返回的访问令牌。 |
| tokenType | string  | 简化模式下可用，访问令牌类型。 |
| expiresIn | number  | 简化模式下可用，访问令牌过期时间，单位为秒，如果通过其他方式设置，则此处可能为空。 |
| scope | string  | 简化模式下可用，实际权限范围，如果与申请一致，则此处可能为空。 |

##### fail返回错误代码

| 错误码  | 说明       |
| -------- | -------- |
| 201 | 用户拒绝，获取帐号权限失败  |

#### 示例

```javascript
qg.authorize({
    type: "code",
    success: function (data) {
        qg.showToast({
            message: "handling success, code: " + data.code
        })
    },
    fail: function (data, code) {
        qg.showToast({
            message: "handling fail, fail code: " + code
        })
    }
})
```

```javascript
qg.authorize({
    type: "token",
    success: function (data) {
        qg.showToast({
            message: "handling success, code: " + data.accessToken
        })
    },
    fail: function (data, code) {
        qg.showToast({
            message: "handling fail, fail code: " + code
        })
    }
})
```

### qg.getProfile(Object object)

获得用户基本信息。

#### 参数

Object object

| 属性      | 类型       | 必填   | 说明       |
| -------- | -------- | ---- | -------- |
| token | string | 是    | 访问令牌。|
| success | Function | 否    | 成功回调。 |
| fail | Function | 否    | 失败回调。 |
| complete | Function | 否    | 执行结束后的回调。 |

##### success回调参数：Object data

| 属性      | 类型      | 说明       |
| -------- | -------- | -------- |
| openid | string  | 用户的openid，可作为用户的唯一标识。 |
| id | string  | 用户的user id，可能为空。 |
| unionid | string  | 用户在开放平台上的唯一标示符，可能为空。 |
| nickname | string  | 用户的昵称，可能为空。 |
| avatar | object  | 用户的头像图片地址，可能为空，按照分辨率组织，当只有一个分辨率时，可以使用default对应的图片地址。 |

#### 示例

```javascript
qg.authorize({
    type: "token",
    success: function (obj) {
        qg.showToast({
            message: "handling success, code: " + obj.accessToken
        })

        qg.getProfile({
            token: obj.accessToken,
            success: function(data){
                qg.showToast({
                    message: "nickname: " + data.nickname
                })
            },
            fail: function(data, code) {
                qg.showToast({
                    message: "handling fail, code=" + code
                })
            }
        })
    },
    fail: function (data, code) {
        qg.showToast({
            message: "handling fail, fail code: " + code
        })
    }
})
```
::: tip
1.如果选择简化模式，不需要进行服务端的对接

2.如果需要复杂模式，请查看服务端对接文档：[vivo账号接入流程](https://dev.vivo.com.cn/documentCenter/doc/143)
:::

::: tip
1.一定要使用在vivo开发者平台申请appid的包名进行打包，并在vivo手机上进行调试，如果是使用简化模式对接，提交申请时的账号回调地址可以任意选填一个官方域名即可。

2.不建议每次打开游戏都调用授权接口，可以保存上一次授权成功的token，通过getProfile接口获取到账号信息，如果getProfile返回失败，再重新调用授权，也可以通过token的有效期，来控制是否访问授权接口。
:::





