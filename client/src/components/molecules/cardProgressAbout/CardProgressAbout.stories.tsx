import type { Meta, StoryObj } from '@storybook/react';
import CardProgressAbout from "./CardProgressAbout.tsx";

const meta = {
    title: 'Example/CardProgressAbout',
    component: CardProgressAbout,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof CardProgressAbout>;

export default meta;
type Story = StoryObj<typeof meta>;
export const firstPhoto: Story = {
    args: {
        variant: 'firstPhoto',
        header: 'Header',
        childrenText: 'ChildrenText',
        textButton: 'TextButton',
        photo: 'Photo'
    },
};
export const lastPhoto: Story = {
    args: {
        variant: 'lastPhoto',
        header: 'Header',
        childrenText: 'ChildrenText',
        textButton: 'TextButton',
        photo: 'Photo'
    },
};
