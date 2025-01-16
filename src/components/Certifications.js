import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { WorkspacePremium } from "@mui/icons-material"; // Certification icon

function Certifications() {
  return (
    <Container fluid className="certification-section" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: "90px", paddingBottom: "70px" }}>
      {/* Adjust padding-top and padding-bottom to match your navbar height */}
      <h1 className="certification-heading" style={{ color: "white", marginBottom: "20px" }}>
        My Certifications
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px", flex: 1 }}>
        {/* AWS Cloud Practitioner Card */}
        <Col xs={12} sm={6} md={4} lg={3} className="project-card">
          <Card className="project-card-view" style={{ textAlign: "center", cursor: "pointer", minHeight: "300px", maxHeight: "300px", margin: "0 auto" }} onClick={() => window.open("https://cp.certmetrics.com/amazon/en/public/verify/credential/81c1773f57bc4b5fb5e10a2c765d4ab7", "_blank")}>
            <Card.Img variant="top" src="/aws.png" alt="AWS Logo" style={{ width: "120px", height: "120px", margin: "auto", marginTop: "20px" }} />
            <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
              <Card.Title>AWS Cloud Practitioner</Card.Title>
            </Card.Body>
            <WorkspacePremium style={{ fontSize: "50px", marginTop: "20px", cursor: "pointer", position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)" }} onClick={() => window.open("https://cp.certmetrics.com/amazon/en/public/verify/credential/81c1773f57bc4b5fb5e10a2c765d4ab7", "_blank")} />
          </Card>
        </Col>

        {/* Tableau Certified Card */}
        <Col xs={12} sm={6} md={4} lg={3} className="project-card">
          <Card className="project-card-view" style={{ textAlign: "center", cursor: "pointer", minHeight: "300px", maxHeight: "300px", margin: "0 auto" }} onClick={() => window.open("https://www.credly.com/badges/4ec0a724-b14b-4c56-8da9-f527253f234c", "_blank")}>
            <Card.Img variant="top" src="/tableau.png" alt="Tableau Logo" style={{ width: "120px", height: "120px", margin: "auto", marginTop: "20px" }} />
            <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
              <Card.Title>Tableau Certified Desktop Specialist</Card.Title>
            </Card.Body>
            <WorkspacePremium style={{ fontSize: "50px", marginTop: "20px", cursor: "pointer", position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)" }} onClick={() => window.open("https://www.credly.com/badges/4ec0a724-b14b-4c56-8da9-f527253f234c", "_blank")} />
          </Card>
        </Col>

        {/* Third Card (Placeholder) */}
        {/* <Col xs={12} sm={6} md={4} lg={3} className="project-card">
          <Card className="project-card-view" style={{ textAlign: "center", cursor: "pointer", minHeight: "300px", maxHeight: "300px", margin: "0 auto" }} onClick={() => window.open("#", "_blank")}>
            <Card.Img variant="top" src="/tableau.png" alt="Logo" style={{ width: "120px", height: "120px", margin: "auto", marginTop: "20px" }} />
            <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
              <Card.Title>Other Certification</Card.Title>
            </Card.Body>
            <WorkspacePremium style={{ fontSize: "50px", marginTop: "20px", cursor: "pointer", position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)" }} onClick={() => window.open("#", "_blank")} />
          </Card>
        </Col> */}
      </Row>

      {/* Footer stays at the bottom */}
      <div style={{ marginTop: "auto" }}>
        {/* Your Footer Component */}
      </div>
    </Container>
  );
}

export default Certifications;
