Page({
    loginSubmit: function (e) {
        var eventObj = e.detail.value;
        var account = eventObj.account;
        var password = eventObj.password;
        console.log('账户：' + account + '\t密码：' + password, e.detail.value)
    }
})