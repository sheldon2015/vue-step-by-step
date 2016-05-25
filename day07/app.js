




window.onload = function() {
    var vm = new Vue({
        el: '#app',
        // 注册组件
        components: {
            //注册定义一个异步组件,可以动态从服务器上加载
            'my-component1': function(resolve, reject) {
                setTimeout(function() {

                    resolve({
                        template: '<div>I am async!</div>'
                    })

                }, 1)

            },

            'my-component2': MyComponent2

        },
        data: {
            currentView: 'my-component1',
        }

    });


    var flag = true;
    document.querySelector('#toggle-view')
        .addEventListener('click', function(params) {
            if (flag) {
                vm.currentView = 'my-component2';
                flag = false;

            } else {
                vm.currentView = 'my-component1';
                flag = true;

            }





        })


}
