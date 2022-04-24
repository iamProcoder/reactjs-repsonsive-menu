import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styled from './MenuStyles';

const DynamicDiv = ({ isNavExpanded, children }) => {
  return isNavExpanded ? (
    <styled.NavigationMenuExpand>{children}</styled.NavigationMenuExpand>
  ) : (
    <styled.NavigationMenu>{children}</styled.NavigationMenu>
  );
};

const Hamburger = ({ options }) => {
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { isTitle, title, isLogo, logoSettings, routerList, navigationBackgroundColor } = options;
   
  return (
    <styled.NavigationWrapper
      navigationBackgroundColor={navigationBackgroundColor}
    >
      {isTitle && (
        <styled.MenuTitle onClick={() => navigate("/")}>
          {isLogo ? (
            <img
              src={logoSettings.logo}
              width={logoSettings.logoWidth}
              height={logoSettings.logoHeight}
              alt={title}
            />
          ) : (
            title
          )}
        </styled.MenuTitle>
      )}
      <styled.Hambuger
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </styled.Hambuger>
      <DynamicDiv isNavExpanded={isNavExpanded}>
        <styled.List>
          {routerList.map(({ rName, rLink }) => (
            <styled.ListItem key={rName}>
              <styled.ListItemA
                onClick={() => {
                  navigate(rLink);
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                {rName}
              </styled.ListItemA>
            </styled.ListItem>
          ))}
        </styled.List>
      </DynamicDiv>
    </styled.NavigationWrapper>
  );
};

export default Hamburger;
