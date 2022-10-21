import { Button, ButtonProps } from './Button'
import { Meta, StoryObj } from '@storybook/react'

export default {
    titie: 'Components/Button',
    component: Button,
    args: {
        children: 'Creat account',
    },
    argTypes: {
        size: {
            control: {
                type: 'inline-radio',
            }
        }
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

