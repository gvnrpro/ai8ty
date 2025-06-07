import React from 'react';

export const SectionAnchor = ({ id }: { id: string }) => (
  <span id={id} className="section-anchor" tabIndex={-1} aria-hidden="true"></span>
);