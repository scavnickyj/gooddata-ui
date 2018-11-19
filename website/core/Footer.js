/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="copyright wrapper">
          Copyright &copy; 2007–{currentYear} GoodData Corporation. All Rights Reserved. 
          Code licensed under a dual license - <a href="https://github.com/gooddata/gooddata-react-components/blob/master/LICENSE">CC BY-NC 4.0 for trial experience and GoodData.UI EULA for commercial use.</a>.
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
