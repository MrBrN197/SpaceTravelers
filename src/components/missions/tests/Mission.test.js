import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../Mission';
import store from '../../../redux/configureStore';

describe('Header component tests', () => {
  test('correctly renders Mission that is not a reserved', () => {
    render(
      <Provider store={store}>
        <Mission
          name="name-test"
          description="description-test"
          id="id-test"
        />
      </Provider>,
    );

    const notMemberText = screen.getByText('NOT MEMBER');
    expect(notMemberText).toBeInTheDocument();
  });

  test('correctly renders Mission that is reserved', () => {
    render(
      <Provider store={store}>
        <Mission
          name="name-test"
          description="description-test"
          id="id-test"
          reserved
        />
      </Provider>,
    );

    const notMemberText = screen.getByText('Active Member');
    expect(notMemberText).toBeInTheDocument();
  });
});
