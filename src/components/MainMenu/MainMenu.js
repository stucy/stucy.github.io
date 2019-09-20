import React, { Component } from 'react';
import MenuItem from './MenuItem';

import Equipment from './MenuImages/Equipment.png';
import Classes from './MenuImages/Classes.png';
import Spells from './MenuImages/Spells.png';
import Mechanics from './MenuImages/Mechanics.png';
import Monsters from './MenuImages/Monsters.png';

class MainMenu extends Component{
    constructor(){
        super();
        this.state = {
            Menu: [
                {
                    active : true,
                    type : 'classes',
                    src : Classes,
                    alt : 'Classes'
                },
                {
                    active : false,
                    type : 'races',
                    src : Mechanics,
                    alt : 'Races'
                },
                {
                    active : false,
                    type : 'equipment',
                    src : Equipment,
                    alt : 'Equipment'
                },
                {
                    active : false,
                    type : 'spells',
                    src : Spells,
                    alt : 'Spells'
                },
                {
                    active : false,
                    type : 'monsters',
                    src : Monsters,
                    alt : 'Monsters'
                }
            ]
        }
    }

    setActive = (index) =>{
        let stateCopy = {...this.state};
        stateCopy.Menu.forEach(menu => {
            menu.active = false;
        });
        stateCopy.Menu[index].active = true;
        this.setState(stateCopy);
    }

    
    render(){
        return(
            <div className="main-menu">
                 {
                    this.state.Menu.map((item, i) => {
                    return (
                        <MenuItem
                        key={i}
                        index={i}
                        active={item.active}
                        type={item.type}
                        src={item.src}
                        alt={item.alt}
                        setActive={this.setActive}
                        changeType={this.props.changeType}
                        />
                    );
                    })
                }
            </div>
        )
    }
}

export default MainMenu;