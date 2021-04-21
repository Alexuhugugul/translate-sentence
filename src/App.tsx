import React from 'react';
import Main from "./pages/main";


// @ts-ignore
window.talkify.config.remoteService.host = 'https://talkify.net';
// @ts-ignore
window.talkify.config.remoteService.apiKey = 'd9929a37-d3c5-40a8-8d72-db51b8beb64c';
// @ts-ignore
window.talkify.config.ui.audioControls.enabled = false;

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;