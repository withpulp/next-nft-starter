import React from 'react';

import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { PageTemplate } from '../../templates/Page';

const Product = () => (
  <PageTemplate
    title="Product"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim sit amet massa id condimentum."
    heading="Limitless Gold Membership"
    subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim sit amet massa id condimentum. Cras imperdiet ex a tellus volutpat accumsan. Phasellus ac convallis orci."
    cta={{
      title: '1 ETH',
      buttons: (
        <Button color="primary" onClick={() => console.log('Mint')}>
          Mint
        </Button>
      ),
    }}
  >
    <Section>
      <h2>What a Gold membership gets you</h2>
    </Section>
  </PageTemplate>
);

export default Product;
