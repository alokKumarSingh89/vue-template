<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media>
          <v-layout column fill-height>
            <v-card-title>
              <H2> {{user.firstName}} {{user.lastName}} </H2>
            </v-card-title>
            <image-uploader
              :debug="1"
              id="fileupload"
              :maxWidth="512"
              :quality="0.7"
              :autoRotate=true
              outputFormat="verbose"
              :preview=true
              :className="['fileinput', { 'fileinput--loaded' : hasImage }]"
              capture="environment"
              @input="setImage"
              @onUpload="startImageResize"
              @onComplete="endImageResize">
            </image-uploader>
          </v-layout>
        </v-card-media>

        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(650) 555-1234</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{user.email}}</v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>


          <v-divider inset></v-divider>

          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Located at</v-list-tile-title>
              <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { ImageUploader } from "vue-image-upload-resize";
export default {
  name: "Profile",
  components: {
    "image-uploader": ImageUploader
  },
  data() {
    return {
      hasImage: false,
      image: "@/assets/avatar.png"
    };
  },
  computed: {
    user() {
      return this.$store.state.userStore.user;
    }
  },
  methods: {
    setImage(file) {
      this.previewUrl = file.dataUrl;
      this.hasImage = true;
      this.image = file;
      console.log("setImage", file);
    },
    startImageResize(file) {
      console.log("startImageResize", file);
    },
    endImageResize(file) {
      console.log("endImageResize", file);
    }
  }
};
</script>
<style>
.fileinput {
}
</style>

