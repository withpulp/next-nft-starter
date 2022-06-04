import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { Button } from '@/components/Button';
import { SplitCard } from '@/components/Card/Split';
import { Section } from '@/components/Section';
import { Text } from '@/components/Text';
import { PageTemplate } from '@/templates/Page';

const Product = () => {
  const router = useRouter();

  return (
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
      <Section
        caption={{
          className: 'mx-auto mb-8 md:mb-12 xl:mb-16 text-center',
          heading: 'What a Gold Membership Gets You',
        }}
        container={{
          className: 'flex flex-col flex-nowrap gap-4 md:gap-6 xl:gap-8',
        }}
      >
        <SplitCard
          left={
            <>
              <Text as="h4" is="title" className="mb-4 md:mb-6 xl:mb-8">
                Feature Headline
              </Text>
              <Text as="p">
                Nunc auctor magna mi, ut sodales arcu cursus eget. Donec eget
                nibh sit amet augue efficitur lacinia. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Suspendisse potenti.
                Duis id sem nec nulla accumsan sodales.
              </Text>
            </>
          }
          right={
            <Image
              alt="Next NFT Starter Logo"
              layout="responsive"
              src={`${router.basePath}/assets/images/logo.png`}
              width={500}
              height={500}
            />
          }
        />
        <SplitCard
          isReversed
          left={
            <>
              <Text as="h4" is="title" className="mb-4 md:mb-6 xl:mb-8">
                Feature Headline
              </Text>
              <Text as="p">
                Nunc auctor magna mi, ut sodales arcu cursus eget. Donec eget
                nibh sit amet augue efficitur lacinia. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Suspendisse potenti.
                Duis id sem nec nulla accumsan sodales.
              </Text>
            </>
          }
          right={
            <Image
              alt="Next NFT Starter Logo"
              layout="responsive"
              src={`${router.basePath}/assets/images/logo.png`}
              width={500}
              height={500}
            />
          }
        />
        <SplitCard
          left={
            <>
              <Text as="h4" is="title" className="mb-4 md:mb-6 xl:mb-8">
                Feature Headline
              </Text>
              <Text as="p">
                Nunc auctor magna mi, ut sodales arcu cursus eget. Donec eget
                nibh sit amet augue efficitur lacinia. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Suspendisse potenti.
                Duis id sem nec nulla accumsan sodales.
              </Text>
            </>
          }
          right={
            <Image
              alt="Next NFT Starter Logo"
              layout="responsive"
              src={`${router.basePath}/assets/images/logo.png`}
              width={500}
              height={500}
            />
          }
        />
      </Section>
    </PageTemplate>
  );
};

export default Product;
