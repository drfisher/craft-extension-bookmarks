import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '@components/Button';
// import craftXIconSrc from './images/craftx-icon.png';

const App: React.FC = () => {
  const isDarkMode = useCraftDarkMode();

  React.useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <Button isDarkMode={isDarkMode} />
      {/* <img className="icon" src={craftXIconSrc} alt="CraftX logo" />
      <button
        className={`btn ${isDarkMode ? 'dark' : ''}`}
        onClick={insertHelloWorld}
      >
        Hello world!
      </button> */}
    </div>
  );
};

function useCraftDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    craft.env.setListener((env) => setIsDarkMode(env.colorScheme === 'dark'));
  }, []);

  return isDarkMode;
}

// function insertHelloWorld() {
//   const block = craft.blockFactory.textBlock({
//     content: 'Hello world!',
//   });

//   void craft.dataApi.addBlocks([block]);
// }

export const initApp = () => {
  ReactDOM.render(<App />, document.getElementById('react-root'));
};

export default App;
