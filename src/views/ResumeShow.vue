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
    <p>Skill: {{ skill.skill_name }}</p>
    <br />
    <p>Start Date: {{ experience.start_date }}</p>
    <p>End Date: {{ experience.end_date }}</p>
    <p>Job Title: {{ experience.job_title }}</p>
    <p>Company: {{ experience.company_name }}</p>
    <ul>
      <li>{{ experience.details }}</li>
    </ul>

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
    };
  },
  created: function() {
    this.showStudent();
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
  },
};
</script>
