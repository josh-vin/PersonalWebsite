<template>
<div>
    <section class = "hero is-primary is-small">
    <div class = "hero-body">
        <div class = "container">
            <h1 class = "title has-text-centered">
                Career Objective
            </h1>
            <p class="box">Excited to learn new skills and techniques to make tasks easier for everyone. Loves problem solving and looking for the best and most efficient way of solving the problem. Takes initiative to independently figure out solutions and intuitively knows when it’s time to seek expert help. </p>
        </div>
    </div>
    </section>
    <section class = "hero is-light is-medium">
    <div class = "hero-body">
        <div class = "container">
            <h1 class = "title has-text-centered">
                Job Experience
            </h1>
            <div v-for="job of jobs" v-bind:key="job.id" class = "card content">
                <div class = "card-content">
                    <div class = "card-header card-header-title">
                        {{job.title}} {{job.location}} <br>
                        {{job.dates}}
                    </div>
                    <ul>
                        <li v-for="responsibility in job.responsibilities" v-bind:key="responsibility">
                            {{responsibility}}
                        </li>
                    </ul>                        
                </div>
            </div>
        </div>
    </div>
    </section>
    <section class = "hero">
        <div class = "hero-body">
            <div class = "container is-centered has-text-centered content">
                <h1 class = "title">
                    Skills
                </h1>
                <div class = "columns is-multiline is-tablet">
                    <div v-for="skill in skills" v-bind:key="skill" class = "column is-3"> 
                        <p class = "notification is-rounded is-dark"> {{skill}} </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class = "hero is-primary is-small">
        <div class = "hero-body">
            <div class = "container">
                <h1 class = "title has-text-centered">
                    Education
                </h1>
                <br>
                <div class = "columns is-centered">
                    <div class = "column is-narrow">
                        <article class = "message is-medium is-dark">
                                <div class = "message-header">
                                    Bachelor of Science – Computer Science
                                </div>
                                <div class = "message-body">
                                    In Progress – Expected Degree Dec 2020 <br>
                                    Utah Valley University - Orem, UT 
                                </div>
                        </article>
                    </div>
                    <div class = "column is-narrow">
                        <article class = "message is-medium is-dark">
                                <div class = "message-header">
                                    Associate of Science – General Studies 
                                </div>
                                <div class = "message-body">
                                    Completed – December 2014 <br>
                                    Utah Valley University - Orem, UT
                                </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  name: "resume",
  data: function() {
      return { jobs: [
            {
                id: '1',
                title: 'Jr Software Engineer',
                location: 'Vivint Smart Home, Provo, UT',
                dates: 'August 2018 – Present',
                responsibilities: [
                    'Trailblazed new pattern for architecting Docker powered applications significantly optimizing application deployment processes.',
                    'Debugged complex JavaScript and Salesforce Apex code in phone system’s credit card capture logic allowing Vivint to successfully pass its PCI audit.',
                    'Gained valuable experience in JavaScript, Python, C#, Salesforce Apex, and PHP programming languages giving management flexibility to assign any project within the team’s portfolio of apps.',
                    'Supervised administration of 3rd party applications done by three other employees. This allowed the manager to have someone more technical oversee their projects and verify that work was being done efficiently.'
                ]
            }, {
                id: '2',
                title: 'Dialer Strategy Jr Engineer',
                location: 'Vivint Smart Home, Provo, UT',
                dates: 'January 2018 – August 2018',
                responsibilities: [
                    'Designed complicated Interactive Voice Response to improve experience of over 1,000+ customers every day.',
                    'Implemented PCI compliant credit card capturing technology into our dialing software allowing for custom integrations for the company’s own payment solutions.',
                    'Managed over 1,000+ user accounts on our dialing software allowing for agents to have fast resolutions for day to day needs.',
                    'Analyzed and developed digital marketing lead flow processes. This improved campaign attribution accuracy.'
                ]
            }, {
                id: '3',
                title: 'Payroll Data Analyst',
                location: 'Vivint Smart Home, Provo, UT',
                dates: 'July 2017 – January 2018 ',
                responsibilities: [
                    'Wrote complex SQL queries with case statements, temp tables, and mathematical logic to calculate compensation.  This enabled management to pay agents accurately based on their performance across multiple metrics.',
                    'Investigated and answered commission payment questions giving more confidence and trust in the reports.',
                    'Documented approvals and changes in compensation plans and code to pass SOX compliance.'
                ]
            }
        ],
        skills: [
                'Python'
                ,'SQL'
                ,'Windows'
                ,'JavaScript'
                ,'Docker'
                ,'C++'
                ,'PHP'
                ,'Linux'
                ,'Salesforce'
                ,'Vue.js'
                ,'HTML'
                ,'Five9'                
        ]}
    }
};
</script>