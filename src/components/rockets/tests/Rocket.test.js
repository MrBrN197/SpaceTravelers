import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rocket from '../Rocket';
import store from '../../../redux/configureStore';

describe('Rocket component tests', () => {
  const rocket = {
    rocket_name: 'name-test',
    description: 'description-test',
    id: 'id-test',
    reserved: false,
    flickr_images: ['test'],
  };
  const testComp = (rocket) => (
    <Provider store={store}>
      <Rocket rocket={rocket} />
    </Provider>
  );
  test('correctly renders Rocket that is not a reserved', () => {
    render(
      testComp(rocket),
    );

    const notReserved = screen.getByText('Reserve Rocket');
    expect(notReserved).toBeInTheDocument();
  });

  test('correctly renders Rocket that is  reserved', () => {
    render(
      testComp({ ...rocket, reserved: true }),
    );

    const notReserved = screen.getByText('Cancel Reservation');
    expect(notReserved).toBeInTheDocument();
  });
});
