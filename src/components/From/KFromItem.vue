<template>
    <div>
        <label v-if="label">
            {{label}}
        </label>
        <slot></slot>
        <p v-if="errorMessage">{{errorMessage}}</p>
    </div>
</template>

<script>

import Schema from "async-validator"; //导入校验插件 

    export default {
        props: {
            label:{
                type:String,
                default:''
            },
            prop:String
        },
        inject:['form'],
        data() {
            return {
                errorMessage: ''
            }
        },
        mounted () {
            this.$on('validate',()=>{
                this.validate();
            })    
        },
        methods: {
            validate() {
                // 执行校验
                // 1获取校验规则
                const rules = this.form.rules[this.prop]
                // 2获取数值
                const value = this.form.model[this.prop]
                // 3执行校验
                const desc ={
                    [this.prop] : rules
                }
                const schema = new Schema(desc);
                //  schema参数1是具体的值
                // 返回的是promise 布尔值
                return schema.validate({[this.prop]:value},errors =>{  //validate 返回的是promise。承诺对象 校验有可能是异步校验
                    if (errors) {
                        //有错
                        this.errorMessage = errors[0].message;
                    } else {
                        //没有错误清除错误信息
                        this.errorMessage = '';
                    }
                })
            }
        },
    }
</script>

<style>

</style>