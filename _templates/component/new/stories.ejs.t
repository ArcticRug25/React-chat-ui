---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.jsx
---

import React from 'react'
import <%= name %> from ".";

import "story.css";

const <%= name %>Info = {
  title: "<%= name %>",
  component: <%= name %>,
};

export const Default = () => <<%= name %>>默认</<%= name %>>;



export default <%= name %>Info;
