import { FormspreeAPIResponse } from '../types/sections/Contact';

export const sendMessageSuccessMock: FormspreeAPIResponse = {
    ok: true,
    next: '/nextroute',
};

export const sendMessageFailMock: FormspreeAPIResponse = {
    ok: false,
    next: '/nextroute',
    errors: 'Incorrect data',
};
