export const profile = new function() {
    this.role = 'Javascript developer'
    this.greetings = `Hello, I'm a ${this.role} based in Philippines!`
    this.firstname = 'Seichi'
    this.lastname = 'Nakata'
    this.fullname = `${this.firstname} ${this.lastname}`
    this.headline = 'Software Engineer | Javascript Developer'
    this.location = 'Obando Bulacan, Philippines'
    this.work = `${this.firstname} is a ${this.role} based in ${this.location} with more than 2 years of professional experience. He has experience working with EMEA projects, some Loans and Appraisal related systems here in the Philippines.`
    this.skills = ['JavaScript', 'ReactJS', 'Redux', 'ThreeJS', 'Framer-motion', 'FetchAPI', 'JSON', 'HTML', 'CSS']
    this.ilove = 'Art, Music, Drawing, Video Games, Playing Guitar, Manga, Anime, Pokemon'
    this.degree = 'Bachelor of Science in Information Technology'
    this.degree_completed_at = 'University of the East Caloocan'
    this.bio = [{
      year: 1998,
      content: 'Born in Valenzuela City, Philippines.',
      ended: true
    }, {
      year: 2019,
      content: `System Developer(Intern) at PNB Savings Bank, Makati National Capital Region, Philippines.`,
      ended: true
    }, {
      year: 2019,
      content: `Completed the ${this.degree} at ${this.degree_completed_at}`,
      ended: true
    }, {
      year: 2019,
      content: `Junior Software Analyst at GDS Link Asia, Makati National Capital Region, Philippines. More than 2 years of experience using vanilla JS.`,
      ended: false
    }]
    this.web = [{
        name: 'facebook',
        link: 'https://www.facebook.com/seichi.nakata',
        desc: '@seichi.nakata'
    }, { 
        name: 'twitter',
        link: 'https://twitter.com/seichi_nakata',
        desc: '@seichi_nakata'
    }, {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/seichi-nakata425/',
        desc: '@seichi-nakata425'
    }]
    this.works = []
}