import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var NavigationWrapper = styled.nav(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    height: 60px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    position: relative;\n    padding: 0.5rem 0rem;\n    background-color: ", ";\n    color: black;\n    box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);\n"])), function (props) {
  return props.navigationBackgroundColor || '#fff';
});
var MenuTitle = styled.a(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    text-decoration: none;\n    color: black;\n    font-size: 1.3rem;\n    margin-left: 1rem;\n    cursor: pointer;\n    background-color: ", ";\n"])), function (props) {
  return props.navigationBackgroundColor || '#fff';
});
var NavigationMenu = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n    margin-left: auto;\n    \n"])));
var List = styled.ul(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n    display: flex;\n    padding: 0;\n    background-color: ", ";\n\n    @media screen and (max-width: 768px) {\n        position: absolute;\n        top: 60px;\n        left: 0;\n        flex-direction: column;\n        width: 100%;\n        height: calc(100vh - 77px);\n        background-color: white;\n        border-top: 1px solid black;\n        display: none;\n    }\n"])), function (props) {
  return props.navigationBackgroundColor || '#fff';
});
var ListItem = styled.li(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n    list-style-type: none;\n    margin: 0 1rem;\n\n    @media screen and (max-width: 768px) {\n        text-align: center;\n        margin: 0;\n\n        &:hover {\n            background-color: #eee;\n        }\n    }\n"])));
var ListItemA = styled.a(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n    text-decoration: none;\n    display: block;\n    width: 100%;\n    cursor: pointer;\n    background-color: ", ";\n\n    @media screen and (max-width: 768px) {\n        color: black;\n        width: 100%;\n        padding: 1.5rem 0;        \n    }\n"])), function (props) {
  return props.navigationBackgroundColor || '#fff';
});
var Hambuger = styled.button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n    border: 0;\n    height: 40px;\n    width: 40px;\n    padding: 0.5rem;\n    border-radius: 50%;\n    background-color: transparent;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n    position: absolute;\n    top: 50%;\n    right: 25px;\n    transform: translateY(-50%);\n    display: none;\n\n    &:hover {\n        background-color: #ebebec;\n    }\n\n    @media screen and (max-width: 768px) {\n        display: block;\n    }\n\n    svg {\n        background-color: ", ";\n    }\n"])), function (props) {
  return props.navigationBackgroundColor || '#fff';
});
var NavigationMenuExpand = styled(NavigationMenu)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n    @media screen and (max-width: 768px) {\n        ul {\n            display: block;\n        }\n    } \n"])));

var DynamicDiv = function DynamicDiv(_ref) {
  var isNavExpanded = _ref.isNavExpanded,
      children = _ref.children;
  return isNavExpanded ? /*#__PURE__*/React.createElement(NavigationMenuExpand, null, children) : /*#__PURE__*/React.createElement(NavigationMenu, null, children);
};

var Hamburger = function Hamburger(_ref2) {
  var options = _ref2.options;
  var navigate = useNavigate();

  var _useState = useState(false),
      isNavExpanded = _useState[0],
      setIsNavExpanded = _useState[1];

  var isTitle = options.isTitle,
      title = options.title,
      isLogo = options.isLogo,
      logoSettings = options.logoSettings,
      routerList = options.routerList,
      navigationBackgroundColor = options.navigationBackgroundColor;
  return /*#__PURE__*/React.createElement(NavigationWrapper, {
    navigationBackgroundColor: navigationBackgroundColor
  }, isTitle && /*#__PURE__*/React.createElement(MenuTitle, {
    onClick: function onClick() {
      return navigate("/");
    }
  }, isLogo ? /*#__PURE__*/React.createElement("img", {
    src: logoSettings.logo,
    width: logoSettings.logoWidth,
    height: logoSettings.logoHeight,
    alt: title
  }) : title), /*#__PURE__*/React.createElement(Hambuger, {
    onClick: function onClick() {
      setIsNavExpanded(!isNavExpanded);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }))), /*#__PURE__*/React.createElement(DynamicDiv, {
    isNavExpanded: isNavExpanded
  }, /*#__PURE__*/React.createElement(List, null, routerList.map(function (_ref3) {
    var rName = _ref3.rName,
        rLink = _ref3.rLink;
    return /*#__PURE__*/React.createElement(ListItem, {
      key: rName
    }, /*#__PURE__*/React.createElement(ListItemA, {
      onClick: function onClick() {
        navigate(rLink);
        setIsNavExpanded(!isNavExpanded);
      }
    }, rName));
  }))));
};

var ResponsiveMenuComponent = function ResponsiveMenuComponent() {
  var options = {
    isTitle: true,
    isLogo: false,
    logoSettings: {
      logo: '',
      logoWidth: 50,
      logoHeight: 50
    },
    title: "Responsive Menu",
    navigationBackgroundColor: '',
    routerList: [{
      rName: "Home",
      rLink: "/home"
    }, {
      rName: "About",
      rLink: "/about"
    }, {
      rName: "Contact",
      rLink: "/contact"
    }, {
      rName: "Departmants",
      rLink: "/departmants"
    }]
  };
  return /*#__PURE__*/React.createElement(Hamburger, {
    options: options
  });
};

export { ResponsiveMenuComponent };
//# sourceMappingURL=index.modern.js.map
