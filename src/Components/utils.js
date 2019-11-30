import React from 'react';

export const withParagraphs = (text, classNames = '') =>
  text
    ? text.split(/\n| && /).map((paragraph, i) => (
        <p className={classNames} key={i}>
          {paragraph}
        </p>
      ))
    : null;
