import { useState } from 'react';

const SideMenu = () => {
  const [menuVisibility, setMenuVisibility] = useState({
    level1: true,
    level2: true,
    level3: true,
  });

  const toggleMenuVisibility = (level) => {
    setMenuVisibility((prevState) => ({
      ...prevState,
      [level]: !prevState[level],
    }));
  };

  return (
    <div className="w-64 bg-light text-dark">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Menu</h2>
        <ul>
          <li>
            <button
              onClick={() => toggleMenuVisibility('level1')}
              className="w-full text-left"
            >
              Level 1
            </button>
            {menuVisibility.level1 && (
              <ul className="pl-4">
                <li>
                  <button
                    onClick={() => toggleMenuVisibility('level2')}
                    className="w-full text-left"
                  >
                    Level 2
                  </button>
                  {menuVisibility.level2 && (
                    <ul className="pl-4">
                      <li>
                        <button
                          onClick={() => toggleMenuVisibility('level3')}
                          className="w-full text-left"
                        >
                          Level 3
                        </button>
                        {menuVisibility.level3 && (
                          <ul className="pl-4">
                            <li>Item 1</li>
                            <li>Item 2</li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
