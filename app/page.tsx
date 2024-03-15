import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Section from "./components/Section";
import BackTop from "./components/BackTop";
import Footer from "./components/Footer";
import About from "./sections/About";
import Specialties from "./sections/Specialties";
import Experiences from "./sections/Experiences";
import Preface from "./sections/Preface";
import Article from "./sections/Article";

export default function Page() {
  return (
    <>
      <Header />
      <BackTop />
      <Content>
        <Section id="about">
          <About />
        </Section>
        <Section>
          <Preface />
        </Section>
        <Section id="specialties">
          <Specialties />
        </Section>
        <Section id="experiences">
          <Experiences />
        </Section>
        <Section>
          <Article />
        </Section>
      </Content>
      <Footer />
    </>
  );
}
