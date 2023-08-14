import type { Meta, StoryObj } from '@storybook/react';
import TextArea from "./TextArea.tsx";


const meta = {
    title: 'Example/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;
export const textArea: Story = {
    args: {
        label: 'TextArea',
        name: 'TextArea',
    },
};

