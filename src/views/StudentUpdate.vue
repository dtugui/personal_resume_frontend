<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Resume</h1>
        <div>
          <ul>
          </ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          <div class="form-group">
            <label>First Name:</label>
            <input type="text" class="form-control" v-model="student.first_name" />
          </div>
          <div class="form-group">
            <label>Last Name:</label>
            <input type="text" class="form-control" v-model="student.last_name" />
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="text" class="form-control" v-model="student.email" />
          </div>
          <div class="form-group">
            <label>Phone Number:</label>
            <input type="text" class="form-control" v-model="student.phone_number" />
          </div>
          <div class="form-group">
            <label>Bio:</label>
            <input type="text" class="form-control" v-model="student.short_bio" />
          </div>
          <div class="form-group">
            <label>LinkedIn URL:</label>
            <input type="text" class="form-control" v-model="student.linkedin_url" />
          </div>
          <div class="form-group">
            <label>Twitter URL:</label>
            <input type="text" class="form-control" v-model="student.twitter_url" />
          </div>
          <div class="form-group">
            <label>Website URL:</label>
            <input type="text" class="form-control" v-model="student.website_url" />
          </div>
          <div class="form-group">
            <label>Resume URL:</label>
            <input type="text" class="form-control" v-model="student.resume_url" />
          </div>
          <div class="form-group">
            <label>Github URL:</label>
            <input type="text" class="form-control" v-model="student.github_url" />
          </div>
          <div class="form-group">
            <label>Photo:</label>
            <input type="text" class="form-control" v-model="student.photo" />
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
      student: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/students/" + this.$route.params.id).then(response => {
      this.student = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.student.first_name,
        last_name: this.student.last_name,
        email: this.student.email,
        phone_number: this.student.phone_number,
        short_bio: this.student.short_bio,
        linkedin_url: this.student.linkedin_url,
        twitter_url: this.student.twitter_url,
        website_url: this.student.website_url,
        resume_url: this.student.resume_url,
        github_url: this.student.github_url,
        photo: this.student.photo,
        experiences: this.student.experiences,
        educations: this.student.educations,
        skills: this.student.skills,
        projects: this.student.projects,
      };

      axios
        .patch("/api/students/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/students");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>