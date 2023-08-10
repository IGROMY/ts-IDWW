import type { Meta, StoryObj } from '@storybook/react';

import Typography from "./Typography.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Typography',
    component: Typography,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;
export const h1: Story = {
    args: {
        children: 'Typography' ,
        variant: "h1",
    },
};
export const h2: Story = {
    args: {
        children: 'Typography' ,
        variant: "h2",
    },
};
export const h3: Story = {
    args: {
        children: 'Typography' ,
        variant: "h3",
    },
};
export const h4: Story = {
    args: {
        children: 'Typography' ,
        variant: "h4",
    },
};
export const h5: Story = {
    args: {
        children: 'Typography' ,
        variant: "h5",
    },
};
export const h6: Story = {
    args: {
        children: 'Typography' ,
        variant: "h6",
    },
};
export const altH1: Story = {
    args: {
        children: 'Typography' ,
        variant: "altH1",
    },
};
export const displayText: Story = {
    args: {
        children: 'Typography' ,
        variant: "displayText",
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
