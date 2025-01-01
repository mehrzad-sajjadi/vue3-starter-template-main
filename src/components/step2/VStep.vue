<!-- USE EMIT FOR SHOW CONTENT -->
<template>
    <h1>Step 2</h1>
    <VStepButton :data="dataSteps" @stepChanged="updateCurrentStep">
        <div v-if="currentStep == 1">
            <h2>استپ اول</h2>
            <p>این محتوای استپ اول است.</p>
        </div>
        <div v-else-if="currentStep == 2">
            <h2>استپ دوم</h2>
            <p>این محتوای استپ دوم است.</p>
        </div>
        <div v-else-if="currentStep == 3">
            <h2>استپ سوم</h2>
            <p>این محتوای استپ سوم است.</p>
        </div>
    </VStepButton>
</template>

<script setup>
import VStepButton from "@/components/step1/VStepButton.vue";
import { ref } from "vue";

const dataSteps = {
    steps: ["step1", "step2", "step3"],
    currentStep: 1,
    activeColor: "#65a30d",
    passiveColor: "#84cc16",
};
</script>
<style>
h1 {
    padding-bottom: 20px;
    text-align: center;
}
</style>
