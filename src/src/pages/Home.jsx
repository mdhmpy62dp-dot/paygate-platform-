import { useState } from 'react'

function Header() {
  return (
    <header className="home-header">
      <div>
        <div className="brand">PayGate</div>

        <div className="merchant-name">
          商户 A
          <span className="verified">✓</span>
          <span className="merchant-status">已认证</span>
        </div>
      </div>

      <div className="header-actions">
        <button aria-label="通知">♧</button>
        <button aria-label="扫码">⌕</button>
      </div>
    </header>
  )
}

function BalanceCard() {
  const [hidden, setHidden] = useState(false)

  return (
    <section className="home-balance">
      <div className="balance-top">
        <span>总资产（USDT）</span>

        <button onClick={() => setHidden(!hidden)}>
          {hidden ? '○' : '◉'}
        </button>
      </div>

      <div className="balance-number">
        {hidden ? '••••••' : '10,245.32'}
      </div>

      <div className="balance-usd">
        ≈ $10,245.32
      </div>

      <div className="balance-divider" />

      <div className="balance-grid">
        <div>
          <span>可用余额</span>
          <b>{hidden ? '••••' : '8,245.32'}</b>
          <small>可用于收款</small>
        </div>

        <div>
          <span>待结算</span>
          <b>{hidden ? '••••' : '1,500.00'}</b>
          <small>结算中</small>
        </div>

        <div>
          <span>冻结金额</span>
          <b>{hidden ? '••••' : '500.00'}</b>
          <small>暂不可用</small>
        </div>

        <div>
          <span>今日收入</span>
          <b>{hidden ? '••••' : '2,345.21'}</b>
          <small>今日累计</small>
        </div>
      </div>

      <div className="today-orders">
        <span>今日订单</span>

        <b>
          {hidden ? '••••' : '152'}
          <small> 笔</small>
        </b>
      </div>
    </section>
  )
}

function PaymentMethods() {
  const methods = [
    ['微', '微信支付', 'wechat'],
    ['支', '支付宝', 'alipay'],
    ['▤', '银行卡收款', 'bank']
  ]

  return (
    <section className="home-card">
      <div className="card-title">
        <h2>收款方式</h2>

        <button>
          管理收款方式 ›
        </button>
      </div>

      <div className="payment-methods">
        {methods.map(([icon, name, tone]) => (
          <button
            className="payment-item"
            key={name}
          >
            <span className={`payment-icon ${tone}`}>
              {icon}
            </span>

            <strong>{name}</strong>

            <small>已开启</small>
          </button>
        ))}
      </div>
    </section>
  )
}

function IncomeTrend() {
  const points = [
    [15, 188],
    [126, 145],
    [237, 94],
    [348, 136],
    [459, 62],
    [570, 112],
    [685, 28]
  ]

  return (
    <section className="home-card">
      <div className="card-title">
        <h2>收入趋势</h2>

        <button className="period">
          近7天⌄
        </button>
      </div>

      <div className="trend-chart">
        <div className="trend-y">
          <span>4,000</span>
          <span>3,000</span>
          <span>2,000</span>
          <span>1,000</span>
          <span>0</span>
        </div>

        <div className="trend-area">
          <div className="trend-grid">
            <i />
            <i />
            <i />
            <i />
          </div>

          <svg
            viewBox="0 0 700 220"
            preserveAspectRatio="none"
          >
            <polyline
              points={points
                .map(point => point.join(','))
                .join(' ')}
              fill="none"
              stroke="#2879f5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {points.map(([x, y]) => (
              <circle
                key={`${x}-${y}`}
                cx={x}
                cy={y}
                r="5"
                fill="#fff"
                stroke="#2879f5"
                strokeWidth="3"
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="trend-dates">
        {[
          '08-27',
          '08-28',
          '08-29',
          '08-30',
          '08-31',
          '09-01',
          '09-02'
        ].map(date => (
          <span key={date}>
            {date}
          </span>
        ))}
      </div>
    </section>
  )
}

function LatestOrders() {
  const orders = [
    [
      '微',
      'ORD202609020001',
      '+100.00',
      '微信支付',
      '已支付',
      'paid'
    ],
    [
      '支',
      'ORD202609020002',
      '+50.00',
      '支付宝',
      '已支付',
      'paid'
    ],
    [
      '▤',
      'ORD202609020003',
      '+300.00',
      '银行卡',
      '处理中',
      'processing'
    ],
    [
      '微',
      'ORD202609020004',
      '+80.00',
      '微信支付',
      '已取消',
      'cancelled'
    ]
  ]

  return (
    <section className="home-card">
      <div className="card-title">
        <div>
          <h2>最新订单</h2>

          <small className="title-sub">
            今日订单 152 笔
          </small>
        </div>

        <button>
          查看全部 ›
        </button>
      </div>

      <div className="home-orders">
        {orders.map(order => (
          <button
            className="home-order"
            key={order[1]}
          >
            <span
              className={`order-icon ${order[5]}`}
            >
              {order[0]}
            </span>

            <span className="order-info">
              <strong>{order[1]}</strong>
              <small>{order[3]}</small>
            </span>

            <span className="order-money">
              <b>{order[2]} USDT</b>

              <em className={order[5]}>
                {order[4]}
              </em>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

function QuickActions() {
  const actions = [
    ['＋', '创建订单', '快速创建收款订单'],
    ['▦', '收款二维码', '展示收款二维码'],
    ['↗', '支付链接', '分享收款链接'],
    ['↕', '资金提现', '提取到银行卡/钱包']
  ]

  return (
    <section className="quick-actions">
      {actions.map(([icon, title, desc]) => (
        <button
          className="quick-item"
          key={title}
        >
          <span>{icon}</span>

          <strong>{title}</strong>

          <small>{desc}</small>
        </button>
      ))}
    </section>
  )
}

function BottomNavigation() {
  const items = [
    ['⌂', '首页'],
    ['▣', '订单'],
    ['▱', '钱包'],
    ['⇄', '结算'],
    ['♙', '我的']
  ]

  return (
    <nav className="home-bottom-nav">
      {items.map(([icon, name], index) => (
        <button
          className={index === 0 ? 'active' : ''}
          key={name}
        >
          <span>{icon}</span>
          <b>{name}</b>
        </button>
      ))}
    </nav>
  )
}

export default function Home() {
  return (
    <div className="app">
      <Header />

      <main className="home-main">
        <BalanceCard />

        <PaymentMethods />

        <IncomeTrend />

        <LatestOrders />

        <QuickActions />
      </main>

      <BottomNavigation />
    </div>
  )
}
