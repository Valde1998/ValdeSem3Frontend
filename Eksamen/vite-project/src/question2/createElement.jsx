import React from 'react';

function Article() {
  return React.createElement(
    'article',
    null,
    React.createElement(
      'header',
      null,
      React.createElement('h1', null, 'My Article'),
      React.createElement('p', null, 'By Author')
    ),
    React.createElement(
      'section',
      null,
      React.createElement('p', null, 'This is the content of the article.')
    ),
    React.createElement(
      'footer',
      null,
      React.createElement('p', null, 'Footer content here.')
    )
  );
}

export default Article;
