<!-- FAQ -->
<template>
    <div style="height: 100%;border: 2px solid #D5D5D5;border-radius: 20px;background-color: #EAEAEA;">
        <div style="display: flex;flex: 1;height: 100%;">
            <div style="display: flex;flex-direction: column;width:100%;height: 100%;">
                <div style="margin-left: 24px;margin-top:24px;color: #FF678D;font-weight: bolder;font-size: 36px;display: flex;align-items: flex-start;">F.A.Q.</div>
                <div style="flex: 1;margin:24px;height: 100%;overflow-y: scroll;">

                    <div class="faq-item" v-for="(item,index) in faqList" :key="index" style="" >
                        {{item.title}}
                    </div>
                </div>
            </div>
            <div style="width: 32%">

            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        data: ()=> ({
            faqList:[
                {title:"What is Ether?"},
                {title:"Is Ether Eco-Friendly despite using blockchain technology?"},
                {title:"Who is Hushi?"},
                {title:"Who are the main character of the Ether story?"},
                {title:"What is the Creator Fund?"},
                {title:"How can I reach out for a potential collabortion?"},
                {title:"How can I become part of the Ether team?"},
                {title:"How can I request permission to license or use my Ether IP?"},
            ]
        })
    }
</script>

<style lang="scss">
    .faq-item {
        border-radius: 5px;
        margin-bottom: 32px;
        align-items: center;
        justify-content: center;
        display:flex;
        color: #FF678D;
        height: 32px;
        width:95%;
        border: 1px solid black;
        position: relative;
        &::after {
            background: red;
            content: "";
            left: 5%;
            right: 5%;
            position: absolute;
            bottom: -20px;
            width: 90%;
            border-bottom: 100px solid red;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            height: 0;
        }
    }
    
    
</style>