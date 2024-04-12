import React from 'react';

export default function GitHubPage({ url }) {
  return (
    <div>
      <iframe
        title="GitHub Page"
        src={url}
        style={{ width: '100%', height: '600px', border: 'none' }}
      />
    </div>
  );
}
