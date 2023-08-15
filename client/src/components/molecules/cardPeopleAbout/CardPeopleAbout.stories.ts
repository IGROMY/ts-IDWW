import {StoryFn, Meta} from '@storybook/react';
import CardPeopleAbout,  from './CardPeopleAbout';
import {ICardPeopleAboutProps} from "./CardPeopleAbout.types";

export default {
    title: 'Example/CardPeopleAbout',
    component: CardPeopleAbout,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta;

export const cardPeopleAbout: StoryFn<typeof ICardPeopleAboutProps> = {
    args: {
        fullName: "FullName",
        job: "Job",
        location: 'Location',
        phoneNumber: 'PhoneNumber',
        email: 'EMail',
    },
};
