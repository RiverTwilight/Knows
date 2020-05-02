/*import React from 'react'
/**
 * 多语言组件
 * 若props包含子节点作为Provider，不包含作为Consumer
 */
//@ts-nocheck
/*
const { Provider, Consumer } = React.createContext({
    dictionary: {},
    language: 0
});

type T = {
    dictionary: {
        [dicIndex: string]: {
            [langIndex: number]: string
        }
    };
    language: number;
    children: any;
} |
{
    [dicIndex: string]: string;
}

export default class Text extends React.Component
    <T, {}>
{
    render() {
        const { dictionary, language, children, ...props } = this.props;
        if (children) {
            return (
                <Provider value={{ language, dictionary }}>
                    {children}
                </Provider>
            )
        }
        const dicIndex = Object.keys(props)[0];
        return (
            <Consumer>
                {value => {
                    return value['dictionary'][dicIndex][value.language]
                }}
            </Consumer>
        )
    }
}
*/