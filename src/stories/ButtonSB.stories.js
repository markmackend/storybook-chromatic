import ButtonSB from '../components/ButtonSB'

export default {
    title: "Components/ButtonSB",
    component: ButtonSB,
    argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <ButtonSB {...args} />


export const Red = Template.bind({})
Red.args = {
    backgroundColor: 'red',
    label: "Press Me",
    size: "md",
    color: 'black',
    border: '2px solid black',
}

export const Green = Template.bind({})
Green.args = {
    backgroundColor: 'green',
    label: "Press Me",
    size: "md",
    color: 'black',
    border: '2px solid black',
}

export const Small = Template.bind({})
Small.args = {
    backgroundColor: 'red',
    label: "Press Me",
    size: "sm",
    color: 'black',
    border: '2px solid black',
}

export const Large = Template.bind({})
Large.args = {
    backgroundColor: 'red',
    label: "Press Me",
    size: "lg",
    color: 'black',
    border: '2px solid black',
}

export const LongLabel = Template.bind({})
LongLabel.args = {
    backgroundColor: 'red',
    label: "thi sis a really long label kasjdlfjasdljasdfk  l kadsjflka dsf asd lfkajs dfklasdjfl aksdf as",
    size: "md",
    color: 'black',
    border: '2px solid black',
}

export const StandardBPMSubmit = Template.bind({})
StandardBPMSubmit.args = {
    backgroundColor: 'rgb(50,92,128)',
    label: "Submit Quote",
    size: "lg",
    color: 'white',
    border: 'none',
}