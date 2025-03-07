import { defineStore } from "pinia";
import axios from "axios";

export const useImageStore = defineStore("imageStore", {
  state: () => ({
    images: [],
    message: "",
    error: "",
  }),
  actions: {
    async fetchImages() {
      try {
        const response = await axios.get("https://api.mademyday.ai/Mock/getimages.php");
        this.images = response.data || []; 
      } catch (error) {
        this.message = "Error loading images.";
      }
    },
    async rateImage(imageId, rating) {
      try {
        const response = await axios.post("https://api.mademyday.ai/Mock/rateimages.php", {
          imageId: imageId,
          rating: rating,
        });
    
        if (response.data.STATUS === 'OK') {
          const image = this.images.find((img) => img.id === imageId);
          this.message = `Image ${image.description} was rated as ${rating}.`;
        
          if (image) {
            image.likes += rating === "LIKE" ? 1 : -1;
          }
        } else {
          this.error = "Error rating the image. Please try again.";
        }
      } catch (error) {
        if (error.response) {
          this.message = `Server Error: ${error.response.data.message || "Something went wrong."}`;
        } else if (error.request) {
          this.message = "No response from the server. Please check your connection.";
        } else {
          this.message = "An error occurred. Please try again.";
        }
      }
    },
    
    clearMessageAction() {
      this.message = ''; 
      this.error = '';
    }
  },
});
