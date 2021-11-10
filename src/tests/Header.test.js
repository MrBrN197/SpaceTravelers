import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

describe('Header component tests', () => {
  test('correctly renders links', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const rocketsLink = screen.getByText(/Rockets/i);
    const missionsLink = screen.getByText(/Missions/i);
    const profileLink = screen.getByText(/My Profile/i);

    expect(rocketsLink).toBeInTheDocument();
    expect(missionsLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });

  test('expects header text to exist', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const headerText = screen.getByText(/Space Travelers‘ Hub/i);
    expect(headerText).toBeInTheDocument();
  });

  test('expects logo image to exist', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const imageLogo = screen.getByRole('img');
    expect(imageLogo).toBeInTheDocument();
  });
});
