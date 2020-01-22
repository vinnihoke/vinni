import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import Bio from '../components/Bio';

function Index() {
  return (
    <main>
      <Helmet>
        <title>Vinni Hoke - Full-Stack Engineer</title>
      </Helmet>
      <Bio />
    </main>
  )
}

export default Index;
