import { TextInput, TextInputProps } from './TextInput'
import { Meta, StoryObj } from '@storybook/react'

export default {
    titie: 'Components/TextInput',
    component: TextInput,
    args: {
        placeholder: 'Placeholder',
    },
    argTypes: {
        size: {
            control: {
                type: 'inline-radio',
            }
        }
    }
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}

