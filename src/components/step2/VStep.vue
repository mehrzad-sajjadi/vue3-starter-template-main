<!-- USE EMIT FOR SHOW CONTENT -->
<template>
    <h1>Step 2</h1>
    <VStepButton :data="dataSteps" @stepChanged="updateCurrentStep"></VStepButton>
    <div v-if="CurrentStep == 1">
        <p>First Content</p>

    </div>
    <div v-else-if="CurrentStep == 2">
        <img src="@/assets/img/nature.jpg" class="img-fluid w-75 rounded" alt="" />
    </div>
    <div v-else-if="CurrentStep.value == 3">
        <p>3nd Content</p>
    </div>

</template>

<script setup>
import VStepButton from "@/components/step2/VStepButton.vue";
import { ref } from "vue";

const dataSteps = {
    steps: ["step1", "step2", "step3"],
    currentStep: 1,
};

const CurrentStep = ref(1);

function updateCurrentStep(parameter){
    CurrentStep.value = parameter;
    console.log(CurrentStep.value);
    return CurrentStep ;
}

</script>
<style>
h1 {
    padding-bottom: 20px;
    text-align: center;
}
</style>
