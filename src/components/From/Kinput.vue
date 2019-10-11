<template>
    <div>
        <!-- $attrs接收的是prop之外的属性 -->
        <input :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        // inheritAttrs 解决$attrs父级也会继承属性的问题
        inheritAttrs:false,
        props: {
            value:{
                type:String,
                default:""
            }
        },
        methods: {
            onInput(e) {
                //通知父级数据发生变化
                this.$emit('input',e.target.value);
                
                // 通知父级开始校验
                this.$parent.$emit('validate');
            }
        }
    }
</script>
