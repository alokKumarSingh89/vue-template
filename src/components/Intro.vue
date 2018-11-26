<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Welcome!</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Benefit 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Benefit 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">Benefit 3</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5">Summary</v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="white"
          border="solid black 1px"
          height="300px"
        >
        <H1> Welcome title</h1>
        <h4> Welcome message and introduction here </h4>

        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="white"
          border="solid black 1px"
          height="300px"
        >
        <H1> Benefit 1</h1>
        <h4> Expand on your first benefit here </h4>

        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="white"
          border="solid black 1px"
          height="300px"
        >
        <H1> Benefit 2</h1>
        <h4>expand again on your benefit here </h4>

        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card
          class="mb-5"
          color="white"
          border="solid black 1px"
          height="300px"
        >
        <H1> Benefit 3</h1>
        <h4> expand on your benefit here </h4>

        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 5"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="5">
        <v-card
          class="mb-5"
          color="white"
          border="solid black 1px"
          height="300px"
        >

        <H1> Summary</h1>
        <h4> summarize benefits </h4>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e1: 0
      }
    }
  }
</script>

<style>
  card {
    color: white;
    border-style: black solid 1px;
    height: 300px;
  }
</style>
