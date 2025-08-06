import reactLogo from './assets/react.svg';
import packageJson from '../package.json';
import './App.css';

//App.jsx를 수정해서는 안됩니다.
 
function App() {
  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>{packageJson.name}</h1>
      <div>
        <div>{`${packageJson.keywords.join(', ')}로 제작`}</div>
        <p>{packageJson.author} 개발함!</p>
      </div>
      <p>프로젝트 버전 {packageJson.version}</p>
    </>
  );
}

export default App;
