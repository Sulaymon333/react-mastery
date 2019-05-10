import React from 'react';
import Header from './Header';
import Section from './Section';

const Main = () => {
  return (
    <main>
      <Header title="Welcome to React" year={new Date().getFullYear()}>
        One thing about React is that it is quite cool
      </Header>
      <Section>This is section one</Section>
      <Section>This is section Two</Section>
      <Section>This is section Three</Section>
      <Section>This is section Four</Section>
      <Section>This is section Five</Section>
    </main>
  );
};

export default Main;
