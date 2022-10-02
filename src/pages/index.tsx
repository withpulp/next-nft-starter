import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { FeatureCard } from '@/components/Card/Feature';
import { NextLink as Link } from '@/components/Link';
import { Section } from '@/components/Section';
import { Text } from '@/components/Text';
import { useTheme } from '@/contexts/Theme';
import { PageTemplate } from '@/templates/Page';

const Index = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <PageTemplate
      title="Next NFT Starter"
      description="Next NFT Starter lets you skip the boring parts of setting up your architecture and lets you get right to the code."
      heading="2 Limitless Memeberships, 1 Mission."
      heroProps={{
        caption: { align: 'center' },
        children: (
          <div className="flex flex-col flex-nowrap gap-4 md:flex-row md:gap-6 xl:gap-8">
            <FeatureCard
              header={
                <Image
                  alt="Next NFT Starter Logo"
                  layout="responsive"
                  src={`${router.basePath}/assets/images/logo.png`}
                  width={250}
                  height={250}
                />
              }
              title="Gold Membership"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            >
              <Link href="/product">Learn more</Link>
            </FeatureCard>
            <FeatureCard
              header={
                <Image
                  alt="Next NFT Starter Logo"
                  layout="responsive"
                  src={`${router.basePath}/assets/images/logo.png`}
                  width={250}
                  height={250}
                />
              }
              title="Diamond Membership"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            >
              <Link href="/product">Learn more</Link>
            </FeatureCard>
          </div>
        ),
      }}
      layout="content"
    >
      <Section
        container={{
          className:
            'flex flex-col md:flex-row flex-nowrap items-center gap-6 md:gap-8 xl:gap-10',
        }}
      >
        <div
          style={
            theme === 'dark' ? { filter: 'invert(1)' } : { filter: 'invert(0)' }
          }
        >
          <Image
            alt="Next NFT Starter Logo"
            layout="fixed"
            src={`${router.basePath}/assets/images/logo.png`}
            width={250}
            height={250}
          />
        </div>
        <Text as="h2" is="hero" className="text-center md:text-left">
          Next NFT Starter lets you develop an NFT product site quickly and
          easily.
        </Text>
      </Section>
    </PageTemplate>
  );
};

export default Index;
