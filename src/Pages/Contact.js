import React from 'react';
import ContactForm from '../Components/ContactForm';
import MetaTags from '../Components/MetaTags';

const Contact = () => {

  const pageTitle = 'Contactez-nous - EcoShop';
  const pageDescription = 'Vous avez des questions ou des préoccupations ? Contactez notre équipe et nous serons heureux de vous aider.';
  const pageAuthor = 'EcoShop'; // Le nom de la boutique ou de l'auteur
  return (
    <div className='contact my-5'>
       <MetaTags
        title={pageTitle}
        description={pageDescription}
        name={pageAuthor}
      />
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
