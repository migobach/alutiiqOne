import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return(
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to='/' />
          <Menu.Item name='curriculum' active={activeItem === 'curriculum'} onClick={this.handleItemClick} as={Link} to='/curriculum' />
                      
        </Menu>
      </div>
    )
  }
}

export default NavBar

// Making this a class so that when somebody is in a section, like the dictionary, the menu will conditionally render... Not quite there yet though. 


    // return (
    //   <div>
    //     <Menu pointing secondary>
    //       <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
    //       <Menu.Item
    //         name='messages'
    //         active={activeItem === 'messages'}
    //         onClick={this.handleItemClick}
    //       />
    //       <Menu.Item
    //         name='friends'
    //         active={activeItem === 'friends'}
    //         onClick={this.handleItemClick}
    //       />
    //       <Menu.Menu position='right'>
    //         <Menu.Item
    //           name='logout'
    //           active={activeItem === 'logout'}
    //           onClick={this.handleItemClick}
    //         />
    //       </Menu.Menu>
    //     </Menu>

    //     <Segment>
    //       <img src='/assets/images/wireframe/media-paragraph.png' />
    //     </Segment>
    //   </div>
    // )