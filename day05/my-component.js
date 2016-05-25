/*
    1.创建组件构造函数（MyComponent）首字母最好大写
    2.replace:是否替换挂载点
 */


var MyComponent = Vue.extend({
    template: '<div> demo test </div>',
    replace: true

})

/**
 * 全局注册组件，tag 为 my-component
 */
Vue.component('my-component', MyComponent)

//------------------------------------------
var Child = Vue.extend({
    template: ' <p>{{msg+"ssssssssssss"}} </p>',
    props: ['msg']

})


/**
 * 局部注册组件components注册组件
 */

var Parent = Vue.extend({
    props: ['msg'],
    template: '<child msg="hello  world  child" ></child>' +
    '<zhijie-child  msg="hello  world  zhijie-child"  ></zhijie-child>' +
    '<p>{{msg}}</p>' +
    '<div class="some"><child msg="child 1111111111111" ></child>    </div>'
    ,
    components: {
        'child': Child,
        /**
        *  直接局部传递选项对象，注册子组件，
        */
        'zhijie-child': {
            props: ['msg'],
            template: '<p>{{msg}}</p>'

        }
    }

})

Vue.component('parent', Parent)
//----------------------------------------------

/**
 *  直接传递选项对象，注册组件，
 */

Vue.component('zhijiezhuce', {
    template: '<p>直接注册组件</p>'
})


//--------------------------------------------------

/**
 * 利用id去找页面的模板
 *
 */

Vue.component('tpl', {
    template: '#demo'
})


