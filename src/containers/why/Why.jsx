import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
// import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import Problems from './Problems';
import Solutions from './Solutions';
import CustomList from '../CustomList';
import CustomListItem from '../CustomListItem';

class Why extends Component {

  render() {
    return (
      <div>
        <Section margin={{top: 'large'}}> 
          <Heading align='center'
            tag='h2'>
            Why
          </Heading>
          <Paragraph size='medium' margin='small'>
            To understand the motivation for BookLocal we identify a few key issues with
            the current hotel reservation model and propose solutions.
          </Paragraph>
          <Problems>
            <CustomList title="High commission payments." 
              // colorIndex='warning'
              >
              <CustomListItem colorIndex='light-1'>
                <div>&#8226;</div>
                Online travel agents (OTA) receive 15-25% commission per room.
              </CustomListItem>
              <CustomListItem colorIndex='light-1'>
                <div>&#8226;</div>
                Other necessary software packages (i.e. channel manager and property
                management systems) also require monthly usage fees.
              </CustomListItem>
              <CustomListItem colorIndex='light-1'>
                <div>&#8226;</div>
                These additional payments increase rates for travelers while lowering profit
                for the hotels.
              </CustomListItem>
            </CustomList>
            <CustomList title="Abuse of power in legal agreements.">
              <CustomListItem>
                <div>&#8226;</div>
                <div>
                  <i className="underline">Last available room</i> clause requires hotels to give the OTA access their last
                  room(s) when near capacity. Because of the high commission rates, this
                  can cause hotels to pass on revenue from more profitable booking options
                  (i.e. last minute walk-ins).
                </div>
              </CustomListItem>
              <CustomListItem>
                <div>&#8226;</div>
                <div>
                  <i className="underline">Rate parity</i> clause forbids the hotel from renting a room at a lower price
                  through any other source, including their own website, from which they
                  could charge a lower price to the traveler and still receive higher profit.
                </div>
              </CustomListItem>
              <CustomListItem>
                <div>&#8226;</div>
                <div>
                  <i className="underline">Blanket use of trademark rights</i> allows an OTA to bid on google ad-words
                  for higher listing than the hotel’s brand website.
                </div>
              </CustomListItem>
            </CustomList>
            <CustomList title="Fragmented computer systems.">
              <CustomListItem>
                <div>&#8226;</div>
                Since many of the computers systems are only designed to handle specific
                tasks (i.e. channel manager, property management system, point of sale,
                housekeeping module), training costs are very high for new employees and
                leads to situations where only a few managers may know how to use all
                the necessary systems.
              </CustomListItem>
              <CustomListItem>
                <div>&#8226;</div>
                Current property management systems allow for various rate plans, seasonal
                rates, and room types, but often must be entered manually by the
                revenue management department. This can limit responsiveness for special
                event packages.
              </CustomListItem>
            </CustomList>
          </Problems>
          <Solutions>
            <CustomList title="Brand new revenue structure.">
              <CustomListItem>
                <div>&#8226;</div>
                Designed to lower the room prices for travelers and increase hotel profits.
              </CustomListItem>
            </CustomList>
            <CustomList title="Open sourced contracts.">
              <CustomListItem>
                <div>&#8226;</div>
                All contracts will be open sourced and publicly scrutinized to provide fair
                and consistent terms.
              </CustomListItem>
            </CustomList>
            <CustomList title="Holistic design.">
              <CustomListItem>
                <div>&#8226;</div>
                This is the first travel application designed to accomodate the entire booking
                process.
              </CustomListItem>
              <CustomListItem>
                <div>&#8226;</div>
                Integrating features into a single system will put the guest and hotel in
                direct contact by removing unnecessary middlemen.
              </CustomListItem>
            </CustomList>
          </Solutions>
        </Section>
      </div>
    );
  }

}

export default Why;