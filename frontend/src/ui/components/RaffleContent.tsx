import React, { FC, useEffect } from 'react';
import styled from '@emotion/styled';
import { FiLink } from 'react-icons/fi';

// Components
import { Card } from 'ui/styled/antd/Card';
import PrizeRowForm from 'ui/components/PrizeRowForm';
import RaffleShareContent from 'ui/components/RaffleShareContent';
import Separator from 'ui/styled/Separator';
import InputTitle from 'ui/styled/InputTitle';
import EventDisplay from 'ui/components/EventDisplay';

// Lib
import { useModal } from 'lib/hooks/useModal';
import { isRaffleActive } from 'lib/helpers/raffles';

// Assets
import Telegram from 'assets/img/share-telegram.svg';
import Twitter from 'assets/img/share-twitter.svg';
import Whatsapp from 'assets/img/share-whatsapp.svg';

// Types
import { CompleteRaffle } from 'lib/types';
type RaffleContentProps = {
  raffle: CompleteRaffle;
};

const Content = styled.div`
  padding: 10px 0;
`;
const CardContent = styled.div`
  flex-direction: row;
  width: 100%;
  .description {
    padding: 20px 0;
  }
  .poaps {
    p {
      margin: 10px 0 0;
      font-family: var(--mix-font);
      color: var(--font-color);
      font-size: 14px;
      line-height: 22px;
      opacity: 0.8;
    }
  }
`;
const Share = styled.div`
  text-align: right;
  font-family: var(--alt-font);
  color: var(--secondary-color);
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
`;

const RaffleContent: FC<RaffleContentProps> = ({ raffle }) => {
  useEffect(() => {
    // Modal is delaying image loading
    const imagesToBePreloaded = [Telegram, Twitter, Whatsapp];
    imagesToBePreloaded.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const { showModal: handleShare } = useModal({
    component: RaffleShareContent,
    closable: true,
    className: '',
    okButtonText: 'Close',
    width: 400,
    okButtonWidth: 70,
    id: raffle.id,
  });

  return (
    <Content>
      <Card>
        <CardContent>
          <div>
            <Share onClick={handleShare}>
              Get sharable link <FiLink />
            </Share>
            <InputTitle>Prize{raffle.prizes.length > 1 && `s`}</InputTitle>
            <div>
              {raffle.prizes.map((prize) => (
                <PrizeRowForm order={prize.order} key={prize.order} prize={prize.name} />
              ))}
            </div>
          </div>
          <div className={'description'} dangerouslySetInnerHTML={{ __html: raffle.description }} />
          <Separator />
          <div className={'poaps'}>
            <InputTitle>Elegible POAP{raffle.events.length > 1 && `s`}</InputTitle>
            <EventDisplay events={raffle.events} />
            {isRaffleActive(raffle) && (
              <p>
                {!raffle.one_address_one_vote && `You need at least one, but having more means more chances!`}
                {raffle.one_address_one_vote && `You need at least one to participate!`}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </Content>
  );
};

export default RaffleContent;
