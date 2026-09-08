import React from 'react';
import { localizePath } from './paths';

function portalLabel(node) {
  if (node.lines) {
    return (
      <>
        {node.lines.map((line, i) => (
          <React.Fragment key={line}>
            {line}
            {i < node.lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </>
    );
  }
  return node.label;
}

function designerCtaLabel(node) {
  if (node.line1Strong && node.line1?.includes(node.line1Strong)) {
    const [before, after] = node.line1.split(node.line1Strong);
    return (
      <>
        {before}
        <strong>{node.line1Strong}</strong>
        {after}
        <br />
        {node.line2}
      </>
    );
  }
  return (
    <>
      {node.line1}
      <br />
      {node.line2}
    </>
  );
}

function marketplaceCtaLabel(node) {
  if (node.line2Strong && node.line2?.includes(node.line2Strong)) {
    const [before, after] = node.line2.split(node.line2Strong);
    return (
      <>
        {node.line1}
        <br />
        {before}
        <strong>{node.line2Strong}</strong>
        {after}
      </>
    );
  }
  return (
    <>
      {node.line1}
      <br />
      {node.line2}
    </>
  );
}

function portalCtaLabel(node) {
  return (
    <>
      {node.line1}
      <br />
      <strong>{node.line2}</strong>
    </>
  );
}

function designerQ2Label(node) {
  return (
    <>
      {node.labelBefore}{' '}
      <strong>{node.labelStrong}</strong>{' '}
      {node.labelAfter}
    </>
  );
}

export function buildWhoAreYouNodes(t, locale, nodeIds, colors, positionOverrides = {}) {
  const node = (id, type, position, style, color) => {
    const data = t(`whoAreYou.nodes.${id}`);
    let label = data.label;

    if (id === 'p-portal') label = portalLabel(data);
    if (id === 'p-cta') label = portalCtaLabel(data);
    if (id === 'm-cta') label = marketplaceCtaLabel(data);
    if (id === 'd-cta') label = designerCtaLabel(data);
    if (id === 'd-q2') label = designerQ2Label(data);

    const entry = {
      id,
      type,
      position,
      data: {
        label,
        color: color || data.color,
        href: data.href ? localizePath(data.href, locale) : undefined,
      },
      style,
    };

    if (id === 'm-cta') {
      entry.data.rightHandleStyle = { top: 8 };
      entry.data.topRightHandleStyle = { left: '65%' };
    }

    return entry;
  };

  const badgeColor = (id) => {
    if (id === 'p-badge') return colors.yellow || '#f0c459';
    if (id === 'd-badge') return colors.pink || '#e8c8d1';
    return undefined;
  };

  const ctaColor = (id) => {
    if (id === 'p-cta') return '#f0c459';
    if (id === 'm-cta') return '#aad4e8';
    if (id === 'd-cta') return '#e8c8d1';
    return undefined;
  };

  const positions = {
    'p-badge': { x: 10, y: 0, w: 200 },
    'p-q1': { x: 10, y: 75, w: 200 },
    'p-yes': { x: 15, y: 190, w: 80 },
    'p-no': { x: 135, y: 190, w: 80 },
    'p-portal': { x: 10, y: 290, w: 200 },
    'p-sys': { x: 10, y: 400, w: 200 },
    'p-try': { x: 10, y: 460, w: 200 },
    'p-cta': { x: 0, y: 545, w: 220 },
    'm-q': { x: 420, y: 290, w: 220 },
    'm-all': { x: 475, y: 460, w: 110 },
    'm-cta': { x: 405, y: 545, w: 250 },
    'd-badge': { x: 830, y: 0, w: 240 },
    'd-q1': { x: 830, y: 75, w: 240 },
    'd-yes': { x: 830, y: 200, w: 80 },
    'd-wish': { x: 990, y: 200, w: 80 },
    'd-q2': { x: 820, y: 290, w: 260, extra: { paddingRight: 80 } },
    'd-course': { x: 680, y: 455, w: 160 },
    'd-cta': { x: 860, y: 545, w: 180 },
  };

  const types = {
    'p-badge': 'badge',
    'd-badge': 'badge',
    'p-yes': 'fork',
    'p-no': 'fork',
    'd-yes': 'fork',
    'd-wish': 'fork',
    'p-cta': 'cta',
    'm-cta': 'cta',
    'd-cta': 'cta',
  };

  return nodeIds.map((id) => {
    const pos = positionOverrides[id] || positions[id] || { x: 0, y: 0, w: 200 };
    const type = types[id] || 'text';
    const color = badgeColor(id) || ctaColor(id);
    const isBadge = type === 'badge';
    const nodeStyle = isBadge
      ? {
          width: pos.w,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...(pos.extra || {}),
        }
      : { width: pos.w, ...(pos.extra || {}) };

    return node(
      id,
      type,
      { x: pos.x, y: pos.y },
      nodeStyle,
      color,
    );
  });
}

export const DESKTOP_NODE_IDS = [
  'p-badge', 'p-q1', 'p-yes', 'p-no', 'p-portal', 'p-sys', 'p-try', 'p-cta',
  'm-q', 'm-all', 'm-cta',
  'd-badge', 'd-q1', 'd-yes', 'd-wish', 'd-q2', 'd-course', 'd-cta',
];

export const PUBLISHER_NODE_IDS = [
  'p-badge', 'p-q1', 'p-yes', 'p-no', 'p-portal', 'p-sys', 'p-try', 'p-cta',
];

export const MARKETPLACE_NODE_IDS = ['m-q', 'm-all', 'm-cta'];

export const DESIGNER_NODE_IDS = [
  'd-badge', 'd-q1', 'd-yes', 'd-wish', 'd-q2', 'd-cta', 'd-course', 'm-cta',
];
