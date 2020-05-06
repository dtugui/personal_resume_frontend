<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Create New Resume</h1>
        <div>
          <ul>
          </ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          <div class="form-group">
            <label>First Name:</label>
            <input type="text" class="form-control" v-model="first_name" />
          </div>
          <div class="form-group">
            <label>Last Name:</label>
            <input type="text" class="form-control" v-model="last_name" />
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="text" class="form-control" v-model="email" />
          </div>
          <div class="form-group">
            <label>Phone Number:</label>
            <input type="text" class="form-control" v-model="phone_number" />
          </div>
          <div class="form-group">
            <label>Bio:</label>
            <input type="text" class="form-control" v-model="short_bio" />
          </div>
          <div class="form-group">
            <label>LinkedIn URL:</label>
            <input type="text" class="form-control" v-model="linkedin_url" />
          </div>
          <div class="form-group">
            <label>Twitter URL:</label>
            <input type="text" class="form-control" v-model="twitter_url" />
          </div>
          <div class="form-group">
            <label>Website URL:</label>
            <input type="text" class="form-control" v-model="website_url" />
          </div>
          <div class="form-group">
            <label>Resume URL:</label>
            <input type="text" class="form-control" v-model="resume_url" />
          </div>
          <div class="form-group">
            <label>Github URL:</label>
            <input type="text" class="form-control" v-model="github_url" />
          </div>
          <div class="form-group">
            <label>Photo:</label>
            <input type="text" class="form-control" v-model="photo" />
          </div>

          <input type="submit" class="btn btn-primary" value="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      short_bio: "",
      linkedin_url: "",
      twitter_url: "",
      website_url: "",
      resume_url: "",
      github_url: "",
      photo: "",
      experiences: "",
      educations: "",
      skills: "",
      projects: "",
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone_number: this.phone_number,
        short_bio: this.short_bio,
        linkedin_url: this.linkedin_url,
        twitter_url: this.twitter_url,
        website_url: this.website_url,
        resume_url: this.resume_url,
        github_url: this.github_url,
        photo: this.photo,
        experiences: this.experiences,
        educations: this.educations,
        skills: this.skills,
        projects: this.projects,
      };
      var myVariable = 0;
      axios
        .post("/api/students", params)
        .then(response => {
          this.$router.push("/students");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
  },
};
</script>