<template>
    <div class="mt-10">
        <v-container>
            <v-row>
                <v-col v-for="image in images" :key="image.id" cols="12" sm="6" md="4">
                    <v-card elevation="1">
                        <v-img :src="image.url" height="200px" width="100%" cover></v-img>
                        <v-card-title>{{ image.description }}</v-card-title>
                        <v-card-text>
                            <v-icon>mdi-thumb-up</v-icon> {{ image.likes }} Likes
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="green"
                                @click="rateImage(image.id, 'LIKE')"><v-icon>mdi-thumb-up</v-icon>Like</v-btn>
                            <v-btn color="red"
                                @click="rateImage(image.id, 'DISLIKE')"><v-icon>mdi-thumb-down</v-icon>Dislike</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-alert v-if="message" v-model="showMessage" :type="messageType" dismissible>
                {{ message }}
            </v-alert>
        </v-container>
    </div>
</template>

<script>
import { useImageStore } from "../../stores/counterStore";
import { mapActions, mapState } from "pinia";

export default {
    data() {
        return {
            showMessage: false,
        };
    },
    computed: {
        ...mapState(useImageStore, ["images", "message", "error"]),
        messageType() {
            return this.message && this.error ? "error" : "success";
        },
    },
    methods: {
        ...mapActions(useImageStore, ["fetchImages", "rateImage", "clearMessageAction"]),
        clearMessage() {
            this.message = '';
        },
    },
    async mounted() {
        await this.fetchImages();
    },
    watch: {
        message(newMessage) {
            if (newMessage) {
                this.showMessage = true;
                setTimeout(() => {
                    this.showMessage = false;
                    this.clearMessageAction();
                }, 3000);
            }
        },
    },
};
</script>