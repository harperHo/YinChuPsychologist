import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Section from "./components/Section";
import About from "./sections/About";
import Specialties from "./sections/Specialties";
import Experiences from "./sections/Experiences";
import Preface from "./sections/Preface";

export default function Page() {
  return (
    <>
      <Header />
      <Content>
        <Section id="about">
          <About />
        </Section>
        <Section id="specialties">
          <Specialties />
        </Section>
        <Section id="preface">
          <Preface />
        </Section>
        {/* <Section id="experiences">
          <Experiences />
        </Section> */}
      </Content>
    </>
  );
}
