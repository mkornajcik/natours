import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51QmyTxCv5S0Sv3WiE2NjJje3706pvN0IQFcZaAuaS2sLZIYG9InmaIIE1VJvyIOaYt3kGlOxSKNmdLcITPVcEe3V00uE7kFqRE',
  );
  try {
    // Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);

    // Redirect to Stripe checkout
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
