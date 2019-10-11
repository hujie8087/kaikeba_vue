<template>
    <div>
        <KFrom :model="model" :rules="rules" ref="loginform">
            <KFromItem label="用户名" prop="username">
                <Kinput v-model="model.username" ></Kinput>
            </KFromItem>   
            <KFromItem label="密码" prop="password">
                <Kinput v-model="model.password" type='password'></Kinput>
            </KFromItem> 
            <KFromItem >
               <button @click="onLogin">登录</button>
            </KFromItem>  
        </KFrom>
        {{model.username}}
        {{model.password}}
    </div>
</template>

<script>
import Kinput from './Kinput.vue';
import KFromItem from './KFromItem.vue';
import KFrom from './KFrom.vue';
import Notice from '../Notice';
import create from '@/utils/create';
    export default {
        components: {
            Kinput,KFromItem,KFrom
        },
        data() {
            return {
                model:{
                    username: 'tom',
                    password:""
                },
                rules:{
                    username:[{required:true,message:'请填写用户名'}],
                    password:[{required:true,message:'请填写密码'}],
                }
            }
        },
        methods: {
            onLogin() {
                let notice;
                this.$refs.loginform.validate((isValid)=>{
                    if (isValid) {
                        notice = create(Notice,{
                            title:"xxx",
                            message:'有错！！！',
                            duration:10000
                        })
                        // alert('有错！！')
                    } else {
                        notice = create(Notice,{
                            title:"xxx",
                            message:'登录!!!',
                            duration:10000
                        })
                        // alert('登录!!')
                    }
                    notice.show();
                })
            }
        },
    }
</script>