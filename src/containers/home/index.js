import HomeBanner from 'components/homeBanner';
import DefaultLayout from 'components/Layout/defaultLayout';
import VerticalSlider from 'components/verticalSlider';
import Head from 'next/head';
import React, { useRef } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CollaborationBox from 'components/collaborationBox';
import GetInTouch from 'components/getInTouch';

const Home = () => {
  const Marquee = ({ direction, children }) => {
    const marqueeRef = useRef(null);

    const stop = () => {
      if (marqueeRef.current) {
        marqueeRef.current.stop();
      }
    };

    const start = () => {
      if (marqueeRef.current) {
        marqueeRef.current.start();
      }
    };

    return (
      <marquee
        ref={marqueeRef}
        width="100%"
        direction={direction}
        behavior="alternate"
        scrollamount="1"
        onMouseOver={stop}
        onMouseOut={start}>
        {children}
      </marquee>
    );
  };
  const collaborationContent = [
    {
      image: 'image/home/action-arrow.png',
      title: 'Strategic <br /> Growth Consultation',
      description: `Empower your expansion with expert entrepreneurial insights`,
      link: `strategic-growth-consultation`,
    },
    {
      image: 'image/home/action-arrow.png',
      title: 'Interim <br />Funding Solutions',
      description: `Navigate critical phases with tailored financial support.`,
      link: `interim-funding-solutions`,
    },
    {
      image: 'image/home/action-arrow.png',
      title: 'Corporate <br /> Mergers & Acquisitions',
      description: `Achieve your strategic objectives through seamless integration.`,
      link: `corporate-mergers-and-acquisitions`,
    },
    {
      image: 'image/home/action-arrow.png',
      title: 'Pre-Series <br /> A/B Secondary Exit Planning',
      description: `Optimize your exit strategy with seasoned guidance.`,
      link: `exit-planning`,
    },
    {
      image: 'image/home/action-arrow.png',
      title: 'Venture Capital <br /> Portfolio Divestiture',
      description: `Maximize portfolio value with strategic divestiture plans.`,
      link: `venture-capital-portfolio-divestiture`,
    },
    {
      image: 'image/home/action-arrow.png',
      title: 'Who <br /> we are',
      description: `Our expert advisory ensures that well-funded startups can foster exponential growth`,
      link: `about-us`,
    },
  ];
  return (
    <DefaultLayout logoTheme="dark" showMenu={true}>
      <Head>
        <title>Ampersand</title>
        <meta name="description" content="Empower Your Evolution: Propelling Growth, Facilitating M&A" />
      </Head>
      <section className="section hero-section">
        <Container>
          <HomeBanner />
        </Container>
        <div className="column-section">
          <Container>
            <Row className="mobile-row">
              <Col xs={6} md={4}>
                <div className="hero-tiles h-100">
                  <div className="row-gap-col h-100">
                    <div className="vertical-slider d-md-block d-none">
                      <VerticalSlider />
                    </div>
                    <div className="content-only">
                      <img src="image/home/tile1.png" alt="Strategic Growth Consultation" />
                    </div>
                    <div className="flags-marquee d-md-none d-flex">
                      <div className="flags-row gap-2">
                        <Marquee direction="right">
                          <a className="flag">SaaS</a>
                          <a className="flag">Artificial Intelligence</a>
                          <a className="flag">HealthTech</a>
                          <a className="flag">SaaS</a>
                          <a className="flag">Artificial Intelligence</a>
                          <a className="flag">HealthTech</a>
                        </Marquee>
                      </div>

                      <div className="flags-row gap-2">
                        <Marquee direction="left">
                          <a className="flag">Sustainable</a>
                          <a className="flag">Gaming</a>
                          <a className="flag">Enablers</a>
                          <a className="flag">Security</a>
                          <a className="flag">Sustainable</a>
                          <a className="flag">Gaming</a>
                          <a className="flag">Enablers</a>
                          <a className="flag">Security</a>
                        </Marquee>
                      </div>
                      <div className="flags-row gap-2">
                        <Marquee direction="right">
                          <a className="flag">SaaS</a>
                          <a className="flag">Artificial Intelligence</a>
                          <a className="flag">HealthTech</a>
                          <a className="flag">SaaS</a>
                          <a className="flag">Artificial Intelligence</a>
                          <a className="flag">HealthTech</a>
                        </Marquee>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="d-none d-md-block" md={4}>
                <div className="hero-tiles h-100">
                  <div className="row-gap-col h-100">
                    <div className="content-only">
                      {/* <img className="h-100" src="image/home/tile2.png" alt="Strategic Growth Consultation" /> */}
                      <video width="100%" height="100%" autoPlay loop muted>
                        <source src="image/home/claw-animation.mp4" type="video/mp4" />
                        Your browser does not support HTML video.
                      </video>
                    </div>
                    <div className="flags-marquee d-md-block d-none">
                      <div className="flags-row gap-2">
                        <Marquee direction="right">
                          <a className="flag">SaaS</a>
                          <a className="flag">Artificial Intelligence</a>
                          <a className="flag">HealthTech</a>
                          <a className="flag">SaaS</a>
                          <a className="flag">Artificial Intelligence</a>
                          <a className="flag">HealthTech</a>
                        </Marquee>
                      </div>

                      <div className="flags-row gap-2">
                        <Marquee direction="left">
                          <a className="flag">Sustainable</a>
                          <a className="flag">Gaming</a>
                          <a className="flag">Enablers</a>
                          <a className="flag">Security</a>
                          <a className="flag">Sustainable</a>
                          <a className="flag">Gaming</a>
                          <a className="flag">Enablers</a>
                          <a className="flag">Security</a>
                        </Marquee>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="hero-tiles h-100">
                  <div className="row-gap-col h-100">
                    <div className="vertical-slider d-md-none d-block">
                      <VerticalSlider />
                    </div>
                    <div className="content-only  h-100 grid-image-only">
                      <img src="image/home/tile3.png" alt="Strategic Growth Consultation" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="section collaboration-section">
        <Container>
          <Row>
            <Col className="main-title-section mb-md-0 mb-3" md={12}>
              <h2 className="h2 text-center">Innovative Collaboration for Success</h2>
              <p className="text-dark-grey text-center d-none d-md-block">
                We foster collaboration and resource efficiency by connecting startups with essential funding, ensuring
                they have the financial support needed to thrive. Our approach goes beyond traditional investment
                methods, utilising innovative strategies to build long-term partnerships dedicated to the ongoing
                success of startups. We believe in aligning our interests with those of our partners, so instead of
                charging fixed fees, we share in the journey and rewards of your growth. This unique model underscores
                our commitment to your success, making it our mission to help you achieve your business goals and reach
                new heights.
              </p>
            </Col>
          </Row>
          <Row>
            {collaborationContent?.map((data, index) => (
              <Col className="collab-col" md={6} lg={4} key={index}>
                <CollaborationBox data={data} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <GetInTouch />
    </DefaultLayout>
  );
};

export default Home;
