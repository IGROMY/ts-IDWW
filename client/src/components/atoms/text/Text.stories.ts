import type { Meta, StoryObj } from '@storybook/react';
import Text from "./Text.tsx";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Text',
    component: Text,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;
export const normal: Story = {
    args: {
        children: 'Text',
        variant: "normal",
    },
};
export const bold: Story = {
    args: {
        children: 'Text',
        variant: "bold",
    },
};
export const italic: Story = {
    args: {
        children: 'Text',
        variant: "italic",
    },
};
