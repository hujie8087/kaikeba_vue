//创建指定组件事实例并挂载于body上
import Vue from 'vue';

export default function create(Component, props) {
    //0.先创建vue实例 组件实例
    const vm = new Vue({
        render(h) {
            //render方法提供给我们一个h函数，它可以渲染Vnode 虚拟dom
            return h(Component, { props });
        }
    }).$mount(); //$mount 指定实例挂载到哪里  比对后更新操作

    //1.创建组件实例
    //2.通过$children获取该组件实例
    console.log(vm.$root);

    const comp = vm.$children[0];

    //3.追加到body
    document.body.appendChild(vm.$el); //vm.$el 虚拟dom的js对象

    //4.清理函数
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy(); //删除组件实例  $destory();
    }

    //5.返回组件实例
    return comp

}