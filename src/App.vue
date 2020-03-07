<template>
  <div class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#about">
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile mx-auto mb-2" src="./assets/avatar.jpg" alt="">
        </span>
        <span class="d-block d-lg-none"> 
          <img class="img-fluid img-profile rounded-circle mx-auto" src="./assets/avatar.jpg" alt="" width="50px"> 
          Josh Vincent
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <!-- <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">{{ mabout[Locale] }}</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">{{ mexperience[Locale] }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">{{ meducation[Locale] }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">{{ mskills[Locale] }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">{{ minterests[Locale] }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">{{ name }}
            <span class="text-primary">{{ lastname }}</span>
          </h1>
          <div class="subheading mb-5">{{ address }}
            <a href="mailto:joshvin@protonmail.com">{{ email }}</a>
          </div>
          <p class="mb-5">{{ aboutMe[Locale] }}</p>
          <ul class="list-inline list-social-icons mb-0">
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/joshvincent8/">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/settings/profile">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">{{ mexperience[Locale] }}</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experience[Locale]" :key="job.position">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ job.position }}</h3>
              <div class="subheading mb-3">{{ job.company }}</div>
              <ul class="responsibilities" v-for="point in job.responsibilities" :key="point">
                <li>{{ point }}</li>
              </ul>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
            </div>
          </div>

        </div>

      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">{{ meducation[Locale] }}</h2>
            <div class="resume-item d-flex flex-column flex-md-row">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">{{ edu1[Locale].title }}</h3>
                <div class="subheading mb-3">{{ edu1[Locale].subtitle }}</div>
                <p>{{ edu1[Locale].subject }}</p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">{{ edu1[Locale].fromto }}</span>
              </div>
            </div>
            <p></p>
            <div class="resume-item d-flex flex-column flex-md-row">
                <div class="resume-content mr-auto">
                  <h3 class="mb-0">{{ edu0[Locale].title }}</h3>
                  <div class="subheading mb-3">{{ edu0[Locale].subtitle }}</div>
                  <p>{{ edu0[Locale].subject }}</p>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">{{ edu0[Locale].fromto }}</span>
                </div>
              </div>
          </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">{{ mskills[Locale] }}</h2>

          <div class="subheading mb-3">{{ prolang[Locale] }}</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item" title="C#">
              <i class="devicons devicons-csharp"></i>
            </li>
            <li class="list-inline-item" title="C++">
              <i class="devicons devicons-cplusplus"></i>
            </li>
            <li class="list-inline-item" title="Python">
              <i class="devicons devicons-python"></i>
            </li>
            <li class="list-inline-item" title="Java">
              <i class="devicons devicons-java"></i>
            </li>
            <li class="list-inline-item" title="Java Script">
              <i class="devicons devicons-javascript"></i>
            </li>
            <li class="list-inline-item" title="VueJS">
              <i class="devicons devicons-vuejs"></i>
            </li>  
            <li class="list-inline-item" title="Docker">
              <i class="devicons devicons-docker"></i>
            </li>
            <li class="list-inline-item" title="jquery">
              <i class="devicons devicons-jquery"></i>
            </li>
            <li class="list-inline-item" title="Git">
              <i class="devicons devicons-git"></i>
            </li>
            <li class="list-inline-item" title="PHP">
              <i class="devicons devicons-php"></i>
            </li>
            <li class="list-inline-item" title="MySQL">
              <i class="devicons devicons-mysql"></i>
            </li>
            <li class="list-inline-item" title="HTML5">
              <i class="devicons devicons-html5"></i>
            </li>
            <li class="list-inline-item" title="CSS3">
              <i class="devicons devicons-css3"></i>
            </li>
            <li class="list-inline-item" title="Scrum">
              <i class="devicons devicons-scrum"></i>
            </li>
            <li class="list-inline-item" title="Firefox">
              <i class="devicons devicons-firefox"></i>
            </li>
            <li class="list-inline-item" title="GitKraken">
              <i class="devicons devicons-krakenjs"></i>
            </li>   
            <li class="list-inline-item" title="vim">
              <i class="devicons devicons-vim"></i>
            </li>  
            <li class="list-inline-item" title="VS Code">
              <i class="devicons devicons-visualstudio"></i>
            </li>  
            <li class="list-inline-item" title="Windows">
              <i class="devicons devicons-windows8"></i>
            </li>  
            <li class="list-inline-item" title="Linux">
              <i class="devicons devicons-linux"></i>
            </li>     
            <li class="list-inline-item" title="Slack">
              <i class="devicons devicons-slack"></i>
            </li>     
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">{{ minterests[Locale] }}</h2>
          <p>{{ interests1[Locale] }}</p>
          <p>{{ interests2[Locale] }}</p>
          <p class="mb-0">{{ interests3[Locale] }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    this.Locale = 'en'
    return {
      mabout: {
        en: 'About'
      },
      mexperience: {
        en: 'Experience'
      },
      meducation: {
        en: 'Education'
      },
      mskills: {
        en: 'Skills'
      },
      minterests: {
        en: 'Interests'
      },
      title: 'Josh Vincent - Information',
      name: 'Josh',
      lastname: 'Vincent',
      address: 'Pleasant Grove · Utah · 84062 · (801) 362-4528 ·',
      aboutMe: {
        en: '' // I'll want to uncomment the tag up above if I do add this soon
      },
      email: 'joshvin@protonmail.com',
      interests1: {
        en: 'I am an avid movie goer. I see at least 2 movies a month and love watching movies at home with the family. My one year old son does not love sitting on dad\'s lap to watch movies and I\'m praying that he learns to love it soon!',
      },
      interests2: {
        en: 'Playing board games is another activity that I love to do! Games like Settler\'s of Catan, Ticket to Ride, One Night Werewolf, & Secret Hitler are some of my favorite right now. Games that make you strategize and think are the games that I excel at. There are some games that seem to be all based on luck and I can\'t stand that!',
      },
      interests3: {
        en: 'I love learning new things! Any other free time I get I use to study new topics and teach myself new things. A lot of my initial programming knowledge came from me teaching myself at home. Figuring out how things work and manipulating things to do what I want are fun passtimes for me.',
      },
      prolang: {
        en: 'Programming Languages & Tools',
      },
      edu1: {
        en: {
          title: 'Utah Valley University',
          subtitle: 'Orem, UT',
          subject: 'Computer Science, Computer Science emphasis',
          fromto: 'September 2016 - December 2020'
        },
      },
      edu0: {
        en: {
          title: 'Pleasant Grove High',
          subtitle: 'Pleasant Grove, UT',
          subject: 'Honor role with 45 college credits at graduation',
          fromto: 'May 2013'
        },
      },
      experience: {
        en: [
          {
            position: 'Jr Full Stack Engineer',
            company: 'Vivint Smart Home, Lehi, UT',
            responsibilities: [
                    'Trailblazed new pattern for architecting Docker powered applications significantly optimizing application deployment processes.',
                    'Debugged complex JavaScript and Salesforce Apex code in phone system’s credit card capture logic allowing Vivint to successfully pass its PCI audit.',
                    'Gained valuable experience in JavaScript, Python, C#, Salesforce Apex, and PHP programming languages giving management flexibility to assign any project within the team’s portfolio of apps.',
                    'Supervised administration of 3rd party applications done by three other employees. This allowed the manager to have someone more technical oversee their projects and verify that work was being done efficiently.'
                ],
            startDate: 'August 2018',
            endDate: 'Present'
          },
          {
            position: 'Dialer Strategy Jr Engineer',
            company: 'Vivint Smart Home, Provo, UT',
            responsibilities: [
                    'Designed complicated Interactive Voice Response to improve experience of over 1,000+ customers every day.',
                    'Implemented PCI compliant credit card capturing technology into our dialing software allowing for custom integrations for the company’s own payment solutions.',
                    'Managed over 1,000+ user accounts on our dialing software allowing for agents to have fast resolutions for day to day needs.',
                    'Analyzed and developed digital marketing lead flow processes. This improved campaign attribution accuracy.'
                ],
            startDate: 'January 2018',
            endDate: 'August 2018'
          },
          {
            position: 'Payroll Data Analyst',
            company: 'Vivint Smart Home, Provo, UT',
            responsibilities: [
                    'Wrote complex SQL queries with case statements, temp tables, and mathematical logic to calculate compensation.  This enabled management to pay agents accurately based on their performance across multiple metrics.',
                    'Investigated and answered commission payment questions giving more confidence and trust in the reports.',
                    'Documented approvals and changes in compensation plans and code to pass SOX compliance.'
                ],
            startDate: 'July 2017',
            endDate: 'January 2018'
          }
        ]
      }
    }
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })
      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
  },
  methods: {

  }
}
</script>

