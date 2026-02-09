/**
 * RollingBanner renders a continuously scrolling marquee of PNG logos.
 * Each item is animated individually via requestAnimationFrame so the
 * movement remains smooth regardless of content width or viewport size.
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { spacing, breakpoints, colors } from '../styles/tokens';

// Pixel gap inserted between each logo instance on mobile; doubled for desktop.
const BASE_GAP_PX = parseFloat(spacing.large) || 32;
const DOUBLE_GAP_PX = BASE_GAP_PX * 2;
// Ensures we always have enough items to cover large screens.
const MIN_VISIBLE_ITEMS = 50;

// Outer wrapper keeps the marquee clipped inside the hero section.
const BannerShell = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${(p) => (p.$mobileOnly ? colors.lightblue : 'transparent')};
  border-top: none;
  border-bottom: none;
  padding: ${spacing.small} 0;
  margin-top: ${spacing.medium};
  display: ${(p) => (p.$mobileOnly ? 'none' : 'block')};
  --logo-opacity: 0.55;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: ${spacing.small};
    ${(p) => (p.$desktopOnly ? 'display: none;' : '')}
    ${(p) => (p.$mobileOnly ? 'display: block;' : '')}
    --logo-opacity: 0.7;
  }
`;

const HeadingRow = styled.div`
  margin-bottom: ${spacing.small};
  ${(p) =>
    p.$alignment === 'hero'
      ? `
    width: 70%;
    max-width: 840px;
    margin-left: max(0px, calc((100% - 1200px) / 2));
    margin-right: auto;
    padding-right: ${spacing.xXLarge};

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      max-width: none;
      margin-left: ${spacing.large};
      margin-right: ${spacing.large};
      padding-right: 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
      margin-left: ${spacing.small};
      margin-right: ${spacing.small};
      text-align: center;
    }
  `
      : `
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${spacing.large};
    padding-right: ${spacing.large};

    @media (max-width: ${breakpoints.mobile}) {
      padding-left: ${spacing.small};
      padding-right: ${spacing.small};
      text-align: center;
    }
  `}
`;

const Heading = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

// Relative positioning lets each logo control its absolute offset.
const BannerTrack = styled.div`
  position: relative;
  width: 100%;
  height: var(--logo-height, 52px);
`;

// Individual logo container. We animate the CSS variable --offset to slide it.
const LogoSlot = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(var(--offset, 0px), -50%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  pointer-events: none;
  opacity: calc(var(--alpha, 1) * var(--logo-opacity, 1));
  transition: opacity 200ms ease;
`;

// Slight drop shadow keeps white assets legible over the hero background.
const LogoImage = styled.img`
  height: var(--logo-height, 52px);
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.08));
`;

// Fisher-Yates shuffle keeps the logo order varied without mutating original arrays.
const shuffleArray = (input) => {
  const list = [...input];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    const temp = list[i];
    list[i] = list[swapIndex];
    list[swapIndex] = temp;
  }
  return list;
};

// Reads every PNG in the rolling-banner asset folder. The bundler (CRA + Webpack)
// transforms require.context calls into static import maps at build time.
const loadImages = () => {
  try {
    const context = require.context('../assets/rolling-banner', false, /\.png$/i);
    const items = context.keys().map((key) => {
      const fileName = key.replace('./', '');
      const label = fileName.replace(/\.png$/i, '').replace(/[-_]+/g, ' ').trim();
      return {
        src: context(key),
        alt: label || 'Brand logo',
      };
    });
    return shuffleArray(items);
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      // Helps identify missing asset folders during development without breaking the build.
      // eslint-disable-next-line no-console
      console.warn('RollingBanner: no PNG assets found in src/assets/rolling-banner', error);
    }
    return [];
  }
};

const RollingBanner = ({
  duration = 32,
  maxHeight = 52,
  direction = 'right',
  fadeAtCenter = true,
  desktopOnly = false,
  mobileOnly = false,
  headingAlignment = 'hero',
}) => {
  const images = useMemo(() => loadImages(), []);
  const hasImages = images.length > 0;
  const [sequence, setSequence] = useState([]);
  const [gap, setGap] = useState(() => (mobileOnly ? BASE_GAP_PX : DOUBLE_GAP_PX));
  const gapRef = useRef(gap);

  useEffect(() => {
    gapRef.current = gap;
  }, [gap]);

  useEffect(() => {
    if (mobileOnly) {
      setGap(BASE_GAP_PX);
      return undefined;
    }

    if (typeof window === 'undefined' || !window.matchMedia) {
      setGap(DOUBLE_GAP_PX);
      return undefined;
    }

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoints.mobile})`);

    const handleChange = (event) => {
      setGap(event.matches ? BASE_GAP_PX : DOUBLE_GAP_PX);
    };

    handleChange(mediaQuery);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [mobileOnly]);

  const effectiveDuration = useMemo(() => {
    if (mobileOnly && duration >= 16) {
      return 9;
    }
    return duration;
  }, [duration, mobileOnly]);

  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const positionsRef = useRef([]);
  const widthsRef = useRef([]);
  const containerWidthRef = useRef(0);
  const speedRef = useRef(0);
  const rafRef = useRef(null);
  const initialBoostRef = useRef(true);

  useEffect(() => {
    if (!hasImages) {
      setSequence([]);
      return;
    }

    // Duplicate the source list until we have enough items to cover large viewports.
    const required = Math.max(MIN_VISIBLE_ITEMS, images.length * 4);
    const extended = [];
    while (extended.length < required) {
      extended.push(...images);
    }
    setSequence(extended.slice(0, required));
  }, [hasImages, images]);

  const setupPositions = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      return false;
    }

    const nodes = itemRefs.current;
    if (nodes.length === 0 || nodes.some((node) => !node)) {
      return false;
    }

    const containerWidth = container.getBoundingClientRect().width;
    if (!containerWidth) {
      return false;
    }
    containerWidthRef.current = containerWidth;

    const widths = nodes.map((node) => node.getBoundingClientRect().width);
    if (widths.some((width) => width === 0)) {
      return false;
    }

    widthsRef.current = widths;

    const positions = [];
    if (direction === 'left') {
      let cursor = 0;
      for (let i = 0; i < widths.length; i += 1) {
        positions[i] = cursor;
        cursor += widths[i] + gap;
      }
    } else {
      const totalSpan = widths.reduce((acc, width) => acc + width, 0) + gap * widths.length;
      let cursor = -totalSpan;
      for (let i = 0; i < widths.length; i += 1) {
        positions[i] = cursor;
        cursor += widths[i] + gap;
      }
    }

    positionsRef.current = positions;

    for (let i = 0; i < nodes.length; i += 1) {
      nodes[i].style.setProperty('--offset', `${positions[i]}px`);
    }

    speedRef.current = effectiveDuration > 0 ? containerWidth / (effectiveDuration * 1000) : 0.05;

    return true;
  }, [effectiveDuration, direction, gap, sequence.length]);

  // On mount or whenever the duplicated sequence changes, start the animation.
  useEffect(() => {
    if (!sequence.length) {
      return undefined;
    }

    let cancelled = false;

    const startAnimation = () => {
      if (cancelled) {
        return;
      }

      const ready = setupPositions();
      if (!ready) {
        rafRef.current = requestAnimationFrame(startAnimation);
        return;
      }

      initialBoostRef.current = true;

      let last = performance.now();

      // Main RAF loop that moves each logo, wraps it, and updates fade state.
      const tick = (timestamp) => {
        if (cancelled) {
          return;
        }

        const elapsed = timestamp - last;
        last = timestamp;

        const nodes = itemRefs.current;
        const positions = positionsRef.current;
        const widths = widthsRef.current;
        const speed = speedRef.current;

        if (speed > 0 && positions.length === widths.length && positions.length === nodes.length) {
          const boost = initialBoostRef.current ? 3 : 1;
          const delta = speed * boost * elapsed;

          const containerWidth = containerWidthRef.current;
          const centerPoint = containerWidth > 0 ? containerWidth / 2 - 70 : 0;

          if (direction === 'left') {
            for (let i = 0; i < positions.length; i += 1) {
              positions[i] -= delta;
            }

            let maxRight = -Infinity;
            for (let i = 0; i < positions.length; i += 1) {
              const rightEdge = positions[i] + widths[i];
              if (rightEdge > maxRight) {
                maxRight = rightEdge;
              }
            }

            for (let i = 0; i < positions.length; i += 1) {
              const width = widths[i];
              const currentGap = gapRef.current;
              if (positions[i] + width < -currentGap) {
                positions[i] = maxRight + currentGap;
                maxRight = positions[i] + width;
                if (initialBoostRef.current) {
                  initialBoostRef.current = false;
                }
              }

              nodes[i].style.setProperty('--offset', `${positions[i]}px`);
            }
          } else {
            for (let i = 0; i < positions.length; i += 1) {
              positions[i] += delta;
            }

            for (let i = 0; i < positions.length; i += 1) {
              const width = widths[i];
              const currentGap = gapRef.current;
              if (positions[i] > containerWidthRef.current + currentGap) {
                let minLeft = positions[0];
                for (let j = 1; j < positions.length; j += 1) {
                  if (positions[j] < minLeft) {
                    minLeft = positions[j];
                  }
                }
                const anchor = Math.min(minLeft, -currentGap);
                positions[i] = anchor - width - currentGap;
              }

              if (initialBoostRef.current && centerPoint > 0) {
                const itemCenter = positions[i] + width / 2;
                if (itemCenter >= centerPoint) {
                  initialBoostRef.current = false;
                }
              }

              nodes[i].style.setProperty('--offset', `${positions[i]}px`);
              // For rightward flow we fade items as their center crosses the midline.
              if (direction === 'right' && centerPoint > 0 && fadeAtCenter) {
                const itemCenter = positions[i] + width / 2;
                const fadeStart = centerPoint - width * 0.1;
                const alpha = itemCenter >= centerPoint ? 0 : itemCenter > fadeStart ? 1 - (itemCenter - fadeStart) / (centerPoint - fadeStart) : 1;
                nodes[i].style.setProperty('--alpha', `${Math.max(0, Math.min(1, alpha))}`);
              } else {
                nodes[i].style.setProperty('--alpha', '1');
              }
            }
          }
        }

        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    startAnimation();

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        setupPositions();
      });
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
    } else {
      window.addEventListener('resize', setupPositions);
    }

    return () => {
      cancelled = true;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', setupPositions);
      }
    };
  }, [sequence.length, setupPositions]);

  if (!hasImages || !sequence.length) {
    return null;
  }

  itemRefs.current.length = sequence.length;

  return (
    <BannerShell
      ref={containerRef}
      style={{ '--logo-height': `${maxHeight}px` }}
      $desktopOnly={desktopOnly}
      $mobileOnly={mobileOnly}
    >
      <HeadingRow $alignment={headingAlignment}>
        <Heading>Made possible in collaboration with</Heading>
      </HeadingRow>
      <BannerTrack>
        {sequence.map((image, index) => (
          <LogoSlot
            key={`${image.alt}-${index}`}
            ref={(node) => {
              itemRefs.current[index] = node || null;
            }}
          >
            <LogoImage src={image.src} alt={image.alt} loading='lazy' />
          </LogoSlot>
        ))}
      </BannerTrack>
    </BannerShell>
  );
};

export default RollingBanner;
