export default function About() {
    return (
      <div className="about">
          <h1>About</h1>
          <p>Some text about who i am and what I can work with. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum recusandae dolorum saepe laborum tempore, 
              voluptatum illum quas dicta. 
              A tenetur dolor quod iusto consectetur! Voluptate necessitatibus sit iure accusamus error.
          </p>
      
      <div class="row">
          <h3>Skills</h3>
        
          <p>Front End - HTML, CSS and Javascript</p>
          <div class="container">
            <div class="front">30%</div>
          </div>

          <p>C#, Pascal and C++ </p>
          <div class="container">
            <div class="c">80%</div>
          </div>

          <p>React</p>
          <div class="container">
            <div class="react">10%</div>
          </div>

          <p>Back End SQL - MS Sql, Oracle and MySQL </p>
          <div class="container">
            <div class="sql">80%</div>
          </div>
      </div>
      
      <div id="cv">
        <a href="images\pedro.docx" download>Download Resume</a>
      </div>
          </div>
    )
  }
  