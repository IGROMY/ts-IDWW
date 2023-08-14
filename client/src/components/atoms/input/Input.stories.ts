import type { Meta, StoryObj } from '@storybook/react';
import  Input  from './Input.tsx';

const meta = {
    title: 'Example/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onChange: { action:'change' },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const input: Story = {
    args: {
        label: "label",
        placeholder: 'placeholder',
        name: "name",
        id: 'id',
        value: '',
        type:'type',
    },
};
