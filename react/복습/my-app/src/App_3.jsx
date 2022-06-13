import React, { useState } from 'react';

const appStyle = {
  titlefontsize: { fontSize: '32px' },
  titlefontcolor: { color: 'red' },
};

function App() {
  return (
    <div>
      <div style={{ fontSize: '32px' }}>hello</div>
      <div style={{ fontSize: '32px', color: 'blue' }}>hello</div>
      <div style={appStyle.titlefontsize}>hello 3</div>
      <div style={appStyle.titlefontcolor}>hello 4</div>
    </div>
  );
}

export default App;
