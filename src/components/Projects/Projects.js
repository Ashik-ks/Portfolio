import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/Screenshot 2024-12-21 221422.png";
import taskmanger from "../../Assets/Projects/taskManger.png";
import ums from "../../Assets/Projects/UMS.png";
import bookdirectory from "../../Assets/Projects/Bookdirectory.png";
import odin from "../../Assets/Projects/odin.png";
import forbes from "../../Assets/Projects/Forbes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="Developed a fully functional ecommerce platform using MERN to enable users to browse, view, and purchase products online.Users can browse product listings, add items to the shopping cart, and proceed to checkout.Secure login and registration system with role-based access for customers."
              ghLink="https://github.com/Ashik-ks/Ecommerce-React"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ums}
              isBlog={false}
              title="User Management System"
              description="Developed a comprehensive user management system with authentication and role-based access control.Admins can view, create, update, and delete user accounts, providing full control over user management.Ensured proper access controls based on user roles, streamlining user permissions."
              ghLink="https://github.com/Ashik-ks/UMS_REACT"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskmanger}
              isBlog={false}
              title="Task Manager"
              description="Developed a task management system with role-based functionality, allowing admins and regular users to efficiently manage tasks.Technologies used MongoDB, Express.js, React.js, Node.js (MERN), JWT Authentication."
              ghLink="https://github.com/Ashik-ks/Task_Manager"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookdirectory}
              isBlog={false}
              title="Book Directory"
              description="Developed a book directory application with basic CRUD functionality for managing book records.Users can view, add, update, and delete book entries, including details like title, author, and genre."
              ghLink="https://github.com/Ashik-ks/Book_Directory"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={odin}
              isBlog={false}
              title="Odin Project"
              description="ompleted a frontend development curriculum focused on building responsive websites and mastering HTML, CSS, and Bootstrap.Used HTML and CSS to structure and style websites, ensuring clean, maintainable code."
              ghLink="https://github.com/Ashik-ks/odin-project"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forbes}
              isBlog={false}
              title="ForbesIndia"
              description="Developed a project inspired by the Forbes India news platform, focusing on business, finance, and economic trends in India.Designed a clean, responsive user interface using HTML, CSS, and Bootstrap grid system to ensure an optimal reading experience across devices."
              ghLink="https://github.com/Ashik-ks/forbesindia"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
