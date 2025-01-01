<template>
    <div class="d-flex flex-row flex-wrap justify-content-between align-items-center steps-container">
        <div class="step-line" :style="progressStyle"></div>
        <div
            v-for="(step, index) in data.steps"
            :key="index + 1"
            class="flex-row text-white d-flex align-items-center justify-content-center bubble"
            :style="cssStyle"
        >
            <p
                class="display-6 text-dark d-flex justify-content-center align-items-center rounded-circle"
                style="width: 100%; height: 100%; background-color: cyan"
            >
                <span :class="index + 1 == data.currentStep ? 'step-active ' : index + 1 < data.currentStep ? 'step-before ' : ''">{{
                    step
                }}</span>
            </p>
        </div>
    </div>

    <div class="content">
        <slot :sendDateToParentBySlot="data.currentStep"></slot>
    </div>

    <div class="step-navigation">
        <button @click="prevStep">PrevStep</button>
        <button @click="nextStep">NextStep</button>
    </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";

const props = defineProps({
    data: Object,
});
const data = ref(props.data);

function nextStep() {
    if (data.value.currentStep < data.value.steps.length) {
        data.value.currentStep++;
    } else {
        data.value.currentStep = 1;
    }
}

function prevStep() {
    if (data.value.currentStep > 1) {
        data.value.currentStep--;
    } else {
        data.value.currentStep = data.value.steps.length;
    }
}

// محاسبه عرض خط بر اساس استپ فعلی
const progressStyle = computed(() => {
    const stepPercentage = 100 / (data.value.steps.length - 1); // درصد هر استپ
    return {
        width: `${(data.value.currentStep - 1) * stepPercentage}%`, // محاسبه عرض خط
    };
});
</script>

<style scoped>
.steps-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.bubble {
    width: 100px;
    height: 100px;
    z-index: 2;
    position: relative; /* برای تنظیم درست نسبت به خط */
}

.step-active {
    background-color: #000000;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
.step-line {
    height: 5px;
    background-color: blue;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: width 0.3s ease; /* انیمیشن برای حرکت نرم خط */
    z-index: 1;
}
.steps-lists {
    display: flex;
}
.text {
    display: flex;
    justify-content: center;
    align-items: center;
}
.step-before {
    background-color: #ff0000;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
.step-navigation {
    margin-top: 16px;
}
button {
    margin: 0 8px;
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 4px;
}
.content {
    margin: 20px 0;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-size: 15px;
    line-height: 1.5;
}
</style>
