import React from 'react'
const {Provider, Consumer} = React.createContext({});

class Text extends React.Component{
    render(){
        const { dictionary, language, children, ...props} = this.props;
        if(children){
            return (
                <Provider value={{language, dictionary}}>
                    {children}
                </Provider>
            )
        }
        const key = Object.keys(props).filter(item => props[item] === true)[0]
        return(
            <Consumer>
                {value => (
                    value.dictionary[key][value.language]
                )}
            </Consumer>
        )
    }
}

export default Text