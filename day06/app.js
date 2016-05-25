/*
 *多个组件可以使用同一个挂载点，然后动态地在它们之间切换。使用保留的      *<component> 元素，动态地绑定到它的 is特性：
 * keep-alive 指令参数切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染
 */




window.onload = function() {
    var vm = new Vue({
        el: '#app',
        // 注册组件
        components: {
            'my-component1': MyComponent1,
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
