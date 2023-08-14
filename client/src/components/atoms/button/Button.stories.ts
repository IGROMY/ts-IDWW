import type { Meta, StoryObj } from '@storybook/react';
import  Button  from './Button.tsx';

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action:'clicked' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Large: Story = {
    args: {
        text: 'Large Button' ,
        variant: 'large',
    },
};
export const Primary: Story = {
    args: {
        text: 'Primary Button' ,
        variant: 'primary',
    },
};
export const Secondary: Story = {
    args: {
        text: 'Secondary Button' ,
        variant: 'secondary',
    },
};