<style>
body {
  font-family: "Segoe UI", "Noto Sans JP", serif;
  padding-top: 54px;
  color: #868e96;
}
@media (min-width: 992px) {
  body {
    padding-top: 0;
    padding-left: 17rem;
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Segoe UI", "Noto Sans JP", serif;
  font-weight: 600 !important;
  text-transform: uppercase;
  color: #343a40;
}
h1 {
  font-size: 2.5rem;
  line-height: 1.2;
}
h2 {
  font-size: 3.5rem;
}
.responsibilities {
  list-style-position: inside;
}
.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'Saira Extra Condensed', serif;
  font-size: 1.35rem;
}
.list-social-icons a {
  color: #495057;
}
.list-social-icons a:hover {
  color: rgb(56, 125, 189);
}
.list-social-icons a .fa-lg {
  font-size: 1.75rem;
}
.list-icons {
  font-size: 3rem;
}
.list-icons .list-inline-item i:hover {
  color: rgb(56, 125, 189);
}
#sideNav .navbar-nav .nav-item .nav-link {
  font-family: "Segoe UI", "Noto Sans JP", serif;
  font-weight: 600;
  text-transform: uppercase;
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }
  #sideNav .navbar-brand {
    display: flex;
    margin: auto auto 0;
    padding: 0.5rem;
  }
  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
  }
  #sideNav .navbar-collapse {
    display: flex;
    align-items: flex-start;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }
  #sideNav .navbar-collapse .navbar-nav {
    flex-direction: column;
    width: 100%;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
}
section.resume-section {
  border-bottom: 1px solid #dee2e6;
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}
section.resume-section .resume-item .resume-date {
  min-width: none;
}
@media (min-width: 300px) {
  section.resume-section {
    min-height: 100vh;
  }
  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}
@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
.bg-primary {
  background-color: #007bff  !important;
}
.text-primary {
  color: #007bff  !important;
}
a {
  color: #007bff ;
}
a:hover, a:focus, a:active {
  color: #274b82;
}
</style>