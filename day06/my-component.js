var MyComponent1 = Vue.extend({
    template: '<div>{{a}}</div>',
    data: function(params) {
        return {
            a: 11111111111111
        }
    },

    // activate钩子函数

    activate: function(done) {
        var me = this;
        //异步操作
        setTimeout(function() {
            me.a = 'xxxxxxxxxxx';
            // done方法
            done();

        }, 1)
    }
});
var MyComponent2 = Vue.extend({

    template: '<p>2222222222222222222</p>'


});





