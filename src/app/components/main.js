import React from 'react';
import Title from 'react-title-component';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

const githubButton = (
  <IconButton
    iconClassName="muidocs-icon-custom-github"
    href="https://github.com/callemall/material-ui"
    linkButton={true}
  />
);

// Define menu items for LeftNav
const menuItems = [
  { route: '', text: 'Home' },
  { route: 'login', text: 'Login' }
];

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      titleBar: "coucou"
    }
  }

  static propTypes = {
    children: React.PropTypes.node
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleTouchMenuIconButton() {
    this.setState({showMenu: !this.state.showMenu});
  }

  handleTouchNavMenuItem(routeUrl) {
    this.setState({showMenu: !this.state.showMenu});
    this.context.router.push(routeUrl);
  }



  render() {
    const {
      children,
    } = this.props;

    let {
      navDrawerOpen,
    } = this.state;

    let docked = false;

    return (
      <div>
        <Title render="Ballot" />
        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchMenuIconButton.bind(this)}
          title="coucou"
          zDepth={0}
          iconElementRight={githubButton}/>
        <LeftNav open={this.state.showMenu}
          docked={false}
          onRequestChange={(open) => this.setState({showMenu: open})}>
          {menuItems.map((elt, idx) => {
            return <MenuItem key={idx}_navItem onTouchTap={this.handleTouchNavMenuItem.bind(this, elt.route)}>{elt.text}</MenuItem>
          })}
        </LeftNav>
        <div id="content">{this.props.children}</div>
      </div>
    );
  }
}
