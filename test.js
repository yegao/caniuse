function L(e, t, n) {
    "background" === Jr.runningStatus && -1 !== Kr.indexOf(e) ? n({
        errMsg: e + ":fail can not be invoked in background running status"
    }) : "active" !== Jr.runningStatus && -1 !== Hr.indexOf(e) ? n({
        errMsg: e + ":fail can only be invokeed in acitve running status"
    }) : __safeway__.bridge.invoke("login", t, n)
}

function W(e,t,n) {
    t = E({}, t);
    var r = {};
    for (var o in t)
        "function" == typeof t[o] && (!0 === Ir.karmaTest ? r[o] = t[o] : r[o] = Reporter.surroundThirdByTryCatch(t[o], "at api login " + o + " callback function"),
        delete t[o]);
    var i = {};
    for (var a in n)
        "function" == typeof n[a] && (i[a] = y(n[a], "at api login " + a + " callback function"),
        i[a]._argumentsLength = n[a].length);
    L("login", t, function(t) {
        t.errMsg = t.errMsg || "login:ok";
        var n = 0 === t.errMsg.indexOf("login:ok")
            , o = 0 === t.errMsg.indexOf("login:cancel")
            , a = 0 === t.errMsg.indexOf("login:fail");
        if ("function" == typeof i.beforeAll && i.beforeAll(t),
        n) {
            var s = function() {
                "function" == typeof r.success && r.success(t),
                "function" == typeof i.afterSuccess && i.afterSuccess(t)
            };
            "function" == typeof i.beforeSuccess ? 2 === i.beforeSuccess._argumentsLength ? i.beforeSuccess(t, s) : (i.beforeSuccess(t),
            s()) : s()
        } else if (o)
            t.errMsg = t.errMsg.replace("login:cancel", "login:fail cancel"),
            "function" == typeof r.fail && r.fail(t),
            "function" == typeof i.beforeCancel && i.beforeCancel(t),
            "function" == typeof r.cancel && r.cancel(t),
            "function" == typeof i.afterCancel && i.afterCancel(t);
        else if (a) {
            "function" == typeof i.beforeFail && i.beforeFail(t),
            "function" == typeof r.fail && r.fail(t);
            var c = !0;
            "function" == typeof i.afterFail && (c = i.afterFail(t)),
            !1 !== c && Reporter.reportIDKey({
                key: "login_fail"
            })
        }
        "function" == typeof r.complete && r.complete(t),
        "function" == typeof i.afterAll && i.afterAll(t),
        no(e, n, a, o, t.errMsg)
    }),
    Reporter.reportIDKey({
        key: "login"
    })
}