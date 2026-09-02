import { useState } from 'react'

export default function USDTPage({ back }) {
  const [copied, setCopied] = useState(false)

  const address = 'Txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="usdt-page">

      <div className="usdt-head">
        <button onClick={back}>‹</button>

        <div>
          <h1>USDT 收款</h1>
          <span>TRON / TRC20</span>
        </div>
      </div>

      <section className="usdt-status">
        <div className="usdt-status-icon">₮</div>

        <div>
          <strong>USDT TRC20</strong>
          <small>
            <i /> 收款功能已开启
          </small>
        </div>
      </section>

      <section className="usdt-card">

        <div className="usdt-card-title">
          <h2>商户收款地址</h2>
          <span>TRC20</span>
        </div>

        <div className="usdt-address">
          {address}
        </div>

        <button
          className="usdt-copy"
          onClick={copyAddress}
        >
          {copied ? '✓ 已复制' : '复制收款地址'}
        </button>

        <div className="usdt-network">
          <span>网络</span>
          <b>TRON / TRC20</b>
        </div>

      </section>

      <section className="usdt-card">

        <div className="usdt-card-title">
          <h2>收款二维码</h2>
          <span>扫码支付</span>
        </div>

        <div className="usdt-qr">
          <div className="qr-placeholder">
            <span>₮</span>
            <small>USDT TRC20</small>
          </div>
        </div>

        <p className="usdt-qr-tip">
          使用支持 TRC20 网络的钱包扫描二维码
        </p>

      </section>

      <section className="usdt-stats">

        <div>
          <span>今日收款</span>
          <strong>2,345.21</strong>
          <small>USDT</small>
        </div>

        <div>
          <span>今日订单</span>
          <strong>28</strong>
          <small>笔</small>
        </div>

        <div>
          <span>到账状态</span>
          <strong className="online">正常</strong>
          <small>自动监听</small>
        </div>

      </section>

      <section className="usdt-tip">
        <span>✓</span>

        <div>
          <strong>链上自动监听</strong>
          <p>
            系统将自动检测 TRON 网络上的收款交易，
            确认到账后自动更新订单状态。
          </p>
        </div>
      </section>

    </div>
  )
}
