// replace Details.js
import React from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, showModal: false };
  }

  componentDidMount() {
    pet
      .animal(+this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${
            animal.contact.address.state
          }`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);
  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          {/* In classes this is how we use contexts */}
          {/* we do themeHook[0] because a hook has default state at [0] then setState[1].. onwards */}
          <ThemeContext.Consumer>
            {themeHook => (
              <button
                onClick={this.toggleModal}
                style={{ background: themeHook[0] }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, I'm a monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
          }
        </div>
      </div>
    );
  }
}
// We have to make this a function because ErrorBoundaries cannot catch errors in the current class. So we move outside of the class and create a function wrapping the class we were just in to catch all errors.
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      {/* This spread props across details parameters. (It does id = props.id ... etc for us) */}
      <Details {...props} />
    </ErrorBoundary>
  );
}
