<template>
    <div
        class="d-flex flex-row flex-wrap justify-content-between align-items-center steps-container"

    >

        <div class="step-line"></div>

        <div
            v-for="(step , index ) in data.steps"
            :key="index+1"
            class="flex-row text-white d-flex align-items-center justify-content-center bubble"
            :style="cssStyle"
        >
            <p class="display-6 text-dark d-flex justify-content-center align-items-center rounded-circle " style="width: 100% ; height: 100% ; background-color: cyan">
                <span :class="  ( index+1 == data.currentStep) ? 'step-active ' : ( index+1 < data.currentStep) ? 'step-before ' :''  ">{{ step }}</span>
            </p>
        </div>

    </div>





</template>


<script setup>
    import {ref, computed, defineProps,defineExpose} from "vue";

    const props = defineProps({
        data: Object,
    });
    const data = ref(props.data);
    const cssStyle = computed(() => {
        return {
            "--active-color": data.value.activeColor,
            "--passive-color": data.value.passiveColor,

        };
    });




    function nextStep() {
        if(data.value.currentStep < data.value.steps.length) {
            data.value.currentStep++;
        }else{
            data.value.currentStep=1;

        }

    }
    function prevStep() {
        if(data.value.currentStep>=1) {
            data.value.currentStep--;
        }
        if(data.value.currentStep==0){
            data.value.currentStep = data.value.steps.length;

        }

    }

    const write = ()=>{
        console.log("Hello");
    }



</script>


<style scoped>
.steps-container {
    position: relative;
    width: 100%;
}

.bubble{
    width: 100px;
    height: 100px;
    z-index:2

}
.step-active{
    background-color: #000000;
    color: white;
    width: 100%;
    height: 100%;
    display:  flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
.steps-lists{
    display: flex;
}
.text{
    display:  flex;
    justify-content: center;
    align-items: center;
}
.step-before{
    background-color: #ff0000;
    color: white;
    width: 100%;
    height: 100%;
    display:  flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
.step-line{
    width: 100%;
    height: 10px;
    background-color: blue;
    display: flex;
    align-items: center;
    z-index: 1;
    transform: translateY(-50%);
    position: absolute;
}

</style>


