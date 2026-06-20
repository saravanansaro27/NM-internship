import React, { useState } from "react";
import './App.css';

function App() {

  const jobs = [

    {
      id: 1,
      title: "Frontend Developer",
      company: "Infosys",
      location: "Chennai",
      salary: "₹5 LPA",
      skills: ["React", "JavaScript", "CSS"],
      description: "Develop responsive web applications.",
      match: "96%"
    },

    {
      id: 2,
      title: "Java Developer",
      company: "TCS",
      location: "Bangalore",
      salary: "₹6 LPA",
      skills: ["Java", "Spring Boot"],
      description: "Build enterprise applications.",
      match: "91%"
    },

    {
      id: 3,
      title: "Data Analyst",
      company: "Zoho",
      location: "Chennai",
      salary: "₹7 LPA",
      skills: ["Python", "SQL", "Power BI"],
      description: "Analyze business data and generate reports.",
      match: "94%"
    },

    {
      id: 4,
      title: "UI UX Designer",
      company: "Wipro",
      location: "Hyderabad",
      salary: "₹5.5 LPA",
      skills: ["Figma", "Adobe XD"],
      description: "Create user friendly designs.",
      match: "89%"
    },

    {
      id: 5,
      title: "Full Stack Developer",
      company: "Accenture",
      location: "Pune",
      salary: "₹8 LPA",
      skills: ["React", "NodeJS", "MongoDB"],
      description: "Develop complete web applications.",
      match: "98%"
    }

  ];

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobs.filter(job =>

    job.title.toLowerCase().includes(search.toLowerCase())

    &&

    job.location.toLowerCase().includes(location.toLowerCase())

  );

  const saveJob = (job) => {

  if (!savedJobs.find(item => item.id === job.id)) {

    setSavedJobs([...savedJobs, job]);

    alert("Job Saved Successfully!");

  } else {

    alert("Already Saved!");

  }

};

  const recommendedJobs = jobs.filter(job =>
    job.skills.includes("React")
  );

  return (

    <div>

      <nav className="navbar">

       <h1>HireHub AI</h1>

        <ul>
  <li
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  >
    Home
  </li>

  <li
    onClick={() =>
      document
        .getElementById("jobs")
        .scrollIntoView({ behavior: "smooth" })
    }
  >
    Jobs
  </li>

  <li
    onClick={() =>
      document
        .getElementById("tools")
        .scrollIntoView({ behavior: "smooth" })
    }
  >
    AI Tools
  </li>

  <li
    onClick={() =>
      document
        .getElementById("saved")
        .scrollIntoView({ behavior: "smooth" })
    }
  >
    Saved
  </li>
</ul>

      </nav>

      <section className="hero">

<div className="hero-content">

<span className="badge">
 AI Powered Career Platform
</span>

<h1>
Find Your Dream Job With AI
</h1>

<p>
Get personalized job recommendations, resume insights,
skill-gap analysis, and career guidance powered by AI.
</p>

<button
  className="hero-btn"
  onClick={() =>
    document.getElementById("jobs").scrollIntoView({
      behavior: "smooth"
    })
  }
>
  Explore Opportunities →
</button>

</div>

</section>

      <section className="dashboard">
        <h2 className="heading">
 Placement Statistics
</h2>

<div className="dashboard">

<div className="box">
<h2>250+</h2>
<p>Students Placed</p>
</div>

<div className="box">
<h2>50+</h2>
<p>Partner Companies</p>
</div>

<div className="box">
<h2>92%</h2>
<p>Placement Rate</p>
</div>

</div>

        <div className="box">
          <h2>{jobs.length}</h2>
          <p>Active Jobs</p>
        </div>

        <div className="box">
          <h2>{savedJobs.length}</h2>
          <p>Saved Jobs</p>
        </div>

        <div className="box">
          <h2>15</h2>
          <p>Hiring Companies</p>
        </div>

        <div className="box">
          <h2>95%</h2>
          <p>AI Match Score</p>
        </div>

      </section>
      <h2 id="tools" className="heading">
AI Career Insights
</h2>

<div className="dashboard">

<div className="box">
<h2>Frontend</h2>
<p>Most In-Demand Skill</p>
</div>

<div className="box">
<h2>React + AI</h2>
<p>Fastest Growing Stack</p>
</div>

<div className="box">
<h2>₹12 LPA</h2>
<p>Average Salary Trend</p>
</div>

</div>

      <section className="search-section">

        <input
          type="text"
          placeholder="Search Job Role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >

        <option value="">All Locations</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Pune">Pune</option>

        </select>

      </section>

      <h2 id="jobs" className="heading">
  Available Jobs
</h2>

      <div className="job-grid">

        {
          filteredJobs.map(job => (

            <div className="card" key={job.id}>

              <h3>{job.title}</h3>

              <h4>{job.company}</h4>

              <p><b>Location:</b> {job.location}</p>

              <p><b>Salary:</b> {job.salary}</p>

              <p className="match">
              🤖 AI Match: {job.match}
              </p>   

              <button
                onClick={() => setSelectedJob(job)}
              >
                View Details
              </button>

              <button
onClick={() => saveJob(job)}
>
{savedJobs.find(item => item.id === job.id)
 ? "✓ Saved"
 : "Bookmark"}
</button>
              <button
                onClick={() =>
alert("Application Submitted Successfully!")
          }
              >
                Apply Now
              </button>
              </div>

          ))
        }

      </div>

      <h2 className="heading">AI Recommended Jobs</h2>

      <div className="job-grid">

        {
          recommendedJobs.map(job => (

            <div className="card" key={job.id}>

              <h3>{job.title}</h3>

              <p>{job.company}</p>

              <p>{job.location}</p>

              <p>Match Score: {job.match}</p>

            </div>

          ))
        }

      </div>

      <h2 className="heading">
 Resume Intelligence
</h2>

<div className="job-grid">

<div className="card">

<h3>AI Resume Analyzer</h3>

<h2 className="heading">
 Trending Skills
</h2>

<div className="skills">

<span>React</span>
<span>Python</span>
<span>AI Prompting</span>
<span>Node.js</span>
<span>Cloud</span>
<span>Power BI</span>

</div>

<p>
Upload your resume and receive
AI-powered career suggestions.
</p>

<button
  onClick={() =>
    alert("Resume Upload Feature Coming Soon!")
  }
>
  Upload Resume
</button>

</div>

</div>

<h2 className="heading">
 Career Roadmap
</h2>

<div className="job-grid">

  <div className="card">

    <h3>Frontend Developer</h3>

    <p>
      HTML →
      CSS →
      JavaScript →
      React →
      Node.js →
      Cloud
    </p>

  </div>

</div>

 <h2 id="saved" className="heading">
Saved Jobs
</h2>

      <div className="saved-section">

        
          {
  savedJobs.length === 0 ? (
    <p>Saved Jobs </p>
  ) : (
    savedJobs.map((job) => (
      <div key={job.id}>
        <h3>{job.title}</h3>
      </div>
    ))
  )
}

      </div>

      {
        selectedJob &&

        <div className="modal-bg">

          <div className="modal">

            <h2>{selectedJob.title}</h2>

            <h3>{selectedJob.company}</h3>

            <p>{selectedJob.description}</p>

            <p>
              <b>Location:</b> {selectedJob.location}
            </p>

            <p>
              <b>Salary:</b> {selectedJob.salary}
            </p>

            <p>
              <b>Skills:</b> {selectedJob.skills.join(", ")}
            </p>

            <p>

 AI Suggestion:

Learn Node.js and Cloud Computing
to improve your hiring chances.

</p>

            <button
              onClick={() => setSelectedJob(null)}
            >

              Close

            </button>

          </div>

        </div>

      }
<h2 className="heading">
 Student Profile
</h2>

<div className="job-grid">

  <div className="card">

    <h3>Saravanan C</h3>

    <p>Department: B.Sc Computer Science</p>

    <p>Skills: React, Python, Java</p>

    <p>Year: Final Year</p>

  </div>

</div>

      <footer className="footer">

<h3>HireHub AI</h3>

<p>
Smart Hiring. Smarter Careers.
</p>

</footer>

    </div>

  );

}

export default App;