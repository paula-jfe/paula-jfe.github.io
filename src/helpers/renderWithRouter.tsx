import { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Router } from 'react-router';
import userEvent, { UserEvent } from '@testing-library/user-event';

type RenderWithRouterOptions = {
    route?: string;
};

type RenderWithRouterResult = RenderResult & {
    history: MemoryHistory;
    user: UserEvent;
};

export function renderWithRouter(
    ui: ReactNode,
    options: RenderWithRouterOptions = {},
): RenderWithRouterResult {
    const user: UserEvent = userEvent.setup();

    const history = createMemoryHistory({ initialEntries: [options.route || '/'] });

    const utils = render(
        <Router location={history.location} navigator={history}>
            {ui}
        </Router>,
    );

    return {
        user,
        history,
        ...utils,
    };
}

export default renderWithRouter;
