import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from "./Paragraph.tsx";

const meta = {
    title: 'Example/Paragraph',
    component: Paragraph,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>;
export default meta;
type Story = StoryObj<typeof meta>;
export const large: Story = {
    args: {
        children: 'Text',
        variant: "large",
    },
};
export const medium: Story = {
    args: {
        children: 'Text',
        variant: "medium",
    },
};
export const small: Story = {
    args: {
        children: 'Text',
        variant: "small",
    },
};