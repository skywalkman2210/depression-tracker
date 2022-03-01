import { useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
  greeting?: string;
  onUserSet?: (name: string) => void,
  username?: string
  children?: any
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, greeting, username, onUserSet, children }) => {
  const [userName, setUserName] = useState(username || "");
  let userSection = <div></div>;

  const setName = (event: any) => {
    setUserName(event.target.value);
  }

  if (onUserSet) {
    userSection = (
      <div>
        <input type="text" id="username" value={userName} onChange={setName} />
        <button onClick={() => { onUserSet(userName); }}>Set Username</button>
      </div>
    )
  }

  return (
    <div className="container">
      <h2>
        {greeting || ""}
      </h2>

      {userSection}

      {children}
    </div>
  );
};

export default ExploreContainer;
