import React, { useMemo, useState, useEffect } from 'react';
import ReactFlow, { Handle, Position } from 'reactflow';
import { useNavigate } from 'react-router-dom';
import 'reactflow/dist/style.css';
import { useI18n } from '../i18n/I18nProvider';
import {
  buildWhoAreYouNodes,
  DESKTOP_NODE_IDS,
  PUBLISHER_NODE_IDS,
  MARKETPLACE_NODE_IDS,
  DESIGNER_NODE_IDS,
} from '../i18n/whoAreYouNodes';
const hs = {
  opacity: 0,
  pointerEvents: 'none',
  minWidth: 0,
  minHeight: 0,
  width: 1,
  height: 1,
};
const edgeSt = { stroke: 'rgba(0,0,0,0.18)', strokeWidth: 1 };

// All nodes expose named handles on all four sides so edges can exit/enter exactly where needed
function BadgeNode({ data }) {
  return (
    <div
      style={{
        padding: '10px 20px',
        borderRadius: 4,
        background: data.color,
        fontWeight: 500,
        fontSize: '1rem',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        width: 'fit-content',
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Handle
        type='target'
        position={Position.Top}
        id='top-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='target'
        position={Position.Top}
        id='top'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='target'
        position={Position.Top}
        id='top-right'
        style={{ ...hs, left: '55%' }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top-right'
        style={{ ...hs, left: '55%' }}
      />
      {data.label}
      <Handle type='source' position={Position.Right} id='right' style={hs} />
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom-right'
        style={{ ...hs, left: '55%' }}
      />
    </div>
  );
}

function TextNode({ data }) {
  return (
    <div
      style={{
        fontSize: '1rem',
        lineHeight: 1.45,
        textAlign: 'center',
        color: '#333',
      }}
    >
      <Handle
        type='target'
        position={Position.Top}
        id='top-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='target'
        position={Position.Top}
        id='top'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='target'
        position={Position.Top}
        id='top-right'
        style={{ ...hs, left: '55%' }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top-right'
        style={{ ...hs, left: '55%' }}
      />
      <Handle type='target' position={Position.Left} id='left' style={hs} />
      {data.label}
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom-right'
        style={{ ...hs, left: '55%' }}
      />
      <Handle type='source' position={Position.Right} id='right' style={hs} />
      <Handle
        type='target'
        position={Position.Right}
        id='target-right'
        style={hs}
      />
      <Handle
        type='source'
        position={Position.Left}
        id='src-left'
        style={{ ...hs, ...(data.srcLeftStyle || {}) }}
      />
    </div>
  );
}

function ForkNode({ data }) {
  return (
    <div style={{ fontSize: '0.9rem', textAlign: 'center', color: '#666' }}>
      <Handle
        type='target'
        position={Position.Top}
        id='top-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='target'
        position={Position.Top}
        id='top'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='target'
        position={Position.Top}
        id='top-right'
        style={{ ...hs, left: '55%' }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top-right'
        style={{ ...hs, left: '55%' }}
      />
      <Handle type='target' position={Position.Left} id='left' style={hs} />
      {data.label}
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom-right'
        style={{ ...hs, left: '55%' }}
      />
      <Handle type='source' position={Position.Right} id='right' style={hs} />
    </div>
  );
}

function CtaNode({ data }) {
  return (
    <div
      style={{
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        padding: '14px 18px',
        borderRadius: 4,
        background: data.color,
        fontSize: '1rem',
        lineHeight: 1.5,
        textAlign: 'center',
        transition: 'transform 150ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <Handle
        type='target'
        position={Position.Top}
        id='top-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='target'
        position={Position.Top}
        id='top'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='target'
        position={Position.Top}
        id='top-right'
        style={{ ...hs, left: '55%', ...(data.topRightHandleStyle || {}) }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='source'
        position={Position.Top}
        id='src-top-right'
        style={{ ...hs, left: '55%' }}
      />
      <Handle
        type='target'
        position={Position.Right}
        id='right'
        style={{ ...hs, ...(data.rightHandleStyle || {}) }}
      />
      {data.label}
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom-left'
        style={{ ...hs, left: '45%' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom'
        style={{ ...hs, left: '50%' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='bottom-right'
        style={{ ...hs, left: '55%' }}
      />
    </div>
  );
}

const nodeTypes = {
  badge: BadgeNode,
  text: TextNode,
  fork: ForkNode,
  cta: CtaNode,
};

const WhoAreYouFlow = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('publisher');
  const { t, locale } = useI18n();
  const navigate = useNavigate();

  const handleNodeClick = (_event, node) => {
    if (node.data?.href) {
      navigate(node.data.href);
    }
  };
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const colors = { yellow: '#f0c459', pink: '#e8c8d1' };

  const nodes = useMemo(
    () => buildWhoAreYouNodes(t, locale, DESKTOP_NODE_IDS, colors),
    [t, locale],
  );
  const edges = useMemo(() => {
    // sh = sourceHandle, th = targetHandle
    const e = (id, source, target, sh = 'bottom', th = 'top') => ({
      id,
      source,
      target,
      sourceHandle: sh,
      targetHandle: th,
      type: 'smoothstep',
      pathOptions: { borderRadius: 20 },
      style: edgeSt,
    });
    return [
      // Publisher column – all straight vertical
      e('e1', 'p-badge', 'p-q1'),
      e('e2', 'p-q1', 'p-yes'),
      e('e3', 'p-q1', 'p-no'),
      e('e4', 'p-yes', 'p-portal'),
      e('e5', 'p-portal', 'p-sys'),
      e('e6', 'p-sys', 'p-try'),
      e('e7', 'p-try', 'p-cta'),
      // "I'm a publisher" badge → middle column top center
      {
        id: 'e8',
        source: 'p-badge',
        target: 'm-q',
        sourceHandle: 'right',
        targetHandle: 'top',
        type: 'smoothstep',
        pathOptions: { borderRadius: 20 },
        style: edgeSt,
      },
      e('e18', 'p-no', 'p-portal'),
      // Middle column – vertical
      e('e9', 'm-q', 'm-all'),
      e('e10', 'm-all', 'm-cta'),
      // Designer column – all vertical, explicit handles prevent wrong routing
      e('e11', 'd-badge', 'd-q1'),
      {
        id: 'e12',
        source: 'd-q1',
        target: 'd-yes',
        sourceHandle: 'bottom-left',
        targetHandle: 'top',
        type: 'smoothstep',
        pathOptions: { borderRadius: 20 },
        style: edgeSt,
      },
      {
        id: 'e13',
        source: 'd-q1',
        target: 'd-wish',
        sourceHandle: 'bottom-right',
        targetHandle: 'top',
        type: 'smoothstep',
        pathOptions: { borderRadius: 20 },
        style: edgeSt,
      },
      {
        id: 'e14',
        source: 'd-yes',
        target: 'd-q2',
        sourceHandle: 'bottom',
        targetHandle: 'top-left',
        type: 'smoothstep',
        pathOptions: { borderRadius: 20 },
        style: edgeSt,
      },
      {
        id: 'e15',
        source: 'd-wish',
        target: 'd-cta',
        sourceHandle: 'bottom',
        targetHandle: 'top-right',
        type: 'smoothstep',
        pathOptions: { borderRadius: 20 },
        style: edgeSt,
      },
      {
        id: 'e16',
        source: 'd-q2',
        target: 'd-course',
        sourceHandle: 'bottom-left',
        targetHandle: 'target-right',
        type: 'smoothstep',
        pathOptions: { borderRadius: 20 },
        style: edgeSt,
      },
      {
        id: 'e17',
        source: 'd-course',
        target: 'm-cta',
        sourceHandle: 'src-left',
        targetHandle: 'top-right',
        type: 'smoothstep',
        pathOptions: { borderRadius: 20 },
        style: edgeSt,
      },
    ];
  }, []);

  const mobilePublisherOverrides = { 'p-no': { x: 115, y: 190, w: 80 } };
  const mobileDesignerOverrides = {
    'd-badge': { x: 0, y: 0, w: 230 },
    'd-q1': { x: 0, y: 80, w: 230 },
    'd-yes': { x: 10, y: 200, w: 80 },
    'd-wish': { x: 155, y: 200, w: 80 },
    'd-q2': { x: 0, y: 315, w: 140 },
    'd-cta': { x: 155, y: 315, w: 140 },
    'd-course': { x: 0, y: 460, w: 140 },
    'm-cta': { x: 0, y: 555, w: 250 },
  };
  const mobileMarketplaceOverrides = {
    'm-q': { x: 10, y: 0, w: 220 },
    'm-all': { x: 65, y: 150, w: 110 },
    'm-cta': { x: 0, y: 250, w: 250 },
  };

  const mobileNodes = useMemo(() => {
    if (activeTab === 'publisher') {
      return buildWhoAreYouNodes(t, locale, PUBLISHER_NODE_IDS, colors, mobilePublisherOverrides);
    }
    if (activeTab === 'marketplace') {
      return buildWhoAreYouNodes(t, locale, MARKETPLACE_NODE_IDS, colors, mobileMarketplaceOverrides);
    }
    return buildWhoAreYouNodes(t, locale, DESIGNER_NODE_IDS, colors, mobileDesignerOverrides);
  }, [activeTab, t, locale]);
  const mobileEdges = useMemo(() => {
    const e = (id, source, target, sh = 'bottom', th = 'top') => ({
      id,
      source,
      target,
      sourceHandle: sh,
      targetHandle: th,
      type: 'smoothstep',
      pathOptions: { borderRadius: 20 },
      style: edgeSt,
    });
    if (activeTab === 'publisher')
      return [
        e('e1', 'p-badge', 'p-q1'),
        e('e2', 'p-q1', 'p-yes'),
        e('e3', 'p-q1', 'p-no'),
        e('e4', 'p-yes', 'p-portal'),
        e('e18', 'p-no', 'p-portal'),
        e('e5', 'p-portal', 'p-sys'),
        e('e6', 'p-sys', 'p-try'),
        e('e7', 'p-try', 'p-cta'),
      ];
    if (activeTab === 'marketplace')
      return [e('e9', 'm-q', 'm-all'), e('e10', 'm-all', 'm-cta')];
    // designer
    return [
      e('e11', 'd-badge', 'd-q1'),
      e('e12', 'd-q1', 'd-yes', 'bottom-left', 'top'),
      e('e13', 'd-q1', 'd-wish', 'bottom-right', 'top'),
      e('e14', 'd-yes', 'd-q2'),
      e('e15', 'd-wish', 'd-cta'),
      e('e16', 'd-q2', 'd-course'),
      e('e17', 'd-course', 'm-cta'),
    ];
  }, [activeTab]);

  if (isMobile) {
    const tabs = [
      { id: 'publisher', label: t('whoAreYou.tabs.publisher') },
      { id: 'marketplace', label: t('whoAreYou.tabs.marketplace') },
      { id: 'designer', label: t('whoAreYou.tabs.designer') },
    ];    return (
      <div>
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginBottom: 8,
            padding: '0 4px',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: '8px 4px',
                background: activeTab === tab.id ? '#444' : '#eee',
                color: activeTab === tab.id ? '#fff' : '#444',
                border: 'none',
                borderRadius: 4,
                fontSize: '0.8rem',
                cursor: 'pointer',
                fontWeight: activeTab === tab.id ? 600 : 400,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div style={{ height: 640 }}>
          <style>{`.react-flow__edge-path { marker-end: none !important; }`}</style>
          <ReactFlow
            nodes={mobileNodes}
            edges={mobileEdges}
            nodeTypes={nodeTypes}
            onNodeClick={handleNodeClick}
            fitView
            fitViewOptions={{ padding: 0.1 }}
            nodesDraggable={false}
            nodesConnectable={false}
            panOnDrag={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            preventScrolling={false}
            proOptions={{ hideAttribution: true }}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: 680, width: '100%' }}>
      {/* remove default SVG arrowheads */}
      <style>{`.react-flow__edge-path { marker-end: none !important; }`}</style>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={handleNodeClick}
        fitView
        fitViewOptions={{ padding: 0.08 }}
        nodesDraggable={false}
        nodesConnectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
};

export default WhoAreYouFlow;
