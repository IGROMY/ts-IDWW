import type { Meta, StoryObj } from '@storybook/react';
import CardPeopleAbout from "./CardPeopleAbout.tsx";

const meta = {
    title: 'Example/CardPeopleAbout',
    component: CardPeopleAbout,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof CardPeopleAbout>;

export default meta;
type Story = StoryObj<typeof meta>;
export const cardPeopleAbout: Story = {
    args: {
        fullName: "FullName",
        job: "Job",
        location: 'Location',
        phoneNumber: 'PhoneNumber',
        email: 'EMail'
    },
};
