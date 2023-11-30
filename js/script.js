const {createApp} = Vue

        createApp({
            data(){
                return {
                    message: 'Hello Vue',
                    image: 'https://people.com/thmb/njUuAHakxw0tE6HOFFbW0xMagJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(739x81:741x83)/kobe-bryant-cover-nba-2k-070523-tout-24f48f66b19f4bc9ab9427889c6425e0.jpg',
                    title: 'my inspiration'
                }
            }
        }).mount('#app')