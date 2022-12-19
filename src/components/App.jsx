import React, { useState } from 'react';
import { GlobalStyle } from './GlobalStyles';

import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleFeedback = property => {
    switch (property) {
      case "good":
        return setGood(prevState => prevState + 1);
      case "neutral":
        return setNeutral(prevState => prevState + 1);
      case "bad":
        return setBad(prevState => prevState + 1);
      default:
        throw new Error(`Unsupported type of ${property}`)
    };
  };
  

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total > 0 ? Math.round((100 / total) * good) : 0;
  };

  
    const keys = ['good', 'neutral', 'bad'];
    
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
          backgroundColor: '#fff00057',
          maxWidth: '100 %',
          padding: '20px',
          margin: '0 auto',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={handleFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
        <GlobalStyle />
      </div>
    );
  
};

