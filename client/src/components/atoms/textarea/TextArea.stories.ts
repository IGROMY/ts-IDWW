import type { Meta, StoryObj } from '@storybook/react';
import TextArea from "./TextArea.tsx";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/TextArea',
    component: TextArea,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;
export const name: Story = {
    args: {
        label: 'TextArea' ,
        name: "TextArea",
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
