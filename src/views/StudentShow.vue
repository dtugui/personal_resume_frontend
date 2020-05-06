<template>
  <div>
    <h1>Resume</h1>
    <img v-bind:src="student.photo" alt="" />
    <p>First Name: {{ student.first_name }}</p>
    <p>Last Name: {{ student.last_name }}</p>
    <p>Email: {{ student.email }}</p>
    <p>Phone Number: {{ student.phone_number }}</p>
    <p>Biography: {{ student.short_bio }}</p>
    <p>LinkedIn: {{ student.linkedin_url }}</p>
    <p>Twitter: {{ student.twitter_url }}</p>
    <p>Github: {{ student.github_url }}</p>
    <br />
    <h3>Skills</h3>
    <p>{{ student.skills }}</p>
    <br />
    <h3>Experiences</h3>
    {{ student.experiences }}
    <br />
    <h3>Education</h3>
    <p>{{ student.educations }}</p>
    <br />
    <h3>Projects</h3>
    <p>{{ student.projects }}</p>
    <br />

    <a v-bind:href="`/students/${student.id}/edit`">Edit Your Resume</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student: {},
      skill: {},
      experience: {},
      education: {},
    };
  },
  created: function() {
    this.showStudent();
    this.showSkill();
    this.showExperience();
    this.showEducation();
  },
  methods: {
    showStudent: function() {
      axios.get("/api/students/" + this.$route.params.id).then(response => {
        console.log("Get one student's info: ", response);
        this.student = response.data;
      });
    },
    showSkill: function() {
      axios.get("/api/students/" + this.$route.params.id).then(response => {
        console.log("Get one student's skills: ", response);
        this.student = response.data;
      });
    },
    showExperience: function() {
      axios.get("/api/students/" + this.$route.params.id).then(response => {
        console.log("Get one student's experience: ", response);
        this.student = response.data;
      });
    },
    showEducation: function() {
      axios.get("/api/students/" + this.$route.params.id).then(response => {
        console.log("Get one student's education: ", response);
        this.student = response.data;
      });
    },
  },
};
</script>
