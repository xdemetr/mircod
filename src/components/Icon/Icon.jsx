import React from 'react';
import cn from 'classnames';

import styles from './Icon.module.sass';

import { ReactComponent as Icon01 } from './content/1.svg';
import { ReactComponent as Icon02 } from './content/2.svg';
import { ReactComponent as Icon03 } from './content/3.svg';
import { ReactComponent as IconPlus } from './content/plus.svg';

const iconsData = [
  { label: "icon-01", component: Icon01 },
  { label: "icon-02", component: Icon02 },
  { label: "icon-03", component: Icon03 },
  { label: "plus", component: IconPlus },
];

const SvgIcon = ({ Component, ...props }) => {
  const { content, mix } = props;
  return (
    <Component
      className={cn(styles.svgIcon, content && `svg-icon_content_${content}`, mix)}
    />
  )
};

const Icon = ({ content, ...props }) => {
  let icon = '';

  const res = iconsData.filter(icon => icon.label === content)[0];
  if (!res) return null;

  icon = <SvgIcon Component={res.component} {...props} />;
  if (!icon) return null;

  return icon;
};

export default React.memo(Icon);
