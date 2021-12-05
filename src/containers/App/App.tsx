import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApiResponse, CraftAPI } from '@craftdocs/craft-extension-api';
import { AppState, StringsDict } from '@src/types';
import { getDefaultState, log, logError, safeJsonParse } from '@src/utils';
import Button from '@components/Button';

declare global {
  interface Window {
    craft: CraftAPI;
  }
}
// import craftXIconSrc from './images/craftx-icon.png';

const STORAGE_KEY = 'craftBookmarks';
const css: StringsDict = {
  app: 'app',
};

const App: React.FC = () => {
  const isDarkMode = useCraftDarkMode();

  const [appState, setAppState] = React.useState(getDefaultState());

  React.useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Load bookmarks from storage
  React.useEffect(() => {
    void craft.storageApi
      .get(STORAGE_KEY)
      .then((apiResult: ApiResponse<string>) => {
        if (apiResult.status === 'success') {
          const loadedState = safeJsonParse<AppState>(apiResult.data);
          if (loadedState) {
            setAppState(loadedState);
          }
        }
      })
      .catch(logError);
  }, []);

  log(appState);

  return (
    <div className={css.app}>
      <Button
        isDarkMode={isDarkMode}
        label="Add bookmark"
        isMain={true}
        onClick={() => console.log('click 1')}
      />
      <Button
        isDarkMode={isDarkMode}
        label="Add group"
        onClick={() => console.log('click 2')}
      />
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
