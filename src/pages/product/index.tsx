import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { Button } from '@/components/Button';
import { CTACard } from '@/components/Card/CTA';
import { SplitCard } from '@/components/Card/Split';
import { Media } from '@/components/Media';
import { Section } from '@/components/Section';
import { BannerSection } from '@/components/Section/Banner';
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
      heroProps={{ color: 'primary' }}
      cta={{
        title: '1 ETH',
        buttons: (
          <Button color="secondary" onClick={() => console.log('Mint')}>
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
          rightProps={{
            className: 'order-first md:order-last',
          }}
          right={
            <Image
              alt="Next NFT Starter Logo"
              layout="responsive"
              src={`${router.basePath}/assets/images/logo.png`}
              width={400}
              height={400}
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
              width={400}
              height={400}
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
          rightProps={{
            className: 'order-first md:order-last',
          }}
          right={
            <Image
              alt="Next NFT Starter Logo"
              layout="responsive"
              src={`${router.basePath}/assets/images/logo.png`}
              width={400}
              height={400}
            />
          }
        />
      </Section>
      <BannerSection
        banner={
          <Media
            alt="Next NFT Starter Banner Image"
            src={`${router.basePath}/assets/images/nft-banner.jpg`}
          />
        }
        caption={{
          className: 'mx-auto mt-6 md:mt-8 xl:mt-10 text-center',
          heading: 'Mission-Driven',
          subheading:
            'Nunc eu turpis nisi. Nunc tristique dolor malesuada semper mattis. Quisque vel rhoncus nunc. Mauris facilisis lorem ut erat finibus dapibus. Praesent sem orci, semper ac eros vel, condimentum condimentum nisl. Ut tempus ut metus vitae consequat. Ut ut semper diam, id hendrerit diam.',
        }}
      />
      <Section
        is="feature"
        caption={{
          className: 'mx-auto mb-4 md:mb-5 xl:mb-6 text-center',
          heading: 'Mint a Gold Membership Today',
        }}
        className="text-center"
        color="secondary"
      >
        <CTACard className="items-center">
          <Button color="primary" onClick={() => console.log('Mint')}>
            Mint
          </Button>
          <Text className="mt-4 text-center md:mt-5 xl:mt-6" is="meta">
            9998 of 9999 minted
          </Text>
        </CTACard>
      </Section>
    </PageTemplate>
  );
};

export default Product;
