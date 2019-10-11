<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        provide(){
            return {
                form:this  //传递From事例给后代 
            }
        },
        props: {
            model:{
                type:Object,
                required:true
            },
            rules:{
                type:Object
            }
        },
        methods: {
            validate(cb) {
                // map 结果是若干个promise 数组
                const tasks = this.$children.filter(item =>item.props).map(item => item.validate());

                Promise.all(tasks).then(() => cb(true)).catch(() => cb(false));          //

            }
        },
    }
</script>

<style scoped>

</style>