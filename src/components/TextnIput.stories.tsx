import { TextInput, TextInputRootProps } from './TextInput'
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'


export default {
    titie: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Input placeholder='Placeholder' />,
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>
        ]

    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

