import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import 'semantic-ui-css/semantic.min.css'
import '../styles/index.scss';
import Bio from '../components/Bio';
import Portfolio from '../components/Portfolio'

function Index() {
  return (
    <main>
      <Helmet>
        <title>Vinni Hoke - Full-Stack Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <section id="Entry">
        <Bio />
        <Portfolio />
      </section>
    </main>
  )
}

export default Index;
