import React from 'react';

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
