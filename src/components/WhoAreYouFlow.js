import React, { useMemo, useState, useEffect } from 'react';
import ReactFlow, { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';

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
      <Handle type='source' position={Position.Right} id='right' style={hs} />
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

  const handleNodeClick = (_event, node) => {
    if (node.data?.href) {
      window.location.href = node.data.href;
    }
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const nodes = useMemo(
    () => [
      // ── Publisher (left) ──────────────────────────────────
      {
        id: 'p-badge',
        type: 'badge',
        position: { x: 30, y: 0 },
        data: { label: "I'm a publisher", color: '#f0c459' },
        style: { width: 160 },
      },
      {
        id: 'p-q1',
        type: 'text',
        position: { x: 10, y: 75 },
        data: { label: 'Do you receive pitches?' },
        style: { width: 200 },
      },
      {
        id: 'p-yes',
        type: 'fork',
        position: { x: 15, y: 190 },
        data: { label: 'Oh yes' },
        style: { width: 80 },
      },
      {
        id: 'p-no',
        type: 'fork',
        position: { x: 135, y: 190 },
        data: { label: 'Not yet' },
        style: { width: 80 },
      },
      {
        id: 'p-portal',
        type: 'text',
        position: { x: 10, y: 290 },
        data: {
          label: (
            <>
              Use our Portal
              <br />
              for handling
              <br />
              incoming pitches!
            </>
          ),
        },
        style: { width: 200 },
      },
      {
        id: 'p-sys',
        type: 'text',
        position: { x: 10, y: 400 },
        data: { label: 'I already have a system' },
        style: { width: 200 },
      },
      {
        id: 'p-try',
        type: 'text',
        position: { x: 10, y: 460 },
        data: { label: 'Trying is free, so why not give Pubblo a chance?' },
        style: { width: 200 },
      },
      {
        id: 'p-cta',
        type: 'cta',
        position: { x: 0, y: 545 },
        data: {
          label: (
            <>
              Learn more about
              <br />
              <strong>the Portal</strong>
            </>
          ),
          color: '#f0c459',
          href: '/products#portal',
        },
        style: { width: 220 },
      },

      // ── Middle ────────────────────────────────────────────
      {
        id: 'm-q',
        type: 'text',
        position: { x: 420, y: 290 },
        data: {
          label:
            'Do you want to find partners in new markets for localization?',
        },
        style: { width: 220 },
      },
      {
        id: 'm-all',
        type: 'text',
        position: { x: 475, y: 460 },
        data: { label: 'Always' },
        style: { width: 110 },
      },
      {
        id: 'm-cta',
        type: 'cta',
        position: { x: 405, y: 545 },
        data: {
          label: (
            <>
              Explore the possibilities
              <br />
              with our <strong>Marketplace</strong>
            </>
          ),
          color: '#aad4e8',
          href: '/products#marketplace',
          rightHandleStyle: { top: 8 },
          topRightHandleStyle: { left: '65%' },
        },
        style: { width: 250 },
      },

      // ── Designer (right) ──────────────────────────────────
      {
        id: 'd-badge',
        type: 'badge',
        position: { x: 870, y: 0 },
        data: { label: "I'm a designer", color: '#e8c8d1' },
        style: { width: 160 },
      },
      {
        id: 'd-q1',
        type: 'text',
        position: { x: 830, y: 75 },
        data: { label: 'Have you pitched your game to publishers yet?' },
        style: { width: 240 },
      },
      {
        id: 'd-yes',
        type: 'fork',
        position: { x: 830, y: 200 },
        data: { label: 'Oh yes' },
        style: { width: 80 },
      },
      {
        id: 'd-wish',
        type: 'fork',
        position: { x: 990, y: 200 },
        data: { label: 'I wish' },
        style: { width: 80 },
      },
      {
        id: 'd-q2',
        type: 'text',
        position: { x: 820, y: 290 },
        data: {
          label: (
            <>
              Do you want to make <strong>one</strong> pitch yet reach a bunch
              of publishers?
            </>
          ),
        },
        style: { width: 260, paddingRight: 80 },
      },
      {
        id: 'd-course',
        type: 'text',
        position: { x: 680, y: 455 },
        data: { label: 'Well, of course!' },
        style: { width: 160 },
      },
      {
        id: 'd-cta',
        type: 'cta',
        position: { x: 860, y: 545 },
        data: {
          label: (
            <>
              Use our <strong>Pitch tool</strong>
              <br />
              to get going!
            </>
          ),
          color: '#e8c8d1',
          href: '/products#pitch-tool',
        },
        style: { width: 180 },
      },
    ],
    [],
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
      {
        id: 'e4',
        source: 'p-yes',
        target: 'p-portal',
        sourceHandle: 'bottom',
        targetHandle: 'top',
        type: 'smoothstep',
        pathOptions: { borderRadius: 20 },
        style: edgeSt,
      },
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
      // "Not yet" → portal (same as "Oh yes")
      {
        id: 'e18',
        source: 'p-no',
        target: 'p-portal',
        sourceHandle: 'bottom',
        targetHandle: 'top',
        type: 'smoothstep',
        pathOptions: { borderRadius: 20 },
        style: edgeSt,
      },
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

  const mobileNodes = useMemo(() => {
    if (activeTab === 'publisher')
      return [
        {
          id: 'p-badge',
          type: 'badge',
          position: { x: 30, y: 0 },
          data: { label: "I'm a publisher", color: '#f0c459' },
          style: { width: 160 },
        },
        {
          id: 'p-q1',
          type: 'text',
          position: { x: 10, y: 75 },
          data: { label: 'Do you receive pitches?' },
          style: { width: 200 },
        },
        {
          id: 'p-yes',
          type: 'fork',
          position: { x: 15, y: 190 },
          data: { label: 'Oh yes' },
          style: { width: 80 },
        },
        {
          id: 'p-no',
          type: 'fork',
          position: { x: 115, y: 190 },
          data: { label: 'Not yet' },
          style: { width: 80 },
        },
        {
          id: 'p-portal',
          type: 'text',
          position: { x: 10, y: 290 },
          data: {
            label: (
              <>
                Use our Portal
                <br />
                for handling
                <br />
                incoming pitches!
              </>
            ),
          },
          style: { width: 200 },
        },
        {
          id: 'p-sys',
          type: 'text',
          position: { x: 10, y: 400 },
          data: { label: 'I already have a system' },
          style: { width: 200 },
        },
        {
          id: 'p-try',
          type: 'text',
          position: { x: 10, y: 460 },
          data: {
            label: 'Trying is free, so why not give Pubblo a chance?',
          },
          style: { width: 200 },
        },
        {
          id: 'p-cta',
          type: 'cta',
          position: { x: 0, y: 545 },
          data: {
            label: (
              <>
                Learn more about
                <br />
                <strong>the Portal</strong>
              </>
            ),
            color: '#f0c459',
            href: '/products#portal',
          },
          style: { width: 220 },
        },
      ];
    if (activeTab === 'marketplace')
      return [
        {
          id: 'm-q',
          type: 'text',
          position: { x: 10, y: 0 },
          data: {
            label:
              'Do you want to find partners in new markets for localization?',
          },
          style: { width: 220 },
        },
        {
          id: 'm-all',
          type: 'text',
          position: { x: 65, y: 150 },
          data: { label: 'Always' },
          style: { width: 110 },
        },
        {
          id: 'm-cta',
          type: 'cta',
          position: { x: 0, y: 250 },
          data: {
            label: (
              <>
                Explore the possibilities
                <br />
                with our <strong>Marketplace</strong>
              </>
            ),
            color: '#aad4e8',
            href: '/products#marketplace',
          },
          style: { width: 250 },
        },
      ];
    // designer
    return [
      {
        id: 'd-badge',
        type: 'badge',
        position: { x: 30, y: 0 },
        data: { label: "I'm a designer", color: '#e8c8d1' },
        style: { width: 160 },
      },
      {
        id: 'd-q1',
        type: 'text',
        position: { x: 0, y: 80 },
        data: { label: 'Have you pitched your game to publishers yet?' },
        style: { width: 230 },
      },
      {
        id: 'd-yes',
        type: 'fork',
        position: { x: 10, y: 200 },
        data: { label: 'Oh yes' },
        style: { width: 80 },
      },
      {
        id: 'd-wish',
        type: 'fork',
        position: { x: 155, y: 200 },
        data: { label: 'I wish' },
        style: { width: 80 },
      },
      {
        id: 'd-q2',
        type: 'text',
        position: { x: 0, y: 315 },
        data: {
          label: (
            <>
              Do you want to make <strong>one</strong> pitch yet reach a bunch
              of publishers?
            </>
          ),
        },
        style: { width: 140 },
      },
      {
        id: 'd-cta',
        type: 'cta',
        position: { x: 155, y: 315 },
        data: {
          label: (
            <>
              Use our <strong>Pitch tool</strong>
              <br />
              to get going!
            </>
          ),
          color: '#e8c8d1',
          href: '/products#pitch-tool',
        },
        style: { width: 140 },
      },
      {
        id: 'd-course',
        type: 'text',
        position: { x: 0, y: 460 },
        data: { label: 'Well, of course!' },
        style: { width: 140 },
      },
      {
        id: 'm-cta',
        type: 'cta',
        position: { x: 0, y: 555 },
        data: {
          label: (
            <>
              Explore the possibilities
              <br />
              with our <strong>Marketplace</strong>
            </>
          ),
          color: '#aad4e8',
          href: '/products#marketplace',
        },
        style: { width: 250 },
      },
    ];
  }, [activeTab]);

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
      { id: 'publisher', label: 'Publisher' },
      { id: 'marketplace', label: 'Marketplace' },
      { id: 'designer', label: 'Designer' },
    ];
    return (
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
            key={activeTab}
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
