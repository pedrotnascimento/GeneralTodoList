import { useState } from 'react';
import './App.css';
import { HomeList } from './components/HomeLists';
import { GoalSettingTemplate } from './components/templates/GoalSettingTemplate';
import { ConfigProvider, theme } from 'antd';
import { ThemeSelector } from './components/configurations/ThemeSelector';

function App() {
  const [themeValue, setThemeValue] = useState<any>("");
  const changeTheme = (value: any) => {
    setThemeValue(value);
  };
  const getTheme = () => {
    switch (themeValue) {
      case "dark":
        return theme.darkAlgorithm;
      case "compact":
        return theme.compactAlgorithm;
      default:
        return theme.defaultAlgorithm;
    }
  };
  return (
    <>
      <div className='theme'>
        Theme: <ThemeSelector onChange={changeTheme} />
      </div>
      <ConfigProvider
        theme={{
          algorithm: getTheme()
        }}
      >
        <GoalSettingTemplate />
      </ConfigProvider>
    </>
  );
}

export default App;
